import '../../sass/main.scss';
let slideIndex = 1;
showSlides(slideIndex);

let prev = document.getElementById('slidePrev');
let next = document.getElementById('slideNext');
let slideOne = document.getElementById('slideOne');
let slideTwo = document.getElementById('slideTwo');
let slideThree = document.getElementById('slideThree');

next.addEventListener('click', function () {
  showSlides((slideIndex += 1));
});

prev.addEventListener('click', function () {
  showSlides((slideIndex -= 1));
});

slideOne.addEventListener('click', function () {
  showSlides((slideIndex = 1));
});

slideTwo.addEventListener('click', function () {
  showSlides((slideIndex = 2));
});

slideThree.addEventListener('click', function () {
  showSlides((slideIndex = 3));
});

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('review-slider__item');
  var dots = document.getElementsByClassName('review-slider-dots__item');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
