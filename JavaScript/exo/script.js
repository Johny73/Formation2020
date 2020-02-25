'use strict'
/*
// déclarer une variable qui contiendra un nombre entier qui s'appelle nombre, et lui affecter le nombre 13.
let nombre = 13;

//déclarer une variable nombre 2 qui contiendra le nombre flottant 15.5
let nombre2 = 15.5;
 
// déclarer une variable b qui prendra le valeur : true;
 let b = true;

//déclarer une variable nombre3 qui ne pourra plus changer de valeur après lu avoir donné la valeur 60
const NOMBRE3 = 60;

//déclarer une variable prénom contenant votre nom
let prenom = "Johny";

//Déclarer une variable nom contenant votre nom:
let nom = "Heijlen"
//Déclarer une variable nomComplet contenant votre nom et votre prenom
let nomComplet = nom+" "+prenom;

//Appeler une fonction ditBonjour recevant deux paramètres nom et prenom et retournant une phrase "Bonjour ... " avec le nom et le prenom. Afficher le résultat dans la console.

function ditBonjour (nom, prenom){
    return "Bonjour "+prenom + " " + nom;
}
console.log(ditBonjour("Heijlen", "Johny"));


//Faire une fonction qui affiche une fenetre en fonction de la réponse ) la question : quel jour serons nous demain si aujourd'hui est la veille d'hier.
//La réponse est renseignée par l'utilisateur.
 

/
function calendrier (reponse){
    console.log(reponse);
     if(reponse.toLowerCase()==="hier"){
     alert("Bonne réponse");
    }else{alert("Mauvaise réponse");
}} 

//calendrier (let reponse = prompt("Quel jour nous serons demain si aujourd'hui est la veille d'hier?"));


//    OU
let reponse = prompt("Quel jour serons nous demain si aujourd'hui est la veille d'hier ?");

function askQuestion(){

    if(bonneReponse(reponse)){
        alert("Bonne réponse");
    }else{
        rejouer();
    }
}
function bonneReponse(reponse){
    let goodAnswer= "hier";
    if(reponse.toLowerCase()=== goodAnswer){
        return true;
    }
    return false;
}
function rejouer(){
    if(confirm("You lose... Try again ?")){
        askQuestion();
    }else{
        alert("Bye bye loooooser  ^__-");
    }
}
askQuestion();


//Faire une fonction qui s'auto-excecute et qui affiche "Bonjour" + prenom qu'elle prendra en paramètre
 

 (function (prenom){
     console.log(`Bonjour ${prenom}`);}) (prompt('Quel est votre prenom ?'));
 

 
// Faire une expression de fonction qui divise 2 nombres et retourne le resultat
  

  function division(nombre1, nombre2){
      if(nombre2===0){ 
          alert("Division par 0 imposible");
      }else{
          let resultat = nombre1 / nombre2;
                    return resultat;
  }}

  let resDivision = division(10,2);
  console.log(resDivision);

  // Faire une expression de fonction qui divise 2 nombres et retouren le résultat
 
  
  const diviser = function (num1, num2){
    let resultat = num1 / num2;
    return resultat;
}

  console.log(diviser(16,4));
*/

// EXO
// Réaliser un switch qui prends la variable nombre 2 et qui afficher :
// "a" si nombre2 est égal à 3 
// "b" si nombre2 est égal à 5
// "c" si nombre2 est égal à 7
// "d" si nombre2 est égal à autre chose

console.log("______SWITCH__________");

let rep;    
function getReponse(nombre5){     
    switch (nombre5) {
        case 3:
            rep = ("a");
            break;
        case 5:
            rep = ("b");
            break;
        case 7 :
        case 8 :
            rep = ("c");
            break;
        default:
            rep = ("d");
    }
    return rep;
}
let index = 0;

for(index ; index <=10 ; ) {
    console.log(index+ " " +getReponse(index));
    index++;
}
