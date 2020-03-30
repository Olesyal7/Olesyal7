from django.shortcuts import render
from .models import Place, Entertainment, Country, User
from .serializers import PlaceSerializer, UserSerializer, CountrySerializer, EntertainmentSerializer
from rest_framework import generics


class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PlaceListCreate(generics.ListCreateAPIView):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer

class CountryListCreate(generics.ListCreateAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

class EntertainmentListCreate(generics.ListCreateAPIView):
    queryset = Entertainment.objects.all()
    serializer_class = EntertainmentSerializer

class SinglePlaceView(generics.RetrieveAPIView):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer

class SingleCountryView(generics.RetrieveAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

class SingleEntertainmentView(generics.RetrieveAPIView):
    queryset = Entertainment.objects.all()
    serializer_class = EntertainmentSerializer

class SingleUserView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer



# Create your views here.
