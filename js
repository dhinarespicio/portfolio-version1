// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});


// Testimonial Carousel Script
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showNextTestimonial() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].classList.add('active');
}

// Automatically switch testimonials every 3 seconds
setInterval(showNextTestimonial, 2000);


// Animate Progress Bars on Page Load
window.addEventListener('load', function() {
    document.querySelector('.html-fill').style.width = '30%';
    document.querySelector('.css-fill').style.width = '40%';
    document.querySelector('.js-fill').style.width = '30%';
});
