from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Map(models.Model):
    """
    Map Model
    """
    name = models.CharField(max_length=100)
    owner = models.ForeignKey(User, related_name="leads", on_delete=models.CASCADE, null=True)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

class Point(models.Model):
    """
    Point for Map with lat/long 
    """
    description = models.TextField(blank=True, null=True)
    create_at = models.DateField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    map = models.ForeignKey(Map, on_delete=models.CASCADE)
    lat = models.FloatField(default=0)
    lgt = models.FloatField(default=0)
