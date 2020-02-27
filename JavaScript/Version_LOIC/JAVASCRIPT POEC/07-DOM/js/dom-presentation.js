'use strict';

document.addEventListener('DOMContentLoaded',()=>{
    init();
});

let titreDeLaPage,
    sousTitre,
    paragraphes;

function init(){
    console.log('INIT !');
    titreDeLaPage = document.querySelector('h1');
    console.log('<1> ',titreDeLaPage);

    titreDeLaPage = document.querySelector('article:first-child > h1');
    console.log('<2> ',titreDeLaPage);

    paragraphes = document.querySelectorAll('p');

    let myArticle = document.querySelector('article:first-child');
    console.log(myArticle);
    let paragraphesV2 = myArticle.querySelectorAll('p');

    console.log('paragraphes : ',paragraphes);
    console.log('paragraphesV2 : ',paragraphesV2);

    // Déplacement relatif:
    const MON_H2 = titreDeLaPage.nextElementSibling;
    console.log('MON_H2 ',MON_H2);
    
    const MY_PARENT = MON_H2.parentElement;
    console.log('MY_PARENT ',MY_PARENT);
    
    const HTML_CHILD = MY_PARENT.children;
    console.log('HTML_CHILD ',HTML_CHILD);
    console.log(HTML_CHILD[2]); // Cible le troisième element de ma liste d'enfants

    const MY_PARENT_CHILD_NODES = MY_PARENT.childNodes;
    console.log('MY_PARENT_CHILD_NODES ',MY_PARENT_CHILD_NODES);

    // Changer le style d'un élément cicblé :
    /*
    MY_PARENT.style.background = 'red'; // Correspond à mon premier article
    MY_PARENT.style.border = '3px solid green';
    MY_PARENT.style.borderColor = "orange";
    MY_PARENT.style.background = 'purple';
    */


    MY_PARENT.className = "bgPink borderBlue padding10"; // Je supprime les class en cours et j'affecte mes nouvelle class
    console.log(MY_PARENT.classList); // Affiche dans la console la liste des class de l'élément
    
    MY_PARENT.classList.add('truc', 'machin');
    console.log(MY_PARENT.classList);

    MY_PARENT.classList.remove('machin');

    MY_PARENT.classList.toggle('toggle');

    MY_PARENT.addEventListener('click', ()=>{
        console.log('la class \'toggle\' est presente ? :'+MY_PARENT.classList.contains('toggle'));
        MY_PARENT.classList.toggle('toggle');
        console.log('Mise à jour de la classe \'toggle\'Est elle presente ? :'+MY_PARENT.classList.contains('toggle'));
    });


    let myH2 = MY_PARENT.querySelector('h2');
    console.log(myH2);

    myH2.textContent = 'Nouveau Titre';

    MY_PARENT.innerHTML = `
        <h1>Mon titre modifié</h1>
        <ul>
            <li>ligne 1</li>
            <li>ligne 1</li>
            <li>ligne 1</li>
        </ul>
    `; // MODIFIE le contenu HTML de l'élément ciblé.

    // Création d'élément du DOM
    const image = new Image();
    image.src = "https://s1.qwant.com/thumbr/0x380/1/a/32af2102f90ead20b380c6e754ccdc9402522aeed5b00297b80513b6542b09/maxresdefault.jpg?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FVnCQGyfYca4%2Fmaxresdefault.jpg&q=0&b=1&p=0&a=1";

    MY_PARENT.after(image);


    

    

}

