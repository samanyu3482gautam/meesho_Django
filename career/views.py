from django.shortcuts import render,redirect
from .models import *
from django.contrib.auth.decorators import login_required
# Create your views here.

@login_required(login_url='/login/')
def career_with_us(request):
    
    roles=[
        {'role':"Software Engineer",'location':"Bangalore",'Required':"2+ years experience in software development"},
        {'role':"Product manager",'location':"Remote",'Required':"Experience in product lifestyle management"},
        {'role':"Backend Developer",'location':"Delhi",'Required':"4+ years experience in Django"},
        {'role':"UI/UX engineer",'location':"Bangalore",'Required':"1+ years experience in UI/UX design"},
    ]
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        position = request.POST.get('position')
        resume = request.FILES.get('resume')
        Position.objects.create(first_name=name,email=email,position=position,resume_image=resume)
        return redirect('career')
    return render(request,'test.html', {'roles': roles})


@login_required(login_url='/login/')
def become_supplier(request):
    return render(request,'supplier.html')



def review_resume(request):
    resumes=Position.objects.all()


    return render(request,'resumeReview.html',{'resumes':resumes})

def decline_request(request, _id):

    if request.methods == "DELETE":
        ele = Position.objects.get(id=_id)
        ele.delete()

    return redirect('reviewResume')