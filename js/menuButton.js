const menuButtonOff = document.querySelector('.navigation__menuTextOff');
const menuButtonOn = document.querySelector('.navigation__menuTextOn');
const navigationMobile = document.querySelector('.navigationMobile');
const ulItem = document.querySelectorAll('.navigationMobile__item');
let number = 100;

const showMenu = () => {
    if(number>0){
      number -= 5;
      navigationMobile.style.transform= `translateX(${number}%)`;
      requestAnimationFrame(showMenu);
    }
}

const closeMenu = () => {
    if(number<100){
      number += 5;
      navigationMobile.style.transform= `translateX(${number}%)`;
      requestAnimationFrame(closeMenu);
    }
}

const firstClick = () => {
  requestAnimationFrame(showMenu)
}
const secondClick = () => {
  requestAnimationFrame(closeMenu)
}

menuButtonOff.addEventListener('click', firstClick);
menuButtonOn.addEventListener('click', secondClick);
ulItem.forEach(element => {
  element.addEventListener('click', secondClick);
});