//Exercicio 3

const mail = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('btn-login');

function access() {
  if (mail.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
loginBtn.addEventListener('click', access);

//Exercicio 18

const btnSubmit = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');

btnSubmit.disabled = true;
agreement.addEventListener('click', () => {
  if (agreement.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});
