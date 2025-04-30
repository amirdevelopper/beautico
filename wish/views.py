from django.shortcuts import render, redirect
from .wish import WishSessionManager
from django.http import JsonResponse, HttpRequest
from django.contrib import messages
from shop.models import *


# Create your views here.
def add_to_wishlist(request: HttpRequest, id):
    product_id = id

    if not product_id:
        messages.add_message(request, messages.WARNING, "محصول مورد نظر یافت نشد")
        return redirect(request.path)

    manager = WishSessionManager(request)
    manager.add_wish(request.user, product_id)
    wish_list = manager.get_wish(request.user)

    product_list = []
    for wish in wish_list:
        product_list.append(Product.objects.get(publish=True, id=wish))

    messages.add_message(request, messages.SUCCESS, "محصول مورد نظر به علاقه مندی اضافه شد")
    return redirect("get_wishlist_url")


def remove_from_wishlist(request: HttpRequest, id):
    product_id = id
    if not product_id:
        messages.add_message(request, messages.WARNING, "محصول مورد نظر یافت نشد")
        return redirect(request.path)

    manager = WishSessionManager(request)
    manager.remove_wish(request.user, product_id)
    wish_list = manager.get_wish(request.user)

    product_list = []
    for wish in wish_list:
        product_list.append(Product.objects.get(publish=True, id=wish))

    messages.add_message(request, messages.SUCCESS, "محصول مورد نظر از علاقه مندی حذف شد")
    return redirect("get_wishlist_url")


def get_wishlist(request: HttpRequest):
    manager = WishSessionManager(request)
    wish_list = manager.get_wish(request.user)

    product_list = []
    for wish in wish_list:
        product_list.append(Product.objects.get(publish=True, id=wish))

    return render(
        request,
        "shop/wishlist.html",
        {
            "wish_list": product_list,
            "top_banner": TopBanner.objects.filter(active=True).last(),
            "categories": Category.objects.all(),
            "sub_categories": {
                category: SubCategory.objects.filter(category=category)
                for category in Category.objects.all()
            },
        },
    )
