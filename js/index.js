'use strict';

const quote = fetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(data => {
        updateBody(data.value);
        return data;
    })
    .catch(error => {
        console.error("ERROR:", error);
        return error;
    });

function updateBody(quote) {
    const chuckSays = document.querySelector('#chuckSays');
    chuckSays.innerHTML = quote;
}