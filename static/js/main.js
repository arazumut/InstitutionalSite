document.addEventListener('DOMContentLoaded', function() {
    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 100) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });
        
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Navbar scroll
    const header = document.querySelector('.navbar');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 50) {
                header.classList.add('shadow-sm');
            } else {
                header.classList.remove('shadow-sm');
            }
        });
    }
    
    // Smooth scroll for the navigation menu and links with .scrollto classes
    const scrollToLinks = document.querySelectorAll('.scrollto, .navbar .nav-link');
    
    scrollToLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hash) {
                e.preventDefault();
                
                const hash = this.hash;
                const targetElement = document.querySelector(hash);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Mobile Navigation
    const mobileNavButton = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (mobileNavButton && navbarCollapse) {
        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
            link.addEventListener('click', function() {
                if (navbarCollapse.classList.contains('show')) {
                    mobileNavButton.click();
                }
            });
        });
    }
    
    // Animation on scroll
    window.addEventListener('load', function() {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    });
    
    // Counter animation
    const counterSection = document.querySelector('.counter-section');
    const counters = document.querySelectorAll('.counter');
    
    if (counterSection && counters.length > 0) {
        let counted = false;
        
        function startCounting() {
            if (counted) return;
            
            counters.forEach(counter => {
                const target = parseInt(counter.textContent);
                let count = 0;
                const duration = 2000; // 2 seconds
                const increment = Math.ceil(target / (duration / 20)); // Update every 20ms
                
                const timer = setInterval(() => {
                    count += increment;
                    if (count >= target) {
                        counter.textContent = target;
                        clearInterval(timer);
                    } else {
                        counter.textContent = count;
                    }
                }, 20);
            });
            
            counted = true;
        }
        
        // Check if counter section is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );
        }
        
        // Start counting when counter section comes into view
        window.addEventListener('scroll', function() {
            if (isInViewport(counterSection)) {
                startCounting();
            }
        });
        
        // Check on load as well
        if (isInViewport(counterSection)) {
            startCounting();
        }
    }
    
    // Portfolio filtering
    if (document.querySelector('.portfolio-filters')) {
        const portfolioFilters = document.querySelectorAll('.portfolio-filters li');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        portfolioFilters.forEach(filter => {
            filter.addEventListener('click', function(e) {
                e.preventDefault();
                
                portfolioFilters.forEach(f => f.classList.remove('active'));
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Testimonial carousel
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    if (testimonialItems.length > 3) {
        // If we have more than 3 testimonials, we could initialize a carousel here
        // This is just a placeholder for future implementation
    }
    
    // Service cards hover effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('shadow');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('shadow');
        });
    });
    
    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            let isValid = true;
            
            // Get form elements
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            // Clear previous error messages
            document.querySelectorAll('.is-invalid').forEach(el => {
                el.classList.remove('is-invalid');
            });
            
            // Validate name
            if (name.value.trim() === '') {
                name.classList.add('is-invalid');
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                email.classList.add('is-invalid');
                isValid = false;
            }
            
            // Validate subject
            if (subject.value.trim() === '') {
                subject.classList.add('is-invalid');
                isValid = false;
            }
            
            // Validate message
            if (message.value.trim() === '') {
                message.classList.add('is-invalid');
                isValid = false;
            }
            
            // Prevent submission if not valid
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
}); 