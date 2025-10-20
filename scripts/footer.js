const backToTop = document.getElementById('backToTop');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Optimisation des animations
        let lastScrollY = 0;
        let ticking = false;

        window.addEventListener('scroll', () => {
            lastScrollY = window.scrollY;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    // Ici vous pourriez ajouter d'autres animations en fonction du scroll
                    ticking = false;
                });

                ticking = true;
            }
        });

        // Chargement différé des éléments non critiques
        document.addEventListener('DOMContentLoaded', function () {
            if ('IntersectionObserver' in window) {
                const lazyElements = document.querySelectorAll('.lazy');

                const lazyObserver = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const lazyElement = entry.target;
                            // Charger les éléments ici
                            lazyObserver.unobserve(lazyElement);
                        }
                    });
                });

                lazyElements.forEach((lazyElement) => {
                    lazyObserver.observe(lazyElement);
                });
            }
        });