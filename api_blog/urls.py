from django.urls import path
from .views import CreateBlogView, UpdateBlogView, DeleteBlogView

urlpatterns = [
    path('create/', CreateBlogView.as_view(), name='create_blog'),
    path('update/<int:id>/', UpdateBlogView.as_view(), name='update_blog'),
    path('delete/<int:id>/', DeleteBlogView.as_view(), name='delete_blog'),
]
