document.addEventListener('DOMContentLoaded', () => {
    console.log("INCP-2 Workshop Website Loaded Successfully");

    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Optional: Add a confirmation before leaving for external registration
    const registerBtn = document.querySelector('.btn-register');
    if (registerBtn) {
        registerBtn.addEventListener('click', (e) => {
            // Since there is no actual link in the PDF yet, we show this alert.
            // If you add a real link later, you can remove this script.
            alert("The registration link will open in a new tab.");
        });
    }
});