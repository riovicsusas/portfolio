/**
 * 21st.dev Radial Scroll Gallery Implementation
 * GSAP + ScrollTrigger Wheel Interaction for Portfolio
 */

(function () {
  function initRadialGallery() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn('GSAP or ScrollTrigger not loaded yet');
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    const pinContainer = document.getElementById('radialGalleryPin');
    const wheel = document.getElementById('radialWheel');
    const scrollerEl = document.getElementById('mainContent');

    if (!pinContainer || !wheel || !scrollerEl) return;

    // Gallery destinations (4 core domains ordered: Latest Updates, Projects, About Me, Testimonials)
    const itemsData = [
      {
        title: "Latest Updates",
        cat: "Recent Activity",
        desc: "Live System Incident Logs & Infrastructure Deployments",
        url: "latest/",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Projects",
        cat: "Case Studies & SOPs",
        desc: "6 Operational Domains & Master Capstone Investigation",
        url: "projects/",
        img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "About Me",
        cat: "Background",
        desc: "Electronics Engineering Applied to High-Velocity Operations",
        url: "about/",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Testimonials",
        cat: "Social Proof",
        desc: "DTC Brand Founders & Operational Endorsements",
        url: "testimonials/",
        img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Latest Updates",
        cat: "Audits & Logs",
        desc: "Matrixify Migration Standards & Flow Triage",
        url: "latest/",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Projects",
        cat: "Order Lifecycle",
        desc: "Order State Machine & Point-of-No-Return Locks",
        url: "projects/",
        img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "About Me",
        cat: "Tech Philosophy",
        desc: "Deterministic Routing & Zero Inventory Drift",
        url: "about/",
        img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Testimonials",
        cat: "Storefront Impact",
        desc: "Self-Healing Workflows & Autonomous Order Processing",
        url: "testimonials/",
        img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
      }
    ];

    const itemCount = itemsData.length;
    const isMobile = window.innerWidth <= 768;
    // A wider mobile wheel separates the inward-facing title edges too.
    const baseRadius = isMobile ? 560 : 420;
    const circleDiameter = baseRadius * 2;
    const visiblePercentage = isMobile ? 0.22 : 0.40;
    const hiddenDecimal = 1 - visiblePercentage;

    const maskEl = pinContainer.querySelector('.radial-gallery-mask');
    const cardHeight = isMobile ? 290 : 330;
    // Buffer for card half-height + hover expansion + safe headroom
    const topBuffer = Math.round((cardHeight / 2) + (isMobile ? 24 : 140));
    const visibleAreaHeight = Math.round(circleDiameter * visiblePercentage + topBuffer);

    if (maskEl) {
      maskEl.style.height = visibleAreaHeight + 'px';
    }

    // Set wheel geometry
    wheel.style.width = circleDiameter + 'px';
    wheel.style.height = circleDiameter + 'px';
    wheel.style.bottom = '-' + Math.round(circleDiameter * hiddenDecimal) + 'px';

    // Populate wheel items
    wheel.innerHTML = itemsData.map((item, idx) => {
      const topAngle = -Math.PI / 2;
      const angle = topAngle - (idx / itemCount) * 2 * Math.PI;
      const x = baseRadius * Math.cos(angle);
      const y = baseRadius * Math.sin(angle);
      const rotationAngle = (angle * 180) / Math.PI;

      return `
        <li class="radial-item" style="transform: translate(-50%, -50%) translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${(rotationAngle + 90).toFixed(1)}deg);" data-index="${idx}">
          <div class="radial-card" onclick="window.location.href='${item.url}'" role="button" tabindex="0">
            <div class="radial-card-img-wrap">
              <img src="${item.img}" alt="${item.title}" loading="lazy" />
              <div class="radial-card-overlay"></div>
            </div>
            <div class="radial-card-body">
              <div class="radial-card-top">
                <span class="radial-card-badge">${item.cat}</span>
                <div class="radial-card-arrow">
                  <i class="ph ph-arrow-up-right"></i>
                </div>
              </div>
              <div class="radial-card-bottom">
                <h3 class="radial-card-title">${item.title}</h3>
                <p class="radial-card-desc">${item.desc}</p>
                <div class="radial-card-line"></div>
              </div>
            </div>
          </div>
        </li>
      `;
    }).join('');

    // Hover effect: blur and dim non-hovered items
    const cards = wheel.querySelectorAll('.radial-card');
    cards.forEach((card, i) => {
      card.addEventListener('mouseenter', () => {
        cards.forEach((c, j) => {
          if (i !== j) {
            c.classList.add('dimmed');
          } else {
            c.classList.remove('dimmed');
          }
        });
      });
      card.addEventListener('mouseleave', () => {
        cards.forEach(c => c.classList.remove('dimmed'));
      });
    });

    // GSAP ScrollTrigger Animation
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      // Intro entrance
      gsap.fromTo(
        wheel.children,
        { scale: 0, autoAlpha: 0 },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 1.1,
          ease: 'back.out(1.2)',
          stagger: 0.04,
          scrollTrigger: {
            trigger: pinContainer,
            scroller: scrollerEl,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Continuous 360-degree rotation scrubbed with scroll
      gsap.to(wheel, {
        rotation: 360,
        ease: 'none',
        scrollTrigger: {
          trigger: pinContainer,
          scroller: scrollerEl,
          pin: true,
          start: 'center center',
          end: '+=2000',
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });
    }
  }

  // Handle resize debounced
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.getAll().forEach(t => t.kill());
      }
      initRadialGallery();
    }, 250);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRadialGallery);
  } else {
    initRadialGallery();
  }
})();
