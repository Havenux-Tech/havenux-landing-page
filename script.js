(function () {
  'use strict';

  // Top banner dismiss
  var banner = document.getElementById('topBanner');
  var bannerClose = document.getElementById('bannerClose');
  if (banner && bannerClose) {
    bannerClose.addEventListener('click', function () {
      banner.classList.add('is-hidden');
    });
  }

  // Mobile nav
  var navToggle = document.getElementById('navToggle');
  var navClose = document.getElementById('navClose');
  var mobileNav = document.getElementById('mobileNav');

  function openNav() {
    mobileNav.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    mobileNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (navToggle && navClose && mobileNav) {
    navToggle.addEventListener('click', openNav);
    navClose.addEventListener('click', closeNav);

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        closeNav();
      }
    });
  }

  // Contact form -> WhatsApp
  var WHATSAPP_NUMBER = '9779714234414';
  var contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = contactForm.querySelector('#cf-name').value.trim();
      var contact = contactForm.querySelector('#cf-phone').value.trim();
      var interest = contactForm.querySelector('#cf-interest').value;
      var message = contactForm.querySelector('#cf-message').value.trim();

      var lines = [
        'Hi Havenux, my name is ' + name + '.',
        "I'm interested in: " + interest,
        'Message: ' + message,
        'You can reach me at: ' + contact
      ];

      var text = encodeURIComponent(lines.join('\n'));
      var url = 'https://api.whatsapp.com/send?phone=' + WHATSAPP_NUMBER + '&text=' + text;

      window.open(url, '_blank', 'noopener');
    });
  }

  // Scroll reveal (skips entirely if user prefers reduced motion)
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');

  if (!prefersReducedMotion && 'IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }
})();
