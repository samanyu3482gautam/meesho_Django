



from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from .models import Account
from django.contrib import messages
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required



def login_page(request):
    if request.GET.get('next'):
        messages.info(request, 'Please login to continue')
    if request.method=="POST":

        username = request.POST.get('username')
        password = request.POST.get('password')
        if not User.objects.filter(username=username).exists():
            messages.info(request,'Invalid Username!')
            return redirect('login')
        user=authenticate(username=username,password=password)
        if user is None:
            messages.info(request,'Invalid Password!')
            return redirect('login')
        
        else:
            login(request,user) #type of session in django
            return redirect('home')





    return render(request, 'signin.html')

def logout_page(request):
    logout(request)
    return redirect('login')
def signUp_page(request):
    if request.method == "POST":
        
        username = request.POST.get('username')
        email = request.POST.get('email')
        address = request.POST.get('address')
        pincode = request.POST.get('pin_code')
        mobile = request.POST.get('phone_number')
        password = request.POST.get('password')
        c_password = request.POST.get('confirm_password')

        if(c_password!=password):
            messages.info(request,'Password do not match.')
            return redirect('signup')
            
        
        user=User.objects.filter(username=username)

        if user.exists():
            messages.info(request,'Username already exists!')
            return redirect('signup')
        user = User.objects.create(
            username=username,
            email=email,
        )
        user.set_password(password)
        user.save()  
      

        account = Account.objects.create(
            user=user,  
            mobile=mobile,
            address=address,
            pincode=pincode,
        )
        account.save()
        messages.success(request, "Account created successfully! Please login.")
        return redirect('login') 

    return render(request, 'signup.html')
