document.addEventListener("DOMContentLoaded", () => {

  AOS.init({
    duration: 750,
    once: true,
    easing: "ease-out"
  });

  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      themeToggle.innerHTML = document.body.classList.contains("dark-mode")
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
    });
  }

  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("پیام شما با موفقیت ارسال شد! (این فقط شبیه‌سازی است)");
      contactForm.reset();
    });
  }

});