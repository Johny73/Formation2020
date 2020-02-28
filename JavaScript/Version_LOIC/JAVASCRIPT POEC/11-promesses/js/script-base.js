import {MY_CONTENT} from './content.js';
'use strict'

// Les promesse :

document.addEventListener('DOMContentLoaded',()=>{
    initButton();
;});

function initButton(){
    const myButton = document.querySelector('#bouton');

    myButton.addEventListener('click',clickHandler);
}

function clickHandler(event){
    event.preventDefault();
    updateDiv();
}

function updateDiv(){
    const myDiv = document.querySelector("#myContent");

    let newContent = '';
    newContent += `<ul>`; // Ouvre ma balise Ul de ma liste

    MY_CONTENT.forEach((elt)=>{
        
        let title = elt.title;
        let content = elt.content;
        console.log(title);
        console.log(content);
        console.log("------------");

        newContent += `
            <li>
                <h2>${title}</h2>
                <p>${content}</p>
            </li>
        `;
    });

    newContent += `</ul>`; // Ferme ma liste




    myDiv.innerHTML = newContent;
}