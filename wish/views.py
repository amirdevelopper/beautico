from django.shortcuts import render, redirect
from .wish import WishSessionManager
from django.http import JsonResponse, HttpRequest
from django.contrib import messages


# Create your views here.
def add_to_wishlist(request: HttpRequest):
    if request.method == "POST":
        product_id = request.POST.get("product_id")
        if not product_id:
            messages.add_message(request, messages.WARNING, "محصول مورد نظر یافت نشد")
            return redirect(request.path)

        manager = WishSessionManager(request)
        manager.add_wish(request.user, product_id)
        wish_list = manager.get_wish(request.user)
        return render(request, "shop/wishlist.html", {"wish_list": wish_list})


def remove_from_wishlist(request: HttpRequest):
    if request.method == "POST":
        product_id = request.POST.get("product_id")
        if not product_id:
            messages.add_message(request, messages.WARNING, "محصول مورد نظر یافت نشد")
            return redirect(request.path)

        manager = WishSessionManager(request)
        manager.remove_wish(request.user, product_id)
        wish_list = manager.get_wish(request.user)

        return render(request, "shop/wishlist.html", {"wish_list": wish_list})


def get_wishlist(request: HttpRequest):
    manager = WishSessionManager(request)
    wish_list = manager.get_wish(request.user)

    return render(request, "shop/wishlist.html", {"wish_list": wish_list})
