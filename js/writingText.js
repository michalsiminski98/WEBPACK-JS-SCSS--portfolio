let text = "Hello I'm Michal Siminski I'm Frontend Developer";
const textArray = text.split('');
let i = 0; 

const writing = () => {
  if(i < text.length) {
  document.querySelector('.home__text').innerHTML += text[i];
  i++;
  setTimeout(writing, 40);
}
}
writing();