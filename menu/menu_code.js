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
    const elementsEnd = document.querySelectorAll('.end');
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
