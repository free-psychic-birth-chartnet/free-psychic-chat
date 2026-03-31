/**
 * Mobile navigation toggle + header scroll state.
 */
(function() {
    'use strict';

    const header = document.getElementById('site-header');
    const toggle = document.getElementById('mobile-toggle');
    const nav    = document.getElementById('main-nav');

    // Mobile menu toggle
    if (toggle && nav) {
        toggle.addEventListener('click', function() {
            nav.classList.toggle('open');
            toggle.classList.toggle('active');
        });

        // Close menu when clicking a link
        nav.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                nav.classList.remove('open');
                toggle.classList.remove('active');
            });
        });
    }

    // Header scroll state
    if (header) {
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(function() {
                    if (window.scrollY > 50) {
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
})();
