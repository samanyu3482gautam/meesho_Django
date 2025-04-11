from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Position(models.Model):
    user=models.ForeignKey(User,on_delete=models.SET_NULL,null=True,blank=True)
    first_name=models.CharField(max_length=100)
    email=models.TextField()
    position=models.TextField()
    resume_image=models.ImageField(upload_to="resumes/")


class Supply(models.Model):
    full_name=models.CharField(max_length=100)
    Business_name=models.CharField(max_length=100)
    email=models.TextField()
    mobile=models.IntegerField()
    category=models.TextField()
    description=models.TextField()



    

    



