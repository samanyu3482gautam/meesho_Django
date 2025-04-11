from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Account(models.Model):
    user=models.ForeignKey(User,on_delete=models.SET_NULL,null=True,blank=True)
    username=models.CharField(max_length=100)
    mobile=models.IntegerField()
    email=models.EmailField()
    address=models.TextField()
    pincode=models.IntegerField()
    
    
