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
            for product in Product.objects.filter(is_special=True)[:10]
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
            # <QueryDict: {'csrfmiddlewaretoken': ['zF4nXv4jIDGNwIennrOXBeFsb3uq16VEosnfweCwISD0XmSdSy29U40SIElSRMOt'], 'comment': ['عالی'], 'name': ['امیر'], 'email': ['amircheshmenooshi@gmail.com']}>

            print(request.POST["name"])
            print(request.POST["email"])
            print(request.POST["comment"])

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
                messages.add_message(request, messages.WARNING, message="لطفا ابتدا وارد حساب کاربری خود بشوید")
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
            products = Product.objects.filter(subcategory__category=category_obj)
        else:
            category_obj = Category.objects.get(slug=category)
            subcategory_obj = SubCategory.objects.get(slug=subcategory, category=category_obj)
            products = Product.objects.filter(subcategory=subcategory_obj)

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
    

def products(request:HttpRequest):
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
                category_obj = Category.objects.get(title=category_selector)
                products_qs = products_qs.filter(subcategory__category=category_obj)
            except Category.DoesNotExist:
                products_qs = products_qs.none()

        # Filter by situation if provided and not default
        if situation_selector and situation_selector != "وضعیت":
            products_qs = products_qs.filter(situation=situation_selector)

        # Filter by min price if provided
        if min_value:
            try:
                min_val = float(min_value)
                products_qs = products_qs.filter(price__gte=min_val)
            except ValueError:
                pass

        # Filter by max price if provided
        if max_value:
            try:
                max_val = float(max_value)
                products_qs = products_qs.filter(price__lte=max_val)
            except ValueError:
                pass

        # Paginate filtered products
        paginated_products = Paginator(products_qs, 10).get_page(request.GET.get("page"))

        context = {
            "top_banner": TopBanner.objects.filter(active=True).last(),
            "categories": Category.objects.all(),
            "sub_categories": {
                cat: SubCategory.objects.filter(category=cat)
                for cat in Category.objects.all()
            },
            "products": paginated_products,
        }

        return render(request, "shop/filter-dropdown.html", context=context)