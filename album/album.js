const imageList = ['101.jpg', '102.jpg', '104.jpg', '105.jpg', '106.jpg', '107.jpg', '108.jpg', '109.jpg', '110.jpg', '111.jpg', '112.jpg', '113.jpg', '114.jpg', '115.jpg', '116.jpg', '117.jpg', '118.jpg', '119.jpg', '120.jpg', '121.jpg', '122.jpg', '123.jpg', '124.jpg', '125.jpg', '126.jpg', '127.jpg', '128.jpg', '129.jpg', '130.jpg', '131.jpg', '132.jpg', '133.jpg', '134.jpg', '135.jpg', '136.jpg', '137.jpg', '138.jpg', '139.jpg', '140.jpg', '141.jpg', '142.jpg', '143.jpg', '144.jpg', '145.jpg', '146.jpg', '147.jpg', '148.jpg', '149.jpg', '150.jpg', '151.jpg', '152.jpg', '153.jpg', '154.jpg', '155.jpg', '156.jpg', '157.jpg', '158.jpg', '159.jpg', '160.jpg', '161.jpg', '162.jpg', '163.jpg', '164.jpg', '165.jpg', '166.jpg', '167.jpg', '168.jpg', '169.jpg', '170.jpg', '172.jpg', '173.jpg', '174.png', '175.jpg', '176.png', '177.jpg', '178.jpg', '179.jpg', '180.jpg', '181.jpg', '182.jpg', '183.jpg', '184.jpg', '185.jpg', '186.jpg', '187.jpg', '188.jpg', '190.jpg', '191.jpg', '192.jpg', '193.jpg', '195.jpg', '196.jpg', '20190107_120253.jpg', '20190108_124607.jpg', '20190110_184608.jpg', '20190110_184652.jpg', '20190110_184658.jpg', '20190115_151321.jpg'];



document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');

    
    // Define the interval time in milliseconds (e.g., 5000 for 5 seconds)
    const intervalTime = 5000;

    imageList.forEach((src, index) => {
        const item = document.createElement('div');
        item.className = 'carousel-item' + (index === 0 ? ' active' : '');
        item.setAttribute('data-bs-interval', intervalTime); // Set the interval time for each item

        const img = document.createElement('img');
        img.src = "/valentine images/"+src;
        img.className = 'd-block w-100';
        img.alt = 'Valentine Image ' + (index + 1);
        img.style.objectFit = 'contain';
        img.style.height = '100%';
        item.appendChild(img);
        carouselInner.appendChild(item);
    });
});


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
    let baseFontSizeEnd = 150; // Base font size in pixels for .end class
    const referenceScreenWidthEnd = 1920; // Reference screen width for the base font size of .end

    // Calculate the scale factor based on current screen width and reference screen width for .end
    const scaleFactorEnd = newWidth / referenceScreenWidthEnd;

    // Calculate new font size based on scale factor for .end
    // Ensure that there's a minimum font size to maintain readability for .end class
    const newFontSizeEnd = Math.max(baseFontSizeEnd * scaleFactorEnd, 20); // Minimum font size is 20px for .end

    // Update the font size for all elements with the .end class
    let elementsEnd = document.querySelectorAll('.bless');
    elementsEnd.forEach(element => {
        element.style.fontSize = `${newFontSizeEnd}px`;
    });
    
    elementsEnd = document.querySelectorAll('.tomenu');
    elementsEnd.forEach(element => {
        element.style.fontSize = `${Math.max(100 * scaleFactorEnd, 20)}px`;
    });
}

// Initial adjustment
adjustBackgroundAndEndFontSize();

// Attach the adjustBackgroundAndEndFontSize function to window resize event
window.addEventListener('resize', adjustBackgroundAndEndFontSize);

// Attach the adjustBackgroundAndEndFontSize function to orientation change event
window.addEventListener('orientationchange', adjustBackgroundAndEndFontSize);


