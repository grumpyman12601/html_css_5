$(document).ready(() => {
    const mobileNav = $('#mobile-nav');
    const header = $('header');

    mobileNav.click(() => {
        // When the button is clicked, add or remove the 'nav-open' class on the header
        header.toggleClass('nav-open');
});
});