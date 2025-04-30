from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True)
    picture = models.ImageField(upload_to="categories_picture/", blank=True, null=True)

    def __str__(self):
        return self.name


class SubCategory(models.Model):
    category = models.ForeignKey(
        Category, related_name="subcategories", on_delete=models.CASCADE
    )
    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True)

    def __str__(self):
        return f"{self.category.name} - {self.name}"

class VerifyCode(models.Model):
    code = models.CharField(max_length=10)
    name = models.CharField(max_length=50)
    username = models.CharField(max_length=100, null=True, blank=True)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.email} --> {self.code}"

class Product(models.Model):
    subcategory = models.ForeignKey(
        "SubCategory", related_name="products", on_delete=models.CASCADE
    )
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=0)
    stock = models.IntegerField()
    available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    image1 = models.ImageField(upload_to="products/", blank=True, null=True)
    image2 = models.ImageField(upload_to="products/", blank=True, null=True)
    image3 = models.ImageField(upload_to="products/", blank=True, null=True)
    image4 = models.ImageField(upload_to="products/", blank=True, null=True)
    special_price = models.DecimalField(
        max_digits=10, decimal_places=0, blank=True, null=True
    )
    publish = models.BooleanField(default=True)

    # ویژگی‌های جدید
    is_special = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    @property
    def discount_percent(self):
        if self.special_price and self.special_price < self.price:
            discount = ((self.price - self.special_price) / self.price) * 100
            return round(discount)
        return 0
    
class BannerProduc(models.Model):
    picture_product = models.ImageField(upload_to="banner_product/", blank=False, null=False)
    title=models.CharField(max_length=30, null=True)
    description = models.TextField(max_length=100, null=True)

    product = models.ForeignKey(Product, related_name="banner_product", on_delete=models.CASCADE)

    def __str__(self):
        return self.product.name

class UserMore(models.Model):
    customer = models.ForeignKey(User, related_name="usermore", on_delete=models.CASCADE)

    phone_number = models.CharField(max_length=11, null=True, blank=True)
    addres = models.TextField(max_length=350, null=True, blank=True)

    def __str__(self):
        return f"{self.customer} --> {self.phone_number}"


class Order(models.Model):
    STATUS_CHOICES = [
        ("در انتظار", "در انتظار"),
        ("در حال پردازش", "در حال پردازش"),
        ("ارسال شده", "ارسال شده"),
        ("تحویل داده شده", "تحویل داده شده"),
        ("لغو شده", "لغو شده"),
    ]

    customer = models.ForeignKey(User, related_name="orders", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default="در انتظار"
    )
    total_price = models.DecimalField(
        max_digits=10, decimal_places=0, blank=True, null=True
    )
    addres = models.TextField(max_length=200)

    def __str__(self):
        return f"Order #{self.id} by {self.customer.username}"

    def calculate_total_price(self):
        total = sum(item.price * item.stock for item in self.items.all())
        self.total_price = total
        self.save()

    class Meta:
        ordering = ["-created_at"]


class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name="items", on_delete=models.CASCADE)
    product = models.ForeignKey("Product", on_delete=models.CASCADE)
    stock = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=0)

    def __str__(self):
        return f"{self.product.name} x {self.stock}"


class Cart(models.Model):
    customer = models.OneToOneField(User, related_name="cart", on_delete=models.CASCADE)
    products = models.ManyToManyField(
        "Product", through="CartItem", related_name="carts"
    )

    def __str__(self):
        return f"{self.customer.username}'s Cart"


class CartItem(models.Model):
    cart = models.ForeignKey(Cart, related_name="items", on_delete=models.CASCADE)
    product = models.ForeignKey("Product", on_delete=models.CASCADE)
    stock = models.IntegerField()

    def __str__(self):
        return f"{self.product.name} x {self.stock}"


class Review(models.Model):
    product = models.ForeignKey(
        Product, related_name="reviews", on_delete=models.CASCADE
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    approved = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username} - {self.product.name} - {self.rating}"


class TopBanner(models.Model):
    link = models.URLField(blank=True, null=True)
    title = models.CharField(max_length=255, blank=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.title or "Banner"


class ProductAttribute(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="attributes"
    )
    name = models.CharField(max_length=100)
    value = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.product.name} - {self.name}: {self.value}"


class ProductLimit(models.Model):
    product = models.ForeignKey(
        Product, related_name="purchase_limits", on_delete=models.CASCADE
    )
    max_purchase_limit = models.IntegerField()

    def __str__(self):
        return f"Limit for {self.product.name}: {self.max_purchase_limit}"
