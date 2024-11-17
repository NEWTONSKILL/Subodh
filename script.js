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

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    loop: true, // Infinite loop
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1, // Show 1 slide at a time
    spaceBetween: 20, // Space between slides
    breakpoints: {
      768: {
        slidesPerView: 2, // Show 2 slides on tablets
      },
      1024: {
        slidesPerView: 3, // Show 3 slides on desktops
      },
    },
  });
});


