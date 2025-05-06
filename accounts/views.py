



from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from .models import Account
from django.contrib import messages
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required


def login_page(request):
    # Handle the 'next' GET parameter if provided (redirect after login)
    if request.GET.get('next'):
        messages.info(request, 'Please login to continue')

    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Prepare the context to pass back the username if there are errors
        context = {'username': username}

        # Check if the username exists
        if not User.objects.filter(username=username).exists():
            messages.info(request, 'Invalid Username!')
            return render(request, 'signin.html', context)

        # Authenticate the user
        user = authenticate(username=username, password=password)
        if user is None:
            messages.info(request, 'Invalid Password!')
            return render(request, 'signin.html', context)

        # Successful login
        login(request, user)
        return redirect('home')

    # If the request is GET, no username is passed as context
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
        
        
        context = {
            'username': username,
            'email': email,
            'address': address,
            'pincode': pincode,
            'mobile': mobile,
        }
        if(len(str(pincode))!=6):
            messages.info(request, 'Pincode must have 6 digits.')
            context['pincode']=""
            return render(request, 'signup.html', context)

        if c_password != password:
            messages.info(request, 'Passwords do not match.')
            return render(request, 'signup.html', context)

        if User.objects.filter(username=username).exists():
            messages.info(request, 'Username already exists!')
            return render(request, 'signup.html', context)

        user = User.objects.create(username=username, email=email)
        user.set_password(password)
        user.save()

        Account.objects.create(
            user=user,
            mobile=mobile,
            address=address,
            pincode=pincode,
        )

        messages.success(request, "Account created successfully! Please login.")
        return redirect('login')

    return render(request, 'signup.html')

