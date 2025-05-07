from rest_framework import serializers
from shop.models import Blog

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'title', 'description', 'image', 'date', 'author', 'tags']
