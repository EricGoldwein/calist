// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});

// Add active class to navigation links on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === current) {
            item.classList.add('active');
        }
    });
});

// Fade in elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and about section
document.querySelectorAll('.service-card, .about-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Language toggle functionality
let currentLang = 'es';

const translations = {
    es: {
        // Navigation
        inicio: 'Inicio',
        servicios: 'Servicios',
        sobreMi: 'Sobre Mí',
        contacto: 'Contacto',
        
        // Headers
        heroTitle: 'Seba',
        heroSubtitle: 'Kinesiólogo y Entrenador de Calistenia',
        heroText: 'Transformá tu cuerpo y mente a través del movimiento',
        
        // Services
        serviciosTitle: 'Servicios',
        calistenia: 'Calistenia',
        calisteniaDesc: 'Entrenamiento funcional usando el peso de tu propio cuerpo',
        kinesiologia: 'Kinesiología',
        kinesiologiaDesc: 'Tratamiento y rehabilitación personalizada',
        espiritual: 'Entrenamiento Espiritual',
        espiritualDesc: 'Desarrollo integral cuerpo-mente',
        
        // About
        sobreMiTitle: 'Sobre Mí',
        bioIntro: 'Hola, soy Seba — entrenador de calistenia, masajista, actor y kinesiólogo. Mi enfoque combina entrenamiento funcional, rehabilitación y desarrollo personal para crear una experiencia holística.',
        bioTraining: 'En mis clases trabajamos fuerza, movilidad y conciencia corporal usando ejercicios como planchas, puentes, dominadas y verticales. Mi experiencia internacional me ha permitido trabajar con clientes de todo el mundo, desde Buenos Aires hasta Brooklyn y Alemania. Hablo español e inglés, pero sobre todo, hablo el lenguaje del cuerpo — una comunicación universal que trasciende las barreras del idioma.',
        bioMassage: 'También ofrezco masajes terapéuticos, un espacio para liberar tensiones y promover la recuperación muscular. Mi experiencia como modelo y actor me ha dado una profunda comprensión del movimiento y la expresión corporal, conocimientos que aplico en todas mis prácticas.',
        bioLocation: 'Realizo mis clases de calistenia en Calistenia Haiti, un espacio dedicado al entrenamiento funcional. ¡Te invito a conocer el lugar!',
        readMore: 'Leer biografía completa',
        
        // Videos
        videosTitle: 'Videos y Momentos',
        videoDesc: 'Mira un ejemplo de mis entrenamientos y la energía que comparto en cada clase.',
        instagramDesc: 'Seguime en Instagram para ver mis entrenamientos, consejos y momentos especiales de mi trabajo.',
        
        // Testimonials
        testimoniosTitle: 'Testimonios',
        
        // Contact
        contactoTitle: 'Contacto',
        contactText: '¡Escribime por WhatsApp para más información!',
        
        // Footer
        copyright: 'Todos los derechos reservados',
        
        // Full Bio Page
        bioPageTitle: 'Mi Historia | Seba - Kinesiólogo y Entrenador',
        backText: 'Volver',
        bioTitle: 'Mi Historia',
        bioTraining: 'En mis clases trabajamos fuerza, movilidad y conciencia corporal usando ejercicios como planchas, puentes, dominadas y verticales. Mi experiencia internacional me ha permitido trabajar con clientes de todo el mundo, desde Buenos Aires hasta Brooklyn y Alemania. Hablo español e inglés, pero sobre todo, hablo el lenguaje del cuerpo — una comunicación universal que trasciende las barreras del idioma.',
        bioMassage: 'También ofrezco masajes terapéuticos, un espacio para liberar tensiones y promover la recuperación muscular. Mi experiencia como modelo y actor me ha dado una profunda comprensión del movimiento y la expresión corporal, conocimientos que aplico en todas mis prácticas.',
        bioLocation: 'Realizo mis clases de calistenia en Calistenia Haiti, un espacio dedicado al entrenamiento funcional. ¡Te invito a conocer el lugar!'
    },
    en: {
        // Navigation
        inicio: 'Home',
        servicios: 'Services',
        sobreMi: 'About',
        contacto: 'Contact',
        
        // Headers
        heroTitle: 'Seba',
        heroSubtitle: 'Kinesiologist and Calisthenics Trainer',
        heroText: 'Transform your body and mind through movement',
        
        // Services
        serviciosTitle: 'Services',
        calistenia: 'Calisthenics',
        calisteniaDesc: 'Functional training using your own body weight',
        kinesiologia: 'Kinesiology',
        kinesiologiaDesc: 'Personalized treatment and rehabilitation',
        espiritual: 'Spiritual Training',
        espiritualDesc: 'Integral body-mind development',
        
        // About
        sobreMiTitle: 'About Me',
        bioIntro: 'Hi, I\'m Seba — a calisthenics trainer, masseur, actor, and kinesiologist. My approach combines functional training, rehabilitation, and personal development to create a holistic experience.',
        bioTraining: 'In my classes, we work on strength, mobility, and body awareness using exercises like planks, bridges, pull-ups, and handstands. My international experience has allowed me to work with clients worldwide, from Buenos Aires to Brooklyn and Germany. I speak Spanish and English, but above all, I speak the language of the body — a universal communication that transcends language barriers.',
        bioMassage: 'I also offer therapeutic massages, a space to release tension and promote muscle recovery. My experience as a model and actor has given me a deep understanding of movement and body expression, knowledge that I apply in all my practices.',
        bioLocation: 'I conduct my calisthenics classes at Calistenia Haiti, a space dedicated to functional training. Come check it out!',
        readMore: 'Read full biography',
        
        // Videos
        videosTitle: 'Videos and Moments',
        videoDesc: 'Watch an example of my training sessions and the energy I share in each class.',
        instagramDesc: 'Follow me on Instagram to see my training sessions, tips, and special moments from my work.',
        
        // Testimonials
        testimoniosTitle: 'Testimonials',
        
        // Contact
        contactoTitle: 'Contact',
        contactText: 'Message me on WhatsApp for more information!',
        
        // Footer
        copyright: 'All rights reserved',
        
        // Full Bio Page
        bioPageTitle: 'My Story | Seba - Kinesiologist and Trainer',
        backText: 'Back',
        bioTitle: 'My Story',
        bioTraining: 'In my classes, we work on strength, mobility, and body awareness using exercises like planks, bridges, pull-ups, and handstands. My international experience has allowed me to work with clients worldwide, from Buenos Aires to Brooklyn and Germany. I speak Spanish and English, but above all, I speak the language of the body — a universal communication that transcends language barriers.',
        bioMassage: 'I also offer therapeutic massages, a space to release tension and promote muscle recovery. My experience as a model and actor has given me a deep understanding of movement and body expression, knowledge that I apply in all my practices.',
        bioLocation: 'I conduct my calisthenics classes at Calistenia Haiti, a space dedicated to functional training. Come check it out!'
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    const langText = document.querySelector('.lang-text');
    langText.textContent = currentLang === 'es' ? 'EN' : 'ES';
    
    // Update page title
    document.title = translations[currentLang].bioPageTitle;
    
    // Update navigation
    document.querySelector('a[href="index.html#inicio"]').textContent = translations[currentLang].inicio;
    document.querySelector('a[href="index.html#servicios"]').textContent = translations[currentLang].servicios;
    document.querySelector('a[href="index.html#sobre-mi"]').textContent = translations[currentLang].sobreMi;
    document.querySelector('a[href="index.html#contacto"]').textContent = translations[currentLang].contacto;
    
    // Update back link
    const backText = document.querySelector('.back-text');
    if (backText) {
        backText.textContent = translations[currentLang].backText;
    }
    
    // Update bio title
    const bioTitle = document.querySelector('.bio-title');
    if (bioTitle) {
        bioTitle.textContent = translations[currentLang].bioTitle;
    }
    
    // Update bio content
    const bioIntro = document.querySelector('.bio-intro');
    if (bioIntro) {
        bioIntro.textContent = translations[currentLang].bioIntro;
    }
    
    const bioTraining = document.querySelector('.bio-training');
    if (bioTraining) {
        bioTraining.textContent = translations[currentLang].bioTraining;
    }
    
    const bioMassage = document.querySelector('.bio-massage');
    if (bioMassage) {
        bioMassage.textContent = translations[currentLang].bioMassage;
    }
    
    const bioLocation = document.querySelector('.bio-location');
    if (bioLocation) {
        bioLocation.textContent = translations[currentLang].bioLocation;
    }
    
    // Update hero section
    document.querySelector('.hero-content h1').textContent = translations[currentLang].heroTitle;
    document.querySelector('.hero-content h2').textContent = translations[currentLang].heroSubtitle;
    document.querySelector('.hero-content p').textContent = translations[currentLang].heroText;
    
    // Update services section
    document.querySelector('#servicios h2').textContent = translations[currentLang].serviciosTitle;
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards[0].querySelector('h3').textContent = translations[currentLang].calistenia;
    serviceCards[0].querySelector('p').textContent = translations[currentLang].calisteniaDesc;
    serviceCards[1].querySelector('h3').textContent = translations[currentLang].kinesiologia;
    serviceCards[1].querySelector('p').textContent = translations[currentLang].kinesiologiaDesc;
    serviceCards[2].querySelector('h3').textContent = translations[currentLang].espiritual;
    serviceCards[2].querySelector('p').textContent = translations[currentLang].espiritualDesc;
    
    // Update about section
    document.querySelector('#sobre-mi h2').textContent = translations[currentLang].sobreMiTitle;
    const aboutParagraphs = document.querySelectorAll('#sobre-mi .about-text p');
    aboutParagraphs[0].textContent = translations[currentLang].bioIntro;
    aboutParagraphs[1].textContent = translations[currentLang].bioTraining;
    aboutParagraphs[2].textContent = translations[currentLang].bioMassage;
    aboutParagraphs[3].textContent = translations[currentLang].bioLocation;
    
    // Update read more link
    const readMoreLink = document.querySelector('.read-more');
    if (readMoreLink) {
        readMoreLink.textContent = translations[currentLang].readMore;
    }
    
    // Update videos section
    document.querySelector('#videos h2').textContent = translations[currentLang].videosTitle;
    const videoDesc = document.querySelector('.highlight-description');
    if (videoDesc) {
        videoDesc.textContent = translations[currentLang].videoDesc;
    }
    
    // Update testimonials section
    document.querySelector('#testimonios h2').textContent = translations[currentLang].testimoniosTitle;
    
    // Update contact section
    document.querySelector('#contacto h2').textContent = translations[currentLang].contactoTitle;
    document.querySelector('#contacto p').textContent = translations[currentLang].contactText;
    
    // Update footer
    document.querySelector('footer p').textContent = `© 2025 320 Consulting - ${translations[currentLang].copyright}`;
} 