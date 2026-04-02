(function () {
  'use strict';

  // --- Mobile Nav Toggle ---
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      navMenu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
      });
    });
  }

  // --- Sticky header shadow on scroll ---
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
      } else {
        header.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  // --- Set min date on booking form to today ---
  var dateInput = document.getElementById('preferred-date');
  if (dateInput) {
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var dd = String(today.getDate()).padStart(2, '0');
    dateInput.setAttribute('min', yyyy + '-' + mm + '-' + dd);
  }

  // --- Form Validation ---
  const form = document.getElementById('booking-form');
  const formSuccess = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var isValid = true;

      // Clear previous errors
      form.querySelectorAll('.error-msg').forEach(function (el) {
        el.textContent = '';
      });
      form.querySelectorAll('.invalid').forEach(function (el) {
        el.classList.remove('invalid');
      });

      // Validate required fields
      var requiredFields = [
        { id: 'owner-name', message: 'Please enter your name' },
        { id: 'owner-email', message: 'Please enter a valid email' },
        { id: 'owner-phone', message: 'Please enter your phone number' },
        { id: 'pet-name', message: "Please enter your pet's name" }
      ];

      requiredFields.forEach(function (field) {
        var input = document.getElementById(field.id);
        if (!input) return;

        var value = input.value.trim();
        var errorEl = input.parentElement.querySelector('.error-msg');

        if (!value) {
          input.classList.add('invalid');
          if (errorEl) errorEl.textContent = field.message;
          isValid = false;
        }

        // Email format check
        if (field.id === 'owner-email' && value) {
          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            input.classList.add('invalid');
            if (errorEl) errorEl.textContent = 'Please enter a valid email address';
            isValid = false;
          }
        }

        // Phone format check
        if (field.id === 'owner-phone' && value) {
          var digits = value.replace(/\D/g, '');
          if (digits.length < 10) {
            input.classList.add('invalid');
            if (errorEl) errorEl.textContent = 'Please enter a valid 10-digit phone number';
            isValid = false;
          }
        }
      });

      if (isValid) {
        // Show success message
        form.querySelectorAll('input, select, textarea, button').forEach(function (el) {
          el.disabled = true;
        });
        if (formSuccess) {
          formSuccess.hidden = false;
          formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        // Focus first invalid field
        var firstInvalid = form.querySelector('.invalid');
        if (firstInvalid) firstInvalid.focus();
      }
    });

    // Real-time validation clearing
    form.querySelectorAll('input, select, textarea').forEach(function (input) {
      input.addEventListener('input', function () {
        this.classList.remove('invalid');
        var errorEl = this.parentElement.querySelector('.error-msg');
        if (errorEl) errorEl.textContent = '';
      });
    });
  }

  // --- Scroll-to-hide sticky CTA bar ---
  var ctaBar = document.querySelector('.mobile-cta-bar');
  if (ctaBar) {
    var lastScrollY = window.scrollY;
    var ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var currentY = window.scrollY;
          if (currentY > lastScrollY && currentY > 100) {
            ctaBar.classList.add('cta-hidden');
          } else {
            ctaBar.classList.remove('cta-hidden');
          }
          lastScrollY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // --- Scroll-triggered fade-in-up ---
  var fadeEls = document.querySelectorAll('.fade-in-up');
  if (fadeEls.length) {
    var fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Stagger siblings by index
          var parent = entry.target.parentElement;
          var siblings = parent.querySelectorAll('.fade-in-up');
          var idx = Array.prototype.indexOf.call(siblings, entry.target);
          entry.target.style.animationDelay = (idx * 0.07) + 's';
          entry.target.classList.add('is-visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    fadeEls.forEach(function (el) {
      fadeObserver.observe(el);
    });
  }

  // --- Active nav link highlighting ---
  var sections = document.querySelectorAll('section[id], footer[id]');
  var navLinks = document.querySelectorAll('.nav-menu a');

  if (sections.length && navLinks.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            if (link.getAttribute('href') === '#' + id) {
              link.style.color = 'var(--accent)';
            } else {
              link.style.color = '';
            }
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

})();
