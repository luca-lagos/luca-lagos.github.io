window.addEventListener("scroll", () => {
  let nav = document.querySelector("nav");
  let windowPosition = window.scrollY > 0;
  nav.classList.toggle("nav-scrolling-active", windowPosition);
  let scrollbutton = document.querySelector(".arrow-up");
  scrollbutton.classList.toggle("arrow-scrolling-active", windowPosition);
});

let navitem = document.querySelector(".nav-item");
let navtoggle = document.querySelector(".nav-toggle");
let navmenu = document.querySelector(".nav-menu");
let navtoggleicon = document.querySelector(".nav-toggle i");

navtoggle.addEventListener("click", () => {
  navmenu.classList.toggle("nav-menu-visible");
  navtoggleicon.classList.toggle("fa-times");
  if (navmenu.classList.contains("nav-menu-visible")) {
    navtoggle.setAttribute("aria-label", "close-nav-menu");
  } else {
    navtoggle.setAttribute("aria-label", "open-nav-menu");
  }
});

navitem.addEventListener("click", () => {
  navitem.classList.toggle("nav-item-active");
});

let aboutMeTitle = document.querySelector("#about-me h1");
let aboutMePanel = document.querySelector("#about-me .about-me-panel");
let skillsTitle = document.querySelector("#skills h1");
let skillsGrid = document.querySelector("#skills .skills-grid");
let expTitle = document.querySelector("#experience h1");
let expPanel = document.querySelector("#experience .experience-panel");
let proTitle = document.querySelector("#projects h1");
let proProtoTitle = document.querySelector("#projects-proto-title");
let proProtoGrid = document.querySelector("#projects-proto-grid");
let proProtoLine = document.querySelector("#projects-proto-line");
let proLinksTitle = document.querySelector("#projects-links-title");
let proLinksIcons = document.querySelector("#projects .projects-links");
let contTitle = document.querySelector("#contact h1");
let contForm = document.querySelector("#contact form");

let chargeSection = (entries, io) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-visible");
    }
  });
};

let ioTitle = new IntersectionObserver(chargeSection, {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
});

let ioPanel = new IntersectionObserver(chargeSection, {
  root: null,
  rootMargin: "100px",
  threshold: 1.0,
});

let ioSkillsGrid = new IntersectionObserver(chargeSection, {
  root: null,
  rootMargin: "350px",
  threshold: 1.0,
});

let ioProGrid = new IntersectionObserver(chargeSection, {
  root: null,
  rootMargin: "750px",
  threshold: 1.0,
});

ioTitle.observe(aboutMeTitle);
ioPanel.observe(aboutMePanel);
ioTitle.observe(skillsTitle);
ioSkillsGrid.observe(skillsGrid);
ioTitle.observe(expTitle);
ioPanel.observe(expPanel);
ioTitle.observe(proTitle);
ioTitle.observe(proProtoTitle);
ioProGrid.observe(proProtoGrid);
ioPanel.observe(proProtoLine);
ioTitle.observe(proLinksTitle);
ioPanel.observe(proLinksIcons);
ioTitle.observe(contTitle);
ioPanel.observe(contForm);

let contactForm = document.querySelector("#contact-form");
let mailSubmit = document.querySelector("#mail-submit");

contactForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let $form = new FormData(this);
  mailSubmit.setAttribute(
    "href",
    `mailto:lagos.herrera.luca@gmail.com?subject=${$form.get(
      "contact-name"
    )}${" - "}${$form.get("contact-subject")}&body=${$form.get(
      "contact-message"
    )}`
  );
  mailSubmit.click();
  contactForm.reset();
}

particlesJS({
  particles: {
    number: {
      value: 147,
      density: {
        enable: true,
        value_area: 4419.226793140727,
      },
    },
    color: {
      value: "#e8ac07",
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 0,
        color: "#000",
      },
      polygon: {
        nb_sides: 6,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.23249474882550059,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 84.17913319543987,
      random: false,
      anim: {
        enable: true,
        speed: 10,
        size_min: 40,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: "#000000",
      opacity: 1,
      width: 2,
    },
    move: {
      enable: true,
      speed: 8,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "bubble",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 475.0651691962873,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 64.96617698410768,
        duration: 1.2993235396821534,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 300.4685685514979,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

let translatorElement = document.querySelector("#translator");

let textsToChange = document.querySelectorAll("[data-section]");

let changeLanguage = async (language) => {
  let requestJson = await fetch(`/lang/${language}.json`);
  let texts = await requestJson.json();
  for (let textToChange of textsToChange) {
    let section = textToChange.dataset.section;
    let value = textToChange.dataset.value;
    textToChange.innerHTML = texts[section][value];
  }
};

translatorElement.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
});

let translatorItemES = document.querySelector("#translator-item-es");
let translatorItemEN = document.querySelector("#translator-item-en");
let translatorOverlayES = document.querySelector(
  "#translator-item-es .translator-item-overlay"
);
let translatorOverlayEN = document.querySelector(
  "#translator-item-en .translator-item-overlay"
);

translatorItemES.addEventListener("click", () => {
  translatorOverlayEN.style.visibility = "hidden";
  translatorOverlayES.style.visibility = "initial";
});

translatorItemEN.addEventListener("click", () => {
  translatorOverlayES.style.visibility = "hidden";
  translatorOverlayEN.style.visibility = "initial";
});
