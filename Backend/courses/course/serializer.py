from rest_framework import serializers
from rest_framework.views import APIView
from .models import Course,Course_Instance

class CourseSerializer(serializers.ModelSerializer):

    class Meta:
        model  = Course
        fields = '__all__'

    def validate(self,data):
        if data['course_code'] < 0:
            raise serializers.ValidationError({'error' : "id should be greater than 0"})

        return data
class InstanceSerializer(serializers.ModelSerializer):
    course_title = serializers.CharField(source='course_instance.course_title',read_only=True)
    course_desc = serializers.CharField(source='course_instance.course_description',read_only=True)
    course_code = serializers.CharField(source='course_instance.course_code',read_only=True)


    class Meta:
        model  = Course_Instance

    
        fields = ['id','instance_year','instance_sem','course_instance','course_title','course_desc','course_code']

        