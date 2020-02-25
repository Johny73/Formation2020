
function hello(){
    console.log("Hello world");
}
hello();


function helloWorld(name) {
    console.log(`Hello ${name}`);
}

var name = prompt("Quel est votre nom ? ");
helloWorld(name);


function helloWorld2() {
    let name = prompt("Quel est votre nom ? ");
    console.log("Hello "+name);
}
helloWorld2(name);

function addittion (param1, param2){
    let resultat = param1 + param2;
    console.log(`${param1} + ${param2} = ${resultat}`)
    console.log(param1+" + "+param2+" = "+resultat);
}
addittion(2,3);

// Tout ce qui se passe dans un fonciont .. RESTE dans la fonction.
//    Pour récupérer le résultat il faut intégrer DANS la fonction return 

function multiple(num1, num2) {
    let resultat = num1 * num2;
    return resultat;
}
console.log(multiple(2, 5));
let res=multiple(3, 4);
console.log(res);

function carre(nombre){
    nombre *= nombre ;
    return nombre
}
let nb = 2;
nb = carre(nb);
console.log(nb, carre(nb));

console.log("_______________Les expressions de fonction____________");



const openWindowPlease = function(){
    console.log("openWindowPlease");
}
openWindowPlease();

const multiplication = function (num1, num2){
    let resultat = num1 * num2;
    return resultat;
}
let number1 = 3;
let number2 = 5;
res = multiplication(number1,number2);
console.log(res);


console.log("_______________CLOSURES______________");


// Il est possible d'imbriquer une fonction dans une autre fonction.
// la fonction fille (fonction dans la fonction) ne pourra être appelé que depuis la fonction mère.
 

 function closure(str){
     let prenom = "juliette";

     function affichePrenom(){
         console.log("Bonjour "+prenom);
     }
     if(str === "OK"){
         affichePrenom();
     }else{
         console.log("Rien à afficher");
             }
 }

 closure('truc');
 closure("OK");


 console.log("__________________________");
 function giveMeSecretMsg(login, password){
     const secretMsg = "Ultra confidentiel";
     const secretPassWord = "Admin";
     const errorMsg = "Vous n'êtes pas autorisé blabla ...";


     if(login === "Admin" && password === secretPassWord){
         printMsg();
     }else{
         console.log(errorMsg);
     }

     function printMsg(){
        console.warn("Le message secret pour l'admin est : "+ secretMsg);
    }
 }

 giveMeSecretMsg("Admin","Admin");
 

 // LES FONCTIONS FLECHEES

 let numbers = [1, 2, 3, 4, 5, 6];

 function printnum(element){
     console.log(element);
 }
 numbers.forEach(printnum);

 console.log("_________________OU_____________");
 
 numbers.forEach(function(element){
     console.log(element)
 })

console.log("_________________OU_____________");

numbers.forEach((element)=>{console.log(element)}); //accolade uniquement nécessaire si plusieurs commande

console.log("_________________Fonction rest parameter");

function calculSomme(tab){
    let result=0;
    for (let cellule of tab){
        result += cellule;
    }
    return result;
}
console.log(calculSomme(numbers));

function calculSomme2(...nombres){
    let result=0;
    for (let num of nombres){
        result += num;
    }
    return result;
}

console.log(calculSomme2(1, 6));
console.log("_____________SOMME 3_____________")

function calculSomme3(max, ...nombres){
    let result = 0;
    for( let num of nombres){
        result += num;
    }
        if(result > max){
            console.log(result+ " > " + max);
        }else{
            console.log(result + " <= "+ max)
        }
}
calculSomme3(50, 1, 3, 5, 10);

let arr1 = [1,2,3];
let arr2 = ["a","b","c"];
let arr3 = [...arr1, ...arr2];
let arr4 = [arr1, arr2]; //cette commande consiste à créer un array avec deux éléments dont la première reçoit la valeur de arr1 et l'autre arr2

console.log("arr1 : "+arr1);
console.log("arr2 : "+arr2);
console.log("arr3 : "+arr3);
console.log("arr4 : "+arr4);

let arr5 = [arr1[0], arr2[0], " ", arr4[1]];
console.log(arr5);

