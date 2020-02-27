'use strict'
document.addEventListener('DOMContentLoaded',()=>{
    init2();
});

function init2()
{
    // Article à modifier :
    let articleToModif = document.querySelector('article:nth-of-type(2)');
    console.log(articleToModif);

    // Création de nouveaux elements html (ici un element 'div'):
    let newDiv0 = document.createElement('div');
    // Met du contenu dans ma div :
    newDiv0.innerHTML = `<h3>newDiv0</h3>`;

    let newDiv1 = document.createElement('div');
    newDiv1.innerHTML = `<h3>newDiv1</h3>`;

    let newDiv2 = document.createElement('div');
    newDiv2.innerHTML = `<h3>newDiv2</h3>`;

    // Ajoute la nouvelle div au début de l'article :
    // > récupère le premier élément de mon article à modifer :
    let firstElement = articleToModif.firstElementChild;
    console.log(firstElement);
    // > insert ma nouvelle div AVANT le premier élément 
    articleToModif.insertBefore(newDiv0, firstElement); // Insert en debut de liste des enfants de l'element a modifier
    
    articleToModif.insertBefore(newDiv1, null); // Insert à la fin de la liste des enfants de l'élément à modifier
    
    // Ajoute la nouvelle div à la fin de l'article :
    articleToModif.appendChild(newDiv2);


    // Les evenements 
    const MY_BTN = document.querySelector('a');
    console.log(MY_BTN);

    MY_BTN.addEventListener('click', function(event){
        event.preventDefault();
        console.log(event);
    });
}