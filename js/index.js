'use strict';

// FETCH Exercise from class (more modern, simpler way)
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

// XHR Exercises from AJAX 101 in the learning portal (less modern, more complex way)
const request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this);
    }
    // console.log(this);
};
request.open("GET", "https://api.chucknorris.io/jokes/random?category=dev");
request.send();

fetch('https://api.chucknorris.io/jokes/random?category=dev').then(response => {
    console.log(response);
})