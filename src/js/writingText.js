export const writingText = () => {
let text = "Hello I'm Michal Siminski I'm";
let textSecond = "Frontend Developer";
let i = 0; 
let j = 0;

const writing = () => {
  if(i < text.length) {
  document.querySelector('.home__text').innerHTML += text[i];
  i++;
setTimeout(writing, 40);
  } else {
      document.querySelector('.home__text').innerHTML += ' <span class="home__textDistinction"></span>';
      document.querySelector('.home__textDistinction').innerHTML += textSecond[j];
      j++;
      let writingTimeout = setTimeout(writing, 40);
      if(j === textSecond.length) clearTimeout(writingTimeout);
  }
}
writing();
}