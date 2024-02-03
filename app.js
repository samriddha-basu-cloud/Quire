// Sample data for blog posts
const blogPosts = [
    {
        title: 'Introduction to JavaScript',
        date: '2024-02-01',
        content: 'This is the content of the first article.',
        image: 'image1.jpg'
    },
    // Add more blog posts as needed
];

// Function to display blog posts
function displayBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = '';

    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p class="date">${post.date}</p>
            <img src="${post.image}" alt="${post.title}">
            <p>${post.content}</p>
        `;

        blogPostsContainer.appendChild(postElement);
    });
}

// Function to generate calendar buttons
function generateCalendar() {
    const calendarContainer = document.getElementById('calendar');

    for (let i = 1; i <= 31; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => {
            // Handle button click, load articles for the selected day
            console.log(`Load articles for day ${i}`);
        });

        calendarContainer.appendChild(button);
    }
}

// Function to update the current year in the footer
function updateCurrentYear() {
    const currentYearElement = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
}

// Initial setup
displayBlogPosts();
generateCalendar();
updateCurrentYear();
