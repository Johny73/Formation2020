// mon commentaire
/*
    mon commentaire sur plusieurs lignes
    */


// Les types de variables

//type STRING
let prenom = 'Johny';

//type NUMBER
let age = 46;

//type BOOLEAN true / false
let happy = true;

//type NULL
let hasCar= null;

//type UNDEFINED
let sex = undefined;

//type SYMBOL

//type OBJECT
 let human= {
     nom:'Johny',
     taille: "xxx" };

/*
    Une variable est une zone mémoire dans laquelle on pourra stocker des informations.
    3 mots clé pour déclarer une varibale :
    > var
    > let 
    > const

*/

var maVariable = "ma Var";

var i = 0;

console.log(i);
i=2*4;
console.log(i);
i="trois";
console.log(i);

const MACONST = "ma constante";

console.log(MACONST);

/*
    Il n'y a pas de typage explicite en javascript
*/

/*
    Convention de nommage :
    > On met les constantes en MAJUSCULES
    > On met les noms de variable en camelCase 
        (camelCase=nomDeMaVariable; kebab-case=nom-de-ma-variable; snake_case= nom_de_ma_variable)
    > Un nom de variable ne commence JAMAIS par un nombre
    >il peut commencer par une Majuscule, une minuscule, _ , $
        
*/

// PORTEE DES VARIABLES:
let t = 5;
if(true) {
    t=7;
}
console.log("t : "+t);

if(true) {
    var t2=5;
    
}
console.log("t2 : "+t2);