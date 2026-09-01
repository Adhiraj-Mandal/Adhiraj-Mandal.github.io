const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
if(menuToggle&&navLinks){menuToggle.addEventListener('click',()=>navLinks.classList.toggle('mobile-open'));document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>navLinks.classList.remove('mobile-open')))}
const sections=document.querySelectorAll('.section');
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.1});
sections.forEach(section=>observer.observe(section));
document.querySelectorAll('.project-card[data-link]').forEach(card=>card.addEventListener('click',e=>{if(e.target.closest('a'))return;window.location.href=card.dataset.link}));
