function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const collectionInput = document.querySelector('#controls > input');
const collectionCreate = document.querySelector('button[data-create]');
const collectionDestroy = document.querySelector('button[data-destroy]');
const collectionBox = document.querySelector('#boxes');

function createBoxes(amount) {
  const lastElementOfCollection = collectionBox.lastElementChild;
  let lastElementWidth;
  let lastElementHeight;

  if (lastElementOfCollection === null) {
    lastElementWidth = 20;
    lastElementHeight = 20;
  } else {
    lastElementWidth = lastElementOfCollection.offsetWidth;
    lastElementHeight = lastElementOfCollection.offsetHeight;
  }
  const arrOfElems = [];
  for (let i = 1; i <= amount; i += 1) {
    const createElem = document.createElement('div');
    createElem.style.width = lastElementWidth + i * 10 + 'px';
    createElem.style.height = lastElementHeight + i * 10 + 'px';
    createElem.style.backgroundColor = getRandomHexColor();
    arrOfElems.push(createElem);
  }
  collectionBox.append(...arrOfElems);
}

const destroyBoxes = () => {
  collectionBox.replaceChildren();
  collectionInput.value = null;
};

collectionCreate.addEventListener('click', event => {
  createBoxes(collectionInput.value);
});

collectionDestroy.addEventListener('click', destroyBoxes);

console.log('');
