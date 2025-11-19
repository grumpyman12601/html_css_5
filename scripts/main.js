// JAVASCRIPT WRITTEN USING GEMINI + WA-SWITCH LIGHT/DARK
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const backToTopButton = document.getElementById('backToTop');
    const themeSwitch = document.getElementById('theme-switch');
    const logoImage = document.getElementById('logo-image');

    const darkLogo = 'images/site_logo/FullLogo_Transparent_notext.png';
    const lightLogo = 'images/site_logo/lm_logo.png';

    // -------------------------------
    // APPLY THEME + UPDATE SWITCH + LOGO
    // -------------------------------
    const applyTheme = (isLight) => {
        document.body.classList.toggle('light-mode', isLight);

        if (themeSwitch) {
            themeSwitch.checked = isLight;

            // Access shadow DOM for track/thumb color transition
            const control = themeSwitch.shadowRoot?.querySelector('[part="control"]');
            const thumb = themeSwitch.shadowRoot?.querySelector('[part="thumb"]');

            if (control) {
                control.style.transition = 'background-color 0.4s ease';
                control.style.backgroundColor = isLight ? '#ccc' : '#555'; // gray track
            }
            if (thumb) {
                thumb.style.transition = 'background-color 0.4s ease';
                thumb.style.backgroundColor = '#00ff1e'; // bright green thumb
            }
        }

        if (logoImage) {
            logoImage.style.transition = 'opacity 0.3s ease';
            logoImage.style.opacity = 0;
            setTimeout(() => {
                logoImage.src = isLight ? lightLogo : darkLogo;
                logoImage.style.opacity = 1;
            }, 150);
        }
    };

    // -------------------------------
    // INITIALIZE THEME
    // -------------------------------
    const savedTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    applyTheme(savedTheme ? savedTheme === 'light' : prefersLight);

    // -------------------------------
    // HANDLE SWITCH TOGGLE
    // -------------------------------
    if (themeSwitch) {
        themeSwitch.addEventListener('change', (e) => {
            const isLight = e.target.checked;
            applyTheme(isLight);
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }

    // -------------------------------
    // SCROLL BEHAVIOR
    // -------------------------------
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
        if (backToTopButton) backToTopButton.classList.toggle('visible', window.scrollY > 300);
    });

    // -------------------------------
    // MOBILE MENU
    // -------------------------------
    const menuButton = document.querySelector('.mobile-menu-button');
    const navbar = document.querySelector('.navbar');
    if (menuButton && navbar) {
        menuButton.addEventListener('click', (e) => {
            e.preventDefault();
            navbar.classList.toggle('open');
            header.classList.toggle('menu-open');
        });
    }

    // -------------------------------
    // IMAGE OBSERVER
    // -------------------------------
    const imageContainers = document.querySelectorAll('.image-container');
    if (imageContainers.length > 0) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => entry.target.classList.toggle('visible', entry.isIntersecting));
        }, { root: null, rootMargin: '0px', threshold: 0.75 });
        imageContainers.forEach(container => imageObserver.observe(container));
    }

    // -------------------------------
    // CLOSE MOBILE MENU ON LINK CLICK
    // -------------------------------
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', () => {
            if (navbar.classList.contains('open')) {
                navbar.classList.remove('open');
                header.classList.remove('menu-open');
            }
        });
    });

    // -------------------------------
    // BACK TO TOP BUTTON
    // -------------------------------
    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // -------------------------------
    // CONTACT POPUP
    // -------------------------------
    const contactButton = document.querySelector('.cta-button');
    const contactPopup = document.getElementById('contact-popup');
    const closeButton = document.querySelector('.close-button');

    if (contactButton && contactPopup && closeButton) {
        const showPopup = (e) => {
            e.preventDefault();
            e.stopPropagation();
            const rect = contactButton.getBoundingClientRect();

            contactPopup.style.display = 'block';
            contactPopup.style.visibility = 'hidden';
            const popupRect = contactPopup.getBoundingClientRect();
            contactPopup.style.visibility = 'visible';

            let top = rect.top - popupRect.height - 10;
            let left = rect.left + rect.width / 2 - popupRect.width / 2;
            if (top < 0) top = rect.bottom + 10;
            if (left < 0) left = 10;
            if (left + popupRect.width > window.innerWidth) left = window.innerWidth - popupRect.width - 10;

            contactPopup.style.top = `${top + window.scrollY}px`;
            contactPopup.style.left = `${left + window.scrollX}px`;
        };

        const hidePopup = () => { contactPopup.style.display = 'none'; };

        contactButton.addEventListener('click', showPopup);
        closeButton.addEventListener('click', (e) => { e.stopPropagation(); hidePopup(); });

        const contactForm = contactPopup.querySelector('form');
        if (contactForm) contactForm.addEventListener('submit', (e) => { e.preventDefault(); hidePopup(); });

        window.addEventListener('click', (e) => {
            if (contactPopup.style.display === 'block' && !contactButton.contains(e.target) && !contactPopup.contains(e.target)) hidePopup();
        });

        window.addEventListener('resize', () => {
            if (contactPopup.style.display === 'block') hidePopup();
        });
    }
});
