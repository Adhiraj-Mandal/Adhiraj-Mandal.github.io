// =====================================================
// MOBILE NAVIGATION
// =====================================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-open");
});


// Close mobile navigation after clicking a link

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
    });
});


// =====================================================
// SIMPLE SCROLL REVEAL
// =====================================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.1
    }
);

sections.forEach((section) => {
    observer.observe(section);
});