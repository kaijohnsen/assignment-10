const clicker = document.querySelector('button');
const beach = document.querySelector('img');
const credit = document.querySelector('.beach-credit');

beach.style.display = 'none';
credit.style.display = 'none';

clicker.onclick = showAndHide;


function showAndHide() {
  if (beach.classList.contains('showing')) {
    beach.style.display = 'none';
    credit.style.display = 'none';
    beach.classList.remove('showing');
  } else {
    beach.style.display = 'block';
    credit.style.display = 'block';
    beach.classList.add('showing');
  }
}

const divp = document.querySelector('div p');
const image = document.querySelector('.rotate-right');


image.onmouseenter = (e) => {
   e.target.classList.remove('rotate-right');
   e.target.classList.add('rotate-left');
};
image.onmouseleave = (e) => {
   e.target.classList.add('rotate-right');
   e.target.classList.remove('rotate-left');
};

