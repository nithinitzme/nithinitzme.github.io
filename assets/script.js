// ===== Year update =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Mobile nav toggle =====
const menuBtn = document.getElementById("menuBtn");
const navlinks = document.getElementById("navlinks");
menuBtn?.addEventListener("click", () => {
  navlinks.classList.toggle("active");
});

// ===== Theme toggle with icon swap =====
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

// Initialize theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  root.classList.add("light-mode");
  themeToggle.textContent = "🌞";
} else {
  root.classList.remove("light-mode");
  themeToggle.textContent = "🌙";
}

// Handle click toggle
themeToggle?.addEventListener("click", () => {
  const isLight = root.classList.toggle("light-mode");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  themeToggle.textContent = isLight ? "🌞" : "🌙";
});

// ===== Fade-in observer =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});
document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

// ===== Smooth scroll to hero on brand click =====
document.getElementById("brandLink")?.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
});

// ===== Active nav highlight on scroll =====
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".navlinks a[href^='#']");

window.addEventListener("scroll", () => {
  let current = "";
  const scrollY = window.scrollY + 120; // offset for sticky header
  sections.forEach((section) => {
    if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
  });
});
