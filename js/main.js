// hotel-website/js/main.js

// Smooth scrolling for internal anchor links (if any)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Optional: Close mobile menu after click (for better UX)
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});

// Bootstrap carousel initialization (already via data attributes, but ensure it's there)
document.addEventListener('DOMContentLoaded', function () {
  // Any custom init if needed
  console.log('Grand Horizon site ready.');
});

// You could add a modal booking form handler (prevent default for demo)
const bookingForm = document.querySelector('#bookingModal form');
if (bookingForm) {
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! This is a demo. In production, booking would be processed.');
    bootstrap.Modal.getInstance(document.getElementById('bookingModal')).hide();
  });
}

// Optional: add background opacity to navbar on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  } else {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  }
});