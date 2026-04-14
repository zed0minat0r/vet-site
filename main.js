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

  // ---- Interactive Calendar Booking ----
  (function () {
    var MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var DAY_SLOTS = {
      1: ['12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'],     // Mon (12 PM–8 PM)
      2: ['9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM'], // Tue (9 AM–7 PM)
      3: ['9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'], // Wed (9 AM–8 PM)
      4: ['9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM']                // Thu
    };

    var calGrid   = document.getElementById('cal-grid');
    var calLabel  = document.getElementById('cal-month-label');
    var calPrev   = document.getElementById('cal-prev');
    var calNext   = document.getElementById('cal-next');
    var tsSection = document.getElementById('timeslot-section');
    var tsDateLbl = document.getElementById('timeslot-date-label');
    var tsGrid    = document.getElementById('timeslot-grid');
    var bfSection = document.getElementById('booking-form-section');
    var bSummary  = document.getElementById('booking-summary-bar');
    var bForm     = document.getElementById('booking-form');
    var bConfirm  = document.getElementById('booking-confirm');
    var confirmDetail = document.getElementById('confirm-detail');
    var bookAnother   = document.getElementById('book-another');

    if (!calGrid) return;

    var today = new Date();
    today.setHours(0,0,0,0);
    var viewYear  = today.getFullYear();
    var viewMonth = today.getMonth();
    var selectedDate = null;
    var selectedTime = null;

    function formatDateLong(d) {
      var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      return days[d.getDay()] + ', ' + MONTH_NAMES[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
    }

    function renderCalendar() {
      calLabel.textContent = MONTH_NAMES[viewMonth] + ' ' + viewYear;
      calGrid.innerHTML = '';

      var firstDay = new Date(viewYear, viewMonth, 1).getDay();
      var daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

      // Empty cells before first day
      for (var i = 0; i < firstDay; i++) {
        var empty = document.createElement('div');
        empty.className = 'cal-day cal-day--empty';
        empty.setAttribute('aria-hidden', 'true');
        calGrid.appendChild(empty);
      }

      for (var d = 1; d <= daysInMonth; d++) {
        var date = new Date(viewYear, viewMonth, d);
        var dow  = date.getDay(); // 0=Sun,1=Mon,...,6=Sat
        var isPast   = date < today;
        var isClosed = (dow === 0 || dow === 5 || dow === 6); // Sun, Fri, Sat
        var isToday  = date.getTime() === today.getTime();
        var isSelected = selectedDate && date.getTime() === selectedDate.getTime();

        var btn = document.createElement((!isPast && !isClosed) ? 'button' : 'div');
        btn.className = 'cal-day';

        if (isPast) {
          btn.className += ' cal-day--past';
          btn.setAttribute('aria-label', d + ' (past)');
        } else if (isClosed) {
          btn.className += ' cal-day--closed';
          btn.setAttribute('aria-label', d + ' (closed)');
        } else {
          btn.className += ' cal-day--available';
          if (isSelected) btn.className += ' cal-day--selected';
          btn.setAttribute('type', 'button');
          btn.setAttribute('aria-label', formatDateLong(date) + (isSelected ? ', selected' : ''));
          btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
          btn.setAttribute('tabindex', '0');
          (function(capturedDate) {
            btn.addEventListener('click', function () { selectDate(capturedDate); });
            btn.addEventListener('keydown', function (e) {
              if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectDate(capturedDate); }
            });
          })(date);
        }

        if (isToday) btn.classList.add('cal-day--today-marker');
        btn.textContent = d;
        calGrid.appendChild(btn);
      }

      // Disable prev button if already at current month
      var minMonth = today.getMonth();
      var minYear  = today.getFullYear();
      calPrev.disabled = (viewYear === minYear && viewMonth === minMonth);
      calPrev.style.opacity = calPrev.disabled ? '0.35' : '';
    }

    function selectDate(date) {
      selectedDate = date;
      selectedTime = null;

      renderCalendar();

      var dow = date.getDay();
      var slots = DAY_SLOTS[dow] || [];

      tsDateLbl.textContent = formatDateLong(date);
      tsGrid.innerHTML = '';
      slots.forEach(function (slot) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'timeslot-btn';
        btn.textContent = slot;
        btn.setAttribute('aria-label', slot + ' on ' + formatDateLong(date));
        btn.addEventListener('click', function () { selectTime(slot, btn); });
        tsGrid.appendChild(btn);
      });

      tsSection.hidden = false;
      bfSection.hidden = true;
      bConfirm.hidden = true;

      tsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function selectTime(slot, btnEl) {
      selectedTime = slot;

      // Highlight selected time
      tsGrid.querySelectorAll('.timeslot-btn').forEach(function (b) {
        b.classList.toggle('timeslot-btn--selected', b === btnEl);
      });

      bSummary.textContent = formatDateLong(selectedDate) + '  \u2022  ' + selectedTime;
      bfSection.hidden = false;
      bConfirm.hidden = true;

      bfSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function showFormError(input, msg) {
      var errEl = input.parentElement.querySelector('.form-error');
      if (errEl) errEl.textContent = msg;
    }
    function clearFormError(input) {
      var errEl = input.parentElement.querySelector('.form-error');
      if (errEl) errEl.textContent = '';
    }

    if (bForm) {
      bForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var petName  = bForm.querySelector('#bf-pet-name');
        var owner    = bForm.querySelector('#bf-owner');
        var phone    = bForm.querySelector('#bf-phone');
        var email    = bForm.querySelector('#bf-email');
        var petType  = bForm.querySelector('#bf-pet-type');
        var reason   = bForm.querySelector('#bf-reason');
        var valid    = true;

        if (!petName.value.trim()) { showFormError(petName, 'Enter your pet\'s name.'); valid = false; } else { clearFormError(petName); }
        if (!owner.value.trim() || owner.value.trim().length < 2) { showFormError(owner, 'Enter your name.'); valid = false; } else { clearFormError(owner); }
        if (!phone.value.trim()) { showFormError(phone, 'Enter a phone number.'); valid = false; } else { clearFormError(phone); }
        var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRe.test(email.value.trim())) { showFormError(email, 'Enter a valid email.'); valid = false; } else { clearFormError(email); }

        if (valid) {
          confirmDetail.textContent = owner.value.trim() + ' & ' + petName.value.trim() + ' (' + petType.value + ') \u2014 ' + reason.value + ' on ' + formatDateLong(selectedDate) + ' at ' + selectedTime + '.';
          bfSection.hidden = true;
          tsSection.hidden = true;
          bConfirm.hidden = false;
          bConfirm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });

      bForm.querySelectorAll('input').forEach(function (field) {
        field.addEventListener('input', function () { clearFormError(field); });
      });
    }

    if (bookAnother) {
      bookAnother.addEventListener('click', function () {
        selectedDate = null;
        selectedTime = null;
        bConfirm.hidden = true;
        tsSection.hidden = true;
        bfSection.hidden = true;
        if (bForm) bForm.reset();
        renderCalendar();
        calGrid.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }

    calPrev.addEventListener('click', function () {
      viewMonth--;
      if (viewMonth < 0) { viewMonth = 11; viewYear--; }
      renderCalendar();
    });

    calNext.addEventListener('click', function () {
      viewMonth++;
      if (viewMonth > 11) { viewMonth = 0; viewYear++; }
      renderCalendar();
    });

    renderCalendar();
  })();

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
