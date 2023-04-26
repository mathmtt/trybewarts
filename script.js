<<<<<<< HEAD
=======
const mail = document.getElementById('email');
const password = document.getElementById('senha');
const loginBtn = document.getElementById('btn-login');


>>>>>>> 9f7e0f96ec7e2756bdcf196b6da8ac438ea60f9d
function access() {
  if (mail.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!'); 
  } else {
    alert('Email ou senha inválidos.');
  }
}
loginBtn.addEventListener('click', access);