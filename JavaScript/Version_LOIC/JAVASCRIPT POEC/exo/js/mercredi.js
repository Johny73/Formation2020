/**
 * A l'aide de la condition ternaire, la variable nb prendra comme valeur 42 si nb2 est égale à 6, sinon nb sera égal à 9;
 * 
 * step 1 => utiliser les condition pour afficher le résultat
 * 
 * step 2 => traduire en ternaire
 * 
 */
/*
 let nb, nb2 = 6;

 if(nb2 === 6){
     nb = 42;
 }else{
     nb = 9;
 }

 console.log(nb);

 let nb = 42;
 let nb2 = 6;

 if(nb2 != 6){
     nb = 9;
 }

 console.log(nb);
* /
let nb, nb2 =6;
 nb2 === 6 ? nb=42 : nb=9;
 console.log(nb);

 /**
  * Faire une fonction qui affiche l'operation de 2 nombres en fonction du signe passé en 3eme parametre
  * 
  * Bonus : La valeur par defaut du 3eme parametre est "+"
  * 
  */

function operation(num1, num2, signe="+"){
    switch(signe){
        case '+':
            return (num1 + num2);
        case '*':
            return (num1 * num2);
        case '-':
            return (num1 - num2);
        default :
            return 'it\'s not possible';
    }
}

console.log('operation(2,3) : '+operation(2,3));
console.log('operation(2,3,*) : '+operation(2,3,"*"));
console.log('operation(2,3,/) : '+operation(2,3,"/"));

/**
 * Créer une fonction qui prend comme parametre un tableau contenant des strings et des number
 * 
 * La fonction retourne un tableau qui contient deux tableaux, 
 * > l'un avec QUE des number, 
 * > l'autre avec QUE des strings
 * 
 * 
 * push
 * 
 * typeof string / number
 * 
 * for of
 * 
 * 
 */


function sortArray(tab){
    let arrayString = [];
    let arrayNumber = [];
    let newTab;

    for(let elt of tab){
        if(typeof elt === "string"){
            arrayString.push(elt);
        }else if(typeof elt === "number"){
            arrayNumber.push(elt);
        }
    }

    newTab = [arrayString, arrayNumber];

    return newTab;
}

let [a1, a2] = sortArray(['Hello', 34,'world',6,7,98,0,'it','is','beautyfull',1,45,89,234,true,false,[1,2,3]]);


console.log(a1);
console.log(a2);
 /**
  * a1 = ['Hello','world','it','is','beautyfull']
  * a2 = [34,6,7,98,0,1,45,89,234]
  */