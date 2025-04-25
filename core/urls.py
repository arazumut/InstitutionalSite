from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('hakkimizda/', views.about, name='about'),
    path('hizmetlerimiz/', views.services, name='services'),
    path('portfolyo/', views.portfolio, name='portfolio'),
    path('blog/', views.blog, name='blog'),
    path('blog/<int:id>/', views.blog_detail, name='blog_detail'),
    path('iletisim/', views.contact, name='contact'),
] 