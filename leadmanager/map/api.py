from map.models import Map, Point
from rest_framework import viewsets, permissions
from .serializers import MapSerializer, PointSerializer

# Map Viewset
class MapViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = MapSerializer

    def get_queryset(self):
        return Map.objects.filter(owner=self.request.user)
    
    def perform_create(self, serializer):
        print(serializer.validated_data)
        serializer.save(owner=self.request.user)

# Point Viewset
class PointViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = PointSerializer

    def get_queryset(self):
        return Point.objects.filter(owner=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
