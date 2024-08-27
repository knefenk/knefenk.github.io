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
