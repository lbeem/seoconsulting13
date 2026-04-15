/* ========================================
   SEO Consulting 13 — Main JS
   Vanilla, defer loaded
   ======================================== */

(function () {
  'use strict';

  /* --- Header scroll effect --- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* --- Mobile menu toggle --- */
  const burger = document.querySelector('.burger');
  const mobileNav = document.querySelector('.nav-mobile');

  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      burger.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
      burger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking a link
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        burger.classList.remove('active');
        document.body.style.overflow = '';
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --- FAQ Accordion --- */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const otherAnswer = other.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
          const otherBtn = other.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      item.classList.toggle('active', !isActive);
      answer.style.maxHeight = isActive ? null : answer.scrollHeight + 'px';
      question.setAttribute('aria-expanded', !isActive);
    });
  });

  /* --- Smooth scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = header ? header.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* --- Form validation (Web3Forms) --- */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showError(field, message) {
    var wrapper = field.closest('.form-field');
    if (!wrapper) return;
    wrapper.classList.add('form-field--error');
    var err = document.createElement('span');
    err.className = 'form-field-error';
    err.textContent = message;
    wrapper.appendChild(err);
  }

  document.querySelectorAll('.form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      var isValid = true;

      // Reset previous errors
      form.querySelectorAll('.form-field--error').forEach(function (el) {
        el.classList.remove('form-field--error');
      });
      form.querySelectorAll('.form-field-error').forEach(function (el) {
        el.remove();
      });

      // Validate required fields
      form.querySelectorAll('[required]').forEach(function (field) {
        if (field.type === 'checkbox') {
          if (!field.checked) {
            showError(field, 'Ce champ est obligatoire');
            isValid = false;
          }
        } else if (!field.value.trim()) {
          showError(field, 'Ce champ est obligatoire');
          isValid = false;
        } else if (field.type === 'email' && !isValidEmail(field.value)) {
          showError(field, 'Adresse email invalide');
          isValid = false;
        }
      });

      if (!isValid) {
        e.preventDefault();
        return;
      }

      // Disable submit button
      var btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.dataset.originalText = btn.textContent;
        btn.textContent = 'Envoi en cours\u2026';
      }
    });
  });

  /* --- FAQ page: hash navigation + highlight --- */
  function openAndHighlight(target) {
    if (!target) return;
    target.classList.add('highlight');
    var item = target.closest('.faq-item');
    if (item && !item.classList.contains('active')) {
      var btn = item.querySelector('.faq-question');
      var answer = item.querySelector('.faq-answer');
      if (btn && answer) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    }
    setTimeout(function () { target.classList.remove('highlight'); }, 2000);
  }

  if (window.location.hash) {
    var hashTarget = document.querySelector(window.location.hash);
    if (hashTarget) {
      setTimeout(function () { openAndHighlight(hashTarget); }, 100);
    }
  }

  document.querySelectorAll('.faq-sommaire a').forEach(function (link) {
    link.addEventListener('click', function () {
      var hash = this.getAttribute('href');
      history.replaceState(null, '', hash);
      var t = document.querySelector(hash);
      if (t) { openAndHighlight(t); }
    });
  });

  /* --- Specialisations accordion (multi-open, dynamic max-height) --- */
  document.querySelectorAll('.specialisation-accordion-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var item = this.closest('.specialisation-accordion-item');
      var content = item.querySelector('.specialisation-accordion-content');
      var isOpen = item.classList.contains('open');
      if (isOpen) {
        item.classList.remove('open');
        if (content) content.style.maxHeight = null;
        this.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        if (content) content.style.maxHeight = content.scrollHeight + 'px';
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();
