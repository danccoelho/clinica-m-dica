document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formCadastro');
  const mensagem = document.getElementById('mensagemErro');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    mensagem.textContent = ''; 

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const cpf = form.cpf.value.trim();
    const senha = form.senha.value.trim();
    const confirmarSenha = form.confirmarSenha.value.trim();

    if (!nome || !email || !cpf || !senha || !confirmarSenha) {
      mensagem.textContent = 'Por favor, preencha todos os campos.';
      mensagem.style.color = 'red';
      return;
    }

    if (!validarEmail(email)) {
      mensagem.textContent = 'Email inválido.';
      mensagem.style.color = 'red';
      return;
    }

    if (!validarCPF(cpf)) {
      mensagem.textContent = 'CPF inválido.';
      mensagem.style.color = 'red';
      return;
    }

    if (senha.length < 6) {
      mensagem.textContent = 'A senha deve ter pelo menos 6 caracteres.';
      mensagem.style.color = 'red';
      return;
    }

    if (senha !== confirmarSenha) {
      mensagem.textContent = 'As senhas não coincidem.';
      mensagem.style.color = 'red';
      return;
    }

    mensagem.textContent = 'Cadastro validado com sucesso!';
    mensagem.style.color = 'green';

    console.log('Dados cadastrados:', { nome, email, cpf, senha });
  });

  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
    let resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf.charAt(10));
  }
});
