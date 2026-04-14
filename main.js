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

  // ---- Highlight today's hours ----
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var todayName = days[new Date().getDay()];
  var hoursRows = document.querySelectorAll('.hours-table tbody tr');
  hoursRows.forEach(function (row) {
    var th = row.querySelector('th');
    if (th && th.textContent.trim() === todayName) {
      row.classList.add('today');
    }
  });

  // ---- Sticky call bar (mobile) ----
  var stickyBar = document.getElementById('sticky-call-bar');
  var heroSection = document.querySelector('.hero');
  if (stickyBar && heroSection) {
    var stickyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          stickyBar.classList.add('visible');
          stickyBar.setAttribute('aria-hidden', 'false');
          stickyBar.querySelector('a').removeAttribute('tabindex');
        } else {
          stickyBar.classList.remove('visible');
          stickyBar.setAttribute('aria-hidden', 'true');
          stickyBar.querySelector('a').setAttribute('tabindex', '-1');
        }
      });
    }, { threshold: 0.1 });
    stickyObserver.observe(heroSection);
  }

  // ---- Footer year ----
  var yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Testimonials drag-to-scroll ----
  var testiTrack = document.querySelector('.testimonials-track-wrap');
  if (testiTrack) {
    var isDown = false;
    var startX = 0;
    var scrollLeft = 0;

    testiTrack.addEventListener('mousedown', function (e) {
      isDown = true;
      startX = e.pageX - testiTrack.offsetLeft;
      scrollLeft = testiTrack.scrollLeft;
    });
    testiTrack.addEventListener('mouseleave', function () { isDown = false; });
    testiTrack.addEventListener('mouseup', function () { isDown = false; });
    testiTrack.addEventListener('mousemove', function (e) {
      if (!isDown) return;
      e.preventDefault();
      var x = e.pageX - testiTrack.offsetLeft;
      var walk = (x - startX) * 1.4;
      testiTrack.scrollLeft = scrollLeft - walk;
    });
  }

  // ---- Scroll progress bar ----
  var progressBar = document.getElementById('scroll-progress');
  if (progressBar && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = Math.min(pct, 100) + '%';
    }, { passive: true });
  }

  // ---- Hero parallax on scroll ----
  var heroImg = document.querySelector('.hero-img');
  if (heroImg && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    var heroSection = heroImg.closest('.hero');
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var scrollY = window.pageYOffset;
          var heroH = heroSection ? heroSection.offsetHeight : window.innerHeight;
          if (scrollY < heroH) {
            heroImg.style.transform = 'translateY(' + (scrollY * 0.3) + 'px)';
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

})();
