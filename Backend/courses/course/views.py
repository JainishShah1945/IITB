from rest_framework.decorators import api_view
from rest_framework.views import APIView

from rest_framework import generics
from rest_framework.response import Response
from course.serializer import CourseSerializer,InstanceSerializer
from course.models import Course,Course_Instance
from rest_framework.permissions import IsAuthenticated


# Create your views here.

class Create_Course_List(generics.ListAPIView,generics.CreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class RUD_Course_List(generics.RetrieveDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    lookup_field = 'id'


class View_CourseInstance(generics.ListCreateAPIView):
    queryset = Course_Instance.objects.all()
    serializer_class = InstanceSerializer




# class Create_CourseInstance(APIView):
#     def post(self,request):
#         course_id = request.data.get('course_instance')
#         try:
#             course = Course.objects.get(id==course_instance)
#             serializer = CourseSerializer(course)
#             return Response(serializer.data)
#         except Course.DoesNotExist:
#             return Response({'error':'Course not found'})
class D_CourseInstance(generics.DestroyAPIView):
    queryset = Course_Instance.objects.all()
    serializer_class = InstanceSerializer
    lookup_field = 'id'


class R_CourseInstance(generics.RetrieveAPIView):
    queryset = Course_Instance.objects.all()
    serializer_class = InstanceSerializer
    
    def get_object(self):
        queryset = self.get_queryset()
        course_instance = self.kwargs.get('id')
        instance_year = self.kwargs.get('instance_year')
        instance_sem = self.kwargs.get('instance_sem')
        print(instance_year)
        print('hi')
        try:
            obj = queryset.get(course_instance = course_instance,instance_year=instance_year,instance_sem=instance_sem)
        except Course_Instance.DoesNotExist:
            raise NotFound("Unknown Parameters")
        return obj