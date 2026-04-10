(function () {
  'use strict';

  // --- Time-Aware Hero Greeting ---
  var greetingEl = document.querySelector('.hero-greeting');
  if (greetingEl) {
    var hour = new Date().getHours();
    var greeting;
    if (hour >= 5 && hour < 12) {
      greeting = 'Good morning! Ready to care for your pet today.';
    } else if (hour >= 12 && hour < 17) {
      greeting = 'Good afternoon! Your pet deserves the best care.';
    } else if (hour >= 17 && hour < 21) {
      greeting = 'Good evening! We are here for your furry family.';
    } else {
      greeting = 'Open 24/7 for emergencies. Your pet is always our priority.';
    }
    greetingEl.textContent = greeting;
    greetingEl.classList.add('is-ready');
  }

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
        // Hide portal strip so "Coming Soon" doesn't appear at the worst possible moment
        var portalStrip = document.querySelector('.portal-strip');
        if (portalStrip) {
          portalStrip.style.display = 'none';
        }
        if (formSuccess) {
          formSuccess.hidden = false;
          var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          formSuccess.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'center' });
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

  // --- Live open/closed status & today's hours highlight ---
  (function () {
    var statusPill = document.querySelector('.location-status-pill');
    var hoursTable = document.querySelector('.hours-table');
    if (!statusPill || !hoursTable) return;

    var now = new Date();
    var day = now.getDay(); // 0=Sun
    var hour = now.getHours();
    var min = now.getMinutes();
    var timeDecimal = hour + min / 60;

    // Highlight today's row
    var rows = hoursTable.querySelectorAll('tr');
    rows.forEach(function (row) {
      var days = row.getAttribute('data-days');
      if (days && days.split(',').indexOf(String(day)) !== -1) {
        row.classList.add('is-today');
      }
    });

    // Determine open/closed
    var isOpen = false;
    if (day >= 1 && day <= 5) {
      isOpen = timeDecimal >= 7.5 && timeDecimal < 18;
    } else if (day === 6) {
      isOpen = timeDecimal >= 8 && timeDecimal < 14;
    }

    var dot = statusPill.querySelector('.status-dot');
    if (dot) {
      dot.style.background = isOpen ? '#22c55e' : '#94a3b8';
      dot.style.boxShadow = isOpen ? '0 0 6px rgba(34,197,94,0.5)' : 'none';
    }
  })();

  // --- Testimonial carousel dots ---
  var carouselGrid = document.querySelector('.testimonials-grid');
  var dots = document.querySelectorAll('.carousel-dot');
  if (carouselGrid && dots.length) {
    var cards = carouselGrid.querySelectorAll('.testimonial-card');
    var dotObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var idx = Array.prototype.indexOf.call(cards, entry.target);
          dots.forEach(function (dot, i) {
            dot.classList.toggle('active', i === idx);
            dot.setAttribute('aria-current', i === idx ? 'true' : 'false');
          });
        }
      });
    }, { root: carouselGrid, threshold: 0.6 });
    cards.forEach(function (card) { dotObserver.observe(card); });
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        cards[i].scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'nearest', inline: 'center' });
      });
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
              link.classList.add('nav-link-active');
            } else {
              link.classList.remove('nav-link-active');
            }
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // --- Collapsible Sections ---
  function setupToggle(btnId, hiddenClass) {
    var btn = document.getElementById(btnId);
    if (!btn) return;
    btn.addEventListener('click', function () {
      var items = document.querySelectorAll('.' + hiddenClass);
      var isExpanded = btn.getAttribute('aria-expanded') === 'true';
      items.forEach(function (item) { item.hidden = isExpanded; });
      btn.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
      btn.textContent = isExpanded ? btn.textContent.replace('−', '+') : btn.textContent.replace('+', '−');
    });
  }
  setupToggle('servicesToggle', 'services-collapsible');
  setupToggle('teamToggle', 'team-collapsible');

})();
