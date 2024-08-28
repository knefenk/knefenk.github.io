// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project data
const projects = {
    project1: {
        title: "Modern Loft",
        description: "A sleek urban loft that combines industrial elements with contemporary design. This project features open spaces, minimalist furniture, and a monochromatic color scheme with pops of vibrant accents.",
        images: ["project1-1.jpg", "project1-2.jpg", "project1-3.jpg"]
    },
    project2: {
        title: "Rustic Retreat",
        description: "A cozy countryside home that embraces natural materials and warm textures. This design incorporates wooden beams, stone fireplaces, and comfortable furnishings to create a welcoming atmosphere.",
        images: ["project2-1.jpg", "project2-2.jpg", "project2-3.jpg"]
    },
    project3: {
        title: "Minimalist Office",
        description: "A clean and efficient workspace designed to boost productivity and creativity. This office features a neutral color palette, ergonomic furniture, and clever storage solutions.",
        images: ["project3-1.jpg", "project3-2.jpg", "project3-3.jpg"]
    },
    project4: {
        title: "Coastal Villa",
        description: "A luxurious beachfront property that blends indoor and outdoor living. This design showcases panoramic ocean views, light-filled spaces, and a sophisticated beach-inspired color scheme.",
        images: ["project4-1.jpg", "project4-2.jpg", "project4-3.jpg"]
    }
};

// Modal elements
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const closeBtn = document.getElementsByClassName("close")[0];
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentProject;
let currentImageIndex;

// Open project modal
function openProject(projectId) {
    currentProject = projects[projectId];
    currentImageIndex = 0;
    modalTitle.textContent = currentProject.title;
    modalImage.src = currentProject.images[currentImageIndex];
    modalDescription.textContent = currentProject.description;
    modal.style.display = "block";
}

// Close modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Navigate images
prevBtn.onclick = function() {
    currentImageIndex = (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
    modalImage.src = currentProject.images[currentImageIndex];
}

nextBtn.onclick = function() {
    currentImageIndex = (currentImageIndex + 1) % currentProject.images.length;
    modalImage.src = currentProject.images[currentImageIndex];
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
