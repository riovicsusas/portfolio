/**
 * 21st.dev Profile Card Testimonial Carousel Controller
 */
(function() {
  function initTestimonialCarousel() {
    const stage = document.getElementById('testimonialCarouselStage');
    const dotsContainer = document.getElementById('testimonialCarouselDots');
    const prevBtn = document.getElementById('tPrevBtn');
    const nextBtn = document.getElementById('tNextBtn');

    if (!stage) return;

    const slides = Array.from(stage.querySelectorAll('.t-slide'));
    if (slides.length === 0) return;

    let currentIndex = 0;
    let animations = [];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const stopAnimations = () => {
      animations.forEach(animation => animation.cancel());
      animations = [];
    };
    reducedMotion.addEventListener('change', stopAnimations);
    stage.setAttribute('aria-live', 'polite');
    slides.forEach((slide, i) => {
      slide.setAttribute('role', 'group');
      slide.setAttribute('aria-roledescription', 'slide');
      slide.setAttribute('aria-label', `${i + 1} of ${slides.length}`);
      slide.setAttribute('aria-hidden', String(i !== currentIndex));
      slide.inert = i !== currentIndex;
    });

    // Render pagination dots
    if (dotsContainer) {
      dotsContainer.innerHTML = slides.map((_, i) => `
        <button class="t-dot ${i === 0 ? 'active' : ''}" aria-current="${i === 0 ? 'true' : 'false'}" data-index="${i}" aria-label="Go to testimonial ${i + 1}"></button>
      `).join('');

      dotsContainer.querySelectorAll('.t-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          const idx = parseInt(dot.getAttribute('data-index'), 10);
          goToSlide(idx);
        });
      });
    }

    function goToSlide(index, direction = index > currentIndex ? 1 : -1) {
      const nextIndex = (index + slides.length) % slides.length;
      if (nextIndex === currentIndex) return;
      stopAnimations();
      const previous = slides[currentIndex];
      const incoming = slides[nextIndex];
      if (previous.contains(document.activeElement)) {
        (direction > 0 ? nextBtn : prevBtn)?.focus({ preventScroll: true });
      }
      currentIndex = nextIndex;
      slides.forEach((slide, i) => {
        const active = i === currentIndex;
        slide.classList.toggle('active', active);
        slide.setAttribute('aria-hidden', String(!active));
        slide.inert = !active;
      });

      if (!reducedMotion.matches && typeof incoming.animate === 'function') {
        // Grid layering keeps the stage stable while both slides are painted.
        animations = [
          previous.animate([
            { opacity: 1, transform: 'translateX(0)', visibility: 'visible' },
            { opacity: 0, transform: `translateX(${-direction * 24}px)`, visibility: 'visible' }
          ], { duration: 260, easing: 'ease-out' }),
          incoming.animate([
            { opacity: 0, transform: `translateX(${direction * 32}px)` },
            { opacity: 1, transform: 'translateX(0)' }
          ], { duration: 440, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' })
        ];
      }

      if (dotsContainer) {
        dotsContainer.querySelectorAll('.t-dot').forEach((dot, i) => {
          dot.classList.toggle('active', i === currentIndex);
          dot.setAttribute('aria-current', String(i === currentIndex));
        });
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1, -1));
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1, 1));
    }

    // Keyboard navigation when on testimonials page
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey || e.altKey || e.metaKey || e.target.closest('input, textarea, select, [contenteditable]')) return;
      if (e.key === 'ArrowLeft') goToSlide(currentIndex - 1, -1);
      if (e.key === 'ArrowRight') goToSlide(currentIndex + 1, 1);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTestimonialCarousel);
  } else {
    initTestimonialCarousel();
  }
})();
