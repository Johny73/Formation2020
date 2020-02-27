'use strict';
console.log("ARRAY !!");

/**
 * En JS, les tableaux sont des Objets.
 */

console.log("_________________________Déclaration de tableau");

let nombres = new Array(1,2,3,4,5); // Créé un tableau ayant 5 cellules déjà renseignées
console.log("nombres : "+nombres);
console.log("nombres : ",nombres);
console.log(`nombres : ${nombres}`);

let nombres_v2 = [3,5,7,10,6]; // Créé un tableau ayant 5 cellules déjà renseignées
console.log(nombres_v2);

let nombres_v3 = [];// Créé un tableau vide
console.log(nombres_v3);

let nombres_v4 = new Array(6);// Créé un tableau ayant 6 cellules vide (undefined)
console.log(nombres_v4);


console.log("______________________________Remplir un tableau");
let array_1 = [];
console.log("<0> array_1 : ",array_1);
array_1[0]=1;
array_1[1]=2;
array_1[2]=3;
array_1[3]=4;
console.log("<1> array_1 : ",array_1);

console.log('_');



let array_2 = [];
let maxCel = 5;
console.log("<0> array_2 : ",array_2);
for(let i=0 ; i<maxCel ;i++){
    array_2[i] = i+1;
}
console.log("<1> array_2 : ",array_2);

let longueurTab = array_2.length;
console.log('longueurTab : '+longueurTab);
array_2[array_2.length] = 33; // Ajoute à la fin du tableau une cellule contenant le nombre 33;
console.log(array_2);

array_2[array_2.length+6] = 66; // Ajoute à la cellule correspondant à la taille du tableau (nombre de cellules actuelle) + 6, la cellule contenant le nombre 66
console.log(array_2);

let varTest1 = "truc";
let array_3 = [
    1,
    2,
    3,
    55,
    true,
    'Coucou',
    varTest1,
    ['machin', ['bidule',,,,,,,,,,,,,,'SUPER VAL !!!',],55]
];
console.log('array_3 : ',array_3); // Un tableau peut contenir plusieur types de valeurs

console.log(array_3[4]); // Pointer la cellule du tableau array_3 contenant la valeur Booleenne true; ... qui se trouve dans la cellules à l'ID 4 (on commence par 0 et non 1);
console.log(array_3[ array_3.length-1][1][0]);

console.log(array_3[ array_3.length-1][1].length);

console.log( array_3   [ array_3.length-1]    [1]   [array_3[ array_3.length-1][1].length - 2] );

console.log('__________________________________________')
console.log('array_3 :',array_3);
let aStep1 =  array_3   [ array_3.length-1]; 
    console.log('aStep1 :',aStep1);
let aStep2 = aStep1 [1]; 
    console.log('aStep2 :',aStep2);
let avantDernier = aStep2.length - 2; 
    console.log('avantDernier :',avantDernier);
let aStep3 = aStep2[avantDernier];
    console.log('aStep3 :',aStep3);


console.log("______________________________Parcourir un tableau");
// array_3
console.log(" loop FOR ");
for( let i=0 ; i<array_3.length ; i++ ){
    console.log(`cel id = ${i} : ${array_3[i]}`);
}

console.log(" loop FOR ... OF");
for( const elt of array_3){
    console.log(elt);
}

console.log( "loop FOREACH");
array_3.forEach(function(elt){
    console.log(elt);
});
array_3.forEach(elt => console.log(elt));

console.log( "loop FOR OF entries()");
for(const [index, elt] of array_3.entries()){
    console.log(` array_3[${index}] = ${elt}`);
    console.log(`==> array_3[${index}] =`,elt);
}

console.log(" loop FOREACH index/valeur");
array_3.forEach(function(elt, index){
    console.log(`==> array_3[${index}] =`,elt);
});
array_3.forEach((elt, index) => console.log(`++> array_3[${index}] =`,elt));


console.log("_____________________________Affectation par décomposition____");

let tab_1 = ["un", "deux", "trois"];

let var_1 = tab_1[0];
let var_2 = tab_1[1];
let var_3 = tab_1[2];

let [var_4, var_5, var_6] = tab_1; // ---> J'affecte une valeur à mes nouvelle variables

console.log(var_2);
console.log(var_4);

console.log('var_1 : '+var_1);
console.log('var_2 : '+var_2);

[var_2,var_1] = tab_1; // -----> Je met à jour mes varaibles
console.log('var_1 : '+var_1);
console.log('var_2 : '+var_2);


let [aa=2, bb] = [10,,'machin'];
console.log('aa : '+aa);
console.log('bb : '+bb);

let [g1, g2, ...g3] = array_3; // Affectation de nouveaux couple variable / valeur via rest 
console.log('g1 : ',g1);
console.log('g2 : ',g2);
console.log('g3 : ',g3);


console.log('_______________________Les méthodes_____________');

let courses=["poivron", "carottes", "poisson", "épinard", "une pomme"];
/**
 * Ajouter à la fin de mon tableau une valeur :
 */
courses.push("nutella");
console.log(courses);

/**
 *  Supprimer le dernier élément de mon tableau :
 */
courses.pop();
console.log(courses);

/**
 *  Supprimer le premier élément de mon tableau
 */
courses.shift();
console.log(courses);

/**
 *  Ajouter (splice) à l'index 2, un nouveau tableau contenant 3 valeurs
 */
console.log("++++++++++++++++++++++++++++++++++");
console.log("<0>",courses);
let enPlus = ["brocoli", "kiwi", "banane"];
courses.splice(2,0,[enPlus]);
console.log("<1>",courses);
console.log(courses);


let enPlus2 = ["patates (100)", "frites"];
courses.splice(4,0,...enPlus2);
console.log(courses);


/**
 *  Trier dans l'ordre alphabétique :
 */
courses.sort();
console.log(courses);

/**
 *  Inverser l'ordre des cellules
 */
courses.reverse();
console.log(courses);

/**
 *  Compter le nombre d'éléments d'un tableau :
 */
console.log(courses.length);

/**
 *  Récupérer l'index d'un élément du tableau :
 */
let indexOfPoisson = courses.indexOf("poisson");
console.log('indexOfPoisson : '+indexOfPoisson);

let chaineDeCaractere = "chaineDeCaractere";
console.log("CHAINE DE CARACTERE : "+chaineDeCaractere.charAt(2));

/**
 * Découper une chaine de caractère en fonctiond'un caractère ou chaine de caractère donné
 */
let alphabet = "a, b, c, d, e,f,g, h";
let alphaArray = alphabet.split(', ');
console.log('alphabet : ',alphabet);
console.log('alphaArray : ',alphaArray);

/**
 *  Créer une chaine de caractère à partir d'un tableau
 */
console.log(alphaArray.join(' + '));
let tabl4 = ["Bonjour",'tout','le','monde'];
console.log(tabl4.toString());
console.log(tabl4.join(' '));


/**/

