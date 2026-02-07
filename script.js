// script.js

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ===== Fade-in animation on scroll =====
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// ===== Hover effects for buttons =====
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.05)';
        btn.style.transition = 'transform 0.3s ease';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
});

// ===== Instagram DM Button Click =====
const instaButtons = document.querySelectorAll('.instagram-btn');
instaButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        window.open('https://instagram.com/digitalroots.pk', '_blank');
    });
});

// ===== WhatsApp Button Click =====
const whatsappBtn = document.querySelector('.whatsapp-btn');
if(whatsappBtn){
    whatsappBtn.addEventListener('click', () => {
        window.open('https://wa.me/923705240513', '_blank');
    });
}
