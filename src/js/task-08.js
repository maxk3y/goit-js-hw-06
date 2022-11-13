const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { login, password },
  } = event.currentTarget;

  if (formLogin.email.value === '' || formLogin.password.value === '') {
    return alert('Please fill in all the fields!');
  }

  console.log(`Login: ${formLogin.email.value}, Password: ${formLogin.password.value}`);
  event.currentTarget.reset();
}
