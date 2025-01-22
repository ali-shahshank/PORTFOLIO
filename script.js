/* NAVIGATION */
const modalId = document.getElementById("modalId");

/* FADE IN TEXT ANIMATION */
function textFadeInAnimation(elementId) {
  const elements = document.querySelectorAll(elementId);

  elements.forEach((element) => {
    element.classList.add("fade-in");

    setTimeout(() => {
      element.classList.add("show");
    }, 800);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  textFadeInAnimation("#intro");

  textFadeInAnimation("#developerHeading");
  textFadeInAnimation("#introText");
  /* case studies */
  textFadeInAnimation("#portaHeading");
  textFadeInAnimation("#tripwiseHeading");
  textFadeInAnimation("#axleHeading");
  textFadeInAnimation("#nexcomHeading");
});

/* BOUNCE UP ANIMATED TEXT ON APPEAR */
function applyAppearAnimation(elementId) {
  const element = document.getElementById(elementId);

  if (!element) return;

  element.style.opacity = "0";
  element.style.transform = "scale(1) rotate(0deg) translateY(60px)";
  element.style.transition =
    "opacity 0.3s cubic-bezier(0.44, 0, 0.56, 1), transform 0.6s cubic-bezier(0.44, 0, 0.56, 1)";

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.style.opacity = "1";
          element.style.transform = "scale(1) rotate(0deg) translateY(0)";
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(element);
}

applyAppearAnimation("workHeading");
applyAppearAnimation("workText");
applyAppearAnimation("workText2");
applyAppearAnimation("experienceHeading");

/* Case studies */
applyAppearAnimation("portaTypography");
applyAppearAnimation("portaColor");

/* CONTAINER FADE IN ANIMATION */
function applyFadeInAnimation(elementId) {
  const element = document.getElementById(elementId);

  if (!element) return;

  element.style.opacity = "0";
  element.style.transition = "opacity 0.6s cubic-bezier(0.44, 0, 0.56, 1)";

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(element);
}

applyFadeInAnimation("container1");
applyFadeInAnimation("container2");
applyFadeInAnimation("container3");
applyFadeInAnimation("container4");

/* PARTICLES.JS */
particlesJS("particles-js", {
  particles: {
    number: { value: 40, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      out_mode: "out",
    },
  },

  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "repulse" } },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
    },
  },
  retina_detect: true,
});

/* FOOTER PARTICLES */
particlesJS("footer-particles", {
  particles: {
    number: { value: 40, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "repulse" } },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
    },
  },
  retina_detect: true,
});

/* About Section */
const about = document.getElementById(about);
