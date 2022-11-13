const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const rangeChange = () => (text.style.fontSize = inputRange.value + 'px');

inputRange.addEventListener('input', rangeChange);
