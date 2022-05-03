// Nav bar javascript
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

//scroll Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "85px",
  duration: 2000,
  reset: true,
});

sr.reveal(".about-text", {});
sr.reveal(".heading", {});
sr.reveal(".about-img", { delay: 200 });

sr.reveal(".title", {});

const left = ScrollReveal({
  origin: "bottom",
  distance: "85px",
  duration: 2000,
  reset: true,
});

left.reveal(".team-row", { delay: 200 });
left.reveal(".member", { delay: 200 });

left.reveal(".footer-widget", {});
left.reveal(".copyright-wrapper", {});

left.reveal(".home-text", {});
left.reveal(".home-img", { delay: 200 });
