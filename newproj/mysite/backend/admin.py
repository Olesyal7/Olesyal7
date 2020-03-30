from django.contrib import admin
from .models import Place, Country, User, Entertainment


#admin.site.register(Place)
admin.site.register(Country)
#admin.site.register(Nation)
#admin.site.register(User)
admin.site.register(Entertainment)
# Register your models here.

#admin.site.register(Place, PlaceAdmin)
#admin.site.register(User, UserAdmin)

@admin.register(Place)
class PlaceAdmin(admin.ModelAdmin):
    list_display = ('name', 'country')

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('name', 'login')
    list_filter = ('login', 'name')