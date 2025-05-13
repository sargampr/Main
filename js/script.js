// Mobile Nav Toggle
document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
  });
  
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // Gallery Filter
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        // Filter items
        const filter = button.getAttribute('data-filter');
        galleryItems.forEach(item => {
          if (filter === 'all' || item.classList.contains(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  
    // Contact form submission (demo)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you! We will contact you soon.');
        this.reset();
      });
    }
  });

  // Contact form submission (with email validation)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // Simulate form submission (replace with actual PHP/Formspree later)
    alert(`Thank you, ${name}! We'll contact you shortly at ${email}.`);
    this.reset();
  });
}

// script.js
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

// js/script.js
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
  
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
    });
  });
  