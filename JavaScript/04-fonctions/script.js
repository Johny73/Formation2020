/*
const maFonction = function(param1, param2){
    //mon traitement
}
maFonction(param1, param2);
*/

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

/* Tout ce qui se passe dans un fonciont .. RESTE dans la fonction.
    Pour récupérer le résultat il faut intégrer DANS la fonction return */

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

/*
//FONCTION PRIVEE
(function(param1){
    console.log(param);
})('truc');
*/
console.log("_______________CLOSURES______________");

/** 
 * Il est possible d'imbriquer une fonction dans une autre fonction.
 * la fonction fille (fonction dans la fonction) ne pourra être appelé que depuis la fonction mère.
 */

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