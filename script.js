/* =========================================
   INDIAIPO HERO
========================================= */

const heroVideo = document.querySelector(".hero-video");

/* =========================================
   VIDEO
========================================= */

if (heroVideo) {
  // Make sure autoplay starts where supported
  heroVideo.muted = true;

  const playVideo = () => {
    heroVideo.play().catch(() => {
      // Browser may block autoplay.
      // Poster image will remain visible.
    });
  };

  playVideo();

  // Pause video when user leaves the tab
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      heroVideo.pause();
    } else {
      playVideo();
    }
  });
}

/* =========================================
   IPO STATS COUNTER
========================================= */

const counters = document.querySelectorAll(".counter");

const formatNumber = (number) => {
  return new Intl.NumberFormat("en-IN").format(number);
};

const animateCounter = (counter) => {
  const target = Number(counter.dataset.target);

  const duration = 1800;

  const startTime = performance.now();

  const updateCounter = (currentTime) => {
    const elapsed = currentTime - startTime;

    const progress = Math.min(elapsed / duration, 1);

    // Smooth ease-out

    const easedProgress = 1 - Math.pow(1 - progress, 3);

    const currentValue = Math.floor(target * easedProgress);

    counter.textContent = formatNumber(currentValue);

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = formatNumber(target);
    }
  };

  requestAnimationFrame(updateCounter);
};

/* =========================================
   TRIGGER WHEN SECTION ENTERS VIEW
========================================= */

const statsSection = document.querySelector(".ipo-section");

const statsObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      counters.forEach((counter, index) => {
        setTimeout(() => {
          animateCounter(counter);
        }, index * 180);
      });

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.35,
  },
);

if (statsSection) {
  statsObserver.observe(statsSection);
}

/* =========================================
   SECTION 3 — APP SHOWCASE ANIMATION
========================================= */

const appFeaturesSection = document.querySelector(".app-features-section");

if (appFeaturesSection) {
  const appFeaturesObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          appFeaturesSection.classList.add("is-visible");

          // Run only once
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  appFeaturesObserver.observe(appFeaturesSection);
}

/* =========================================
   SECTION 4 — PREMIUM ANIMATION
========================================= */

const premiumSection = document.querySelector(".premium-section");

if (premiumSection) {
  const premiumObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          premiumSection.classList.add("is-visible");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  premiumObserver.observe(premiumSection);
}

/* =========================================
   SECTION 5 — ECOSYSTEM ANIMATION
========================================= */

const ecosystemSection = document.querySelector(".ecosystem-section");

if (ecosystemSection) {
  const ecosystemObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          ecosystemSection.classList.add("is-visible");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  ecosystemObserver.observe(ecosystemSection);
}

/* =========================================
   SECTION 6 — DOWNLOAD APP ANIMATION
========================================= */

const downloadSection = document.querySelector(".download-section");

if (downloadSection) {
  const downloadObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          downloadSection.classList.add("is-visible");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  downloadObserver.observe(downloadSection);
}
