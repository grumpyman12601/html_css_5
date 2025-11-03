document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const backToTopButton = document.getElementById('backToTop');

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
        }, { root: null, rootMargin: '0px', threshold: 0.18 });
        imageContainers.forEach(container => {
            imageObserver.observe(container);
        });
    }

    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
                if (navbar.classList.contains('open')) {
                    navbar.classList.remove('open');
                    header.classList.remove('menu-open');
                }
            }
        });
    });

    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
