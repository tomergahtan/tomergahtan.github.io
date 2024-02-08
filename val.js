document.getElementById('imageToClick').addEventListener('click', function(e) {
    'use strict';
    const rect = e.target.getBoundingClientRect();
    const imageCenterX = rect.left + (rect.width / 2);
    let imageCenterY = rect.top + (rect.height / 2); 

    // Adjust for viewport width for specific devices
    if (window.innerWidth <= 760) {
        imageCenterY += 20; // Adjust based on needs for Galaxy S10 size
    }

    const numberOfHearts = 5; 

    const radius = Math.max(rect.width, rect.height) / 2 + 30; 

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '&#x2764;&#xFE0F;';
        document.body.appendChild(heart);

        // Distribute hearts evenly around the image
        const angle = (i / numberOfHearts) * 2 * Math.PI; 
        const heartX = imageCenterX + radius * Math.cos(angle) - (heart.offsetWidth / 2) + window.scrollX;
        const heartY = imageCenterY + radius * Math.sin(angle) - (heart.offsetHeight / 2) + window.scrollY;

        heart.style.left = `${heartX}px`;
        heart.style.top = `${heartY}px`;

        // Apply initial scale to make the transition smooth from the beginning
        heart.style.transform = 'scale(0.5)';

        // Animate the hearts to scale up and then disappear
        setTimeout(() => {
            heart.style.transform = 'scale(1)';
            heart.style.opacity = '0';
        }, 10);

        // Clean up and remove hearts after animation ends
        heart.addEventListener('transitionend', function() {
            heart.remove();
        });
    }
});




document.addEventListener('DOMContentLoaded', function() {
    var imageContainer = document.querySelector('.imagecontainer');

    // Function to scale up
    function scaleUp() {
        imageContainer.style.transform = 'scale(1.1)';
        imageContainer.style.transition = 'transform 1s ease';
    }

    // Function to scale down back to normal
    function scaleDown() {
        imageContainer.style.transform = 'scale(1)';
        imageContainer.style.transition = 'transform 1s ease';
    }

    // Listen for touch events
    imageContainer.addEventListener('touchstart', scaleUp);
    document.addEventListener('touchend', scaleDown);
});