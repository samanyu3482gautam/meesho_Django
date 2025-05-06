# meesho_clone/urls.py
from django.contrib import admin
from django.urls import path
from core.views import home,homeAndKitchen,profile,bags,beauty,electronics,jwel,kids,cart,add_to_cart
from accounts.views import login_page, signUp_page  # Ensure you're importing the views here
from career.views import *
from accounts.views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('login/', login_page, name='login'),  # Login page URL
    path('signup/', signUp_page, name='signup'),  # Signup page URL
    path('career/',career_with_us,name="career"),
    path('logout/',logout_page,name="logout_page"),
    path('supplier/',become_supplier,name="supplier"),
    path('reviewResume/',review_resume,name="reviewResume"),
    path('resumeDecline/<int:_id>', decline_request, name="resumeDecline"),
    path('profile/',profile,name='profile'),
    path('kitchen/',homeAndKitchen,name="kitchen"),
    path('bags/',bags,name="bags"),
    path('beauty/',beauty,name="beauty"),
    path('electronics/',electronics,name="electronics"),
    path('jwel/',jwel,name='jwel'),
    path("kids/",kids,name="kids"),
    path("cart/",cart,name="cart"),
    path('add-to-cart/<int:product_id>/', add_to_cart, name='add_to_cart'),
 
]




if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


