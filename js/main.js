// Initialize Lucide icons
lucide.createIcons();

// ─── HERO BACKGROUND CAROUSEL ───
(function () {
  var slides = document.querySelectorAll('#hero-bg-carousel .carousel-slide');
  if (!slides.length) return;

  // Set background-image from data-bg if not already inline
  function loadSlide(slide) {
    if (!slide.style.backgroundImage && slide.dataset.bg) {
      slide.style.backgroundImage = "url('" + slide.dataset.bg + "')";
    }
  }

  // Silently fetch an image into browser cache
  function preloadSlide(slide) {
    if (slide && slide.dataset.bg && !slide.dataset.preloaded) {
      slide.dataset.preloaded = '1';
      var img = new Image();
      img.src = slide.dataset.bg;
    }
  }

  var current = 0;
  slides[current].classList.add('active');

  // Preload slide 1 after 2 s — well ahead of its 6 s debut
  setTimeout(function () { preloadSlide(slides[1]); }, 2000);

  setInterval(function () {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    loadSlide(slides[current]);          // paint background before fade-in
    slides[current].classList.add('active');
    preloadSlide(slides[(current + 1) % slides.length]); // queue next
  }, 6000);
}());

// ─── SCROLL PROGRESS BAR ───
(function () {
  var bar = document.getElementById('scroll-progress');
  if (!bar) return;
  var ticking = false;
  function update() {
    var doc = document.documentElement;
    var scrolled = doc.scrollTop / (doc.scrollHeight - doc.clientHeight) || 0;
    bar.style.transform = 'scaleX(' + scrolled + ')';
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
}());

// ─── STICKY NAV ───
(function () {
  var nav  = document.getElementById('sticky-nav');
  var hero = document.getElementById('hero');
  if (!nav || !hero) return;
  var observer = new IntersectionObserver(function (entries) {
    nav.classList.toggle('visible', !entries[0].isIntersecting);
  }, { threshold: 0 });
  observer.observe(hero);
}());

// ─── 3D CARD TILT ───
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if ('ontouchstart' in window) return; // skip on touch devices

  document.querySelectorAll('.glass-card').forEach(function (card) {
    if (card.classList.contains('artists-card')) return;
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width  - 0.5;
      var y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transition = 'transform 0.08s ease, border-color 0.25s ease, box-shadow 0.25s ease';
      card.style.transform = 'perspective(900px) rotateY(' + (x * 9) + 'deg) rotateX(' + (-y * 9) + 'deg) translateZ(6px)';
    });
    card.addEventListener('mouseleave', function () {
      card.style.transition = 'transform 0.55s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.25s ease, box-shadow 0.25s ease';
      card.style.transform = '';
    });
  });
}());

// ─── COUNT-UP ANIMATION ───
(function () {
  if (!('IntersectionObserver' in window)) return;
  document.querySelectorAll('.mission-stat-number').forEach(function (el) {
    var target = parseFloat(el.textContent.replace(/,/g, ''));
    if (isNaN(target)) return;
    var original = el.textContent;
    var started  = false;
    var observer = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting || started) return;
      started = true;
      observer.disconnect();
      var start    = null;
      var duration = 1400;
      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var ease     = 1 - Math.pow(1 - progress, 3);
        var value    = Math.round(ease * target);
        el.textContent = value;
        if (progress < 1) window.requestAnimationFrame(step);
        else el.textContent = original;
      }
      window.requestAnimationFrame(step);
    }, { threshold: 0.6 });
    observer.observe(el);
  });
}());

// ─── HERO PARALLAX ───
(function () {
  // Respect reduced-motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var hero     = document.getElementById('hero');
  var carousel = document.getElementById('hero-bg-carousel');
  if (!hero || !carousel) return;

  var ticking = false;

  function update() {
    var scrollY    = window.pageYOffset;
    var heroBottom = hero.offsetTop + hero.offsetHeight;

    // Only move while hero is on screen
    if (scrollY < heroBottom) {
      carousel.style.transform = 'translateY(' + (scrollY * 0.35) + 'px)';
    }
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
}());

// ─── SCROLL ANIMATIONS ───
(function () {
  if (!('IntersectionObserver' in window)) return;

  // Elements to animate — excludes #hero which uses CSS keyframes
  var selectors = [
    '#what-is-next .section-tag',
    '#what-is-next h2',
    '#what-is-next .what-left p',
    '#what-is-next .glass-card',
    '#six-phases .section-tag',
    '#six-phases h2',
    '#six-phases .phases-header p',
    '#six-phases .glass-card',
    '#for-artists .section-tag',
    '#for-artists h2',
    '#for-artists .artists-card > p',
    '#for-artists .step-item',
    '#kca .section-tag',
    '#kca h2',
    '#kca .kca-header p',
    '#kca .glass-card',
    '#stay-updated .section-tag',
    '#stay-updated h2',
    '#stay-updated .stay-inner > p',
    '#stay-updated .subscribe-form',
    '#stay-updated .social-links',
    'footer .footer-brand',
    'footer .footer-copy'
  ];

  var elements = document.querySelectorAll(selectors.join(','));

  // Stagger cards that share the same grid parent
  var grids = document.querySelectorAll('.what-cards, .phases-grid, .kca-grid');
  grids.forEach(function (grid) {
    var cards = grid.querySelectorAll('.glass-card');
    cards.forEach(function (card, i) {
      card.style.setProperty('--anim-delay', (i * 0.1) + 's');
    });
  });

  // Stagger step items
  document.querySelectorAll('.step-item').forEach(function (el, i) {
    el.style.setProperty('--anim-delay', (i * 0.08) + 's');
  });

  // Mark fade-only elements
  var fadeOnly = ['#what-is-next .what-left p', '#for-artists .artists-card > p',
    '#kca .kca-header p', '#stay-updated .stay-inner > p'];
  document.querySelectorAll(fadeOnly.join(',')).forEach(function (el) {
    el.setAttribute('data-anim', 'fade');
  });

  elements.forEach(function (el) { el.setAttribute('data-animate', ''); });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(function (el) { observer.observe(el); });
}());

// ─── SUBSCRIBE FORM (Formspree) ───
function handleSubscribe(e) {
  e.preventDefault();
  var form = e.target;
  var input = form.querySelector('.subscribe-input');
  var btn = form.querySelector('.subscribe-btn');
  var email = input.value.trim();
  if (!email) return;

  btn.textContent = 'Sending\u2026';
  btn.disabled = true;

  fetch('https://formspree.io/f/mdayknvl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ email: email })
  })
  .then(function (res) { return res.json(); })
  .then(function (data) {
    if (data.ok) {
      btn.textContent = 'Subscribed!';
      btn.style.background = '#fff';
      btn.style.color = '#0A0A0A';
      input.value = '';
      setTimeout(function () {
        btn.textContent = 'Subscribe';
        btn.style.background = '';
        btn.style.color = '';
        btn.disabled = false;
      }, 3000);
    } else {
      btn.textContent = 'Try again';
      btn.disabled = false;
    }
  })
  .catch(function () {
    btn.textContent = 'Try again';
    btn.disabled = false;
  });
}

// ─── SMOOTH SCROLL ───
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
