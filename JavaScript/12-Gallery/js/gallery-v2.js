'use strict'

document.addEventListener("DOMContentLoaded",()=>{
    initGallery();
});
let zoom, nav;

const IMGS = [
    {
        url:'./img/acatos.png',
        title:'ACATOS !',
        content:'lorem ...',
    },
    {
        url:'./img/albator.png',
        title:'ALABATOR !',
        content:'Lorem Ipsum ...',
    },
    {
        url:'./img/barracuda.png',
        title:'BARRACUDA !',
        content:'Des trucs vachement bien ^__-',
    }
];



function initGallery(){
    
    zoom = document.querySelector("#zoom");
    nav = document.querySelector('nav');

    prepareLesBoutons();
    updateZoom(0);
}

function prepareLesBoutons(){
    // Préparation de la liste de boutons :
    let newHtmlNav = '<ul>'; 
    let i = 0;

    IMGS.forEach((elt) => {
        let img = elt.url;
        let alt = elt.title;

        if(i===0){
            newHtmlNav += `<li class="focus">`; // Si c'est le premier, alors c'est lui qui a le focus (pour etre raccord avec l'image chargée par defaut)
        }else{
            newHtmlNav += `<li>`;
        }

        newHtmlNav += `
            <a href="${i}"><img src="${img}" alt="${alt}"></a></li>
        `;
        i++;
    } );

    newHtmlNav += '</ul>';
    nav.innerHTML = newHtmlNav;

    const buttons = nav.querySelectorAll('a'); // J'affecte un écouteur sur mes boutons
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

    // Mise à jour de l'image :
    updateZoom(myIndex);
}


function updateZoom(index){
    // Je récupère mes infos dans mon tableau pour les afficher ensuite
    const url = IMGS[index].url;
    const title = IMGS[index].title;
    const content = IMGS[index].content;

    let newZoom = `
        <img src="${url}" alt="${title}">
        <h2>${title}</h2>
        <p>${content}</p>
    `;

    zoom.innerHTML = newZoom;
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