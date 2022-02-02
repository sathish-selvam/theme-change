const themeToggle = document.querySelector("#theme-toggle");
const themeProxiyLabel = document.querySelector("#theme-toggle-proxiy");
const body = document.querySelector("body");

themeDefault();

themeToggle.addEventListener("click", () => {
  localStorage.setItem("theme", themeToggle.checked ? "light" : "dark");
  themeDefault();
});

function themeDefault() {
  const moon = themeProxiyLabel.querySelector("i.fa-moon");
  const sun = themeProxiyLabel.querySelector("i.fa-sun");
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    body.classList.add("dark");
    moon.style.cssText = `visibility:hidden; opacity : 0; `;
    sun.style.cssText = `visibility:visible; opacity : 1; `;
  } else {
    body.classList.remove("dark");
    sun.style.cssText = `visibility:hidden; opacity : 0; `;
    moon.style.cssText = `visibility:visible; opacity : 1; `;
  }
}
