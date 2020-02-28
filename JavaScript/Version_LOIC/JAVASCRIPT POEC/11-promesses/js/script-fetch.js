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
    const URL = './content.json';

    fetch(URL)
        .then(
            /*
            function(reponse){         // Version ou on retourne une réponse ET une console.log
                console.log(reponse);
                return reponse.json();
            }
            */
           (reponse)=> reponse.json() // Version ou on retourne directement lea réponse json de ma requete
           
        )
        .then(  
            (json_response) => {
                console.log(json_response.liste);
                showContent(json_response.liste);
            }
        ).catch(
            (e) => console.error(e)
        );
}

function showContent(tab){
    const myDiv = document.querySelector("#myContent");

    let newContent = '';

    newContent += `<ul>`; // Ouvre ma balise Ul de ma liste

    tab.forEach((elt)=>{
        
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


function loadText(){
    console.log('loadText');

    const textUrl = "./duTexte.txt";

    fetch(textUrl)
        .then( x=> x.text())
        .then( (text) => {
                console.log(text);
        }) ;
}
loadText();