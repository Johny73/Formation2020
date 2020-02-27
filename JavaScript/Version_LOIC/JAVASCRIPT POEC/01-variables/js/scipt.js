// mon commentaire
/*
    mon commentaire sur plusieurs lignes
*/

/*
    Une variable est une zone memoire dans laquelle on pourra stocker des informations.
    3 mots clé pour déclarer une variable :
    > var
    > let
    > const
*/

var maVariable = "ma Var";

let i = 0;

console.log(i);
i = 2;
console.log(i);
i = "Trois";
console.log(i);

const MACONST = 'ma constante';

console.log(MACONST);
/*
MACONST = 'truc';   >> PAS POSSIBLE DE MODIFIER UNE CONSTANTE /!\

console.log(MACONST);
*/

/*
    Il n'y a pas de typage explicite en javascript
*/

/*
    Convention de nommage :
        On met les constantes en MAJUSCULE
        On met les noms de variable en camelCase : leNomDeMaVariable

        Un nom de variable ne commence JAMAIS par un nombre

        Il peux commencer par une Majuscule, une minuscule , _ , $
*/


// PORTEE DES VARAIBLES :

let t = 5;
if(true){
    t = 7;
}
console.log("t : "+t);

if(true){
    let t2 = 5;
    console.log("t2 : "+t2);
}
console.log("t2 v2 : "+t2);

// Les types de variables => 7 types

// Le type String
let prenom = 'loic';

// Le type Number
let age = 40;

// Le type Boolean true / false
let happy = true;

// Le type Null
let hasCar = null;

// Le type Undefined
let sex = undefined;

// Le Type Symbol

// Le type Object
let human = {};