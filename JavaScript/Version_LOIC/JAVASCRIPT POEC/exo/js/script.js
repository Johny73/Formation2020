'use strict'

/*
* declarer une variable qui contiendra un nombre entier qui s'apelle nombre,
*  et lui affecter le nombre 13.
*/
let nombre = 13;
console.log(nombre);

/*
* declarer une variable nombre2 qui, contiendra le nombre flottant 15,5
*/
let nombre2 = 15.5;

/* declarer une variable b, qui prendra la valeur : true */
let b = true;
/*
* declarer une variable nombre3 qui ne pourra plus changer de valeur apres lui avoir donner la valeur 60.
*/
const nombre3 = 60;

/**
 * Déclarer une variable prenom contenant votre prenom
 * Déclarer une variable nom contenant votre nom
 * Déclarer une variable nomComplet contentant votre nom et votre prenom
 */
let prenom = 'tadi';
let nom = 'john';
let nomComplet = prenom +' '+ nom;
console.log(nomComplet);

/**
 * 
 * Appeler une fonction ditBonjour recevant deux paramettres nom et prenom
 * Et retournant une phrase "Bonjour ..." avec le nom et le prenom
 * afficher le résultat dans la console
 * 
 */

 /*
 function ditBonjour(nom, prenom){
     // return 'Bonjour '+prenom+' '+nom;

     return `Bonjour ${prenom} ${nom}`;
 }

 console.log(ditBonjour('loic','GODIN' ));
*/

function ditBonjour(nom, prenom){
    console.log( `Bonjour ${prenom} ${nom}`);
}
ditBonjour('GODIN','loic');

 /*
    Faire une fonction qui affiche une fenetre en fonction de la réponse à la question : Quel jour serons nous demain si aujourd'hui est la veille d'hier ?
    La réponse est renseignée par l'utilisateur...
 */

 function askQuestion(){
    let reponse = prompt('Quel jour serons nous demain si aujourd\'hui est la veille d\'hier ?');

     if(bonneReponse(reponse)){
         alert('Bonne réponse');
     }else{
         rejouer();
     }
 }
 function bonneReponse(reponse){
    let goodAnswer = "hier";

    if(reponse.toLowerCase() === goodAnswer){
        return true;
    }
    return false;
 }
 function rejouer(){
    if(confirm('You lose... try again ?')){
        askQuestion();
    }else{
        alert("By by looooser ^__-");
    }
 }
 // askQuestion();


 /**
  * 
  * Faire une fonction qui s'auto execute et qui affiche 'Bonjour ' + prenom.
  * prenom étant un parametre de cette fonction
  * 
  */
/*
  (function (prenom){
      console.log(`Bonjour ${prenom}`);
  })(prompt('Quel est votre prenom ?'));
*/

  /**
   * 
   * Faire une expression de fonction qui divise 2 nombres et retourne le resultat.
   * 
  */
console.log('_________________________')
  let division = function(num1, num2){
      let resultat = num1 / num2;
      return resultat;
  }
  let number1 = division(10, 2);
  console.log(number1);

  /**
   *   Realiser un switch qui prends la variable nombre2 et qui affiche :
   * 
   *    "a" si nombre2 est égal à 3
   *    "b" si nombre2 est égal à 5
   *    "c" si nombre2 est égal à 7
   *    "d" si nombre2 est égal à autre chose
   */

  /*
   function testNombre2(nombre2){
       console.log(nombre2);
    switch(nombre2){
        case 3:
            console.log("a");
            break;
         case 5:
             console.log("b");
             break;
         case 7:
             console.log("c");
             break;
         default:
             console.log("d");
             break;
    }
   }
   let nnnnnnn = parseInt(prompt('number 3'));
   console.log(nnnnnnn);
   console.log(typeof nnnnnnn);
   testNombre2(nnnnnnn);
   */

    function onSwitch(nombre22){
        let result;
        switch(nombre22){
            case 3:
                result =  "a";
                break;
            case 5:
                result =  "b";
                break;
            case 7:
                result =  "c";
                break;
            default:
                result =  "d";
                break;
        }

        return result;
    }

    let nombre22 = parseInt(prompt('entrez votre nombre'));
    console.log('nombre22 : '+nombre22 +' => '+ onSwitch(nombre22));

   
  