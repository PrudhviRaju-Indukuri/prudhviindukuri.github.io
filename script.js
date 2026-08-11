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

document.addEventListener("DOMContentLoaded", function () {
  // Target all sample studies dropdown triggers
  const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");

  dropdownTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      // Prevent click from closing immediately when tapping the trigger
      e.stopPropagation();

      const menu = this.querySelector(".dropdown-menu");

      // Close all other open dropdowns first
      document.querySelectorAll(".dropdown-menu").forEach(function (m) {
        if (m !== menu) {
          m.classList.remove("active");
        }
      });

      // Toggle current menu on mobile tap
      if (menu) {
        menu.classList.toggle("active");
      }
    });
  });

  // Close dropdown if user taps anywhere else on the mobile screen
  document.addEventListener("click", function () {
    document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
      menu.classList.remove("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");

  dropdownTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      // Check if screen is mobile/tablet size
      if (window.innerWidth <= 768) {
        e.stopPropagation();
        
        const menu = this.querySelector(".dropdown-menu");
        
        // Close any other open dropdowns first
        document.querySelectorAll(".dropdown-menu").forEach(function (m) {
          if (m !== menu) {
            m.classList.remove("active");
          }
        });

        // Toggle the tapped menu
        if (menu) {
          menu.classList.toggle("active");
        }
      }
    });
  });

  // Close dropdowns if user taps anywhere else on the screen
  document.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
        menu.classList.remove("active");
      });
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");

  dropdownTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      // ONLY trigger on mobile screen widths (768px or below)
      if (window.innerWidth <= 768) {
        e.stopPropagation();
        
        const menu = this.querySelector(".dropdown-menu");
        
        // Close any other open mobile dropdown menus
        document.querySelectorAll(".dropdown-menu").forEach(function (m) {
          if (m !== menu) {
            m.classList.remove("active");
          }
        });

        // Toggle the tapped menu open or closed
        if (menu) {
          menu.classList.toggle("active");
        }
      }
    });
  });

  // Close open dropdowns if user taps anywhere else on the screen on mobile
  document.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
        menu.classList.remove("active");
      });
    }
  });
});
