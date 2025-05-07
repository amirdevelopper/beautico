from django.shortcuts import render
from django.http import HttpResponse, HttpRequest, JsonResponse
from shop import models as shop_model
from django.contrib.auth.models import User
import time
from django.contrib.auth.models import User
from django.core.paginator import Paginator
from django.shortcuts import render, get_object_or_404, redirect
import traceback
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.contrib.auth import logout as auth_logout
import json


# Create your views here.
def admin_index(request: HttpRequest):
    if request.user.is_authenticated:
        if request.method == "POST":
            print(request.POST["title"])
            print(request.POST["link"])

            shop_model.TopBanner.objects.last().delete()
            tp_text = shop_model.TopBanner(
                title=request.POST["title"], link=request.POST["link"], active=True
            )

            tp_text.save()

            return redirect("admin_index_url")

        else:
            sales = 0

            all_orders = shop_model.Order.objects.all()
            for order in all_orders:
                for item_order in shop_model.OrderItem.objects.filter(order=order):
                    sales += int(item_order.price)

            context = {
                "sales": sales,
                "wait_orders": shop_model.Order.objects.filter(status="در انتظار"),
                "all_orders_count": shop_model.Order.objects.count(),
                "all_users_count": User.objects.count(),
                "all_products_count": shop_model.Product.objects.count(),
                "all_categories_count": shop_model.Category.objects.all(),
                "all_subcategories_count": shop_model.SubCategory.objects.all(),
                "text_top": shop_model.TopBanner.objects.last(),
            }

            return render(request, "admin_dashboard/index.html", context)

    else:
        return redirect("admin_singin_url")


def contacts(request: HttpRequest):
    if request.user.is_authenticated:

        users = User.objects.all()
        paginator = Paginator(users, 8)  # تعداد کاربران در هر صفحه (مثلاً 8 تا)

        page_number = request.GET.get("page")
        page_obj = paginator.get_page(page_number)

        context = {"page_obj": page_obj}
        return render(request, "admin_dashboard/app-contact-list.html", context)
    else:
        return redirect("admin_singin_url")


def invoices(request: HttpRequest):
    if request.user.is_authenticated:

        if request.method == "POST":

            try:
                order = get_object_or_404(shop_model.Order, id=request.POST["order_id"])
                items_html = ""
                total_price = 0

                for i, item in enumerate(order.items.all(), start=1):
                    item_total = item.price * item.stock
                    total_price += item_total
                    items_html += f"""
                        <tr>
                            <td>{i}</td>
                            <td>{item.product.name}</td>
                            <td>{item.price:,.0f}</td>
                            <td>{item.stock}</td>
                            <td>{item_total:,.0f}</td>
                        </tr>
                    """

                content = f"""
                <div style="min-width: 600px">
                    <main>
                        <div style="display: flex; justify-content: space-between;">
                            <div>
                                <h3>فاکتور برای:</h3>
                                <p>{order.customer.get_full_name()}</p>
                                <p>{order.addres}</p>
                                <p>{order.customer.email}</p>
                            </div>
                            <div>
                                <h3>شماره سفارش: {order.id}</h3>
                                <p>تاریخ سفارش: {order.created_at.strftime("%Y/%m/%d")}</p>
                                <p>کد پیگیری: {order.tracking_code or "-"}</p>
                            </div>
                        </div>

                        <table style="width: 100%; margin-top: 30px; border-collapse: collapse;" border="1">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>محصول</th>
                                    <th>قیمت واحد (تومان)</th>
                                    <th>تعداد</th>
                                    <th>قیمت کل (تومان)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items_html}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="4" style="text-align: right;"><strong>مجموع:</strong></td>
                                    <td>{order.total_price or f"{total_price:,.0f}"}</td>
                                </tr>
                            </tfoot>
                        </table>

                        <p style="margin-top: 30px;">وضعیت سفارش: <strong>{order.status}</strong></p>
                    </main>
                </div>
                """

                return render(
                    request, "admin_dashboard/app-invoice.html", {"content": content}
                )

            except:
                content = """
                    <div class="card">
                        <div class="card-body">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">شماره سفارش</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="order_id">
                                <div id="emailHelp" class="form-text">شماره سفارش مورد نظر را وارد کنید</div>
                            </div>
                            <button type="submit" class="btn btn-primary">بررسی</button>
                            
                        </div>
                    </div>
                """

                return render(
                    request, "admin_dashboard/app-invoice.html", {"content": content}
                )
        else:
            content = """
                <div class="card">
                    <div class="card-body">
                    
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">شماره سفارش</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="order_id">
                                <div id="emailHelp" class="form-text">شماره سفارش مورد نظر را وارد کنید</div>
                            </div>
                            <button type="submit" class="btn btn-primary">بررسی</button>
                        
                    </div>
                </div>
            """

            return render(
                request, "admin_dashboard/app-invoice.html", {"content": content}
            )

    else:
        return redirect("admin_singin_url")


def signin(request: HttpRequest):
    if request.user.is_authenticated:
        return redirect("admin_index_url")

    else:
        if request.method == "POST":
            username = request.POST["username"]
            password = request.POST["password"]

            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user=user)
                return redirect("admin_index_url")

            return render(request, "admin_dashboard/auth-cover-signin.html")

        else:
            return render(request, "admin_dashboard/auth-cover-signin.html")


def new_tag(request: HttpRequest):
    if request.user.is_authenticated:
        if request.method == "POST":
            shop_model.BlogTag(name=request.POST["tag"]).save()

            messages.add_message(
                request, messages.SUCCESS, "تگ مورد نظر با موفقیت افزوده شد"
            )
            return redirect("admin_index_url")

        return render(
            request,
            "admin_dashboard/new_tag.html",
            context={"tags": shop_model.BlogTag.objects.all()},
        )

    else:
        return redirect("admin_index_url")


def new_blog(request: HttpRequest):
    if request.user.is_authenticated:
        if request.method == "POST":
            print(request.POST)
            # <QueryDict: {'csrfmiddlewaretoken': ['lEjItRQjbZSWT0LuE0Y0kGhqFwxa7GYMj8rnNr9tEzYRVj2h2kSImCHG0lWxK1dV'], 'title': ['بلاگ 11'], 'description': ['این بلاگ 11 است'], 'image': ['-2147483648_-210184.jpg'], 'author': ['امیرمحمد چشمه نوشی'], 'tag': ['1', '2', '3']}>

            post = shop_model.Blog(
                title=request.POST["title"],
                description=request.POST["description"],
                image=request.FILES["image"],
                author=request.POST["author"],
            )
            post.save()

            lst_tag = []
            for i in request.POST["tag"]:
                lst_tag.append(shop_model.BlogTag.objects.get(id=i).id)

            post.tags.add(*lst_tag)
            post.save()

            messages.add_message(
                request, messages.SUCCESS, "بلاگ مورد نظر با موفقیت اضافه و منتشر شد."
            )

            return redirect("admin_index_url")
        else:
            context = {
                "tags": shop_model.BlogTag.objects.all,
                "title_page": "افزودن بلاگ",
            }
            return render(request, "admin_dashboard/new_blog.html", context)

    else:
        return redirect("admin_index_url")


def blogs(request: HttpRequest):
    if request.user.is_authenticated:
        context = {"blogs": shop_model.Blog.objects.all()}

        return render(request, "admin_dashboard/blogs.html", context)

    else:
        return redirect("admin_index_url")


def delete_blog(request: HttpRequest):
    if request.user.is_authenticated:
        if request.headers["X-Requested-With"] == "XMLHttpRequest":
            blog = shop_model.Blog.objects.get(id=request.POST["id"])
            blog.delete()

            return JsonResponse({"success": True})
        else:
            return redirect("admin_singin_url")

    else:
        redirect("admin_index_url")


def edit_blog(request: HttpRequest, id):
    if request.user.is_authenticated:
        if request.method == "POST":
            blog = shop_model.Blog.objects.get(id=id)

            blog.title = request.POST["title"]
            blog.description = request.POST["description"]

            try:
                blog.image = request.FILES["image"]
            except:
                pass

            blog.author = request.POST["author"]

            blog.save()

            lst_tag = []
            for i in request.POST["tag"]:
                lst_tag.append(shop_model.BlogTag.objects.get(id=i).id)

            tag_ids = request.POST.getlist("tag")  # گرفتن تگ‌ها از فرم
            blog.tags.set(tag_ids)  # آپدیت کردن M2M field با آی‌دی‌ها

            blog.save()

            messages.add_message(
                request, messages.SUCCESS, "بلاگ مورد نظر با موفقیت ویرایش شد"
            )

            return redirect("admin_index_url")

        else:
            context = {
                "blog": shop_model.Blog.objects.get(id=id),
                "title_page": "ویرایش بلاگ",
                "tags": shop_model.BlogTag.objects.all,
            }
            return render(request, "admin_dashboard/new_blog.html", context)

    else:
        return redirect("admin_singin_url")


def admin_logout(request: HttpRequest):
    auth_logout(request)
    messages.success(request, "با موفقیت خارج شدید.")
    return redirect("shop_index_url")


def get_subcategories(request: HttpRequest):
    category_id = request.GET.get("category_id")
    subcategories = shop_model.SubCategory.objects.filter(
        category_id=category_id
    ).values("id", "name")
    return JsonResponse(list(subcategories), safe=False)


def products(request: HttpRequest):
    if request.user.is_authenticated:
        context = {"products": shop_model.Product.objects.all()}

        return render(request, "admin_dashboard/ecommerce-products.html", context)

    else:
        return redirect("admin_singin_url")


def new_product(request: HttpRequest):
    if request.user.is_authenticated:
        if request.method == "POST":
            name = request.POST.get("name")
            description = request.POST.get("description")
            price = request.POST.get("price")
            special_price = request.POST.get("special_price")
            stock = request.POST.get("stock")
            limit = request.POST.get("limit")
            category_id = request.POST.get("category")
            subcategory_id = request.POST.get("subcategory")
            is_special = "is_special" in request.POST
            attributes_json = request.POST.get("attributes_json")

            # اعتبارسنجی پایه
            errors = []

            if not name:
                errors.append("نام محصول الزامی است.")
            if not price or not price.isdigit() or int(price) <= 0:
                errors.append("قیمت معتبر وارد کنید.")
            if not stock or not stock.isdigit():
                errors.append("موجودی معتبر وارد کنید.")
            if limit and (not limit.isdigit() or int(limit) < 0):
                errors.append("تعداد محدودیت خرید نامعتبر است.")
            if not subcategory_id:
                errors.append("زیر دسته‌بندی الزامی است.")

            # پَارس ویژگی‌ها
            try:
                attributes = json.loads(attributes_json or "[]")
            except json.JSONDecodeError:
                errors.append("ویژگی‌ها نامعتبر هستند.")
                attributes = []

            # بررسی ویژگی‌ها
            for attr in attributes:
                if not attr.get("name") or not attr.get("value"):
                    errors.append("همه ویژگی‌ها باید دارای کلید و مقدار باشند.")
                    break

            if errors:
                messages.add_message(request, messages.ERROR, errors)
                return redirect("admin_index_url")

            # ذخیره محصول
            subcategory = shop_model.SubCategory.objects.get(id=subcategory_id)
            product = shop_model.Product.objects.create(
                name=name,
                description=description,
                price=price,
                special_price=special_price or None,
                stock=stock,
                subcategory=subcategory,
                image1=request.FILES.get("image1"),
                image2=request.FILES.get("image2"),
                image3=request.FILES.get("image3"),
                image4=request.FILES.get("image4"),
                is_special=is_special,
            )

            # ذخیره ویژگی‌ها
            for attr in attributes:
                shop_model.ProductAttribute.objects.create(
                    product=product, name=attr["name"], value=attr["value"]
                )

            # ذخیره محدودیت خرید
            if limit:
                shop_model.ProductLimit.objects.create(
                    product=product, max_purchase_limit=int(limit)
                )

            messages.add_message(
                request, messages.SUCCESS, "محصول با موفقیت افزوده شد."
            )
            return redirect("admin_index_url")  # یا آدرس دلخواهت

        else:
            context = {
                "categories": shop_model.Category.objects.all(),
                "sub_categories": shop_model.SubCategory.objects.all(),
                "title": "اضافه کردن محصول",
            }
            return render(
                request, "admin_dashboard/ecommerce-add-new-products.html", context
            )

    else:
        return redirect("admin_singin_url")


def delete_product(request: HttpRequest, id):
    if request.user.is_authenticated:
        shop_model.Product.objects.get(id=id).delete()
        messages.add_message(
            request, messages.SUCCESS, "محصول مورد نظر با موفقیت حذف شد"
        )

        return redirect("admin_index_url")

    else:
        return redirect("admin_singin_url")


def edit_product(request: HttpRequest, id):
    if request.user.is_authenticated:
        if request.method == "POST":
            product = get_object_or_404(shop_model.Product, id=id)

            # دریافت مقادیر از فرم
            product.name = request.POST.get("name", "")
            product.description = request.POST.get("description", "")
            product.price = request.POST.get("price", 0)
            product.special_price = request.POST.get("special_price") or None
            product.stock = request.POST.get("stock", 0)
            product.is_special = "is_special" in request.POST

            # دسته‌بندی فقط اگر مقدار داده شده بود (اجباری نیست)
            subcategory_id = request.POST.get("subcategory")
            if subcategory_id:
                product.subcategory_id = subcategory_id

            # عکس‌ها (اگر فایلی آپلود شده باشد)
            if request.FILES.get("image1"):
                product.image1 = request.FILES["image1"]
            if request.FILES.get("image2"):
                product.image2 = request.FILES["image2"]
            if request.FILES.get("image3"):
                product.image3 = request.FILES["image3"]
            if request.FILES.get("image4"):
                product.image4 = request.FILES["image4"]

            product.save()

            # آپدیت لیمیت
            limit = request.POST.get("limit")
            if limit:
                product_limit, _ = shop_model.ProductLimit.objects.get_or_create(
                    product=product
                )
                product_limit.max_purchase_limit = limit
                product_limit.save()

            # حذف اتریبیوت‌های قبلی و ثبت جدید (اگر نیاز داری صفر تا صد جایگزین بشه)
            attributes_json = request.POST.get("attributes_json")
            if attributes_json:
                import json

                product.attributes.all().delete()
                for attr in json.loads(attributes_json):
                    shop_model.ProductAttribute.objects.create(
                        product=product, name=attr["name"], value=attr["value"]
                    )

            messages.add_message(
                request, messages.SUCCESS, "محصول مورد نظر با موفقیت آپدیت شد"
            )
            return redirect("admin_index_url")

        else:
            context = {
                "title": "ویرایش محصول",
                "product": shop_model.Product.objects.get(id=id),
                "limit": shop_model.ProductLimit.objects.get(
                    product=shop_model.Product.objects.get(id=id)
                ).max_purchase_limit,
            }
            return render(
                request, "admin_dashboard/ecommerce-add-new-products.html", context
            )

    else:
        return redirect("admin_singin_url")


def category(request):
    if request.method == "POST":
        name = request.POST.get("name")
        slug = request.POST.get("slug")
        picture = request.FILES.get("picture")  # None if not uploaded

        shop_model.Category.objects.create(name=name, slug=slug, picture=picture)

        messages.add_message(
            request, messages.SUCCESS, "کتگوری جدید با موفقیت ایجاد شد"
        )
        return redirect("admin_index_url")  # آدرس url مناسب با پروژه خودت

    categories = shop_model.Category.objects.all()
    return render(request, "admin_dashboard/category.html", {"categories": categories})


def delete_category(request: HttpRequest, id):
    if request.user.is_authenticated:
        shop_model.Category.objects.get(id=id).delete()
        messages.add_message(
            request, messages.SUCCESS, "کتگوری مورد نظر با موفقیت حذف شد"
        )

        return redirect("admin_index_url")
    else:
        return redirect("admin_singin_url")


def subcategory(request):
    if request.method == "POST":
        category_id = request.POST.get("category")
        name = request.POST.get("name")
        slug = request.POST.get("slug")

        category = shop_model.Category.objects.get(id=category_id)

        shop_model.SubCategory.objects.create(category=category, name=name, slug=slug)
        messages.add_message(request, messages.SUCCESS, "ساب کتگوری مورد نظر با موفقیت اضافه شد")
        return redirect("admin_index_url")  # نام URL را مطابق با پروژه خودت تغییر بده

    subcategories = shop_model.SubCategory.objects.all()
    categories = shop_model.Category.objects.all()
    return render(
        request,
        "admin_dashboard/subcategory.html",
        {"subcategories": subcategories, "categories": categories},
    )


def delete_subcategory(request: HttpRequest, id):
    if request.user.is_authenticated:
        shop_model.SubCategory.objects.get(id=id).delete()

        messages.add_message(
            request, messages.SUCCESS, "ساب دسته بندی مورد نظر با موفقیت حذف شد"
        )
        return redirect("admin_index_url")

    else:
        return redirect("admin_singin_url")
