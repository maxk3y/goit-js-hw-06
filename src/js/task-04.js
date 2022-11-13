const buttonIncrease = document.querySelector('button[data-action="increment"]');
const buttonDecrease = document.querySelector('button[data-action="decrement"]');
const counter = document.querySelector('#value');

let counterValue = 0;

const decrease = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};

const increase = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};

buttonDecrease.addEventListener('click', decrease);
buttonIncrease.addEventListener('click', increase);

console.log(counter);
