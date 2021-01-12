'use strict';

function updateBody(quote) {
    const main = document.querySelector('#main');
    // use the 'createElement' method to make a new element in the DOM
    const paragraph = document.createElement('p');
    paragraph.innerHTML = quote;
    // This actually injects the paragraph into the DOM
    main.appendChild(paragraph);
}