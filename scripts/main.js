document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Adjust this value as needed
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const menuButton = document.querySelector('.mobile-menu-button'); // Corrected selector
    const navbar = document.querySelector('.navbar');

    if (menuButton && navbar) {
        menuButton.addEventListener('click', (e) => {
            e.preventDefault();
            navbar.classList.toggle('open');
            header.classList.toggle('menu-open');
        });
    }
});
