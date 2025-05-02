from django.utils.html import format_html
from django.contrib import admin
from .models import *


admin.site.register(VerifyCode)
admin.site.register(UserMore)
admin.site.register(Authority)

@admin.register(BannerProduc)
class BannerProducAdmin(admin.ModelAdmin):
    list_display = ['product', 'thumbnail']
    readonly_fields = ['thumbnail']

    def thumbnail(self, obj):
        if obj.picture_product:
            return format_html('<img src="{}" width="100" height="100" style="object-fit: contain; border-radius: 8px;" />', obj.picture_product.url)
        return "-"
    thumbnail.short_description = "Preview"

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    search_fields = ['name', 'slug']


@admin.register(SubCategory)
class SubCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'category']
    list_filter = ['category']
    search_fields = ['name', 'slug']



@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'subcategory', 'price', 'special_price', 'available', 'is_special', 'stock']
    list_filter = ['subcategory', 'available', 'is_special', 'created_at']
    search_fields = ['name', 'description']
    readonly_fields = ['created_at', 'discount_percent']


@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ['order', 'product', 'stock', 'price']
    search_fields = ['product__name']


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['id', 'customer', 'status', 'total_price', 'created_at']
    list_filter = ['status', 'created_at']
    search_fields = ['customer__username', 'id']
    inlines = [OrderItemInline]



class CartItemInline(admin.TabularInline):
    model = CartItem
    extra = 1


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ['customer']
    inlines = [CartItemInline]



@admin.register(TopBanner)
class BannerAdmin(admin.ModelAdmin):
    list_display = ['title', 'link', 'active']
    list_filter = ['active']
    search_fields = ['title']


@admin.register(ProductAttribute)
class ProductAttributeAdmin(admin.ModelAdmin):
    list_display = ['product', 'name', 'value']
    search_fields = ['product__name', 'name']


@admin.register(ProductLimit)
class ProductLimitAdmin(admin.ModelAdmin):
    list_display = ['product', 'max_purchase_limit']

admin.site.register(Blog)
admin.site.register(BlogTag)