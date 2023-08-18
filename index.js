const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const container = document.querySelector('.container');

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  container.classList.toggle('dark-mode');
});