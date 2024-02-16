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

// Get the search input field and search button
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Add click event listener to the search button
searchButton.addEventListener('click', performSearch);

// Add keydown event listener to the search input field
searchInput.addEventListener('keydown', function(event) {
    // Check if the key pressed is Enter (key code 13)
    if (event.keyCode === 13) {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Perform the search
        performSearch();
    }
});

// Function to perform the search
function performSearch() {
    // Get the search query
    const searchQuery = searchInput.value.trim().toLowerCase();

    // Get all article titles and keywords
    const articleTitles = document.querySelectorAll('.article-title');
    const articleKeywords = document.querySelectorAll('.keywords');

    // Loop through each article
    for (let i = 0; i < articleTitles.length; i++) {
        // Get the article title and keywords text content
        const articleTitle = articleTitles[i].textContent.toLowerCase();
        const articleKeywordText = articleKeywords[i].textContent.toLowerCase();

        // Check if the search query is empty or if it matches the title or keywords
        const isMatch = searchQuery === '' || 
                        articleTitle.includes(searchQuery) || 
                        articleKeywordText.includes(searchQuery);

        // Get the parent article grid element
        const articleGrid = articleTitles[i].closest('.article');

        // Show or hide the article grid based on the search result
        articleGrid.style.display = isMatch ? 'block' : 'none';
    }
}

// Immediately display all articles when the search bar is empty
searchInput.addEventListener('input', function () {
    if (searchInput.value.trim() === '') {
        const articleGrids = document.querySelectorAll('.article');
        articleGrids.forEach(function (grid) {
            grid.style.display = 'block';
        });
    }
});