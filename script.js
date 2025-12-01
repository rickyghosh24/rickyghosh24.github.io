// Mobile nav toggle
const menuBtn = document.getElementById('menuBtn');
const body = document.body;
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = body.classList.toggle('nav-open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    body.classList.remove('nav-open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// Intersection Observer for reveal animations (non-blocking)
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.card, .project-card, .proj-img, .profile-card').forEach(el => {
  io.observe(el);
});

// Simple contact form client-only demo
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name')?.value?.trim();
    const email = document.getElementById('email')?.value?.trim();
    const message = document.getElementById('message')?.value?.trim();
    if (!name || !email || !message) {
      alert('Please fill all fields.');
      return;
    }
    const success = document.createElement('div');
    success.className = 'form-success';
    success.textContent = 'Thanks — message recorded (demo).';
    contactForm.appendChild(success);
    contactForm.reset();
    setTimeout(() => success.remove(), 3000);
  });
}

// Image error fallback: if image fails to load, hide element gracefully
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', () => {
    // for project thumbnails, replace with subtle background and text
    if (img.classList.contains('proj-img')) {
      img.style.display = 'none';
      const fallback = document.createElement('div');
      fallback.className = 'proj-img-fallback';
      fallback.textContent = img.alt || 'Project image';
      img.parentNode.insertBefore(fallback, img.nextSibling);
    }
  });
});
