'use strict'
// Les promesses

document.addEventListener('DOMContentLoaded',()=>{
    initButton();

});

function initButton(){
    const myButton = document.querySelector("#bouton");
    myButton.addEventListener('click', clickHandler);
}

function clickHandler (event){
    event.preventDefault();
    updateDiv();
};

function updateDiv(){
    const myDiv = document.querySelector('#reponses');
    const reponse = `<h2>Ma Réponse</h2>
                    <p>Tout est OK</p>`;
    myDiv.innerHTML = reponse;
};