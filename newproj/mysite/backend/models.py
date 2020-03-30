from django.db import models

"""
class Nation(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name
"""


class Entertainment(models.Model):
    name = models.CharField(max_length=200, help_text="Enter type of entertainment")
    id = models.AutoField(primary_key=True)
    def __str__(self):
        return self.name


class Country(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Place(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, help_text="Enter a place name")
    geoPosition = models.CharField(max_length=200, help_text="Enter a place geo position")
    climate = models.CharField(max_length=300, help_text="Enter a place climate")
    #nations = models.ManyToManyField(Nation, max_length=200)
    country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True)
    entertainment = models.ForeignKey(Entertainment, on_delete=models.SET_NULL, null=True)
    description = models.TextField()
    #image = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('places', args=[str(self.id)])

class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, help_text="Enter your name")
    login = models.CharField(max_length=200, help_text="Enter your login")
    password = models.CharField(max_length=200, help_text="Enter your password")
    userPlaces = models.ManyToManyField(Place, help_text="Choose places")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('user', args=[str(self.id)])




# Create your models here.
