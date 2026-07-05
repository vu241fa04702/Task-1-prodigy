const navbar = document.getElementById("navbar");

// Scroll -> change navbar style
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Hover -> add an active style class to the hovered menu item
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        navLinks.forEach((l) => l.classList.remove("hover-active"));
        link.classList.add("hover-active");
    });
    link.addEventListener("mouseleave", () => {
        link.classList.remove("hover-active");
    });
});

// Optional: highlight active section while scrolling
const sections = Array.from(document.querySelectorAll("section[id]"));
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach((l) => {
                    const href = l.getAttribute("href");
                    const match = href === `#${id}`;
                    l.classList.toggle("active-section", match);
                });
            }
        });
    },
    { root: null, threshold: 0.35 }
);

sections.forEach((section) => observer.observe(section));

