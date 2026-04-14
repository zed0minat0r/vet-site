(function () {
  'use strict';

  // ---- Mobile nav ----
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Close on link click
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // ---- Photo track drag-to-scroll ----
  var track = document.getElementById('photo-track');
  if (track) {
    var isDragging = false;
    var startX = 0;
    var scrollLeft = 0;

    track.addEventListener('mousedown', function (e) {
      isDragging = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      track.style.userSelect = 'none';
    });

    document.addEventListener('mouseup', function () {
      isDragging = false;
      track.style.userSelect = '';
    });

    document.addEventListener('mousemove', function (e) {
      if (!isDragging) return;
      e.preventDefault();
      var x = e.pageX - track.offsetLeft;
      var walk = (x - startX) * 1.4;
      track.scrollLeft = scrollLeft - walk;
    });
  }

  // ---- Testimonial carousel ----
  var quotes = document.querySelectorAll('.pull-quote-block');
  var dots = document.querySelectorAll('.quote-dot');
  var current = 0;
  var autoTimer;

  function showQuote(idx) {
    quotes.forEach(function (q, i) {
      q.classList.toggle('active', i === idx);
      q.setAttribute('aria-hidden', i !== idx ? 'true' : 'false');
    });
    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === idx);
      d.setAttribute('aria-selected', i === idx ? 'true' : 'false');
    });
    current = idx;
  }

  function advance() {
    showQuote((current + 1) % quotes.length);
  }

  function startAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(advance, 4500);
  }

  if (quotes.length > 1) {
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        var idx = parseInt(dot.getAttribute('data-idx'), 10);
        showQuote(idx);
        startAuto();
      });
    });
    startAuto();
  }

  // ---- Scroll reveal ----
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // ---- Contact form validation ----
  var form = document.getElementById('contact-form');
  var successMsg = document.getElementById('form-success');

  function showError(input, msg) {
    var errEl = input.parentElement.querySelector('.form-error');
    if (errEl) errEl.textContent = msg;
  }

  function clearError(input) {
    var errEl = input.parentElement.querySelector('.form-error');
    if (errEl) errEl.textContent = '';
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      var name = form.querySelector('#name');
      var email = form.querySelector('#email');
      var message = form.querySelector('#message');

      // Name
      if (!name.value.trim() || name.value.trim().length < 2) {
        showError(name, 'Please enter your name.');
        valid = false;
      } else {
        clearError(name);
      }

      // Email
      var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRe.test(email.value.trim())) {
        showError(email, 'Please enter a valid email address.');
        valid = false;
      } else {
        clearError(email);
      }

      // Message
      if (!message.value.trim() || message.value.trim().length < 10) {
        showError(message, 'Please tell us a bit more (at least 10 characters).');
        valid = false;
      } else {
        clearError(message);
      }

      if (valid && successMsg) {
        form.reset();
        successMsg.hidden = false;
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });

    // Clear errors on input
    form.querySelectorAll('input, textarea').forEach(function (field) {
      field.addEventListener('input', function () { clearError(field); });
    });
  }

  // ---- Footer year ----
  var yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
