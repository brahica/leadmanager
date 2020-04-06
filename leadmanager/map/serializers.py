from rest_framework import serializers
from map.models import Map, Point

# Map Serializer
class MapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Map
        fields = '__all__'

# Point Serializer
class PointSerializer(serializers.ModelSerializer):
    class Meta:
        model = Point
        fields = '__all__'