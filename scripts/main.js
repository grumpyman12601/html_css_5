// JAVASCRIPT WRITTEN USING GEMINI
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const backToTopButton = document.getElementById('backToTop');
    const themeSwitch = document.getElementById('theme-switch');

    // Function to apply theme
    const applyTheme = (isLight) => {
        document.body.classList.toggle('light-mode', isLight);
        if (themeSwitch) {
            themeSwitch.checked = isLight;
        }
    };

    // Check for saved theme in local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme === 'light');
    } else {
        // Check for OS preference
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        applyTheme(prefersLight);
    }

    // Handle theme switch click
    if (themeSwitch) {
        themeSwitch.addEventListener('change', (e) => {
            const isLight = e.target.checked;
            applyTheme(isLight);
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        if (backToTopButton) {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        }
    });

    const menuButton = document.querySelector('.mobile-menu-button');
    const navbar = document.querySelector('.navbar');
    if (menuButton && navbar) {
        menuButton.addEventListener('click', (e) => {
            e.preventDefault();
            navbar.classList.toggle('open');
            header.classList.toggle('menu-open');
        });
    }

    const imageContainers = document.querySelectorAll('.image-container');
    if (imageContainers.length > 0) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, { root: null, rootMargin: '0px', threshold: 0.75 });
        imageContainers.forEach(container => {
            imageObserver.observe(container);
        });
    }

    // Handle mobile menu closure on link click
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function() {
            if (navbar.classList.contains('open')) {
                navbar.classList.remove('open');
                header.classList.remove('menu-open');
            }
        });
    });

    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const contactButton = document.querySelector('.cta-button');
    const contactPopup = document.getElementById('contact-popup');
    const closeButton = document.querySelector('.close-button');

    if (contactButton && contactPopup && closeButton) {
        const showPopup = (e) => {
            e.preventDefault();
            e.stopPropagation();

            const buttonRect = contactButton.getBoundingClientRect();

            // Temporarily display to calculate size
            contactPopup.style.display = 'block';
            contactPopup.style.visibility = 'hidden';
            const popupRect = contactPopup.getBoundingClientRect();
            contactPopup.style.visibility = 'visible';

            let top = buttonRect.top - popupRect.height - 10; // 10px spacing above
            let left = buttonRect.left + (buttonRect.width / 2) - (popupRect.width / 2);

            if (top < 0) {
                top = buttonRect.bottom + 10; // Place below if not enough space above
            }
            if (left < 0) {
                left = 10;
            }
            if (left + popupRect.width > window.innerWidth) {
                left = window.innerWidth - popupRect.width - 10;
            }

            contactPopup.style.top = `${top + window.scrollY}px`;
            contactPopup.style.left = `${left + window.scrollX}px`;
        };

        const hidePopup = () => {
            contactPopup.style.display = 'none';
        };

        contactButton.addEventListener('click', showPopup);

        closeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            hidePopup();
        });

        const contactForm = contactPopup.querySelector('form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                hidePopup();
            });
        }

        window.addEventListener('click', (e) => {
            if (contactPopup.style.display === 'block' && !contactButton.contains(e.target) && !contactPopup.contains(e.target)) {
                hidePopup();
            }
        });

        window.addEventListener('resize', () => {
             if (contactPopup.style.display === 'block') {
                 hidePopup();
             }
        });
    }
});
