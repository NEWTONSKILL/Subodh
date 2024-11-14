// Toggle navigation menu on mobile
Document.addEventListen('DOMContentLoaded' , () => {
const toggleButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
