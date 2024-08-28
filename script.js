// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to open project details (you'll need to implement this)
function openProject(projectId) {
    // Implement modal or navigation to project detail page
    console.log(`Opening project: ${projectId}`);
}
