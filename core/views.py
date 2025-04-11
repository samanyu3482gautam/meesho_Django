from django.shortcuts import render
from accounts.models import *
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
# Create your views here.


# @login_required(login_url='login')
def home(request):
    
    return render(request, 'index.html')  # assuming your main HTML file is index.html
