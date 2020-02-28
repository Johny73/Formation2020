'use strict';

document.addEventListener("DOMContentLoaded", () => {
    Init();
});
let titreDeLaPage,
    sousTitre,
    myArticle,
    paragraphesV2,
    paragraphes;

function Init() {
    console.log("INIT !")
    titreDeLaPage = document.querySelector("h1");
    console.log(titreDeLaPage);
    // OU
    titreDeLaPage = document.querySelector("article:first-child > h1");
    console.log(titreDeLaPage);
    // OU 
    titreDeLaPage = document.querySelector("article  > h1");
    console.log(titreDeLaPage);

    //Toutes les paragraphes
    paragraphes = document.querySelectorAll("p");
    console.log("paragraphes : ", paragraphes);

    myArticle = document.querySelector("article:first-child");
    console.log("myArticle : ", myArticle);

    //Uniquement les paragraphes de l'élement article
    paragraphesV2 = myArticle.querySelectorAll("p");
    console.log("paragraphesV2 : ", paragraphesV2);

    // DEPLACEMENT RELATIF

    const MON_H2 = titreDeLaPage.nextElementSibling;
    console.log("MON_H2 : ", MON_H2);

    const MY_PARENT = MON_H2.parentElement;
    console.log("Mon Parent: ", MY_PARENT);

    const HTML_CHILD = MY_PARENT.children;
    console.log("HTML_CHILD : ", HTML_CHILD);
    //Pour cibler un élément en particulier
    console.log("Element 2 de la collection childre : ", HTML_CHILD[1]);

    const MY_PARENT_CHILD_NODES = MY_PARENT.childNodes;
    console.log("MY_PARENT_CHILD_NODES : ", MY_PARENT_CHILD_NODES);

// Changer le style d'un élément ciblé
MY_PARENT.style.background = "green";
MY_PARENT.style.border = "3px double red";

console.log(MY_PARENT.classList);
MY_PARENT.className = "trash";
MY_PARENT.classList.add("Truc");
/*
//Parcourir la liste des éléments en récupérant un item 
let list= [];
for (let i = 0 ; i <HTML_CHILD.length ; i++){
    list.push(HTML_CHILD.item(i));
};
*/
HTML_CHILD.forEach(element => {
    list.push(HTML_CHILD.item(i));
    
});
console.log(list);


MY_PARENT.className = "bgPink borderBlue padding10";
console.log(MY_PARENT.classList);

MY_PARENT.classList.add('truc', 'machin');
console.log(MY_PARENT.classList);

MY_PARENT.classList.remove('machin');
MY_PARENT.classList.toggle('toggle');

MY_PARENT.addEventListener('click', ()=>{
    MY_PARENT.classList.toggle('toggle');
    console.log(MY_PARENT.classList);
})
console.log(MY_PARENT.classList.contains('toggle'));

//MODIFIER UN TITRE
let MyH2 = document.querySelector("h2");
MyH2.textContent = "Nouveau text";

//MODIFIER LE CONTENU HTML
MY_PARENT.innerHTML = `
    <h1>Mon titre modifié</h1>
    <ul>
        <li>ligne 1 </li>
        <li>ligne 2 </li>
        <li>ligne 3 </li>
    </ul>`

//CREATION D'UN NOUVEL ELEMENT
const image = new Image();
image.src ="premier.jpeg"
MY_PARENT.after(image);


// ARticle à modifier
let articleToModif = document.querySelector("article:nth-of-type(2)");
console.log(articleToModif);

// Création de nouveaux élémentes html (ici un élément div)
let newDiv0 = document.createElement("div");
//Mettre du contexte dans ma div:
newDiv0.innerHTML = `<h3>newDiv0</h3>`;

let newDiv1 = document.createElement("div");
newDiv1.innerHTML = `<h3>newDiv1</h3>`;

let newDiv2 = document.createElement("div");
newDiv2.innerHTML = `<h3>newDiv2</h3>`;

//ajoute la nouvelle div au début de l'artice
// récupère le premier élément de mon article a modifier
let firstElement = articleToModif.firstElementChild;
console.log(firstElement);

//Insert ma nouvelle div AVANT le premier élément
articleToModif.insertBefore(newDiv0, firstElement);

//insert apres le dernier élement enfant
articleToModif.insertBefore(newDiv1, null);

// ajoute à la fin de
articleToModif.appendChild(newDiv2);

// LES EVENEMENTS

const MY_BTN = document.querySelector('a');
console.log(MY_BTN);

MY_BTN.addEventListener('click', function(event){
    event.preventDefault();
    console.log(event);
});




};

