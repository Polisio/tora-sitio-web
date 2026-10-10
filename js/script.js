/* TORA · Sucursal Querétaro — interacciones del sitio */
(function () {
  'use strict';

  /* ---------- Menú móvil ---------- */
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');

  function closeNav() {
    nav.classList.remove('nav--open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Abrir menú');
  }

  navToggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('nav--open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  // Cerrar el menú al elegir una opción
  nav.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  // Cerrar con tecla Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  /* ---------- Sombra del header al hacer scroll ---------- */
  var header = document.getElementById('header');
  function onScroll() {
    header.classList.toggle('header--scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Animaciones de aparición (reveal) ---------- */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: mostrar todo si no hay IntersectionObserver
    revealEls.forEach(function (el) { el.classList.add('reveal--visible'); });
  }

  /* ---------- Año dinámico en el footer ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
})();
