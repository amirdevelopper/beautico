from django.urls import path
from . import views

urlpatterns = [
    path('/add/<int:id>', views.add_to_wishlist, name='add_to_wishlist_url'),
    path('/remove/<int:id>', views.remove_from_wishlist, name='remove_from_wishlist_url'),
    path('/list/', views.get_wishlist, name='get_wishlist_url'),
]
