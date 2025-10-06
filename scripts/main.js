
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
    const menuButton = document.getElementById('mobile-menu-button'); // Corrected ID
    const navbar = document.querySelector('.navbar');

    if (menuButton && navbar) {
        menuButton.addEventListener('click', () => {
            navbar.classList.toggle('open');
        });
    }
});
