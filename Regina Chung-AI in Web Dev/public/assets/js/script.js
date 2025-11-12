// ========================================
// PAGE LOADER
// ========================================
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".page-loader").classList.add("hidden");
  }, 1000);
});

// ========================================
// CUSTOM CURSOR (Desktop Only)
// ========================================
const cursor = document.getElementById("custom-cursor");
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  const dx = mouseX - cursorX;
  const dy = mouseY - cursorY;

  cursorX += dx * 0.15;
  cursorY += dy * 0.15;

  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";

  requestAnimationFrame(animateCursor);
}

if (window.innerWidth >= 768) {
  animateCursor();
}

// Cursor hover effects
const interactiveElements = document.querySelectorAll(
  "a, button, .project-card, .skill-category"
);
interactiveElements.forEach((el) => {
  el.addEventListener("mouseenter", () => cursor.classList.add("active"));
  el.addEventListener("mouseleave", () => cursor.classList.remove("active"));
});

// ========================================
// SMOOTH SCROLLING
// ========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ========================================
// SCROLL ANIMATIONS
// ========================================
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
const navbar = document.getElementById("navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});

// ========================================
// PARALLAX EFFECT
// ========================================
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".hero-content");

  parallaxElements.forEach((el) => {
    const speed = 0.5;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ========================================
// FORM SUBMISSION
// ========================================
function handleSubmit(event) {
  event.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  event.target.reset();
}

// ========================================
// IMAGE ERROR HANDLING
// ========================================
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", function () {
    console.log("Image failed to load:", this.src);
  });
});
