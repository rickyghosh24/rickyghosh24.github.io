// Mobile nav toggle
const menuBtn = document.getElementById('menuBtn');
const body = document.body;
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = body.classList.toggle('nav-open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({behavior:'smooth', block:'start'});
    body.classList.remove('nav-open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded','false');
  });
});

// Project filter (if present)
const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');
if (filterBtns.length){
  filterBtns.forEach(b=>{
    b.addEventListener('click',()=>{
      filterBtns.forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      const f = b.dataset.filter || 'all';
      projects.forEach(p=>{
        if (f==='all' || p.classList.contains(f)) p.style.display = '';
        else p.style.display = 'none';
      });
    });
  });
}

// Intersection reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if (e.isIntersecting) e.target.classList.add('reveal');
  });
},{threshold:0.12});
document.querySelectorAll('.card, .project-card, .proj-img, .profile-card').forEach(el=>io.observe(el));

// Contact form (client-only demo)
const contactForm = document.getElementById('contactForm');
if (contactForm){
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name')?.value?.trim();
    const email = document.getElementById('email')?.value?.trim();
    const msg = document.getElementById('message')?.value?.trim();
    if (!name || !email || !msg) {
      alert('Please fill all fields.');
      return;
    }
    // client only demo: show message
    const note = document.createElement('div');
    note.className = 'note';
    note.textContent = 'Thanks — message recorded (demo).';
    contactForm.appendChild(note);
    contactForm.reset();
    setTimeout(()=>note.remove(),3000);
  });
}
