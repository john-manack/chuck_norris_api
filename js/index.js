'use strict';

function getQuote(category) {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
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
    const main = document.querySelector('.modal-body');

    // Find and remove any existing paragraphs.
    const paragraphs = document.querySelectorAll('p');
    if (paragraphs.length > 0) {
        paragraphs.forEach(paragraph => {
            paragraph.remove();
        })
    }

    // use the 'createElement' method to make a new element in the DOM
    const paragraph = document.createElement('p');
    paragraph.innerHTML = quote;
    // This actually injects the paragraph into the DOM
    main.appendChild(paragraph);
}

// Create a list of the categories from the API and place it in the DOM.
function buildCategoryList(categoryList) {
    // Filter out the 'explicit', 'animal' and 'celebrity' categories
    const filteredList = categoryList.filter(category => {
        if (category !== 'explicit' && category !== 'celebrity' && category !== 'animal') {
            return category;
        }
    });
    
    const form = document.querySelector('#changeQuote')
    const main = document.querySelector('#main')
    const categorySelect = document.createElement('select');
    filteredList.map(category => {
        const categoryOption = document.createElement('option');
        categoryOption.value = category;
        categoryOption.text = category;
        categorySelect.appendChild(categoryOption);
    });
    form.appendChild(categorySelect);

    categorySelect.addEventListener('change', event => {
        getQuote(event.target.value);
    })
}

getCategories();
getQuote('career');