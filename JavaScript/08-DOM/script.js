'use strict'

document.addEventListener('DOMContentLoaded',()=>{
    let title = document.querySelector('h1');
    console.log(title);

    //Récupérer premier élément p de la page
    let monParagraphe=document.querySelector('p');
    console.log(monParagraphe);
    //Récupérer TOUS les éléments p de la page
    let mesParagraphes=document.querySelectorAll('p');
    console.log(mesParagraphes);
});