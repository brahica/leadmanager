from rest_framework import routers
from .api import MapViewSet, PointViewSet

router = routers.DefaultRouter()
router.register('api/maps', MapViewSet, 'maps')
router.register('api/points', PointViewSet, 'points')

urlpatterns = router.urls
