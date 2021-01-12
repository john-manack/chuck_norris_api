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
        buildCategoryList(response);
    });
}

function updateBody(quote) {
    const paragraph = document.querySelector('#modal p');
    paragraph.innerHTML = quote;
    toggleModal();
}

function buildCategoryList(categoryList) {
    // Filter out the 'explicit', 'animal' and 'celebrity' categories
    const filteredList = categoryList.filter(category => {
        if (category !== 'explicit' && category !== 'celebrity' && category !== 'animal') {
            return category;
        }
    });
    
    const form = document.querySelector('#changeQuote')
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

closeModal.addEventListener('click', toggleModal);

function toggleModal() {
    const modalOverlay = document.querySelector("#overlay");
    modalOverlay.classList.toggle("visible");
}

getCategories();
getQuote('career');