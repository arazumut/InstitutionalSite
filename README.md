# Kurumsal Site Projesi

Bu proje, Django web framework kullanılarak geliştirilmiş modern ve responsive bir kurumsal web sitesidir.

## Özellikler

- Tamamen responsive tasarım
- Modern ve şık arayüz
- Animasyonlar ve geçişler
- SEO dostu yapı
- İletişim formu
- Blog sistemi
- Portfolyo vitrini
- Yönetim paneli
- Hizmetler sayfası
- Ekip üyeleri

## Kurulum

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1. Repoyu klonlayın:
```bash
git clone https://github.com/kullaniciadi/kurumsal_site.git
cd kurumsal_site
```

2. Sanal ortam oluşturun ve aktif edin:
```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

3. Gerekli paketleri yükleyin:
```bash
pip install -r requirements.txt
```

4. Veritabanı migrasyonlarını uygulayın:
```bash
python manage.py migrate
```

5. Bir admin kullanıcısı oluşturun:
```bash
python manage.py createsuperuser
```

6. Geliştirme sunucusunu başlatın:
```bash
python manage.py runserver
```

7. Tarayıcınızda `http://127.0.0.1:8000/` adresine giderek siteyi görüntüleyebilirsiniz.

## Admin Paneline Erişim

Admin paneline erişmek için `http://127.0.0.1:8000/admin/` adresini kullanabilirsiniz.

## Kullanılan Teknolojiler

- Django 4.2.9
- Python 3.x
- Bootstrap 5
- HTML5 / CSS3
- JavaScript / jQuery
- AOS (Animate On Scroll)
- Font Awesome
- SQLite (Geliştirme)

## İçerik Yönetimi

Sitenizin içeriğini yönetim paneli üzerinden kolayca güncelleyebilirsiniz:

1. Hizmetler eklemek/düzenlemek
2. Portfolyo projelerini yönetmek
3. Blog yazıları oluşturmak
4. Ekip üyelerini eklemek/düzenlemek
5. İletişim mesajlarını görüntülemek

## Canlı Ortama Yükleme

Projeyi canlı ortama yüklemek için:

1. `settings.py` dosyasında `DEBUG = False` olarak ayarlayın
2. `ALLOWED_HOSTS` listesini domain adresinizle güncelleyin
3. Statik dosyaları toplayın: `python manage.py collectstatic`
4. PostgreSQL veya MySQL gibi daha güçlü bir veritabanına geçiş yapın
5. WSGI/ASGI uyumlu bir web sunucusu (Gunicorn, uWSGI, vb.) kullanın
6. Nginx veya Apache ile proxy kullanımı tavsiye edilir

## Katkıda Bulunma

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik: Amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

