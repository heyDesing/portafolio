document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.textos-header', { delay: 500 });
ScrollReveal().reveal('.text-ini', { delay: 500 });
ScrollReveal().reveal('.contenedor', { delay: 800 });

ScrollReveal().reveal('.sideBar', { interval: 16, reset: true });
//ScrollReveal().reveal('.textos-header');