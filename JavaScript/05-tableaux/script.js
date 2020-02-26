'use strict'; //impose de déclarer avec let ou const toutes les variables

/*
//En JS, les tableaux sont des objets

console.log("Déclaration de tableau");

let nombres = new Array(1,2,3,4,5);
console.log("nombres : "+nombres);
console.log("nombres : ",nombres);
console.log(`nombres : ${nombres}`);

let nombres2 = [3,5,7,10,6];
console.log(nombres2);

let nombres3 = []; //créé un tableau vide
console.log(nombres3);

let nombres4 = new Array(6);//créé un tableau ayant 6 cellules vide(undefined)
console.log(nombres4);

console.log("Remplir un tableau");
let array_1=[];
console.log("<0> array_1 : ",array_1);
for (let i=0; i<4;i++){
    array_1[i] = i +1;
    }
console.log("<1> array_1 :  : ",array_1);

let array_2 =[];
console.log("<0> array_2 : ",array_2);
let maxCell = 5;
for (let i=0;i<maxCell;i++){
    array_2[i] = i+1;
}
console.log("<1> array_2 : ",array_2);

let longueurTab = array_2.length;
console.log(longueurTab);
array_2[array_2.length+6]=33;
console.log(array_2);

let varTest1 = "truc";
let array_3 = [
    1,
    2,
    3,
    55,
    true,
    "Coucou",
    varTest1,
    ["machin", ["bidule",,,,,"test",], 55]];
    
    
    console.log("   array_3 : ",array_3)
    console.log(array_3[7]);
    console.log("test   :"+array_3[7][1][5])

    console.log(array_3[[array_3.length-1][array_3.length-1]]);
  
    /// A DECORTIQUER
    console.log(array_3  [array_3.length-1]  [1] [array_3[array_3.length-1][1].length-2]);
    console.log(array_3  [array_3.length-1]  [1] [array_3[array_3.length-1][1].length-2]);
    

    console.log("___Parcourir un tableau");

    console.log("______________Loop .. FOR ... OF");

    for( const elt of array_3){
        console.log(elt);
    }
    // OU 
    console.log("_____________loop FOREACH");

    array_3.forEach(function(elt){
        console.log(elt);
    });

    array_3.forEach(elt => console.log(elt));
    
    console.log("_______loop FOR OF ENTRIES");
    for(const[index, elt] of array_3.entries()){
        console.log(` array_3[${index}] = ${elt}`)
    }
// le fait de mettre elt entre ${} fait afficher la valeur en tant que string. Sans cet écriture on aurait récuperé l'objet tableau

console.log("_________ loop FOREACH index/valeur");
array_3.forEach(function(elt, index){
    console.log(`==> array_3[${index}] = ` ,elt);
});
//En version flechée
array_3.forEach((elt, index) => console.log(`++> array_3[${index}] = `, elt));

console.log("_______________Affectation par décompisition____");

let tab_1 = ["un", "deux", "trois"];

let var_1 = tab_1[0];
let var_2 = tab_1[1];
let var_3 = tab_1[2];

let [var_4, var_5, var_6] = tab_1; // initialise plusieurs variables à la fois. A l'occurnence var4 recoit la valeur du tab_1[0] etc
console.log(var_4);

// MISE A JOUR DES VARIABLES
[var_2, var_1] = tab_1;
console.log(var_1);

let [aa=2, bb=34, ] = [10,,'truc'];
console.log('aa : '+aa);
console.log('bb : '+bb);

let [g1, g2, ...g3] = array_3; // les 3 points avant g3 affectent la suite du tableau initial à g3
console.log(g3);


console.log("__________________Les méthodes_____________");
let courses=["poivron", "carottes", "poisson","épinard","une pomme"];
// Ajouter une valeur à la fin du tableau
courses.push("nutella");
console.log(courses);

//Supprime la dernière élément d'un tableau
courses.pop();
console.log(courses);

//supprimer le premier élément d'un tableau
courses.shift();
console.log(courses);

//Ajouter à l'index 2, un nouveau tableau contenant 3 valeurs
let enPlus = ["kiwi", "brocoli","bananes"];
courses.splice(2,1,[enPlus]);// se mettre à index=2 et insérer sur 1 emplacement
console.log(courses);

let enPlus2 = ["patates (100)", "frites"];
courses.splice(2,0,...enPlus2);// se mettre à index=4 et insérer sur le restant des élements
console.log(courses);

//trier les éléments
courses.sort();
console.log(courses);

//inverser l'ordre des cellules
courses.reverse();
console.log(courses);

//compter le nombre d'éléments d'un tableau
console.log(courses.length)

//récupérer l'index d'un élément du tableau
let indexOfPoisson = courses.indexOf("poisson");
console.log(indexOfPoisson);

// Décopuer une chaine de caractères en fonction d'un caractère ou chaine de caractère donné
let alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
let alphaArray = alphabet.split(',');
console.log(alphabet);
console.log(alphaArray);

// créer une chaine de caractères à partir d'un tableau
console.log(alphaArray.join(' + '));

*/
/*
let tab = [3];
console.log(tab);
tab[10] = 70;
console.log(tab);
tab.forEach(function(elt){
    console.log(elt);
});
*/
let tab = [3];
console.log(tab);
tab[10] = 70;
console.log(tab);
for (let i=0; i<tab.length ; i++){
    console.log(tab[i])
}
;

