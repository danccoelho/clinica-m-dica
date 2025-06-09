document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formLogin');

  if (!form) {
    console.error('Formulário com id "formLogin" não encontrado!');
    return;
  }

  const mensagem = document.createElement('p');
  mensagem.id = 'mensagemErroLogin';
  form.appendChild(mensagem);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    mensagem.textContent = '';

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('password').value.trim();

    if (!email || !senha) {
      mensagem.textContent = 'Por favor, preencha todos os campos.';
      mensagem.style.color = 'red';
      return;
    }

    if (!validarEmail(email)) {
      mensagem.textContent = 'Email inválido.';
      mensagem.style.color = 'red';
      return;
    }

    if (senha.length < 6) {
      mensagem.textContent = 'A senha deve ter pelo menos 6 caracteres.';
      mensagem.style.color = 'red';
      return;
    }

    mensagem.textContent = 'Login validado com sucesso!';
    mensagem.style.color = 'green';

    console.log('Dados de login:', { email, senha });

    setTimeout(() => {
      window.location.href = 'home.html';
    }, 1000);
  });

  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
