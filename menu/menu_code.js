        



function adjustBackgroundSize() {
  // Use CSS custom properties for more efficient updates
  const root = document.documentElement;
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;

  // Only update the variables if they have changed
  const currentWidth = parseInt(getComputedStyle(root).getPropertyValue('--background-width'));
  const currentHeight = parseInt(getComputedStyle(root).getPropertyValue('--background-height'));

  if (newWidth !== currentWidth || newHeight !== currentHeight) {
    root.style.setProperty('--background-width', `${newWidth}px`);
    root.style.setProperty('--background-height', `${newHeight}px`);
  }
}

// Initial adjustment
adjustBackgroundSize();

// Adjust background size on window resize or orientation change
window.addEventListener('resize', adjustBackgroundSize);
window.addEventListener('orientationchange', adjustBackgroundSize);

adjustBackgroundSize();

// Attach the adjustBackgroundSize function to window resize event
window.addEventListener('resize', adjustBackgroundSize);

// Attach the adjustBackgroundSize function to orientation change event
window.addEventListener('orientationchange', adjustBackgroundSize);



