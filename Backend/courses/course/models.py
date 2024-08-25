from django.db import models

class Course(models.Model):
    course_title = models.CharField(max_length=100)
    course_code = models.IntegerField()
    course_description = models.TextField()

    def __str__(self):
        return self.course_title

class Course_Instance(models.Model):
    course_instance = models.ForeignKey(Course,on_delete=models.CASCADE)
    instance_year = models.IntegerField()
    instance_sem = models.IntegerField()

    def __str__(self):
        return self.course_instance.course_title

  



