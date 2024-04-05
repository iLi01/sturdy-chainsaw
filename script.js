//nav menu open-close toggle
const button = document.getElementById("nav-expand-button");
const nav = document.getElementById("nav-bar");

button.addEventListener('click', () => {
  nav.classList.toggle('open');
});