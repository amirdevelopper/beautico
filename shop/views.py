from django.shortcuts import render, redirect, HttpResponse
from django.http import HttpRequest
from .models import *
from django.core.paginator import Paginator
from django.contrib import messages


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
                if not OrderItem.objects.filter(
                    order__user=request.user, product_id=id
                ).exists():
                    messages.add_message(
                        request,
                        messages.ERROR,
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
            products = Product.objects.filter(subcategory__category=category_obj, publish=True)
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


def show_cart(request:HttpRequest):
    if request.user.is_authenticated:
        if request.method == "POST":
            cart, created = Cart.objects.get_or_create(customer=request.user)

            product_id = request.POST.get("product_id")
            quantity = int(request.POST.get("quantity", 1))

            try:
                product_id_int = int(product_id)
            except (TypeError, ValueError):
                messages.add_message(request, messages.WARNING, "شناسه محصول نامعتبر است.")
                return redirect("show_cart_url")

            print(product_id)

            cart_item = CartItem.objects.filter(cart=cart, product_id=product_id_int).first()

            if cart_item:
                cart_item.stock = quantity
                cart_item.save()
                messages.add_message(request, messages.SUCCESS, "تعداد محصول با موفقیت به‌روزرسانی شد.")
            else:
                messages.add_message(request, messages.WARNING, ".محصول در سبد خرید شما یافت نشد")

            return redirect("show_cart_url")

        else:
            cart, created = Cart.objects.get_or_create(customer=request.user)
            cart_items = CartItem.objects.filter(cart=cart).select_related("product")
            # Calculate total price and subtotal for cart
            total_price = 0
            subtotal = 0
            for item in cart_items:
                # Use special_price if available, else price
                price = item.product.special_price if getattr(item.product, "special_price", None) else item.product.price
                item.total = price * item.stock
                subtotal += item.total
            total_price = subtotal  # You can add shipping/tax if needed

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
            }
            return render(request, "shop/cart.html", context)
    else:
        messages.add_message(
            request, messages.WARNING, message="لطفا ابتدا وارد حساب کاربری خود بشوید"
        )
        return redirect("shop_index_url")


def add_cart(request: HttpRequest, id):
    if request.user.is_authenticated:
        product = Product.objects.get(id=id)
        cart, created = Cart.objects.get_or_create(customer=request.user)
        quantity = int(request.POST.get("quantity", 1))

        cart_item, created = CartItem.objects.get_or_create(
            cart=cart,
            product=product,
            defaults={'stock': quantity}
        )
        if not created:
            cart_item.stock += quantity
            cart_item.save()
        if not created:
            cart_item.stock += 1
            cart_item.save()
        messages.success(request, "محصول با موفقیت به سبد خرید اضافه شد.")

        return redirect("shop_index_url")

    else:
        messages.add_message(
            request, messages.WARNING, message="لطفا ابتدا وارد حساب کاربری خود بشوید"
        )

        return redirect("shop_index_url")


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

        context = {"products":products}
        return render(request, "shop/product_category.html", context)