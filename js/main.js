document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Form Handling
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerHTML;

            btn.innerHTML = 'Enviando...';
            btn.style.opacity = '0.7';

            // Simulate API call
            setTimeout(() => {
                btn.innerHTML = 'Mensagem Enviada!';
                btn.style.background = 'var(--accent-eco)';
                form.reset();

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = 'var(--accent-solar)';
                    btn.style.opacity = '1';
                }, 3000);
            }, 1500);
        });
    }

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
