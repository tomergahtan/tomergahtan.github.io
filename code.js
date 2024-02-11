        









function displayScreenSize() {
    'use strict';
            var screenSizeDiv = document.getElementById('screen-size');
            screenSizeDiv.innerHTML = "Screen Width: " + window.screen.width + "px, Screen Height: " + window.screen.height + "px";
        }

function displayScreenSize() {
    const pixelsPerInch = 96;
    const cmPerInch = 2.54;
    const widthInCm = (window.screen.width / pixelsPerInch) * cmPerInch;
    const heightInCm = (window.screen.height / pixelsPerInch) * cmPerInch;
    
    const screenSizeDiv = document.getElementById('screen-size');
    screenSizeDiv.innerHTML = "Screen Width: " + widthInCm.toFixed(2) + " cm, Screen Height: " + heightInCm.toFixed(2) + " cm";
}