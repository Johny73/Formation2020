'use strict'

let monTabelau = []; // Je créé un tableau vide
let monTableau2 = new Array(); // Je créé un tableau vide Avec le constructeru Array
let monTab3 = new Array(4); //// Je créé un tableau contenant 4 cellule vides
let monTab4 = new Array(2,4,'truc','Machin');// Je créé un tableau qui contien 4 cellules avec une contenu
let monTab5 = [5,'tructruc',67];// Je créé un tableau qui contien 3 cellules avec une contenu

let monTruc = monTab4[2];// retourne 'truc'
let monTruc2 = monTab5[monTab5.length - 2];// Retourne 'tructruc'


console.log("_______________________MAP");

let myMap = new Map(); // Création d'une map Vide
myMap.set('id', 5);     // Affectation d'un couple clef/valeur à ma map
myMap.set('name','loic');
myMap.set('pseudo','lolo');

console.log('myMap : ',myMap);

let myMap2 = new Map(   // Création d'une Map avec du contenu ...
    [
        ['id',4],
        ['name','marie'],
        ['pseudo','mama']
    ]
);
console.log('myMap2 : ',myMap2);

// Récupération de la taille d'une map :
let myMapSize = myMap.size;
console.log('myMapSize :',myMapSize);

// Récupération de la valeur d'une clef
let myId = myMap.get('id');
let myPseudo = myMap.get('pseudo');
console.log(myId);
console.log(myPseudo);

// Boucle pour récupérer les couple cle/valeur de ma map :
for(let [cle, valeur] of myMap){
    console.log(`${cle} : ${valeur}`);
}

// Boucle sur les cles de ma map :
for(let cle of myMap.keys()){
    console.log(`cle : ${cle}`);
}
// Boucle sur les valeurs de ma map :
for(let val of myMap.values()){
    console.log(`val : ${val}`);
}

// Supprimer un couple cle/valeur d'une Map :
myMap.delete('id');
console.log('myMap : ',myMap);


// L'Objet set est objet qui regroupe un ensemble de valeur distinctes
let mySet = new Set();
mySet.add(3);
mySet.add(3);
mySet.add(4);
mySet.add(5);
mySet.add(3);
mySet.add(77);
console.log(mySet);
// Tester  la présence d'une valeur dans un set :
if(mySet.has(77)){
    console.log('77 est dans mon set');
}else{
    console.log('pas de 77 dans mon set');
}
// Supprimer une valeur de mon set :
mySet.delete(3);
console.log(mySet);
