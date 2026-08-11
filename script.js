document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-links");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
      });
    });

    document.addEventListener("click", function (e) {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove("active");
      }
    });
  }
});
