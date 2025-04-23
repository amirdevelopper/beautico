from django.shortcuts import render, redirect, HttpResponse

# Create your views here.
def shop_index(request):
    return render(request, "shop/index.html")

