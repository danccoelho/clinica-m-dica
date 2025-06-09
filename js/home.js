const btnMenu = document.getElementById('btn-menu');
const dropdownMenu = document.getElementById('dropdown-menu');
const btnSair = document.getElementById('btn-sair');

btnMenu.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');

  dropdownMenu.setAttribute('aria-hidden', !dropdownMenu.classList.contains('show'));
});


document.addEventListener('click', (e) => {
  if (!btnMenu.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove('show');
    dropdownMenu.setAttribute('aria-hidden', 'true');
  }
});

btnSair.addEventListener('click', () => { 
  window.location.href = 'index.html';
});
