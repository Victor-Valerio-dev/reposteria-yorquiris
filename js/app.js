/* ============================================
   REPOSTERÍA YORQUIRIS
   Interactividad — Desarrollado por Valeron
   ============================================ */

/* --------------------------------------------------
   1. EFECTO HEADER AL HACER SCROLL
   Agrega sombra al header cuando el usuario baja
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
   Resalta el link del menú según la sección visible
-------------------------------------------------- */
const sections = document.querySelectorAll("section[id], header[id]");
const navLinks = document.querySelectorAll(".header__nav-list a");

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
   Toggle del menú en pantallas pequeñas
-------------------------------------------------- */
const menuToggle = document.querySelector(".header__menu-toggle");
const navMenu = document.querySelector(".header__nav");
// AQUÍ ESTABA EL ERROR: Faltaba capturar los enlaces
const navLinks = document.querySelectorAll(".header__nav-list a");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("header__nav--open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.classList.toggle("is-active");
  });

  // Cierra el menú al hacer click en cualquier enlace
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("header__nav--open");
      menuToggle.setAttribute("aria-expanded", false);
      menuToggle.classList.remove("is-active");
    });
  });
}
