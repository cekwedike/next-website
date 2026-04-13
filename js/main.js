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

  // Preload all images
  urls.forEach(function (url) {
    var img = new Image();
    img.src = url;
  });

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

// Subscribe form handler
function handleSubscribe(e) {
  e.preventDefault();
  const input = e.target.querySelector('.subscribe-input');
  const btn = e.target.querySelector('.subscribe-btn');
  const email = input.value.trim();

  if (!email) return;

  btn.textContent = 'Subscribed!';
  btn.style.background = '#fff';
  btn.style.color = '#0A0A0A';
  input.value = '';

  setTimeout(() => {
    btn.textContent = 'Subscribe';
    btn.style.background = '';
    btn.style.color = '';
  }, 3000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
