import swiper from './swiper';
import '../css/style.scss';
import Validator from './validation';


new Validator('.footer__form', function(formData) {
  console.log(formData);
});

bindBurgerButton();
subscribeOnObserver();

function bindBurgerButton() {
  const burgerPopap = document.querySelector('.burger');
  const burgerButtomOpen = document.querySelector('.header__burger');
  let isOpen = false;

  burgerButtomOpen.addEventListener('click', () => {
    isOpen = !isOpen;
    burgerPopap.classList.toggle('burger_active', isOpen);
    burgerButtomOpen.classList.toggle('header__burger_active', isOpen);
  });
}

function subscribeOnObserver() {
  const options = { threshold: [0.5] };
  const observer = new IntersectionObserver(onEntry, options);
  const elements = document.querySelectorAll('.element-animation');

  for (let elm of elements) {
    observer.observe(elm);
  }
}

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
