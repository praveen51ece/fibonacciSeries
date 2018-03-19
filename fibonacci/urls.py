from django.conf.urls import url
from fibonacci import views

urlpatterns = [
    url(r'^$',views.fibonacci, name='fibonacci'),
]
