export const showingImages = () => {
const images = document.querySelectorAll('.aboutMe__photo');

const showImages = () => {
  if (window.scrollY > 300) {
    images.forEach(element => {
      element.classList.add("aboutMe__photo-animation");
    })
  } else if(window.scrollY < 50) {
    images.forEach(element => {
      element.classList.remove("aboutMe__photo-animation");
    })
  }
}

window.addEventListener('scroll', showImages);
}