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

// Set initial language text
document.addEventListener('DOMContentLoaded', function() {
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = 'EN';
    }
});

const translations = {
    en: {
        bioIntro: "Hello, I am Sebastian Tettamanzi — a calisthenics trainer, masseur, actor, and kinesiologist. My approach combines functional training, rehabilitation, and personal development to create a holistic experience.",
        bioTraining: "In my classes, we work on strength, mobility, and body awareness using exercises like planks, bridges, pull-ups, and handstands. My international experience has allowed me to work with clients from all over the world, from Buenos Aires to Brooklyn and Germany. I speak Spanish and also English (though not natively), but above all, I speak the language of the body — a universal communication that transcends language barriers.",
        bioMassage: "I also offer therapeutic massages, a space to release tension and promote muscle recovery. My experience as a model and actor has given me a deep understanding of movement and body expression, knowledge that I apply in all my practices.",
        bioLocation: "I conduct my calisthenics classes at <strong>Calistenia Haiti</strong>, a space dedicated to functional training. I invite you to check out the place!",
        serviciosTitle: "Transform your body and mind through movement",
        calistenia: "Calisthenics",
        calisteniaDesc: "Functional training using your own body weight",
        kinesiologia: "Kinesiology",
        kinesiologiaDesc: "Personalized treatment and rehabilitation",
        espiritual: "Spiritual Training",
        espiritualDesc: "Holistic body-mind development"
    },
    es: {
        bioIntro: "Hola, soy Sebastian Tettamanzi — entrenador de calistenia, kinesiólogo, actor y kinesiólogo. Mi enfoque combina entrenamiento funcional, rehabilitación y desarrollo personal para crear una experiencia holística.",
        bioTraining: "En mis clases trabajamos fuerza, movilidad y conciencia corporal usando ejercicios como planchas, puentes, dominadas y verticales. Mi experiencia internacional me ha permitido trabajar con clientes de todo el mundo, desde Buenos Aires hasta Brooklyn y Alemania. Hablo español y también inglés (aunque no soy nativo), pero sobre todo, hablo el lenguaje del cuerpo — una comunicación universal que trasciende las barreras del idioma.",
        bioMassage: "También ofrezco masajes terapéuticos, un espacio para liberar tensiones y promover la recuperación muscular. Mi experiencia como modelo y actor me ha dado una profunda comprensión del movimiento y la expresión corporal, conocimientos que aplico en todas mis prácticas.",
        bioLocation: "Realizo mis clases de calistenia en <strong>Calistenia Haiti</strong>, un espacio dedicado al entrenamiento funcional. ¡Te invito a conocer el lugar!",
        serviciosTitle: "Transformá tu cuerpo y mente a través del movimiento",
        calistenia: "Calistenia",
        calisteniaDesc: "Entrenamiento funcional usando el peso de tu propio cuerpo",
        kinesiologia: "Kinesiología",
        kinesiologiaDesc: "Tratamiento y rehabilitación personalizada",
        espiritual: "Entrenamiento Espiritual",
        espiritualDesc: "Desarrollo integral cuerpo-mente"
    }
};

function toggleLanguage() {
    const langText = document.querySelector('.lang-text');
    if (langText.textContent === 'EN') {
        langText.textContent = 'ES';
        currentLang = 'es';
    } else {
        langText.textContent = 'EN';
        currentLang = 'en';
    }
    
    // Update bio section
    const aboutSectionBio = document.querySelector('#sobre-mi');
    if (aboutSectionBio) {
        const aboutParagraphs = aboutSectionBio.querySelectorAll('.about-text p');
        if (aboutParagraphs.length >= 4) {
            aboutParagraphs[0].textContent = translations[currentLang].bioIntro;
            aboutParagraphs[1].textContent = translations[currentLang].bioTraining;
            aboutParagraphs[2].textContent = translations[currentLang].bioMassage;
            aboutParagraphs[3].innerHTML = translations[currentLang].bioLocation;
        }
    }
    
    // Update services section
    const servicesSection = document.querySelector('#servicios');
    if (servicesSection) {
        const servicesTitle = servicesSection.querySelector('h2');
        if (servicesTitle) servicesTitle.textContent = translations[currentLang].serviciosTitle;
        
        const serviceCards = servicesSection.querySelectorAll('.service-card');
        if (serviceCards.length >= 3) {
    serviceCards[0].querySelector('h3').textContent = translations[currentLang].calistenia;
    serviceCards[0].querySelector('p').textContent = translations[currentLang].calisteniaDesc;
    serviceCards[1].querySelector('h3').textContent = translations[currentLang].kinesiologia;
    serviceCards[1].querySelector('p').textContent = translations[currentLang].kinesiologiaDesc;
    serviceCards[2].querySelector('h3').textContent = translations[currentLang].espiritual;
    serviceCards[2].querySelector('p').textContent = translations[currentLang].espiritualDesc;
        }
    }
    
    // Update page title
    document.title = translations[currentLang].bioPageTitle;
    
    // Update navigation
    const navLinks = {
        inicio: document.querySelector('a[href="#inicio"]'),
        servicios: document.querySelector('a[href="#servicios"]'),
        sobreMi: document.querySelector('a[href="#sobre-mi"]'),
        contacto: document.querySelector('a[href="#contacto"]')
    };

    if (navLinks.inicio) navLinks.inicio.textContent = translations[currentLang].inicio;
    if (navLinks.servicios) navLinks.servicios.textContent = translations[currentLang].servicios;
    if (navLinks.sobreMi) navLinks.sobreMi.textContent = translations[currentLang].sobreMi;
    if (navLinks.contacto) navLinks.contacto.textContent = translations[currentLang].contacto;
    
    // Update hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        const heroText = heroContent.querySelector('p');
        if (heroText) heroText.textContent = translations[currentLang].heroText;
    }
    
    // Update about section
    const aboutSection = document.querySelector('#sobre-mi');
    if (aboutSection) {
        const aboutTitle = aboutSection.querySelector('h2');
        if (aboutTitle) aboutTitle.textContent = translations[currentLang].sobreMiTitle;
        
        const aboutParagraphs = aboutSection.querySelectorAll('.about-text p');
        if (aboutParagraphs.length >= 4) {
    aboutParagraphs[0].textContent = translations[currentLang].bioIntro;
    aboutParagraphs[1].textContent = translations[currentLang].bioTraining;
    aboutParagraphs[2].textContent = translations[currentLang].bioMassage;
    aboutParagraphs[3].textContent = translations[currentLang].bioLocation;
        }
    }
    
    // Update videos section
    const videosSection = document.querySelector('#videos');
    if (videosSection) {
        const videosTitle = videosSection.querySelector('h2');
        if (videosTitle) videosTitle.textContent = translations[currentLang].videosTitle;
    }
    
    // Update testimonials section
    const testimonialsSection = document.querySelector('#testimonios');
    if (testimonialsSection) {
        const testimonialsTitle = testimonialsSection.querySelector('h2');
        if (testimonialsTitle) testimonialsTitle.textContent = translations[currentLang].testimoniosTitle;
    }
    
    // Update contact section
    const contactSection = document.querySelector('#contacto');
    if (contactSection) {
        const contactTitle = contactSection.querySelector('h2');
        if (contactTitle) contactTitle.textContent = translations[currentLang].contactoTitle;
        
        const contactText = contactSection.querySelector('p');
        if (contactText) contactText.textContent = translations[currentLang].contactText;
    }
    
    // Update footer
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.textContent = `© 2025 320 Consulting - ${translations[currentLang].copyright}`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Floating WhatsApp button functionality
    const floatingWhatsapp = document.querySelector('.floating-whatsapp');
    if (floatingWhatsapp) {
        floatingWhatsapp.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://wa.me/5491161603163', '_blank');
        });
    }
}); 