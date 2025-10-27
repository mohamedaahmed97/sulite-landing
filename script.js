

document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            console.log('Clicked FAQ index:', index);
            console.log('Total FAQs:', faqItems.length);


            const isCurrentlyActive = item.classList.contains('active');


            console.log('Closing all FAQ items');
            faqItems.forEach((faqItem, i) => {
                if (faqItem.classList.contains('active')) {
                    console.log(`Removing active from item ${i}`);
                    faqItem.classList.remove('active');
                }
            });


            if (!isCurrentlyActive) {
                console.log(`Opening FAQ ${index}`);
                item.classList.add('active');
            } else {
                console.log(`FAQ ${index} was already active, closing it`);
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {

            tabButtons.forEach(btn => btn.classList.remove('active'));


            button.classList.add('active');


            const allSubsections = document.querySelectorAll('.services-subsection');
            const allGrids = document.querySelectorAll('.services-grid');

            allSubsections.forEach(subsection => {
                subsection.classList.remove('active-content');
            });

            allGrids.forEach(grid => {
                grid.classList.remove('active-content');
            });


            const tabText = button.textContent.trim();

            if (tabText === 'Business Owners') {
                const ownerSubsection = document.querySelector('.owners-subsection');
                const ownerGrid = document.querySelector('.owners-grid');
                if (ownerSubsection) ownerSubsection.classList.add('active-content');
                if (ownerGrid) ownerGrid.classList.add('active-content');
            } else if (tabText === 'Drivers') {
                const driversSubsection = document.querySelector('.drivers-content');
                const driversGrid = document.querySelector('.drivers-grid');
                if (driversSubsection) driversSubsection.classList.add('active-content');
                if (driversGrid) driversGrid.classList.add('active-content');
            } else if (tabText === 'Fleet & Logistics Companies') {
                const fleetSubsection = document.querySelector('.fleet-content');
                const fleetGrid = document.querySelector('.fleet-grid');
                if (fleetSubsection) fleetSubsection.classList.add('active-content');
                if (fleetGrid) fleetGrid.classList.add('active-content');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.querySelector('#phone');

    if (phoneInput) {

        const iti = window.intlTelInput(phoneInput, {
            initialCountry: 'ae',
            preferredCountries: ['ae', 'sa', 'kw', 'bh', 'om', 'qa', 'eg', 'jo'],
            separateDialCode: true,
            utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.0/build/js/utils.js'
        });


        window.phoneInputInstance = iti;


        const form = phoneInput.closest('form');
        if (form) {
            form.addEventListener('submit', function (e) {
                const valid = iti.isValidNumber();
                if (!valid) {
                    e.preventDefault();
                    alert('Please enter a valid phone number.');
                    phoneInput.focus();
                }
            });
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('.contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();


            const formData = new FormData(this);
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const message = this.querySelector('#message').value;


            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }


            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }


            const submitButton = this.querySelector('.submit-button');
            const originalText = submitButton.textContent;

            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;


            setTimeout(() => {
                alert('Thank you for your message! We\'ll get back to you soon.');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const languageSwitcher = document.querySelector('.language-switcher');

    if (languageSwitcher) {
        languageSwitcher.addEventListener('click', function () {

            const currentLang = this.querySelector('span').textContent;
            const newLang = currentLang.includes('EN') ? 'عربي' : 'Language EN';

            this.querySelector('span').textContent = newLang;



            console.log('Language switched to:', newLang);
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);


    const animatedElements = document.querySelectorAll('.feature-card, .service-card, .pricing-card, .faq-item');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function () {
            mobileMenuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });


        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });


        document.addEventListener('click', function (event) {
            if (!navLinks.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const appBadges = document.querySelectorAll('.app-badge');

    appBadges.forEach(badge => {
        badge.addEventListener('click', function (e) {
            e.preventDefault();

            const altText = this.querySelector('img').alt;
            console.log('App download clicked:', altText);



            alert(`Redirecting to ${altText}...`);
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const ctaButtons = document.querySelectorAll('.cta-button, .pricing-button, .survey-button');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = this.textContent.trim();
            console.log('CTA clicked:', buttonText);



        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const phoneMockups = document.querySelectorAll('.phone-mockup');

    phoneMockups.forEach(phone => {
        phone.addEventListener('mouseenter', function () {
            this.style.transform = this.style.transform.replace(/rotate\([^)]*\)/, 'rotate(0deg)');
            this.style.transition = 'transform 0.3s ease';
        });

        phone.addEventListener('mouseleave', function () {

            if (this.classList.contains('phone-1')) {
                this.style.transform = 'rotate(-15deg) translateX(-20px)';
            } else if (this.classList.contains('phone-2')) {
                this.style.transform = 'rotate(5deg) translateX(20px)';
            } else if (this.classList.contains('about-phone-1')) {
                this.style.transform = 'rotate(-10deg) translateX(-30px)';
            } else if (this.classList.contains('about-phone-2')) {
                this.style.transform = 'rotate(8deg) translateX(30px)';
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('input, textarea');

    inputs.forEach(input => {

        input.addEventListener('focus', function () {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.2s ease';
        });

        input.addEventListener('blur', function () {
            this.parentElement.style.transform = 'scale(1)';
        });


        if (input.type !== 'submit' && input.type !== 'button') {
            input.addEventListener('input', function () {
                if (this.value) {
                    this.style.paddingTop = '20px';
                    this.style.paddingBottom = '12px';
                } else {
                    this.style.paddingTop = '16px';
                    this.style.paddingBottom = '16px';
                }
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});


window.addEventListener('error', function (e) {
    console.error('JavaScript error:', e.error);

});



document.addEventListener('DOMContentLoaded', function () {
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroVisualSlides = document.querySelectorAll('.hero-slide-visual');
    const dots = document.querySelectorAll('.dot');
    const heroSection = document.querySelector('.hero');

    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 50000;


    function showSlide(slideIndex) {

        heroSlides.forEach(slide => slide.classList.remove('active'));
        heroVisualSlides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));


        if (heroSlides[slideIndex]) {
            heroSlides[slideIndex].classList.add('active');
        }
        if (heroVisualSlides[slideIndex]) {
            heroVisualSlides[slideIndex].classList.add('active');
        }
        if (dots[slideIndex]) {
            dots[slideIndex].classList.add('active');
        }

        currentSlide = slideIndex;
    }


    function nextSlide() {
        const nextIndex = (currentSlide + 1) % heroSlides.length;
        showSlide(nextIndex);
    }


    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, slideDuration);
    }


    function stopAutoSlide() {
        clearInterval(slideInterval);
    }


    function initSlider() {

        showSlide(0);


        startAutoSlide();


        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                stopAutoSlide();

                setTimeout(startAutoSlide, 2000);
            });
        });


        heroSection.addEventListener('mouseenter', stopAutoSlide);
        heroSection.addEventListener('mouseleave', startAutoSlide);


        const ctaButtons = document.querySelectorAll('.cta-button');
        const appBadges = document.querySelectorAll('.app-badge');

        [...ctaButtons, ...appBadges].forEach(element => {
            element.addEventListener('mouseenter', stopAutoSlide);
            element.addEventListener('mouseleave', () => {
                setTimeout(startAutoSlide, 1000);
            });
        });
    }


    initSlider();


    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            stopAutoSlide();
        } else {
            startAutoSlide();
        }
    });
});

console.log(`
🚀 Weideliver Landing Pages Loaded Successfully!

Features:
✅ FAQ Accordion
✅ Smooth Scrolling
✅ Form Validation
✅ Mobile Responsive
✅ Interactive Elements
✅ Performance Optimized
✅ Hero Slider (Auto + Manual)

Built with ❤️ for Weideliver
`);

