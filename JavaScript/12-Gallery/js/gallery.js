'use strict'

document.addEventListener("DOMContentLoaded",()=>{
    initGallery();
});

let zoom, nav; // Initialisation de mes variables

function initGallery(){
    zoom = document.querySelector("#zoom");
    nav = document.querySelector('nav');
    const buttons = nav.querySelectorAll('a');
    buttons.forEach(button => button.addEventListener('click',clickHandler));
}

function clickHandler(e){
    e.preventDefault();
    // Récupère l'index
    let parentLi = this.parentNode;
    let myIndex = getChildIndex(parentLi);

    // Supprime toute les class "focus";
    const focused = document.querySelectorAll('.focus');
    focused.forEach((focusElt)=>
        focusElt.classList.remove('focus')
    );

    // Ajoute la class focus au bouton :
    parentLi.classList.add('focus');

    // Ajoute la class focus au zoom :
    let zoomed = zoom.querySelector("li:nth-of-type("+(myIndex+1)+")");
    zoomed.classList.add("focus");
}

// Fonction pour récupérer l'index dans une liste
// src : http://blog.moagrius.com/javascript/javascript-get-index-of-child-element/
function getChildIndex(child){
    let parent = child.parentNode;
    let children = parent.children;
    let i = children.length - 1;
    for (; i >= 0; i--){
        if (child == children[i]){
            break;
        }
    }
    return i;
};