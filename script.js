// ===============================
// Mobile Navigation
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    nav.classList.toggle("open");

    document.body.classList.toggle("menu-open");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("open");
      nav.classList.remove("open");
      document.body.classList.remove("menu-open");
    });
  });
}


// ===============================
// Contact Form
// ===============================

const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = contactForm.querySelector('[name="name"]').value.trim();
    const email = contactForm.querySelector('[name="email"]').value.trim();
    const message = contactForm.querySelector('[name="message"]').value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Please fill in all required fields.";
      return;
    }

    formMessage.textContent =
      "Thanks! Your message has been received.";

    contactForm.reset();
  });
}


// ===============================
// Simple Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
  ".project, .service-row, .big-service, .process-step, .work-item"
);

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => {
  element.style.opacity = "0";
  element.style.transform = "translateY(25px)";
  element.style.transition =
    "opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1)";

  revealObserver.observe(element);
});


// Add revealed styles dynamically

const revealStyle = document.createElement("style");

revealStyle.textContent = `
  .revealed {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;

document.head.appendChild(revealStyle);
