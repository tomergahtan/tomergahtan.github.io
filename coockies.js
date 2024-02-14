
export function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (encodeURIComponent(value) || "") + expires + "; path=/";
    
}

export function getCookieValue(name) {
    const cookies = document.cookie.split('; ');
    const cookiePair = cookies.find(cookie => cookie.startsWith(name + '='));
    return cookiePair ? decodeURIComponent(cookiePair.split('=')[1]) : null;
}


export const heartEmojiCodes = [
    '&#x2764;&#xFE0F;', // Red Heart
    '&#x1F5A4;',       // Black Heart
    '&#x1F49B;',       // Yellow Heart
    '&#x1F49A;',       // Green Heart
    '&#x1F499;',       // Blue Heart
    '&#x1F49C;',       // Purple Heart
    '&#x1F90E;',       // Brown Heart
    '&#x1F90D;',       // White Heart
    '&#x1F498;',       // Heart with Arrow
    '&#x1F49D;',       // Heart with Ribbon
    '&#x1F496;',       // Sparkling Heart
    '&#x1F497;',       // Growing Heart
    '&#x1F493;',       // Beating Heart
    '&#x1F495;',       // Two Hearts
];


export function deleteCookie(name) {
            document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        }





