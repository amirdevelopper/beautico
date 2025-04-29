from django.urls import path
from . import views

urlpatterns = [
    path("", views.shop_index, name="shop_index_url"),
    path("product/<int:id>", views.show_product, name="show_product_url"),
    path("products/", views.products, name="products_url"),
    path("category/<str:category>/<str:subcategory>", views.show_category, name="category_shop_url"),

]
