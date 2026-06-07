/* ============================================
   REPOSTERÍA YORQUIRIS
   Interactividad — Desarrollado por Valeron
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  /* --------------------------------------------------
     1. EFECTO HEADER AL HACER SCROLL
  -------------------------------------------------- */
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  });

  /* --------------------------------------------------
     2. ENLACE ACTIVO EN NAVEGACIÓN
  -------------------------------------------------- */
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".header__nav-list a"); // ✅ única declaración

  const observerOptions = {
    root: null,
    rootMargin: "-40% 0px -55% 0px",
    threshold: 0,
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => sectionObserver.observe(section));

  /* --------------------------------------------------
     3. MENÚ HAMBURGUESA — MÓVIL
     navLinks se reutiliza desde arriba, sin redeclarar
  -------------------------------------------------- */
  const menuToggle = document.querySelector(".header__menu-toggle");
  const navMenu = document.querySelector(".header__nav");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("header__nav--open");
      menuToggle.setAttribute("aria-expanded", isOpen);
      menuToggle.classList.toggle("is-active");
    });

    // Reutiliza navLinks declarado arriba ✅
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("header__nav--open");
        menuToggle.setAttribute("aria-expanded", false);
        menuToggle.classList.remove("is-active");
      });
    });
  }
}); // fin DOMContentLoaded
