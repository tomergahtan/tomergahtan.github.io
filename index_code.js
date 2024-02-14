
import {setCookie,getCookieValue,heartEmojiCodes,deleteCookie} from './coockies.js';

function adjustBackgroundAndEndFontSize() {
    'use strict';

    const root = document.documentElement;
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    // Update background size
    const currentWidth = parseInt(getComputedStyle(root).getPropertyValue('--background-width'), 10);
    const currentHeight = parseInt(getComputedStyle(root).getPropertyValue('--background-height'), 10);

    if (newWidth !== currentWidth || newHeight !== currentHeight) {
        root.style.setProperty('--background-width', `${newWidth}px`);
        root.style.setProperty('--background-height', `${newHeight}px`);
    }

    // Dynamic font size adjustment for .end class
    // Define a base font size and a reference screen width for .end class
    const baseFontSizeEnd = 40; // Base font size in pixels for .end class
    const referenceScreenWidthEnd = 1920; // Reference screen width for the base font size of .end

    // Calculate the scale factor based on current screen width and reference screen width for .end
    const scaleFactorEnd = newWidth / referenceScreenWidthEnd;

    // Calculate new font size based on scale factor for .end
    // Ensure that there's a minimum font size to maintain readability for .end class
    const newFontSizeEnd = Math.max(baseFontSizeEnd * scaleFactorEnd, 20); // Minimum font size is 20px for .end

    // Update the font size for all elements with the .end class
    const elementsEnd = document.querySelectorAll('.tomenu');
    elementsEnd.forEach(element => {
        element.style.fontSize = `${newFontSizeEnd}px`;
    });
}

// Initial adjustment
adjustBackgroundAndEndFontSize();

// Attach the adjustBackgroundAndEndFontSize function to window resize event
window.addEventListener('resize', adjustBackgroundAndEndFontSize);

// Attach the adjustBackgroundAndEndFontSize function to orientation change event
window.addEventListener('orientationchange', adjustBackgroundAndEndFontSize);







document.getElementById('imageToClick').addEventListener('click', function (e) {
    'use strict';
    

    if (!getCookieValue("index")){
        setCookie("index",0,0.1);
    }
    
    console.log(document.cookie);
    
    const rect = e.target.getBoundingClientRect();
    
    
    const imageCenterX = rect.left + (rect.width / 2);
    let imageCenterY = rect.top + (rect.height / 2); 

    // Adjust for viewport width for specific devices


    const numberOfHearts = 5; 

    let radius = Math.max(rect.width, rect.height) / 2 + 30; 
    if (window.innerWidth <= 760) {
        
        radius-=15;// Adjust based on needs for Galaxy S10 size
    }
    
    const value = parseInt(getCookieValue('index'))
    
    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = heartEmojiCodes[value];
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
    setCookie("index",(value+1)% heartEmojiCodes.length,0.1);
    deleteCookie("testCookie");
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

