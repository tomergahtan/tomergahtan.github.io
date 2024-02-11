        



function adjustBackgroundSize() {

    const styleElement = document.getElementById('dynamic-background-style');
    const screenWidth = window.innerWidth; // Get the current width of the viewport
    const screenHeight = window.innerHeight; // Get the current height of the viewport

    if (!styleElement) {
        // If the style element doesn't exist, create it and append it to <head>
        const newStyleElement = document.createElement('style');
        newStyleElement.id = 'dynamic-background-style';
        document.head.appendChild(newStyleElement);
        newStyleElement.innerHTML = `
            body::before {
                background-size: ${screenWidth}px ${screenHeight}px !important;
            }
        `;
    } else {
        // If the style element exists, update its content
        styleElement.innerHTML = `
            body::before {
                background-size: ${screenWidth}px ${screenHeight}px ;
            }
        `;
    }
}


adjustBackgroundSize();
// Attach the adjustBackgroundSize function to window resize event
window.addEventListener('resize', adjustBackgroundSize);

// Attach the adjustBackgroundSize function to orientation change event
window.addEventListener('orientationchange', adjustBackgroundSize);

function displayScreenSize() {
    'use strict';
            var screenSizeDiv = document.getElementById('screen-size');
            screenSizeDiv.innerHTML = "Screen Width: " + window.screen.width + "px, Screen Height: " + window.screen.height + "px";
        }

