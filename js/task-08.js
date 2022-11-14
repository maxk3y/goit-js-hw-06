const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (formLogin.email.value === '' || formLogin.password.value === '') {
    return alert('Please fill in all the fields!');
  }
  const inputValue = {
    Email: formLogin.email.value,
    Password: formLogin.password.value,
  };

  console.log(inputValue);
  event.currentTarget.reset();
}
