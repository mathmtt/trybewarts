function access() {
    if (mail.value === 'tryber@teste.com' && password.value === '123456') {
       alert('Olá, Tryber!'); 
    } else {
        alert ('Email ou senha inválidos.');
    }
}
btnLogin.addEventListener('click', access);