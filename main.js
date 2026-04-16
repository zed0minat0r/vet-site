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

  // ---- Active nav link tracking ----
  (function () {
    var navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    var sections = [];
    navLinks.forEach(function (link) {
      var id = link.getAttribute('href').replace('#', '');
      var el = id === 'top' ? document.querySelector('.hero') : document.getElementById(id);
      if (el) sections.push({ el: el, link: link });
    });
    if (!sections.length || !('IntersectionObserver' in window)) return;
    var current = null;
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var match = sections.find(function (s) { return s.el === entry.target; });
          if (match && match !== current) {
            if (current) current.link.removeAttribute('aria-current');
            match.link.setAttribute('aria-current', 'true');
            current = match;
          }
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });
    sections.forEach(function (s) { navObserver.observe(s.el); });
  }());

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

  // ---- Section-level reveals (headings, eyebrows, etc.) ----
  var sectionRevealEls = document.querySelectorAll('.section-reveal');
  if ('IntersectionObserver' in window && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          sectionObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });
    sectionRevealEls.forEach(function (el) { sectionObserver.observe(el); });
  } else {
    sectionRevealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // ---- Team card directional slide reveals ----
  var teamCards = document.querySelectorAll('.team-card--from-left, .team-card--from-right');
  if ('IntersectionObserver' in window && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    var teamObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          teamObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    teamCards.forEach(function (card, idx) {
      card.style.transitionDelay = (idx * 0.12) + 's';
      teamObserver.observe(card);
    });
  } else {
    teamCards.forEach(function (el) { el.classList.add('visible'); });
  }

  // ---- About image parallax ----
  var aboutImg = document.querySelector('.about-img-wrap img');
  if (aboutImg && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    var aboutSection = document.querySelector('.about');
    var aboutTicking = false;
    window.addEventListener('scroll', function () {
      if (!aboutTicking) {
        window.requestAnimationFrame(function () {
          if (aboutSection) {
            var rect = aboutSection.getBoundingClientRect();
            var viewH = window.innerHeight;
            if (rect.top < viewH && rect.bottom > 0) {
              var progress = 1 - (rect.bottom / (viewH + rect.height));
              aboutImg.style.transform = 'translateY(' + (progress * -22) + 'px)';
            }
          }
          aboutTicking = false;
        });
        aboutTicking = true;
      }
    }, { passive: true });
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

  // ---- Testimonials dot indicator + counter ----
  (function () {
    var wrap = document.querySelector('.testimonials-track-wrap');
    var dotsRow = document.getElementById('testi-dots-row');
    var counter = document.getElementById('testi-counter');
    if (!wrap || !dotsRow || !counter) return;

    var cards = wrap.querySelectorAll('.testi-card');
    var total = cards.length;
    if (!total) return;

    // Build dots (one per card)
    var dots = [];
    for (var i = 0; i < total; i++) {
      var dot = document.createElement('span');
      dot.className = 'testi-dot' + (i === 0 ? ' active' : '');
      dotsRow.appendChild(dot);
      dots.push(dot);
    }
    counter.textContent = '1 of ' + total;

    function getActiveIdx() {
      var cardW = cards[0].offsetWidth + 20; // 20px gap
      return Math.min(Math.round(wrap.scrollLeft / cardW), total - 1);
    }

    function updateDots() {
      var idx = getActiveIdx();
      counter.textContent = (idx + 1) + ' of ' + total;
      dots.forEach(function (d, j) {
        d.classList.toggle('active', j === idx);
      });
    }

    wrap.addEventListener('scroll', updateDots, { passive: true });
    updateDots();
  }());

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

  // ---- Sticky scroll-driven services horizontal pan ----
  (function () {
    var outer = document.querySelector('.services-sticky-outer');
    var inner = document.querySelector('.services-sticky-inner');
    var track = document.getElementById('services-cards-track');
    var progressFill = document.getElementById('services-progress-fill');
    if (!outer || !inner || !track) return;

    // If reduced motion, fall back to native horizontal scroll
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      track.style.overflowX = 'auto';
      track.style.scrollSnapType = 'x mandatory';
      return;
    }

    var ticking = false;

    function update() {
      var outerRect = outer.getBoundingClientRect();
      var outerH = outer.offsetHeight;
      var innerH = inner.offsetHeight;
      // scrolled distance within the outer container
      var scrolled = -outerRect.top;
      var maxScroll = outerH - innerH;

      if (maxScroll <= 0) return;

      var progress = Math.max(0, Math.min(1, scrolled / maxScroll));

      // How far we need to translate horizontally
      var trackW = track.scrollWidth;
      var viewW = inner.offsetWidth;
      var maxTranslate = trackW - viewW;
      if (maxTranslate <= 0) { progress = 0; }

      var translateX = -progress * Math.max(0, maxTranslate);
      track.style.transform = 'translateX(' + translateX + 'px)';

      if (progressFill) {
        progressFill.style.width = (progress * 100) + '%';
      }

      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });

    // Run once on load
    update();
  }());

  // ---- Parallax photo breaks ----
  (function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var breaks = document.querySelectorAll('.parallax-break-img');
    if (!breaks.length) return;

    var ticking = false;

    function updateParallax() {
      var scrollY = window.pageYOffset;
      breaks.forEach(function (img) {
        var parent = img.parentElement;
        var rect = parent.getBoundingClientRect();
        var viewH = window.innerHeight;
        if (rect.bottom > 0 && rect.top < viewH) {
          // progress: 0 when bottom just enters, 1 when top just leaves
          var progress = 1 - (rect.bottom / (viewH + rect.height));
          // move bg image at 40% of scroll speed (parallax depth)
          var shift = progress * -28;
          img.style.transform = 'translateY(' + shift + '%)';
        }
      });
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });

    updateParallax();
  }());

  // ---- Trust stat counter animation ----
  (function () {
    if (!('IntersectionObserver' in window)) return;
    if (!window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return;

    var statNumbers = document.querySelectorAll('.trust-stat-number');
    if (!statNumbers.length) return;

    // Parse numeric value from text, preserving suffix (+ or star)
    function parseStatValue(text) {
      text = text.trim();
      var suffix = '';
      var prefix = '';
      if (text.indexOf('+') !== -1) { suffix = '+'; text = text.replace('+', ''); }
      if (text.indexOf('\u2605') !== -1) { suffix = '\u2605'; text = text.replace('\u2605', ''); }
      var num = parseFloat(text.replace(/,/g, ''));
      return { num: num, suffix: suffix, prefix: prefix, original: text };
    }

    function animateCounter(el, target, suffix, duration) {
      var start = 0;
      var startTime = null;
      var isFloat = target % 1 !== 0;
      var formatNum = function (n) {
        if (isFloat) return n.toFixed(1);
        if (n >= 1000) return Math.round(n).toLocaleString();
        return Math.round(n).toString();
      };
      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        // Ease out quad
        var eased = 1 - (1 - progress) * (1 - progress);
        var current = start + (target - start) * eased;
        el.textContent = formatNum(current) + suffix;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = formatNum(target) + suffix;
        }
      }
      window.requestAnimationFrame(step);
    }

    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var parsed = parseStatValue(el.textContent);
          if (!isNaN(parsed.num) && parsed.num > 0) {
            animateCounter(el, parsed.num, parsed.suffix, 1200);
          }
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(function (el) {
      if (el.hasAttribute('data-no-counter')) return;
      counterObserver.observe(el);
    });
  }());

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
