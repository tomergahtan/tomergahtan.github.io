document.getElementById('imageToClick').addEventListener('click', function(e) {
    const rect = e.target.getBoundingClientRect();
    const imageCenterX = rect.left + (rect.width / 2);
    const imageCenterY = rect.top + (rect.height / 2);
    const numberOfHearts = 5; // Adjust based on how many hearts you want around the image
    
    // Adjust the radius to control how far from the image center the hearts will appear
    const radius = Math.max(rect.width, rect.height) / 2 + 30; // 30px beyond the image's half width/height
    
    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '&#x2764;&#xFE0F;'; // Unicode heart symbol
        document.body.appendChild(heart);
        
        // Calculate the position for each heart around the image
        const angle = (i / numberOfHearts) * 2 * Math.PI; // Distribute hearts evenly around the image
        const heartX = imageCenterX + radius * Math.cos(angle) - (heart.offsetWidth / 2);
        const heartY = imageCenterY + radius * Math.sin(angle) - (heart.offsetHeight / 2);

        heart.style.left = `${heartX}px`;
        heart.style.top = `${heartY}px`;
        
        // Apply initial scale to make the transition smooth from the beginning
        heart.style.transform = 'scale(0.5)';

        // Animate the hearts to scale up and then disappear
        setTimeout(() => { // Start transformations with a slight delay for smooth animation
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