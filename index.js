let hamburger = document.querySelector('#hamburger');
const header = document.querySelector('header');
const navLink = document.querySelector('#navLink');

function mobNav() {
  if (hamburger.getAttribute('src') === './images/icon-hamburger.svg') {
    hamburger.style.opacity = '0';
    setTimeout(function () {
      hamburger.setAttribute('src', './images/icon-close.svg');
      hamburger.style.opacity = '1';
      document.body.style.overflow = 'hidden';
      navLink.style.display = 'block';
    }, 75);
  } else {
    hamburger.style.opacity = '0';
    setTimeout(() => {
      hamburger.setAttribute('src', './images/icon-hamburger.svg');
      hamburger.style.opacity = '1';
      document.body.style.overflow = 'auto';
      navLink.style.display = 'none';
    }, 75);
  }
  header.classList.toggle('slide');
}

hamburger.addEventListener('click', mobNav, false);

// sticky nav
// window.onscroll = function () {
//   stickyNav();
// };

// var navbar = document.getElementById('navbar');
// var sticky = navbar.offsetTop + 120;

// function stickyNav() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add('sticky');
//   } else {
//     navbar.classList.remove('sticky');
//   }
// }

// prevent image click drag
const images = document.getElementsByTagName('img');
const imagesBis = document.getElementsByTagName('source');

for (let i = 0; i < images.length; i++) {
  images[i].setAttribute('draggable', false);
  imagesBis[i].setAttribute('draggable', false);
}
