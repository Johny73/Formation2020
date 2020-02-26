// A l'aide de la condition ternaire, la variable nb prendra comme valeur 42 si //nb2 est égale à 6, sinon nb sera égale à 9
/*
let nb2=8, nb=0;
if(nb2===6){nb=42;}else{nb=9};
console.log(nb);

//Condition ternaire
 nb2===6 ?  nb=>42 : nb=>9;
 console.log(nb);

// faire une fonction qui affiche l'opération de 2 nombres en fonction du signe passé en 3ième paramètre
// Bonus: la valeur par défaut du 3eme est "+"

//écrire paramètre ="valeur" donne une valeur par défaut si omis
function calcul (nb3, nb4, operateur="+"){
    let resultat =eval(`${nb3} ${operateur} ${nb4}`) ;
    console.log("résultat = "+resultat)
}

let nb3= prompt("Votre premier nombre ?");
let nb4= prompt("votre seconde nombre ?");
let operateur = prompt("L'opérateur", _default= "+");
calcul(nb3, nb4, operateur);

//AUTRE SOLUTION

function operation(num1, num2, signe="+"){
    switch(signe){
        case '+':
            return (num1 + num2);
        case '-' :
            return (num1 - num2);
        default  :
            return "la suite";
    }
    
}
console.log(operation(10,3,"/"));
*/

//Creer une fonction qui prend comme paramètre un tableau contenant des strings et des number
// la focntion retourne un tableau qui contient 2 tableaux :
// un avec QUE des number, l'autre avec QUE des string

let tabEntree = [5, 7, "table", "chaise", "armoire", 13, "chat", 22, 63, "soixante"];


function tableTri(tab) {
    let tabnumber = [];
    let tabstring = [];
    let newtab=[];
    for (let elt of tab) {
        if (typeof elt === "string") {
            tabstring.push(elt);
        } else if (typeof elt === "number") {
            tabnumber.push(elt);
        }
    }
    newtab = [tabstring, tabnumber];
    return newtab;
    }

console.log(tableTri(tabEntree))