from django.urls import path
from . import views

urlpatterns = [
    path("", views.admin_index, name="admin_index_url"),

    path("/contacts", views.contacts, name="admin_contact_url"),
    path("/invoices", views.invoices, name="admin_invoice_url"),

    path("/signin", views.signin, name="admin_singin_url"),

    path("/new_blog", views.new_blog, name="admin_newblog_url"),
    path("/new_tag", views.new_tag, name="admin_newtag_url"),
    path("/blogs", views.blogs, name="admin_blogs_url"),

    path("/delete_blog", views.delete_blog, name="delete_blog_url"),
    path("/eidt_blog/<int:id>", views.edit_blog, name="eidt_blog_url"),

    path("/logout", views.admin_logout, name="admin_logout_url"),

    path("get-subcategories/", views.get_subcategories, name="get_subcategories"),

    path("/new_product", views.new_product, name="admin_newproduct_url"),    
    path("/delete_product/<int:id>", views.delete_product, name="admin_deleteproduct_url"),  
    path("/edit_product/<int:id>", views.edit_product, name="admin_editproduct_url"),  


    path("/category/",  views.category, name="admin_category_url"),
    path("/subcategory/",  views.subcategory, name="admin_subcategory_url"),

    path("/delete_category/<int:id>", views.delete_category, name="admin_deletecategory_url"),  
    path("/delete_subcategory/<int:id>", views.delete_subcategory, name="admin_deletesubcategory_url"),  

    path("/products", views.products, name="admin_products_url")
]
