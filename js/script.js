/* ============================================
   SLAVIJA PROKING — JavaScript
   Multi-page site
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- I18N INIT ----------
  document.documentElement.setAttribute('lang', i18n.currentLang);
  if (i18n.currentLang !== 'sr') {
    i18n.applyTranslations();
  }

  // ---------- LANGUAGE TOGGLE ----------
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      i18n.toggle();
    });
  }

  // ---------- THEME TOGGLE ----------
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('sp-theme');
  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.setAttribute('data-theme', 'dark');
  }

  function updateLogoForTheme(theme) {
    const logoIcon = document.querySelector('.header .logo-icon');
    if (logoIcon) {
      logoIcon.src = theme === 'dark' ? 'images/logo-dark.svg' : 'images/logo-polished.svg';
    }
  }

  updateLogoForTheme(html.getAttribute('data-theme'));

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('sp-theme', next);
      updateLogoForTheme(next);
    });
  }

  // ---------- HEADER SCROLL (shadow only — no color changes) ----------
  const header = document.getElementById('header');

  if (header) {
    const updateHeader = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 20);
    };

    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  // ---------- MOBILE NAV ----------
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  function closeMenu() {
    if (!navToggle || !navLinks) return;
    navToggle.classList.remove('is-active');
    navLinks.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      navToggle.classList.toggle('is-active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu on window resize above mobile breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navLinks.classList.contains('is-open')) {
        closeMenu();
      }
    });
  }

  // ---------- SCROLL REVEAL ----------
  const reveals = document.querySelectorAll('.reveal');

  if (reveals.length) {
    const observerReveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const parent = entry.target.parentElement;
          const siblings = Array.from(parent.querySelectorAll('.reveal:not(.is-hidden)'));
          const idx = siblings.indexOf(entry.target);

          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, Math.max(0, idx) * 50);

          observerReveal.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px'
    });

    reveals.forEach(el => observerReveal.observe(el));
  }

  // ---------- COUNTER ANIMATION ----------
  const counters = document.querySelectorAll('[data-count]');

  if (counters.length) {
    const observerCount = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.textContent.includes('+') ? '+' : '';
          const duration = 1500;
          const start = performance.now();

          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);

            el.textContent = current + suffix;

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observerCount.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observerCount.observe(el));
  }

  // ---------- REFERENCE TABS (only on reference page) ----------
  const tabs = document.querySelectorAll('.ref-tab');
  const refCards = document.querySelectorAll('.ref-card');

  if (tabs.length && refCards.length) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const category = tab.dataset.tab;
        let visibleIdx = 0;

        refCards.forEach(card => {
          if (category === 'all' || card.dataset.category.split(' ').includes(category)) {
            card.classList.remove('is-hidden');
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            const delay = visibleIdx * 40;
            visibleIdx++;
            setTimeout(() => {
              card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, delay);
          } else {
            card.classList.add('is-hidden');
          }
        });
      });
    });
  }

  // ---------- CONTACT FORM (only on contact page) ----------
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('#name').value;
      const email = form.querySelector('#email').value;
      const subject = form.querySelector('#subject').value || i18n.t('contact.form.defaultSubject');
      const message = form.querySelector('#message').value;

      const mailtoBody = `${i18n.t('contact.form.name')}: ${name}\nEmail: ${email}\n\n${message}`;
      const mailtoLink = `mailto:office@slavijaproking.rs?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`;

      window.location.href = mailtoLink;
    });
  }

  // ---------- FOOTER YEAR ----------
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---------- COOKIE BANNER ----------
  const cookieBanner = document.getElementById('cookieBanner');
  if (cookieBanner) {
    const consent = localStorage.getItem('sp-cookie-consent');
    if (!consent) {
      setTimeout(() => cookieBanner.classList.add('is-visible'), 1000);
    }

    cookieBanner.querySelector('.cookie-accept')?.addEventListener('click', () => {
      localStorage.setItem('sp-cookie-consent', 'accept');
      cookieBanner.classList.remove('is-visible');
      loadConsentContent();
    });

    cookieBanner.querySelector('.cookie-decline')?.addEventListener('click', () => {
      localStorage.setItem('sp-cookie-consent', 'decline');
      cookieBanner.classList.remove('is-visible');
    });
  }

  // ---------- MAP CONSENT (consent-based Google Maps) ----------
  function loadConsentContent() {
    document.querySelectorAll('[data-consent-src]').forEach(el => {
      const isFooterMap = el.classList.contains('footer-map');
      const iframe = document.createElement('iframe');
      iframe.src = el.getAttribute('data-consent-src');
      iframe.width = '100%';
      iframe.height = isFooterMap ? '120' : '350';
      iframe.style.cssText = 'border:0;display:block';
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('loading', 'lazy');
      iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
      iframe.setAttribute('title', el.getAttribute('data-consent-title') || '');
      if (isFooterMap) {
        el.innerHTML = '';
        el.appendChild(iframe);
      } else {
        el.parentNode.replaceChild(iframe, el);
      }
    });
  }

  // Auto-load map if already consented
  if (localStorage.getItem('sp-cookie-consent') === 'accept') {
    loadConsentContent();
  }

  // Manual map consent button
  const mapConsentBtn = document.querySelector('.map-consent-btn');
  if (mapConsentBtn) {
    mapConsentBtn.addEventListener('click', () => {
      localStorage.setItem('sp-cookie-consent', 'accept');
      if (cookieBanner) cookieBanner.classList.remove('is-visible');
      loadConsentContent();
    });
  }

  // ---------- SMOOTH SCROLL (for any anchor links) ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
