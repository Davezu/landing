document.addEventListener('DOMContentLoaded', function() {
    // Testimonial slider functionality
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Scroll amount for testimonials
    const scrollAmount = 320; // Width of testimonial card + gap

    // Event listeners for testimonial navigation
    if (prevBtn && nextBtn && testimonialSlider) {
        prevBtn.addEventListener('click', function() {
            testimonialSlider.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', function() {
            testimonialSlider.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    // Mobile navigation toggle (for future implementation)
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navigation = document.querySelector('.navigation');

    if (mobileNavToggle && navigation) {
        mobileNavToggle.addEventListener('click', function() {
            navigation.classList.toggle('active');
            mobileNavToggle.classList.toggle('active');
        });
    }

    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };

    // Call on initial load and on scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
}); 