from django.shortcuts import render, redirect, HttpResponse
from django.http import HttpRequest
from .models import *
from django.core.paginator import Paginator
from django.contrib import messages
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.contrib.auth import authenticate, login
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import random
import time
from django.contrib.auth.models import User


# Create your views here.
def shop_index(request):
    context = {
        "top_banner": TopBanner.objects.filter(active=True).last(),
        "categories": Category.objects.all(),
        "sub_categories": {
            category: SubCategory.objects.filter(category=category)
            for category in Category.objects.all()
        },
        "banner_producs": BannerProduc.objects.all(),
        "special_products": [
            {
                "product": product,
                "review": Review.objects.filter(
                    product=product
                ),  # Assuming 'reviews' is a related name for reviews
            }
            for product in Product.objects.filter(is_special=True, publish=True)[:10]
        ],
        "new_products": [
            {
                "product": product,
                "review": Review.objects.filter(
                    product=product
                ),  # Assuming 'reviews' is a related name for reviews
            }
            for product in Product.objects.all().order_by("-created_at")[:10]
        ],
    }

    return render(request, "shop/index.html", context=context)


def show_product(request: HttpRequest, id):
    try:
        if request.method == "POST":
            if request.user.is_authenticated:
                user_orders = Order.objects.filter(customer=request.user)
                if not OrderItem.objects.filter(
                    order__in=user_orders, product_id=id
                ).exists():
                    messages.add_message(
                        request,
                        messages.WARNING,
                        "شما نمیتوانید به این محصول نظر بدهید\nاول آن را بخرید و استفاده کنید و بعد تجربه خود را ثبت کنید!",
                    )
                    return redirect(request.path)

                Review.objects.create(
                    product=Product.objects.get(id=id),
                    user=request.user,
                    comment=request.POST["comment"],
                )

            else:
                messages.add_message(
                    request,
                    messages.WARNING,
                    message="لطفا ابتدا وارد حساب کاربری خود بشوید",
                )
                return redirect(request.path)

            return HttpResponse("hi")

        product = Product.objects.get(id=id)
        reviews = Review.objects.filter(product=product)
        limit = ProductLimit.objects.filter(product=product)

        context = {
            "top_banner": TopBanner.objects.filter(active=True).last(),
            "categories": Category.objects.all(),
            "sub_categories": {
                category: SubCategory.objects.filter(category=category)
                for category in Category.objects.all()
            },
            "product": product,
            "reviews": reviews,
            "limit": limit,
            "attributes": ProductAttribute.objects.filter(product=product),
        }

        return render(request, "shop/accordion.html", context=context)

    except Product.DoesNotExist:
        category_obj = Category.objects.all()
        subcategory_obj = SubCategory.objects.all()

        context = {
            "top_banner": TopBanner.objects.filter(active=True).last(),
            "categories": Category.objects.all(),
            "sub_categories": {
                cat: SubCategory.objects.filter(category=cat)
                for cat in Category.objects.all()
            },
            "subcategory": subcategory_obj,
        }
        return render(request, "shop/error.html", status=404, context=context)


def show_category(request, category, subcategory):
    try:
        if subcategory == "all":
            category_obj = Category.objects.get(slug=category)
            products = Product.objects.filter(
                subcategory__category=category_obj, publish=True
            )
        else:
            category_obj = Category.objects.get(slug=category)
            subcategory_obj = SubCategory.objects.get(
                slug=subcategory, category=category_obj
            )
            products = Product.objects.filter(subcategory=subcategory_obj, publish=True)

        context = {
            "top_banner": TopBanner.objects.filter(active=True).last(),
            "categories": Category.objects.all(),
            "sub_categories": {
                cat: SubCategory.objects.filter(category=cat)
                for cat in Category.objects.all()
            },
            "products": products,
        }

        return render(request, "shop/product_category.html", context=context)

    except (Category.DoesNotExist, SubCategory.DoesNotExist):
        context = {
            "top_banner": TopBanner.objects.filter(active=True).last(),
            "categories": Category.objects.all(),
            "sub_categories": {
                cat: SubCategory.objects.filter(category=cat)
                for cat in Category.objects.all()
            },
        }
        return render(request, "shop/error.html", status=404, context=context)


def products(request: HttpRequest):
    if request.method == "POST":
        pass

    else:
        # Extract filter parameters from GET request
        category_selector = request.GET.get("category_selector")
        situation_selector = request.GET.get("situation_selector")
        min_value = request.GET.get("min-value")
        max_value = request.GET.get("max-value")

        # Start with all products
        products_qs = Product.objects.all()

        # Filter by category if provided and not default
        if category_selector and category_selector != "دسته‌بندی":
            try:
                category_obj = Category.objects.get(name=category_selector)
                products_qs = products_qs.filter(subcategory__category=category_obj)

            except Category.DoesNotExist:
                products_qs = products_qs.none()

        # Filter by situation if provided and not default
        if situation_selector and situation_selector != "وضعیت":
            if situation_selector == "موجود":
                products_qs = products_qs.filter(stock__gt=0)

            else:
                products_qs = products_qs.filter(stock=0)

        # Filter by min price if provided
        try:
            min_value = min_value.replace(",", "")
        except:
            pass

        if min_value:
            try:
                min_val = float(min_value)
                if products_qs.get("special_price", None) == None:
                    products_qs = products_qs.filter(price__gte=min_val)

                else:
                    products_qs = products_qs.filter(special_price__gte=min_val)
            except ValueError:
                pass

        # Filter by max price if provided
        try:
            max_value = max_value.replace(",", "")
        except:
            pass

        if max_value:
            try:
                max_val = float(max_value)
                if products_qs.get("special_price", None) == None:
                    products_qs = products_qs.filter(price__lte=max_val)

                else:
                    products_qs = products_qs.filter(special_price__lte=max_val)
            except ValueError:
                pass

        # Paginate filtered products
        paginated_products = Paginator(products_qs, 10).get_page(
            request.GET.get("page")
        )

        context = {
            "top_banner": TopBanner.objects.filter(active=True).last(),
            "categories": Category.objects.all(),
            "sub_categories": {
                cat: SubCategory.objects.filter(category=cat)
                for cat in Category.objects.all()
            },
            "products": paginated_products,
            "min_value": request.GET.get("min-value", ""),
            "max_value": request.GET.get("max-value", ""),
        }

        return render(request, "shop/filter-dropdown.html", context=context)


def show_cart(request: HttpRequest):
    if request.user.is_authenticated:
        if request.method == "POST":
            cart, created = Cart.objects.get_or_create(customer=request.user)

            product_id = request.POST.get("product_id")
            quantity = int(request.POST.get("quantity", 1))

            try:
                product_id_int = int(product_id)
            except (TypeError, ValueError):
                messages.add_message(
                    request, messages.WARNING, "شناسه محصول نامعتبر است."
                )
                return redirect("show_cart_url")

            print(product_id)

            cart_item = CartItem.objects.filter(
                cart=cart, product_id=product_id_int
            ).first()

            if cart_item:
                cart_item.stock = quantity
                cart_item.save()
                messages.add_message(
                    request, messages.SUCCESS, "تعداد محصول با موفقیت به‌روزرسانی شد."
                )
            else:
                messages.add_message(
                    request, messages.WARNING, ".محصول در سبد خرید شما یافت نشد"
                )

            return redirect("show_cart_url")

        else:
            cart, created = Cart.objects.get_or_create(customer=request.user)
            cart_items = CartItem.objects.filter(cart=cart).select_related("product")
            # Calculate total price and subtotal for cart
            total_price = 0
            subtotal = 0
            for item in cart_items:
                # Use special_price if available, else price
                price = (
                    item.product.special_price
                    if getattr(item.product, "special_price", None)
                    else item.product.price
                )
                item.total = price * item.stock
                subtotal += item.total
            total_price = subtotal  # You can add shipping/tax if needed

            # Prepare a mapping of product id to its limits
            product_limits = {
                pl.product_id: pl
                for pl in ProductLimit.objects.filter(
                    product__in=[item.product for item in cart_items]
                )
            }

            # Add 'limit' attribute to each cart_item
            for item in cart_items:
                item.limit = product_limits.get(item.product.id)

            context = {
                "top_banner": TopBanner.objects.filter(active=True).last(),
                "categories": Category.objects.all(),
                "sub_categories": {
                    category: SubCategory.objects.filter(category=category)
                    for category in Category.objects.all()
                },
                "cart": cart,
                "cart_items": cart_items,
                "subtotal": subtotal,
                "total_price": total_price,
                "limit_products": ProductLimit.objects.filter(
                    product__in=[item.product for item in cart_items]
                ),
            }
            return render(request, "shop/cart.html", context)
    else:
        messages.add_message(
            request, messages.WARNING, message="لطفا ابتدا وارد حساب کاربری خود بشوید"
        )
        return redirect("shop_index_url")


def add_cart(request: HttpRequest):
    if request.method == "POST":
        if request.user.is_authenticated:
            product = Product.objects.get(id=request.POST["product_id"])
            cart, created = Cart.objects.get_or_create(customer=request.user)
            quantity = int(request.POST.get("quantity", 1))

            cart_item, created = CartItem.objects.get_or_create(
                cart=cart, product=product, defaults={"stock": quantity}
            )
            if not created:
                messages.warning(
                    request, "این محصول قبلاً به سبد خرید شما اضافه شده است."
                )
                return redirect("show_cart_url")
            if not created:
                cart_item.stock += 1
                cart_item.save()
            messages.success(request, "محصول با موفقیت به سبد خرید اضافه شد.")

            return redirect("shop_index_url")

        else:
            messages.add_message(
                request,
                messages.WARNING,
                message="لطفا ابتدا وارد حساب کاربری خود بشوید",
            )

            return redirect("shop_index_url")
    else:
        redirect("shop_index_url")


def remove_cart(request: HttpRequest, id):
    if request.user.is_authenticated:
        cart, created = Cart.objects.get_or_create(customer=request.user)
        try:
            cart_item = CartItem.objects.get(cart=cart, product_id=id)
            cart_item.delete()
            messages.success(request, "محصول با موفقیت از سبد خرید حذف شد.")
        except CartItem.DoesNotExist:
            messages.warning(request, "محصول مورد نظر در سبد خرید شما یافت نشد.")
        return redirect("show_cart_url")
    else:
        messages.warning(request, "لطفا ابتدا وارد حساب کاربری خود بشوید")
        return redirect("shop_index_url")


def special(request):
    if request.method == "POST":
        pass

    else:
        products_qs = Product.objects.filter(is_special=True, publish=True)
        products = Paginator(products_qs, 10).get_page(request.GET.get("page"))

        context = {
            "top_banner": TopBanner.objects.filter(active=True).last(),
            "categories": Category.objects.all(),
            "sub_categories": {
                category: SubCategory.objects.filter(category=category)
                for category in Category.objects.all()
            },
            "products": products,
        }
        return render(request, "shop/product_category.html", context)


def check_out_order(request):
    if request.method == "POST":
        if request.user.is_authenticated:
            cart, created = Cart.objects.get_or_create(customer=request.user)
            cart_items = CartItem.objects.filter(cart=cart).select_related("product")

            if not cart_items.exists():
                messages.add_message(request, messages.WARNING, "سبد خرید شما خالی است")
                return redirect("show_cart_url")

            subtotal = 0
            for item in cart_items:
                price = (
                    item.product.special_price
                    if item.product.special_price is not None
                    else item.product.price
                )
                item.total = price * item.stock
                subtotal += item.total

            fname = request.POST.get("fname")
            lname = request.POST.get("lname")
            address = request.POST.get("address")
            city = request.POST.get("city")
            postcode = request.POST.get("postcode")
            phone = request.POST.get("phone")
            email = request.POST.get("email")
            message = request.POST.get("message")

            # اعتبارسنجی فیلدها
            if (
                not fname
                or not lname
                or not address
                or not city
                or not postcode
                or not phone
                or not email
            ):
                messages.add_message(
                    request, messages.WARNING, "لطفاً همه فیلدهای ضروری را پر کنید."
                )
                return redirect("check_out_order_url")

            if len(phone) < 11 or not phone.isdigit():
                messages.add_message(
                    request, messages.WARNING, "شماره تلفن معتبر نیست."
                )
                return redirect("check_out_order_url")

            if len(postcode) < 5 or not postcode.isdigit():
                messages.add_message(request, messages.WARNING, "کد پستی معتبر نیست.")
                return redirect("check_out_order_url")

            try:
                validate_email(email)
            except ValidationError:
                messages.add_message(request, messages.WARNING, "ایمیل معتبر نیست.")
                return redirect("check_out_order_url")

            full_address = f"{fname} {lname}, {address}, {city}, {postcode}, {phone}, {email}\n{message or ''}"

            order = Order.objects.create(
                customer=request.user,
                total_price=int(subtotal) + 60000,
                addres=full_address,
            )

            for item in cart_items:
                price = (
                    item.product.special_price
                    if item.product.special_price is not None
                    else item.product.price
                )
                OrderItem.objects.create(
                    order=order,
                    product=item.product,
                    stock=item.stock,
                    price=price,
                )

            for item in CartItem.objects.filter(cart__customer=request.user):
                if item.product.stock is not None:
                    item.product.stock = max(item.product.stock - item.stock, 0)
                    item.product.save()

            cart_items.delete()

            messages.success(request, "سفارش شما با موفقیت ثبت شد.")
            return redirect("shop_index_url")

        else:
            messages.warning(request, "لطفا ابتدا وارد حساب کاربری خود بشوید")
            return redirect("shop_index_url")

    else:
        if request.user.is_authenticated:
            cart, created = Cart.objects.get_or_create(customer=request.user)
            cart_items = CartItem.objects.filter(cart=cart).select_related("product")

            total_price = 0
            subtotal = 0
            for item in cart_items:
                price = (
                    item.product.special_price
                    if item.product.special_price is not None
                    else item.product.price
                )
                item.total = price * item.stock
                subtotal += item.total

            total_price = subtotal

            product_ids = [item.product.id for item in cart_items]
            product_limits = {
                pl.product_id: pl
                for pl in ProductLimit.objects.filter(product_id__in=product_ids)
            }

            # اضافه کردن ویژگی 'limit' به هر cart_item
            for item in cart_items:
                item.limit = product_limits.get(item.product.id)

            # آماده‌سازی context برای ارسال به قالب
            context = {
                "top_banner": TopBanner.objects.filter(active=True).last(),
                "categories": Category.objects.all(),
                "sub_categories": {
                    category: SubCategory.objects.filter(category=category)
                    for category in Category.objects.all()
                },
                "cart": cart,
                "cart_items": cart_items,
                "subtotal": subtotal,
                "total_price": int(total_price) + 60000,
                "limit_products": list(product_limits.values()),
            }

            return render(request, "shop/checkout.html", context)

        else:
            messages.add_message(
                request,
                messages.WARNING,
                message="لطفا ابتدا وارد حساب کاربری خود بشوید",
            )
            return redirect("shop_index_url")


def signin(request: HttpRequest):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        # اجازه ورود با نام کاربری یا ایمیل
        user = authenticate(request, username=username, password=password)
        if user is None:
            try:
                user_obj = User.objects.get(email=username)
                user = authenticate(
                    request, username=user_obj.username, password=password
                )
            except User.DoesNotExist:
                user = None

        if user is not None:
            login(request, user)
            messages.add_message(request, messages.SUCCESS, "با موفقیت وارد شدید.")
            return redirect("shop_index_url")
        else:
            messages.add_message(
                request, messages.WARNING, "نام کاربری یا رمز عبور اشتباه است."
            )
            return redirect("signin_url")

    else:
        context = {
            "top_banner": TopBanner.objects.filter(active=True).last(),
            "categories": Category.objects.all(),
            "sub_categories": {
                category: SubCategory.objects.filter(category=category)
                for category in Category.objects.all()
            },
        }
        return render(request, "shop/signin.html", context)


def signup(request: HttpRequest):
    pre_signup = """
        <h2 class="text-center mb-5">ثبت نام</h2>
        <div class="form-group">
            <label for="name">نام:</label>
            <input type="text" id="name" name="name" required class="form-control">
        </div>
        <div class="form-group mt-1">
            <label for="username">نام کاربری:</label>
            <input type="text" id="username" name="username" required class="form-control">
        </div>
        <div class="form-group mt-1">
            <label for="email">ایمیل:</label>
            <input type="email" id="email" name="email" required class="form-control">
        </div>
        <div class="form-group mt-1">
            <label for="password">رمز عبور:</label>
            <input type="password" id="password" name="password" required class="form-control">
        </div>
        <div class="form-group mt-1">
            <label for="repeat-password">رمز عبور مجدد:</label>
            <input type="password" id="repeat-password" name="repeat-password" required class="form-control">
        </div>
        <p class="mt-3">حساب کاربری دارید؟ <a href="{% url 'signin_url' %}">ورود</a></p>
        <div class="w-100 d-flex justify-content-center">
            <button type="submit" class="btn btn-primary mt-3 w-50">ثبت نام</button>
        </div>
    """

    if request.method == "POST":
        # مرحله 1: اگر کد تایید ارسال شده، آن را بررسی کن
        if "verification_code" in request.POST:
            email = request.POST.get("email", "").strip()
            code = request.POST.get("verification_code", "").strip()
            try:
                obj = VerifyCode.objects.get(email=email)
            except VerifyCode.DoesNotExist:
                messages.warning(request, "کد تایید یافت نشد یا منقضی شده است.")
                return redirect("signup_url")

            if obj.code != code:
                messages.warning(request, "کد تایید اشتباه است.")
                return redirect("signup_url")

            # بررسی عدم وجود کاربر با ایمیل یا نام کاربری
            if (
                User.objects.filter(email=obj.email).exists()
                or User.objects.filter(username=obj.username).exists()
            ):
                obj.delete()
                messages.warning(request, "این ایمیل یا نام کاربری قبلاً ثبت شده است.")
                return redirect("signup_url")

            # ایجاد کاربر
            user = User.objects.create_user(
                username=obj.username,
                email=obj.email,
                password=obj.password,
                first_name=obj.name,
            )
            user.save()
            obj.delete()
            messages.success(
                request, "ثبت نام با موفقیت انجام شد. اکنون می‌توانید وارد شوید."
            )
            return redirect("signin_url")

        # مرحله 2: اعتبارسنجی اولیه فرم ثبت نام
        name = request.POST.get("name", "").strip()
        username = request.POST.get("username", "").strip()
        email = request.POST.get("email", "").strip()
        password = request.POST.get("password", "")
        repeat_password = request.POST.get("repeat-password", "")

        # اعتبارسنجی فیلدها
        if not name or not username or not email or not password or not repeat_password:
            messages.warning(request, "لطفاً همه فیلدها را پر کنید.")
            return redirect("signup_url")

        if len(username) < 3 or len(username) > 150:
            messages.warning(request, "نام کاربری باید بین ۳ تا ۱۵۰ کاراکتر باشد.")
            return redirect("signup_url")

        if User.objects.filter(username=username).exists():
            messages.warning(request, "این نام کاربری قبلاً ثبت شده است.")
            return redirect("signup_url")

        if User.objects.filter(email=email).exists():
            messages.warning(request, "این ایمیل قبلاً ثبت شده است.")
            return redirect("signup_url")

        try:
            validate_email(email)
        except ValidationError:
            messages.warning(request, "ایمیل معتبر نیست.")
            return redirect("signup_url")

        if len(password) < 6:
            messages.warning(request, "رمز عبور باید حداقل ۶ کاراکتر باشد.")
            return redirect("signup_url")

        if password != repeat_password:
            messages.warning(request, "رمز عبور و تکرار آن یکسان نیستند.")
            return redirect("signup_url")

        # ارسال کد تایید ایمیل
        verification_code = str(random.randint(10000, 99999))
        sender_email = "amircheshmenooshi@gmail.com"
        sender_password = "mpmy zplh gpme myez"
        receiver_email = email

        subject = "کد اعتبار سنجی برای ایمیل شما (بیوتیکو)"
        body = f"کد برای ورود به حساب کاربری:\n{verification_code}\nمی‌باشد."

        msg = MIMEMultipart()
        msg["From"] = sender_email
        msg["To"] = receiver_email
        msg["Subject"] = subject
        msg.attach(MIMEText(body, "plain"))

        try:
            server = smtplib.SMTP("smtp.gmail.com", 587)
            server.starttls()
            server.login(sender_email, sender_password)
            server.send_message(msg)
            server.quit()
        except Exception as e:
            messages.warning(request, "خطا در ارسال ایمیل. لطفاً بعداً تلاش کنید.")
            return redirect("signup_url")

        # حذف کد قبلی اگر وجود دارد
        VerifyCode.objects.filter(email=email).delete()
        # ذخیره کد جدید
        VerifyCode.objects.create(
            code=verification_code,
            name=name,
            username=username,
            email=email,
            password=password,
        )

        signup_ = f"""
            <h2 class="text-center mb-4">تایید ایمیل</h2>
            <div class="form-group">
                <label for="verification_code">کد ارسال شده به {email} را وارد کنید:</label>
                <input type="text" id="verification_code" name="verification_code" required class="form-control" maxlength="6">
            </div>
            <div class="w-100 d-flex justify-content-center">
                <button type="submit" class="btn btn-success mt-3 w-50">تایید</button>
            </div>
            <input type="hidden" value="{email}" name="email">
        """

        context = {
            "top_banner": TopBanner.objects.filter(active=True).last(),
            "categories": Category.objects.all(),
            "sub_categories": {
                category: SubCategory.objects.filter(category=category)
                for category in Category.objects.all()
            },
            "content": signup_,
        }
        return render(request, "shop/signup.html", context)

    # GET method
    context = {
        "top_banner": TopBanner.objects.filter(active=True).last(),
        "categories": Category.objects.all(),
        "sub_categories": {
            category: SubCategory.objects.filter(category=category)
            for category in Category.objects.all()
        },
        "content": pre_signup,
    }
    return render(request, "shop/signup.html", context)


def dashboard(request: HttpRequest):
    context = {
        "top_banner": TopBanner.objects.filter(active=True).last(),
        "categories": Category.objects.all(),
        "sub_categories": {
            category: SubCategory.objects.filter(category=category)
            for category in Category.objects.all()
        },
    }   
    return render(request, "shop/my-account.html", context)
