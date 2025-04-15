from django.shortcuts import render,redirect
from .models import *
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404
from django.contrib import messages
# Create your views here.

@login_required(login_url='/login/')
def career_with_us(request):
    
    roles=[
        {'role':"Software Engineer",'location':"Bangalore",'Required':"2+ years experience in software development"},
        {'role':"Product manager",'location':"Remote",'Required':"Experience in product lifestyle management"},
        {'role':"Backend Developer",'location':"Delhi",'Required':"4+ years experience in Django"},
        {'role':"UI/UX engineer(4+)",'location':"Bangalore",'Required':"4+ years experience in UI/UX design"},
        # {'role':"UI/UX engineer(1+)",'location':"Work From Home",'Required':"1+ years experience in UI/UX design"},
        # {'role':"Sales",'location':"Bangalore",'Required':"8+ years experience in Marketing"},
        
    ]
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        position = request.POST.get('position')
        resume = request.FILES.get('resume')
        Position.objects.create(first_name=name,email=email,position=position,resume_image=resume)
        messages.info(request,'Data Updated In Our Servers')
        return redirect('career')
    return render(request,'test.html', {'roles': roles})


@login_required(login_url='/login/')
def become_supplier(request):
    if request.method=="POST":
        messages.info(request,"Your Supplier Account Has Been Created We Will Contact You Shortly")

    return render(request,'supplier.html')



def review_resume(request):
    resumes=Position.objects.all()


    return render(request,'resumeReview.html',{'resumes':resumes})

def decline_request(request, _id):

    if request.method == "POST":
        resume = get_object_or_404(Position, id=_id)
        if resume:
            #resume.resume_image.delete()
            resume.delete()

    return redirect('reviewResume')