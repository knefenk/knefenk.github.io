// Lightbox for gallery
new SimpleLightbox('.gallery-grid a', {
    /* options */
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to top button
const backToTopButton = document.getElementById("back-to-top");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// Simple testimonial slider
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showNextTestimonial() {
    testimonials[testimonialIndex].style.display = 'none';
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    testimonials[testimonialIndex].style.display = 'block';
}

setInterval(showNextTestimonial, 5000); // Change testimonial every 5 seconds

// Theme switcher
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

// Animated section transitions
const sections = document.querySelectorAll('section');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// 3D rotating showcase
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('rotating-showcase').appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Interactive skills chart
const ctx = document.getElementById('skills-chart').getContext('2d');
new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Residential Design', 'Commercial Interiors', '3D Visualization', 'Color Theory', 'Space Planning'],
        datasets: [{
            label: 'Skills',
            data: [90, 85, 80, 95, 88],
            backgroundColor: 'rgba(187, 134, 252, 0.2)',
            borderColor: 'rgba(187, 134, 252, 1)',
            pointBackgroundColor: 'rgba(187, 134, 252, 1)',
        }]
    },
    options: {
        scale: {
            ticks: { beginAtZero: true, max: 100 }
        }
    }
});

// Lazy-loading gallery with blur-up effect
const galleryItems = [
    { src: 'project1.jpg', alt: 'Project 1' },
    { src: 'project2.jpg', alt: 'Project 2' },
    // Add more projects as needed
];

const galleryGrid = document.querySelector('.gallery-grid');

galleryItems.forEach(item => {
    const a = document.createElement('a');
    a.href = item.src;
    a.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = 'placeholder.jpg'; // Low-res placeholder
    img.dataset.src = item.src; // High-res image
    img.alt = item.alt;

    a.appendChild(img);
    galleryGrid.appendChild(a);
});

const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src;

                img.src = src;
                img.addEventListener('load', () => {
                    img.classList.add('loaded');
                });

                observer.disconnect();
            }
        });
    });

    io.observe(target);
};

const lazyImages = document.querySelectorAll('.gallery-item img');
lazyImages.forEach(lazyLoad);

// Initialize lightbox
new SimpleLightbox('.gallery-grid a', { /* options */ });
