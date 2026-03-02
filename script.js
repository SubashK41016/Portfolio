// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links li a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}));

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Typing Animation
const words = ["Web Development", "UI Development", "Software Engineering", "UI/UX Design", "Problem Solving"];
const typingText = document.querySelector(".typing-text");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pause before typing new word
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start typing animation on load
document.addEventListener("DOMContentLoaded", () => {
    if (typingText) {
        setTimeout(typeEffect, 1000);
    }
});

// Intersection Observer for Scroll Animations
const observeElements = document.querySelectorAll('.fade-in-section');

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Stop observing once it's visible
    });
}, observerOptions);

observeElements.forEach(element => {
    observer.observe(element);
});

// Active Link Highlight on Scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('active');
        }
    });
});
