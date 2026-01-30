const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });


  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();


    document.querySelectorAll(".form-group").forEach((group) => {
      group.classList.remove("error");
    });

    let isValid = true;


    const nameInput = document.getElementById("name");
    if (nameInput && nameInput.value.trim().length < 2) {
      showError(
        "nameError",
        "Please enter a valid name (at least 2 characters)",
      );
      isValid = false;
    }


    const emailInput = document.getElementById("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput && !emailRegex.test(emailInput.value)) {
      showError("emailError", "Please enter a valid email address");
      isValid = false;
    }


    const phoneInput = document.getElementById("phone");
    if (phoneInput && phoneInput.value.trim() !== "") {
      const phoneRegex = /^[\d\s\+\-\(\)]+$/;
      if (!phoneRegex.test(phoneInput.value)) {
        showError("phoneError", "Please enter a valid phone number");
        isValid = false;
      }
    }


    const subjectInput = document.getElementById("subject");
    if (subjectInput && subjectInput.value.trim().length < 3) {
      showError(
        "subjectError",
        "Please enter a subject (at least 3 characters)",
      );
      isValid = false;
    }


    const messageInput = document.getElementById("message");
    if (messageInput && messageInput.value.trim().length < 10) {
      showError(
        "messageError",
        "Please enter a message (at least 10 characters)",
      );
      isValid = false;
    }

    if (isValid) {

      contactForm.style.display = "none";
      successMessage.classList.add("show");


      contactForm.reset();


      setTimeout(() => {
        contactForm.style.display = "flex";
        successMessage.classList.remove("show");
      }, 3000);
    }
  });
}

function showError(errorId, message) {
  const errorElement = document.getElementById(errorId);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.parentElement.classList.add("error");
  }
}

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

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document
  .querySelectorAll(".skill-card, .featured-card, .project-card, .pricing-card")
  .forEach((el) => {
    observer.observe(el);
  });

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
  }
});
