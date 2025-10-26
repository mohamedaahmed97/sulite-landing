

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
            // Remove active from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Add active to clicked tab
            button.classList.add('active');

            // Hide all content sections
            const allSubsections = document.querySelectorAll('.services-subsection');
            const allGrids = document.querySelectorAll('.services-grid');

            allSubsections.forEach(subsection => {
                subsection.classList.remove('active-content');
            });

            allGrids.forEach(grid => {
                grid.classList.remove('active-content');
            });

            // Show appropriate content based on tab
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


// Country Code Dropdown Functionality
document.addEventListener('DOMContentLoaded', function () {
    const countryCodeBtn = document.querySelector('.country-code');

    if (countryCodeBtn) {
        // Create dropdown menu
        const dropdown = document.createElement('div');
        dropdown.className = 'country-dropdown';
        dropdown.style.cssText = `
            position: absolute;
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            max-height: 200px;
            overflow-y: auto;
            display: none;
            z-index: 1000;
            margin-top: 4px;
        `;

        // Add country options
        const countries = [
            { flag: '🇦🇪', code: '971', name: 'UAE' },
            { flag: '🇸🇦', code: '966', name: 'Saudi Arabia' },
            { flag: '🇰🇼', code: '965', name: 'Kuwait' },
            { flag: '🇧🇭', code: '973', name: 'Bahrain' },
            { flag: '🇴🇲', code: '968', name: 'Oman' },
            { flag: '🇶🇦', code: '974', name: 'Qatar' },
            { flag: '🇪🇬', code: '20', name: 'Egypt' },
            { flag: '🇯🇴', code: '962', name: 'Jordan' },
        ];

        countries.forEach(country => {
            const option = document.createElement('div');
            option.className = 'country-option';
            option.style.cssText = `
                padding: 10px 15px;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 10px;
                transition: background-color 0.2s;
            `;
            option.innerHTML = `
                <span style="font-size: 20px;">${country.flag}</span>
                <span>+${country.code}</span>
                <span style="color: #6b7280; flex: 1; text-align: right;">${country.name}</span>
            `;

            option.addEventListener('mouseenter', () => {
                option.style.backgroundColor = '#f9fafb';
            });
            option.addEventListener('mouseleave', () => {
                option.style.backgroundColor = 'transparent';
            });

            option.addEventListener('click', () => {
                countryCodeBtn.innerHTML = `
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjE4IiBmaWxsPSIjRkZGRkZGIi8+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSI2IiBmaWxsPSIjRkYwMDAwIi8+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSI2IiBmaWxsPSIjMDAwMDAwIi8+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSI2IiBmaWxsPSIjMDA4MDAwIi8+Cjwvc3ZnPgo="
                        alt="UAE Flag" width="20" height="15">
                    <span>${country.code}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 10l5 5 5-5z" />
                    </svg>
                `;
                dropdown.style.display = 'none';
            });

            dropdown.appendChild(option);
        });

        countryCodeBtn.parentElement.appendChild(dropdown);

        // Toggle dropdown on click
        countryCodeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = dropdown.style.display === 'block';
            dropdown.style.display = isOpen ? 'none' : 'block';
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!countryCodeBtn.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });
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

    if (window.innerWidth <= 768) {
        const navContent = document.querySelector('.nav-content');
        const navLinks = document.querySelector('.nav-links');

        if (navContent && navLinks) {

            const mobileMenuButton = document.createElement('button');
            mobileMenuButton.innerHTML = '☰';
            mobileMenuButton.className = 'mobile-menu-button';
            mobileMenuButton.style.cssText = `
                display: none;
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #111;
            `;

            navContent.appendChild(mobileMenuButton);


            mobileMenuButton.addEventListener('click', () => {
                navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
            });


            navLinks.style.display = 'none';
            navLinks.style.flexDirection = 'column';
            navLinks.style.gap = '16px';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'white';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';


            if (window.innerWidth <= 768) {
                mobileMenuButton.style.display = 'block';
            }
        }
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

