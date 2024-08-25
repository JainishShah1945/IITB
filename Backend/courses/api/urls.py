from django.urls import path
from course.views import *
urlpatterns = [
    path('courses/',Create_Course_List.as_view(),name = 'GetPostCourse'),
    path('courses/<id>/',RUD_Course_List.as_view(),name = 'RUD_Course'),
    path('instances/',View_CourseInstance.as_view(),name = 'GetInstance'),
    path('instances/<id>/<instance_year>/<instance_sem>/',R_CourseInstance.as_view(),name = 'RUD_Instance'),
    path('instances/<id>/',D_CourseInstance.as_view(),name = 'D_Instance')
    
]
