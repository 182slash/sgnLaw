/* ============================================================
   SGN-LAW — Main JavaScript
   ============================================================ */

/* ── WhatsApp Contacts ──────────────────────────────────── */
const WA_CONTACTS = [
  { name: 'CS Ufit',    role: 'Head Office',          num: '6287777746874' },
  { name: 'CS Tika',    role: 'Head Office',          num: '6285123123874' },
  { name: 'CS Risa',    role: 'Branch — Cikarang',   num: '628158818875'  },
  { name: 'CS April',   role: 'Branch — Jakarta',    num: '628158818874'  },
  { name: 'CS Nurul',   role: 'Branch — Surabaya',   num: '6287822999875' },
  { name: 'CS Eka',     role: 'Branch — Bogor',      num: '6287877598000' },
];

const WA_MSG = encodeURIComponent(
  'Hello! Saya ingin berkonsultasi mengenai SGN-Law. Saya mengetahui informasi ini dari situs web SGN-Law.'
);

/* ── DOM Ready ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileDrawer();
  initWaPopup();
  initScrollEffects();
  initCounters();
  initBackToTop();
});

/* ── Navbar scroll effect ───────────────────────────────── */
function initNavbar() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  const handler = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', handler, { passive: true });
  handler();
}

/* ── Mobile Drawer ──────────────────────────────────────── */
function initMobileDrawer() {
  const hamburger = document.querySelector('.hamburger');
  const drawer    = document.querySelector('.mobile-drawer');
  const closeBtn  = document.querySelector('.drawer-close');
  if (!drawer) return;

  const open  = () => { drawer.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const close = () => { drawer.classList.remove('open'); document.body.style.overflow = ''; };

  hamburger?.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  drawer.addEventListener('click', e => { if (e.target === drawer) close(); });

  // Accordion sub-menus in drawer
  document.querySelectorAll('.drawer-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const sub = btn.nextElementSibling;
      const isOpen = sub.classList.contains('open');
      // Close all
      document.querySelectorAll('.drawer-sub').forEach(s => s.classList.remove('open'));
      document.querySelectorAll('.drawer-toggle').forEach(b => b.classList.remove('active'));
      // Toggle clicked
      if (!isOpen) { sub.classList.add('open'); btn.classList.add('active'); }
    });
  });
}

/* ── WhatsApp Popup ─────────────────────────────────────── */
function initWaPopup() {
  const fab     = document.querySelector('.wa-fab-btn');
  const popup   = document.querySelector('.wa-popup');
  const list    = document.querySelector('.wa-popup-list');
  if (!fab || !popup) return;

  // Render contacts
  if (list) {
    list.innerHTML = WA_CONTACTS.map(c => `
      <a href="https://wa.me/${c.num}?text=${WA_MSG}" target="_blank" rel="noopener"
         class="wa-contact">
        <div class="c-avatar">${c.name.split(' ').pop()[0]}</div>
        <div class="c-info">
          <strong>${c.name}</strong>
          <span>${c.role}</span>
        </div>
      </a>
    `).join('');
  }

  fab.addEventListener('click', e => {
    e.stopPropagation();
    popup.classList.toggle('open');
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.wa-fab')) popup.classList.remove('open');
  });
}

/* ── Scroll Animations (Intersection Observer) ──────────── */
function initScrollEffects() {
  const els = document.querySelectorAll('.fade-up, .service-card, .pricing-card, .why-card, .news-card');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => {
    el.classList.add('fade-up');
    io.observe(el);
  });
}

/* ── Number Counters ────────────────────────────────────── */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const dur    = 1800;
      const step   = dur / 60;
      let current  = 0;
      const inc    = target / (dur / step);

      const timer = setInterval(() => {
        current += inc;
        if (current >= target) {
          el.textContent = target + suffix;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current) + suffix;
        }
      }, step);

      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => io.observe(el));
}

/* ── Back to Top ────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.querySelector('.back-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
