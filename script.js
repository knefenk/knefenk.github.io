// script.js

function openGallery(projectId) {
    const modal = document.getElementById('gallery-modal');
    const content = document.getElementById('gallery-content');
    
    // Clear previous content
    content.innerHTML = '';
    
    // Add project images (you'll need to customize this part)
    const images = getProjectImages(projectId);
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'modal-content';
        content.appendChild(img);
    });
    
    modal.style.display = 'block';
}

function getProjectImages(projectId) {
    // This is a placeholder function. In a real application, you would
    // fetch the images for each project, perhaps from a database or a predefined list.
    // For now, we'll return dummy data.
    return [
        `project1b.jpeg`,
        `project1c.jpeg`,

    ];
}

// Close the modal when clicking on <span> (x)
document.querySelector('.close').onclick = function() {
    document.getElementById('gallery-modal').style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('gallery-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
