from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User

# Create your views here.
def index(request):
    return render(request,"blogsite/index.html")

def login_view(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(username = username,password = password)
        if user is not None:
            login(request,user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request,"blogsite/login.html",{"message":"Invalid Credentials"})
    else:
        return render(request,"blogsite/login.html")

def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))

def signup_view(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        email = request.POST["email"]
        try:
            user = User.objects.create_user(username,email,password)
            user.save()
        except:
            return render(request,"blogsite/signup.html",{"message":"Username already taken"})
        login(request,user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request,"blogsite/signup.html")
        
