'use strict'

//récupérer un élément unique
document.addEventListener('DOMContentLoaded', () => {
    let title = document.querySelector('h1');
    console.log(title);

    //Récupérer premier élément p de la page
    let monParagraphe = document.querySelector('p');
    console.log(monParagraphe);
    //Récupérer TOUS les éléments p de la page
    let mesParagraphes = document.querySelectorAll('p');
    console.log(mesParagraphes);


    let inputText = document.querySelector("#test");
    console.log(inputText);

    let bouton = document.querySelector('form input[type=submit]');
    console.log(bouton);

    bouton.addEventListener('click', function (e) {
        e.preventDefault();
        console.log("Bou ! ");

        let newColor = inputText.value;
        console.log(newColor);

        mesParagraphes.forEach(element => {
            console.log(element);
            element.style.backgroundColor = newColor;

        });
    })
});