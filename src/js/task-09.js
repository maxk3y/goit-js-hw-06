function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const currentBgColor = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');
const body = document.querySelector('body');

const randomColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  currentBgColor.textContent = body.style.backgroundColor;
};

console.log('');
changeColorButton.addEventListener('click', randomColor);
