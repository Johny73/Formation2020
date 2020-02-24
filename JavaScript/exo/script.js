'use strict'

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

/**
 * Faire une fonction qui affiche une fenetre en fonction de la réponse ) la question : quel jour serons nous demain si aujourd'hui est la veille d'hier.
 * La réponse est renseignée par l'utilisateur.
 */


function calendrier (reponse){
    console.log(reponse);
     if(reponse.toLowerCase()==="hier"){
     alert("Bonne réponse");
    }else{alert("Mauvaise réponse");
}}

calendrier (prompt("Quel jour nous serons demain si aujourd'hui est la veille d'hier?"));


//    OU
function askQuestion(){
    let reponse = prompt("Quel jour serons nous demain si aujourd'hui est la veille d'hier ?");

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

/**
 * Faire une fonction qui s'auto-excecute et qui affiche "Bonjour" + prenom qu'elle prendra en paramètre
 */

 (function salut(prenom){
     alert("Bonjour "+prenom))("Johny");
 }
 salut("Johny");

 /**
  * Faire une expression de fonction qui divise 2 nombres et retourne le resultat
  */

  function division(nombre1, nombre2){
  /*    if(nombre2===0){ 
          alert("Division par 0 imposible");
      }else{*/
          let resultat = nombre1 / nombre2;
          
          return resultat;
          
         
      
  }
  division(10,2);
 