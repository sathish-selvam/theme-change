const root = document.querySelector(":root");

const themeButton = document.querySelector("#toggle-theme");

themeButton.addEventListener("click", () => {
  root.style.setProperty("--secondary-color", "#22577E");
});
