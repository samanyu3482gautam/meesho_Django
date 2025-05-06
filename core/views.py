from django.shortcuts import render,HttpResponse,redirect
from accounts.models import *
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from accounts.models import Account

from .models import Product, Cart, CartItem

def home(request):
    

    return render(request, 'index.html')

def homeAndKitchen(request):
    return render(request,'main.html')

def bags(request):
    return render(request,'bags.html')

def beauty(request):
    return render(request,'beauty.html')

def electronics(request):
    return render(request,'electronics.html')

def jwel(request):
    products = Product.objects.all()# Assuming you have a category field
    return render(request, 'jewellery.html', {'products': products})

def kids(request):
    return render(request,'kids.html')


@login_required
def cart(request):
    cart, created = Cart.objects.get_or_create(user=request.user)
    
    return render(request, 'cart.html', {
        'cart': cart,
        'total_amount': cart.total_mrp(),
        'total_discount': cart.total_discount(),
        'final_amount': cart.final_amount(),
        'total':cart.final_amount()+cart.total_discount(),
    })



# Function to handle adding a product to the cart
@login_required
def add_to_cart(request, product_id):
    product = Product.objects.get(id=product_id)
    cart, created = Cart.objects.get_or_create(user=request.user)
    
    # If the product is already in the cart, just increase the quantity
    cart_item, created = CartItem.objects.get_or_create(cart=cart, product=product)
    
    if not created:
        cart_item.quantity += 1
        cart_item.save()

    return redirect('cart')  # Redirect to the cart page after adding



def profile(request):
    user=request.user
    try:
        account=Account.objects.get(user=user)
    except:
        account=None


    return render(request,'profile.html',{'user':user,'account':account})




