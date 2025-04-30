from django.urls import path
from . import views

urlpatterns = [
    path("", views.shop_index, name="shop_index_url"),
    path("product/<int:id>", views.show_product, name="show_product_url"),
    path("products/", views.products, name="products_url"),
    path(
        "category/<str:category>/<str:subcategory>",
        views.show_category,
        name="category_shop_url",
    ),
    path("add_cart/", views.add_cart, name="add_cart_url"),
    path("show_cart/", views.show_cart, name="show_cart_url"),
    path("remove_cart/<int:id>", views.remove_cart, name="remove_cart_url"),
    path("products/special", views.special, name="shop_special_url"),
    path("checkout/", views.check_out_order, name="checkout_url"),

    path("signin/", views.signin, name="signin_url"),
    path("signup/", views.signup, name="signup_url"),

    path("dashboard/", views.dashboard, name="dashboard_url"),
    path("logout", views.logout, name="logout_url")
]
