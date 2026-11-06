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

    // Render pagination dots
    if (dotsContainer) {
      dotsContainer.innerHTML = slides.map((_, i) => `
        <button class="t-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Go to testimonial ${i + 1}"></button>
      `).join('');

      dotsContainer.querySelectorAll('.t-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          const idx = parseInt(dot.getAttribute('data-index'), 10);
          goToSlide(idx);
        });
      });
    }

    function goToSlide(index) {
      currentIndex = (index + slides.length) % slides.length;

      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
      });

      if (dotsContainer) {
        dotsContainer.querySelectorAll('.t-dot').forEach((dot, i) => {
          dot.classList.toggle('active', i === currentIndex);
        });
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    }

    // Keyboard navigation when on testimonials page
    document.addEventListener('keydown', (e) => {
      if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) return;
      if (e.key === 'ArrowLeft') goToSlide(currentIndex - 1);
      if (e.key === 'ArrowRight') goToSlide(currentIndex + 1);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTestimonialCarousel);
  } else {
    initTestimonialCarousel();
  }
})();
