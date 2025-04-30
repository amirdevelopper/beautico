from django.urls import path
from . import views

urlpatterns = [
    path('wish/add', views.add_to_wishlist, name='add_to_wishlist_url'),
    path('wish/remove/<int:id>', views.remove_from_wishlist, name='remove_from_wishlist_url'),
    path('wish/list/', views.get_wishlist, name='get_wishlist_url'),
]
