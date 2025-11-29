// Smooth scroll for internal links (with safety checks)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // close mobile nav if open
    document.body.classList.remove('nav-open');
    const navToggle = document.getElementById('navToggle');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    document.body.classList.toggle('nav-open');
  });
}

// Project filter handling (if buttons exist)
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
if (filterButtons.length && projectCards.length) {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter || 'all';
      projectCards.forEach(card => {
        if (filter === 'all' || card.classList.contains(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// IntersectionObserver for simple reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.project-card, .skill-pill, .timeline-item, .education-item').forEach(elem => {
  observer.observe(elem);
});

// Contact form handling (client-only)
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
    // Show a temporary confirmation (replace with Formspree/Netlify action in production)
    const success = document.createElement('div');
    success.className = 'form-success';
    success.textContent = 'Thanks — your message has been recorded (client-only demo).';
    contactForm.appendChild(success);
    contactForm.reset();
    setTimeout(() => success.remove(), 3500);
  });
}

// Active nav link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-list a');
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (pageYOffset >= top) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === `#${current}`) link.classList.add('active');
  });
});
