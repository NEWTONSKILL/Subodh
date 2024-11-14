document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navMenu = document.querySelector('.nav-menu');

    if (toggleButton && navMenu) {
        toggleButton.addEventListener('click', () => {
            console.log('toggle button clicked');
            navMenu.classList.toggle('active');
        });
    } else {
        console.warn('toggle button or navigator menu not found.');
    }
});
