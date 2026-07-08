/* =========================================================
   Ashiqur Rahman Rony, academic personal site
   Interactions: theme, nav, scroll spy, abstracts,
   back to top, and gentle reveal on scroll.
   ========================================================= */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ----- Theme: respect saved choice, else system preference ----- */
  (function initTheme() {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) root.classList.add('dark');
  })();

  function bindThemeToggle() {
    var toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', function () {
      var isDark = root.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      toggle.setAttribute('aria-pressed', String(isDark));
    });
  }

  /* ----- Mobile navigation with accessible toggle ----- */
  function bindMobileNav() {
    var btn = document.getElementById('nav-toggle');
    var nav = document.getElementById('topnav');
    if (!btn || !nav) return;

    function open() {
      nav.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      btn.setAttribute('aria-label', 'Close menu');
      var first = nav.querySelector('a');
      if (first) first.focus();
    }
    function close(returnFocus) {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Open menu');
      if (returnFocus) btn.focus();
    }

    btn.addEventListener('click', function () {
      if (nav.classList.contains('open')) close(false); else open();
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { close(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) close(true);
    });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== btn && !btn.contains(e.target)) {
        close(false);
      }
    });
  }

  /* ----- Scroll spy: highlight the nav link for the section in view ----- */
  function bindScrollSpy() {
    var sections = document.querySelectorAll('main section[id]');
    var links = document.querySelectorAll('.topnav a[href^="#"]');
    if (!sections.length || !links.length || !('IntersectionObserver' in window)) return;
    var map = {};
    links.forEach(function (l) { map[l.getAttribute('href').slice(1)] = l; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (l) { l.classList.remove('active'); });
        if (map[entry.target.id]) map[entry.target.id].classList.add('active');
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* ----- Publication abstracts: accessible expand and collapse ----- */
  function bindAbstracts() {
    document.querySelectorAll('.abstract-toggle').forEach(function (btn, i) {
      var item = btn.closest('.pub-item');
      var panel = item && item.querySelector('.abstract');
      if (!panel) return;
      if (!panel.id) panel.id = 'abstract-' + (i + 1);
      btn.setAttribute('aria-controls', panel.id);
      btn.addEventListener('click', function () {
        var isOpen = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!isOpen));
        panel.style.maxHeight = isOpen ? '0px' : panel.scrollHeight + 'px';
      });
    });
  }

  /* ----- Back to top control ----- */
  function bindBackToTop() {
    var btn = document.getElementById('to-top');
    if (!btn) return;
    function update() { btn.classList.toggle('show', window.scrollY > 600); }
    window.addEventListener('scroll', update, { passive: true });
    update();
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      var name = document.querySelector('.topbar-name a');
      if (name) name.focus();
    });
  }

  /* ----- Gentle reveal on scroll (skipped when motion is reduced) ----- */
  function bindReveal() {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;
    var sections = document.querySelectorAll('main section[id]');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px' });
    sections.forEach(function (s) {
      // Only animate sections that start below the fold, to avoid a flash.
      if (s.getBoundingClientRect().top > window.innerHeight * 0.9) {
        s.classList.add('reveal');
        io.observe(s);
      }
    });
  }

  /* ----- Footer year ----- */
  function setYear() {
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded', function () {
    bindThemeToggle();
    bindMobileNav();
    bindScrollSpy();
    bindAbstracts();
    bindBackToTop();
    bindReveal();
    setYear();
  });
})();
