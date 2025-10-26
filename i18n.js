// Translation System using data-i18n attributes
const i18n = {
    currentLang: 'en',

    texts: {
        en: {
            // Navigation
            'topbar-slogan': 'We Provide Best Services For You',
            'nav-lang': 'Language EN',
            'nav-about': 'About',
            'nav-services': 'Services',
            'nav-pricing': 'Pricing',
            'nav-contact': 'Contact',

            // Hero - Store
            'hero-store-title': 'Weideliver Store Solutions',
            'hero-store-desc': "Never miss a sale. Deliver More. Pay Less. Grow Faster, Don't Let Delivery Costs Eat Your Profits.",
            'hero-store-cta': 'Join us Now and start saving!',
            'hero-store-app': 'Download Weideliver Store app',

            // Hero - Driver
            'hero-driver-title': 'For Drivers: Build Your Career on Your Terms',
            'hero-driver-desc': 'Join a platform that values your work and gives you the flexibility to earn the way you want.',
            'hero-driver-cta': 'Start Driving Today!',
            'hero-driver-app': 'Download Weideliver Driver app',

            // About
            'about-label': 'Why Choose Weideliver?',
            'about-title': 'The Regional Advantage',
            'about-desc': 'We are more than a software provider; we are your local partner in growth. Our solution is built in the region, for the region.',
            'about-feature1-title': 'Market-Fit Focus',
            'about-feature1-desc': 'Our features, from flexible subscription plans to our driver network model, are directly designed to address the specific needs of the UAE and GCC business landscape.',
            'about-feature2-title': 'Cultural Understanding',
            'about-feature2-desc': 'We understand the nuances of local commerce, customer service expectations, and the spirit of entrepreneurship that drives this market.',
            'about-feature3-title': 'A Partnership for Growth',
            'about-feature3-desc': 'When you choose Weideliver, you are not just getting a tool. You are gaining a partner invested in your success, backed by the technological prowess of Innovent.',
            'survey-title': 'Customer Satisfaction Survey',
            'survey-desc': "Let us know how we're doing — your feedback drives our improvements.",
            'survey-button': 'Start Survey',

            // About Section 2
            'about-section-label': 'About Weideliver',
            'about-section-title': 'Powering Commerce, One Delivery at a Time',
            'about-section-subtitle': 'Driven by Technology, Defined by Partnership.',
            'about-section-desc': 'We believe that every business deserves access to reliable, cost-effective delivery solutions. Our platform bridges the gap between traditional commerce and modern logistics, empowering businesses to focus on what they do best while we handle the rest.',
            'download-store-app': 'Download Weideliver Store app',
            'download-driver-app': 'Download Weideliver Driver app',

            // Services
            'services-label': 'Our Services',
            'services-title': 'Tailored Logistics Solutions for Everyone',
            'services-desc': "At Weideliver, we don't believe in one-size-fits-all. We provide specialized platforms that empower each key player in the delivery ecosystem—businesses, drivers, and fleet partners—to operate more efficiently and profitably.",
            'tab-business': 'Business Owners',
            'tab-drivers': 'Drivers',
            'tab-fleet': 'Fleet & Logistics Companies',
            'services-subheading': 'Launch & Scale Your Delivery',
            'services-subdesc': 'Offer reliable, last-mile delivery without the overhead of managing a full-time team. Choose the model that fits your stage of growth.',

            // Service Cards - Basic
            'basic-title': 'Weideliver Basic',
            'basic-subtitle': 'The Profit Maximizer',
            'basic-ideal': 'The established businesses with an existing, efficient delivery team.',
            'basic-what-you-get': 'What you get',
            'basic-what-desc': 'Advanced technology to optimize your current fleet and generate revenue from idle capacity.',
            'basic-features': 'Key Features',
            'basic-feature1': 'Powerful dispatch and route optimization tools',
            'basic-feature2': 'Fleet Monetization Dashboard: Lend your idle drivers to other businesses on our network',
            'basic-feature3': 'Performance analytics for your team',
            'basic-outcome': 'The Outcome',
            'basic-outcome-desc': 'Turn your delivery operation from a cost center into a profit center, earning an average of AED 3,225+/month at 600 orders.',

            // Service Cards - On-Demand
            'ondemand-title': 'Weideliver On-Demand',
            'ondemand-subtitle': 'The Flexible Starter Plan',
            'ondemand-ideal': 'New businesses, seasonal stores, or those wanting to test delivery with zero risk.',
            'ondemand-what-you-get': 'What you get',
            'ondemand-what-desc': 'Access to our driver network on a pay-as-you-go basis',
            'ondemand-features': 'Key Features',
            'ondemand-feature1': 'No subscription fee or long-term contract',
            'ondemand-feature2': 'Instant scaling during busy periods',
            'ondemand-feature3': 'Same reliable driver network as the Pro Plan',
            'ondemand-outcome': 'The Outcome',
            'ondemand-outcome-desc': 'Prove the value of delivery for your business without any upfront commitment, and scale seamlessly when you\'re ready.',

            // Service Cards - Pro
            'pro-title': 'Weideliver Pro Plan',
            'pro-subtitle': 'The Full-Service Solution',
            'pro-ideal': 'Restaurants, Pharmacies, Supermarkets, and Retailers who want a complete, hands-off delivery service.',
            'pro-what-you-get': 'What you get',
            'pro-what-desc': 'A dedicated, reliable driver network managed by us.',
            'pro-features': 'Key Features',
            'pro-feature1': 'No driver recruitment or management',
            'pro-feature2': 'Guaranteed service levels',
            'pro-feature3': 'Real-time order tracking for you and your customers',
            'pro-feature4': 'Simple, predictable pricing',
            'pro-outcome': 'The Outcome',
            'pro-outcome-desc': 'Focus 100% on your core business while we handle your entire delivery operation, helping you increase sales and customer satisfaction.',

            // Pricing
            'pricing-label': 'Pricing',
            'pricing-title': 'Transparent Pricing Built for Growth',
            'pricing-desc': 'No hidden fees. No surprises. Choose the plan that aligns with your business goals and start delivering with confidence.',

            // FAQ
            'faq-label': 'FAQ',
            'faq-title': 'Your Questions, Answered',
            'faq-desc': 'Explore our most asked questions and learn how we can help you succeed.',
            'faq-q1': "We can't afford to hire drivers?",
            'faq-a1': "You don't have to! Our Pro Plan gives you a full delivery service for a fraction of the cost of one full-time driver. Let us show you how delivery can pay for itself",
            'faq-q2': "We're too small for delivery?",
            'faq-a2': "That's exactly why we created the On-Demand Plan. Start with just one order a day. There's no commitment, so you can grow at your own pace",
            'faq-q3': 'We already use a delivery aggregator?',
            'faq-a3': "Great! Now, use our platform to handle the actual delivery for those orders. You'll save money, get more reliable service, and keep your customers happier",
            'faq-q4': 'We want to think about it ?',
            'faq-a4': "I understand. Let me lock in your FIRST MONTH FREE offer today. You can test the entire system with our On-Demand Plan and see the results for yourself, risk-free",

            // Contact
            'contact-label': 'Contact Us',
            'contact-title': 'Connect With Our Team',
            'contact-desc': "Have a question or idea? We'd love to hear from you.",
            'contact-name': 'Name',
            'contact-email': 'E-mail',
            'contact-phone': 'Phone Number',
            'contact-message': 'Message',
            'contact-name-placeholder': 'Enter Your Name',
            'contact-email-placeholder': 'mmm@info.com',
            'contact-phone-placeholder': 'Enter your phone number',
            'contact-message-placeholder': 'Enter Your Message',
            'contact-send': 'Send',

            // Footer
            'footer-about': 'About',
            'footer-services': 'Services',
            'footer-pricing': 'Pricing',
            'footer-contact': 'Contact',
            'footer-stay-in-touch': 'Stay in touch with us',
            'footer-download-store': 'Download Weideliver Store app',
            'footer-download-driver': 'Download Weideliver Driver app',
            'footer-rights': 'All Rights Reserved © Suliit 2025'
        },

        ar: {
            // Navigation
            'topbar-slogan': 'نحن نقدم أفضل الخدمات لك',
            'nav-lang': 'العربية',
            'nav-about': 'من نحن',
            'nav-services': 'الخدمات',
            'nav-pricing': 'الأسعار',
            'nav-contact': 'اتصل بنا',

            // Hero - Store
            'hero-store-title': 'حلول متجر Weideliver',
            'hero-store-desc': 'لا تفوت أي مبيعات. سلم أكثر. ادفع أقل. نم أسرع، لا تدع تكاليف التسليم تلتهم أرباحك.',
            'hero-store-cta': 'انضم إلينا الآن وابدأ التوفير!',
            'hero-store-app': 'تحميل تطبيق متجر Weideliver',

            // Hero - Driver
            'hero-driver-title': 'للسائقين: بناء مسيرتك المهنية على شروطك',
            'hero-driver-desc': 'انضم إلى منصة تقدر عملك وتمنحك المرونة لكسب المال بالطريقة التي تريدها.',
            'hero-driver-cta': 'ابدأ القيادة اليوم!',
            'hero-driver-app': 'تحميل تطبيق سائق Weideliver',

            // About
            'about-label': 'لماذا تختار Weideliver؟',
            'about-title': 'الميزة الإقليمية',
            'about-desc': 'نحن أكثر من مجرد مزود برمجيات؛ نحن شريكك المحلي في النمو. تم بناء حلنا في المنطقة، للمنطقة.',
            'about-feature1-title': 'التركيز على ملاءمة السوق',
            'about-feature1-desc': 'ميزاتنا، من خطط الاشتراك المرنة إلى نموذج شبكة السائقين، مصممة مباشرة لتلبية الاحتياجات المحددة لبيئة الأعمال في الإمارات ومنطقة الخليج.',
            'about-feature2-title': 'الفهم الثقافي',
            'about-feature2-desc': 'نحن نفهم الفروق الدقيقة للتجارة المحلية، وتوقعات خدمة العملاء، وروح ريادة الأعمال التي تحرك هذا السوق.',
            'about-feature3-title': 'شراكة من أجل النمو',
            'about-feature3-desc': 'عندما تختار Weideliver، أنت لا تحصل على أداة فحسب. أنت تكتسب شريكاً ملتزماً بنجاحك، مدعوماً بقوة تكنولوجية من Innovent.',
            'survey-title': 'استطلاع رضا العملاء',
            'survey-desc': 'أخبرنا عن أدائنا - ملاحظاتك تدفع تحسيناتنا.',
            'survey-button': 'ابدأ الاستطلاع',

            // About Section 2
            'about-section-label': 'حول Weideliver',
            'about-section-title': 'تشغيل التجارة، توصيل واحد في كل مرة',
            'about-section-subtitle': 'مدفوع بالتكنولوجيا، محدد بالشراكة.',
            'about-section-desc': 'نحن نؤمن بأن كل عمل يستحق الوصول إلى حلول توصيل موثوقة وفعالة التكلفة. تربط منصتنا الفجوة بين التجارة التقليدية والخدمات اللوجستية الحديثة، مما يسمح للأعمال التجارية بالتركيز على ما تفعله بشكل أفضل بينما نتعامل مع بقية الأمور.',
            'download-store-app': 'تحميل تطبيق متجر Weideliver',
            'download-driver-app': 'تحميل تطبيق سائق Weideliver',

            // Services
            'services-label': 'خدماتنا',
            'services-title': 'حلول لوجستية مخصصة للجميع',
            'services-desc': 'في Weideliver، لا نؤمن بمقاس واحد يناسب الجميع. نوفر منصات متخصصة تمكّن كل لاعب رئيسي في نظام التوصيل - الأعمال والسائقين وشركاء الأسطول - من العمل بشكل أكثر كفاءة وربحية.',
            'tab-business': 'أصحاب الأعمال',
            'tab-drivers': 'السائقون',
            'tab-fleet': 'شركات الأسطول والخدمات اللوجستية',
            'services-subheading': 'إطلاق وتوسيع خدمة التوصيل الخاصة بك',
            'services-subdesc': 'قدم توصيلاً موثوقاً في الرحلة الأخيرة دون الحاجة إلى إدارة فريق بدوام كامل. اختر النموذج الذي يناسب مرحلة نموك.',

            // Service Cards - Basic
            'basic-title': 'Weideliver Basic',
            'basic-subtitle': 'محسّن الربح',
            'basic-ideal': 'الأعمال التجارية الراسخة التي لديها فريق توصيل موجود وفعال.',
            'basic-what-you-get': 'ما الذي تحصل عليه',
            'basic-what-desc': 'تكنولوجيا متقدمة لتحسين أسطولك الحالي وإنشاء إيرادات من الطاقة الخاملة.',
            'basic-features': 'المميزات الرئيسية',
            'basic-feature1': 'أدوات تحسين الإرسال والمسار القوية',
            'basic-feature2': 'لوحة تحكم استثمار الأسطول: أقرض سائقي الخاملين للشركات الأخرى في شبكتنا',
            'basic-feature3': 'تحليلات الأداء لفريقك',
            'basic-outcome': 'النتيجة',
            'basic-outcome-desc': 'حول عمليات التوصيل الخاصة بك من مركز تكلفة إلى مركز ربح، بإمكانك كسب متوسط 3,225+ درهم/شهر في 600 طلب.',

            // Service Cards - On-Demand
            'ondemand-title': 'Weideliver On-Demand',
            'ondemand-subtitle': 'الخطة المرنة للمبتدئين',
            'ondemand-ideal': 'الأعمال التجارية الجديدة، المتاجر الموسمية، أو من يريدون اختبار التوصيل بدون مخاطر.',
            'ondemand-what-you-get': 'ما الذي تحصل عليه',
            'ondemand-what-desc': 'الوصول إلى شبكة سائقينا على أساس الدفع عند الاستخدام',
            'ondemand-features': 'المميزات الرئيسية',
            'ondemand-feature1': 'لا رسوم اشتراك أو عقود طويلة الأجل',
            'ondemand-feature2': 'التوسع الفوري خلال الفترات المزدحمة',
            'ondemand-feature3': 'نفس شبكة السائقين الموثوقة مثل الخطة الاحترافية',
            'ondemand-outcome': 'النتيجة',
            'ondemand-outcome-desc': 'أثبت قيمة التوصيل لأعمالك التجارية بدون أي التزام مسبق، وتوسّع بسلاسة عندما تكون مستعداً.',

            // Service Cards - Pro
            'pro-title': 'خطة Weideliver Pro',
            'pro-subtitle': 'الحل الكامل للخدمة',
            'pro-ideal': 'المطاعم والصيدليات ومتاجر البقالة ومتاجر التجزئة الذين يريدون خدمة توصيل كاملة بدون تدخل.',
            'pro-what-you-get': 'ما الذي تحصل عليه',
            'pro-what-desc': 'شبكة سائقين موثوقة ومخصصة تديرها أنت.',
            'pro-features': 'المميزات الرئيسية',
            'pro-feature1': 'لا توظيف أو إدارة للسائقين',
            'pro-feature2': 'ضمان مستويات الخدمة',
            'pro-feature3': 'تتبع الطلبات في الوقت الفعلي لك ولعملائك',
            'pro-feature4': 'تسعير بسيط وقابل للتنبؤ',
            'pro-outcome': 'النتيجة',
            'pro-outcome-desc': 'ركز 100% على عملك الأساسي بينما نتعامل مع عملية التوصيل بأكملها، مما يساعدك على زيادة المبيعات ورضا العملاء.',

            // Pricing
            'pricing-label': 'الأسعار',
            'pricing-title': 'أسعار شفافة مبنيّة للنمو',
            'pricing-desc': 'لا رسوم خفية. لا مفاجآت. اختر الخطة التي تتماشى مع أهداف عملك وابدأ التوصيل بثقة.',

            // FAQ
            'faq-label': 'الأسئلة الشائعة',
            'faq-title': 'إجابات على أسئلتك',
            'faq-desc': 'استكشف أسئلتنا الأكثر تكراراً وتعلم كيف يمكننا مساعدتك على النجاح.',
            'faq-q1': 'لا نستطيع تحمل تكلفة توظيف السائقين؟',
            'faq-a1': 'لا تحتاج إلى ذلك! تمنحك خطتنا الاحترافية خدمة توصيل كاملة مقابل جزء بسيط من تكلفة سائق واحد بدوام كامل. دعنا نريك كيف يمكن أن تدفع التوصيل نفسها',
            'faq-q2': 'نحن صغار جداً للتوصيل؟',
            'faq-a2': 'هذا بالضبط سبب إنشاء خطة الطلب الفوري. ابدأ بطلب واحد فقط في اليوم. لا يوجد التزام، لذا يمكنك النمو بوتيرة سرعتك',
            'faq-q3': 'نحن نستخدم بالفعل مجمع توصيل؟',
            'faq-a3': 'رائع! الآن، استخدم منصتنا للتعامل مع التوصيل الفعلي لتلك الطلبات. ستوفر المال، تحصل على خدمة أكثر موثوقية، وتبقي عملاءك أكثر سعادة',
            'faq-q4': 'نريد التفكير في الأمر؟',
            'faq-a4': 'أفهم. دعني أقفل عرض FIRST MONTH FREE الخاص بك اليوم. يمكنك اختبار النظام بأكمله مع خطة الطلب الفوري ورؤية النتائج بنفسك، بدون مخاطر',

            // Contact
            'contact-label': 'اتصل بنا',
            'contact-title': 'تواصل مع فريقنا',
            'contact-desc': 'لديك سؤال أو فكرة؟ نحب أن نسمع منك.',
            'contact-name': 'الاسم',
            'contact-email': 'البريد الإلكتروني',
            'contact-phone': 'رقم الهاتف',
            'contact-message': 'الرسالة',
            'contact-name-placeholder': 'أدخل اسمك',
            'contact-email-placeholder': 'mmm@info.com',
            'contact-phone-placeholder': 'أدخل رقم هاتفك',
            'contact-message-placeholder': 'أدخل رسالتك',
            'contact-send': 'إرسال',

            // Footer
            'footer-about': 'من نحن',
            'footer-services': 'الخدمات',
            'footer-pricing': 'الأسعار',
            'footer-contact': 'اتصل بنا',
            'footer-stay-in-touch': 'ابق على تواصل معنا',
            'footer-download-store': 'تحميل تطبيق متجر Weideliver',
            'footer-download-driver': 'تحميل تطبيق سائق Weideliver',
            'footer-rights': 'جميع الحقوق محفوظة © Suliit 2025'
        }
    },

    translate(lang) {
        this.currentLang = lang;

        // Change direction
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', lang);

        // Translate all elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (this.texts[lang][key]) {
                element.textContent = this.texts[lang][key];
            }
        });

        // Translate placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (this.texts[lang][key]) {
                element.placeholder = this.texts[lang][key];
            }
        });
    },

    toggle() {
        const newLang = this.currentLang === 'en' ? 'ar' : 'en';
        this.translate(newLang);
    }
};

// Initialize
window.addEventListener('DOMContentLoaded', function () {
    // Add click handler to language switcher
    const langSwitcher = document.querySelector('.language-switcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', function () {
            i18n.toggle();
        });
    }
});
