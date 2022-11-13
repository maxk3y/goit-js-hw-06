const validationInput = document.querySelector('#validation-input');

const checkSymbolsAmount = () => {
  if (
    validationInput.value.length <= validationInput.dataset.length &&
    validationInput.value.length !== 0
  ) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
};

validationInput.addEventListener('blur', checkSymbolsAmount);
