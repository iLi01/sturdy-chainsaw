//nav menu open-close toggle
const button = document.getElementById("nav-expand-button");
const nav = document.getElementById("nav-bar");

button.addEventListener('click', () => {
  nav.classList.toggle('open');
});


//slideshow of the project cards
const arrowRight = document.getElementById("arrow-right-div");
const arrowLeft = document.getElementById("arrow-left-div");
const secondCards = document.getElementById("second-page-cards");
const firstCards = document.getElementById("first-page-cards");

var clicked = false;

arrowRight.addEventListener('click', () => {
  secondCards.classList.toggle('open');
  firstCards.classList.toggle('open');
  clicked = true;
}, {once : false});

arrowLeft.addEventListener('click', () => {
  secondCards.classList.toggle('open');
  firstCards.classList.toggle('open');
  clicked = true;
}, {once : false});
//how to make it go through only back and forth?
//once - true if i want it to be a singular eventlistener
