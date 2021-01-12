'use strict';

function getQuote() {
    const url = "https://api.chucknorris.io/jokes/random?category=dev";
    get(url).then(response => {
        updateBody(response.value);
    });
}

function getCategories() {
    const url = "https://api.chucknorris.io/jokes/categories";
    get(url).then(response => {
        console.log("Category response:", response);
        buildCategoryList(response);
    });
}

function updateBody(quote) {
    const main = document.querySelector('#main');
    // use the 'createElement' method to make a new element in the DOM
    const paragraph = document.createElement('p');
    paragraph.innerHTML = quote;
    // This actually injects the paragraph into the DOM
    main.appendChild(paragraph);
}

// Create a list of the categories from the API and place it in the DOM.
function buildCategoryList(categoryList) {
    const main = document.querySelector('#main')
    const categoryUL = document.createElement('ul');
    categoryList.map(category => {
        const categoryLI = document.createElement('li');
        categoryLI.innerHTML = category;
        categoryUL.appendChild(categoryLI);
    });
    console.log(categoryUL);
    main.appendChild(categoryUL);
}

getCategories();
getQuote();