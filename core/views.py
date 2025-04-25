from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'core/home.html', {
        'title': 'Ana Sayfa',
    })

def about(request):
    return render(request, 'core/about.html', {
        'title': 'Hakkımızda',
    })

def services(request):
    return render(request, 'core/services.html', {
        'title': 'Hizmetlerimiz',
    })

def portfolio(request):
    return render(request, 'core/portfolio.html', {
        'title': 'Portfolyo',
    })

def blog(request):
    return render(request, 'core/blog.html', {
        'title': 'Blog',
    })

def blog_detail(request, id):
    return render(request, 'core/blog_detail.html', {
        'title': 'Blog Detay',
        'id': id,
    })

def contact(request):
    return render(request, 'core/contact.html', {
        'title': 'İletişim',
    })
