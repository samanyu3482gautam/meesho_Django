from django.shortcuts import render,HttpResponse
from accounts.models import *
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from accounts.models import Account



def home(request):
    

    return render(request, 'index.html')




def profile(request):
    user=request.user
    try:
        account=Account.objects.get(user=user)
    except:
        account=None


    return render(request,'profile.html',{'user':user,'account':account})




