document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const logo = document.getElementById('logo');
    const currentYear = document.getElementById('currentYear');

    // Set initial theme based on user preference or default to light
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setTheme(isDarkMode);

    // Set current year in the footer
    currentYear.textContent = new Date().getFullYear();

    // Theme toggle functionality
    themeToggle.addEventListener('change', function () {
        const isDarkMode = themeToggle.checked;
        setTheme(isDarkMode);
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Function to set theme
    function setTheme(isDarkMode) {
        const logoPath = 'assets/images/whiteLogo.png'; // Always use white logo
        document.body.classList.toggle('dark', isDarkMode);
        logo.src = logoPath;
    }
});

