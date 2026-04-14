// Initialize Lucide icons
lucide.createIcons();

// ─── HERO BACKGROUND CAROUSEL ───
(function () {
  var urls = [
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80',
    'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1920&q=80',
    'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=1920&q=80',
    'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80'
  ];

  urls.forEach(function (url) { var img = new Image(); img.src = url; });

  var slides = document.querySelectorAll('#hero-bg-carousel .carousel-slide');
  if (!slides.length) return;
  var current = 0;
  slides[current].classList.add('active');
  setInterval(function () {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 6000);
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
