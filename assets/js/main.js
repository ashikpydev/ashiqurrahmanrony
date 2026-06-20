/* Ashiqur Rahman Rony, academic site interactions */
(function () {
  'use strict';

  var root = document.documentElement;
  var stored = localStorage.getItem('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (stored === 'dark' || (!stored && prefersDark)) root.classList.add('dark');

  document.addEventListener('DOMContentLoaded', function () {
    // Theme toggle
    var toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        root.classList.toggle('dark');
        localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
      });
    }

    // Mobile nav
    var navToggle = document.querySelector('.nav-toggle');
    var topnav = document.querySelector('.topnav');
    if (navToggle && topnav) {
      navToggle.addEventListener('click', function () { topnav.classList.toggle('open'); });
      topnav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { topnav.classList.remove('open'); });
      });
    }

    // Scrollspy
    var sections = document.querySelectorAll('section[id]');
    var links = document.querySelectorAll('.topnav a[href^="#"]');
    if (sections.length && links.length && 'IntersectionObserver' in window) {
      var map = {};
      links.forEach(function (l) { map[l.getAttribute('href').slice(1)] = l; });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            links.forEach(function (l) { l.classList.remove('active'); });
            if (map[entry.target.id]) map[entry.target.id].classList.add('active');
          }
        });
      }, { rootMargin: '-40% 0px -55% 0px' });
      sections.forEach(function (s) { io.observe(s); });
    }

    // Publication abstract toggles
    document.querySelectorAll('.abstract-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var panel = btn.closest('.pub-item').querySelector('.abstract');
        if (!panel) return;
        var open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', open ? 'false' : 'true');
        panel.style.maxHeight = open ? '0px' : panel.scrollHeight + 'px';
      });
    });

    // Year
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  });
})();
