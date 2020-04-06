from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# Lead Viewset
class LeadViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = LeadSerializer

    def get_queryset(self):
        return Lead.objects.filter(owner=self.request.user)
    
    def perform_create(self, serializer):
        print(serializer.validated_data)
        serializer.save(owner=self.request.user)
