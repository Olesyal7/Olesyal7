from django.urls import path
from . import views


urlpatterns = [
    path('api/user/', views.UserListCreate.as_view()),
    path('api/place/', views.PlaceListCreate.as_view()),
    path('api/country/', views.CountryListCreate.as_view()),
    path('api/entertainment/', views.EntertainmentListCreate.as_view()),
    path('api/place/<int:pk>', views.SinglePlaceView.as_view()),
    path('api/country/<int:pk>', views.SingleCountryView.as_view()),
    path('api/entertainment/<int:pk>', views.SingleEntertainmentView.as_view()),
    path('api/user/<int:pk>', views.SingleUserView.as_view()),
]