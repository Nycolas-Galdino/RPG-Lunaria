const menuButton = document.querySelector(".menu-toggle");
const menuList = document.querySelector(".menu-list");
const rulesContent = document.querySelector("#rules-content");
const rulesToggle = document.querySelector("#toggle-rules");
const yearSpan = document.querySelector("#year");

if (menuButton && menuList) {
  menuButton.addEventListener("click", () => {
    const open = menuList.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  menuList.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuList.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

if (rulesToggle && rulesContent) {
  rulesToggle.addEventListener("click", () => {
    const collapsed = rulesContent.classList.toggle("collapsed");
    rulesToggle.textContent = collapsed ? "Mostrar mais" : "Mostrar menos";
    rulesToggle.setAttribute("aria-expanded", String(!collapsed));
  });
}

if (yearSpan) {
  yearSpan.textContent = String(new Date().getFullYear());
}

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealElements.length) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((item) => observer.observe(item));
} else {
  revealElements.forEach((item) => item.classList.add("show"));
}
