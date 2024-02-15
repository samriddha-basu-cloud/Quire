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
        const logoPath = '/assets/images/whiteLogo.png'; // Always use white logo
        const transitionDuration = '2s'; // Transition duration
        document.body.style.transition = `background-color ${transitionDuration}`; // Add transition for background color
        document.body.classList.toggle('dark', isDarkMode);
        logo.src = logoPath;
    }
});

// Get the search input field
const searchInput = document.getElementById('searchInput');

// Add event listener for input changes
searchInput.addEventListener('input', function () {
    // Get the search query
    const searchQuery = searchInput.value.toLowerCase();

    // Get all article titles
    const articleTitles = document.querySelectorAll('.article-title');

    // Loop through each article title
    articleTitles.forEach(function (title) {
        // Get the article title text content
        const articleTitle = title.textContent.toLowerCase();

        // Check if the article title contains the search query
        const isMatch = articleTitle.includes(searchQuery);

        // Get the parent article grid element
        const articleGrid = title.closest('.article');

        // Show or hide the article grid based on the search result
        articleGrid.style.display = isMatch ? 'block' : 'none';
    });
});

