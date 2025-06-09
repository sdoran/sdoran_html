document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".testimonial-slide");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? "1" : "0";
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });

        currentIndex = index;

        // Update GTM
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
        'event': 'testimonial_selected',
        'testimonial_index': index,
        });
    }

    // Attach click handlers to each dot
    dots.forEach(dot => {
    dot.addEventListener("click", () => {
        const index = parseInt(dot.getAttribute("data-index"));
        showSlide(index);
    });
    });

    // Initial display
    showSlide(0);
  });