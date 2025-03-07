document.addEventListener('DOMContentLoaded', () => {
    const getStartedBtn = document.getElementById('get-started-btn');
    const modal = document.getElementById('signup-modal');
    const closeBtn = document.querySelector('.close');
    const signupForm = document.getElementById('signup-form');

    // Open modal
    getStartedBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Form submission (placeholder)
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for signing up! We’ll get back to you soon.');
        modal.style.display = 'none';
        signupForm.reset();
    });

    // Smooth scrolling for navbar links
    document.querySelectorAll('.navbar-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
