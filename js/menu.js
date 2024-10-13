// Seleciona o botão de abrir e o botão de fechar
const openMenuBtn = document.querySelector('img.menu-mobile.open');
const closeMenuBtn = document.querySelector('img.menu-mobile.close');
const menuOpened = document.querySelector('.menu-opened');

// Função para exibir o menu
openMenuBtn.addEventListener('click', function() {
  menuOpened.classList.add('visible');
  menuOpened.classList.remove('hidden');
});

// Função para ocultar o menu
closeMenuBtn.addEventListener('click', function() {
  menuOpened.classList.add('hidden');
  menuOpened.classList.remove('visible');
});
