console.log("1");
hello();


function hello(){
    console.log("Hello World");
}
console.log("2");
hello();

function helloWorld(name){
    console.log(`Hello ${name}`);
}
helloWorld('Julien');


function addition(param1, param2){
    let resultat = param1 + param2;
    console.log(`${param1} + ${param2} = ${resultat}`);
}
addition(2,3);
// console.log(resultat);  ===>> PAS POSSIBLE CAR la variable resultat est dans la fonction
/*
    Tout ce qui se passe dans une fonction... RESTE dans la fonction
*/

function multiple(num1, num2){
    let result = num1 * num2;
    return result;
}
console.log(multiple(2,5));

function carre(nombre){
    nombre *= nombre;
    return nombre;
}
let nb = 2;
nb = carre(nb);
console.log(nb);
console.log(carre(nb));

/**
 * 
 * Pour créer une fonction on va utiliser :
 * 1. le mot cle function
 * 2. un nom: maFonction
 * 3. des parametres/arguments dans les parenthèses de maFonction
 * 4. le corps : ma function(param){...}
 * 
 */


 console.log("________________Les expressions de fonction _____");



const openWindowPlease = function (){
    console.log("openWindowPlease");
}
openWindowPlease();

const multiplication = function (num1, num2){
    let resultat = num1 * num2;
    return resultat;
}
let number1 = 3;
let number2 = 5;
let res = multiplication(number1,number2);
console.log("res = "+res);

/**
 * Les fonctions immediatement invoqué peuvent servir à rendre un fichier, variable, ou fonction privée
 */

 ( function (){
     console.log("fonction privée");
 })();

 (function(param){
     console.log(param);
 })('truc');

 console.log("___________CLOSURES_____________");

 /**
  * Il est possible d'imbriquer une fonction dans une autre fonction.
  * la fonction fille (fonction dans la fonction) ne pourra etre appelé que depuis la fonction mère
  */

  function closure(str){
      let prenom = "juliette";

      function affichePrenom(){
          console.log('Bonjour '+prenom);
      }
      if(str === "OK"){
          affichePrenom();
      }else{
          console.log("Rien a afficher");
      }
  }

 // affichePrenom(); => impossible car appelée en dehors de la fonction mère

 closure("truc");
 closure("OK");


 function giveMeSecretMsg(login, password){
    const msg = "Ultra confidentiel";
    const secretPassWord = "Admin";
    const errorMsg = "Vous n'êtes pas autorisé Blablabla...";
    if(login === "admin" && password === secretPassWord){
        printMsg();
    }else{
        console.log(errorMsg);
    }

    function printMsg(){
        console.warn(`Le message secret pour l'admin est : ${msg}` );
    }
 }
 giveMeSecretMsg("admin", "admin");
 giveMeSecretMsg("admin", "Admin");
 giveMeSecretMsg("Admin", "admin");


 /**
  *   Les fonctions fléchées 
  * 
  *  () => {};
  */
console.log('________________FONCTIONS FLECHEES')
  let numbers = [1,2,3,4,5,6];

  function printNum(element){
      console.log(element);
  }

  numbers.forEach(printNum);

console.log( '++++++++++++++++++++++++++');
  numbers.forEach(function (element){
      console.log(element);
  });

  console.log( '------------------');
  numbers.forEach((element)=>{
    console.log(element);
  }  );

  console.log( '...................');
  numbers.forEach( element => console.log(element));

  console.log('______ Fonction rest parameter ________');

  function calculSomme(tab){
      let result = 0;
      for( let cellule of tab){
        result += cellule;
      }
      return result;
  }

  console.log( calculSomme(numbers) );

  function calculSommeV2(...nombres){
      let result = 0;
      for(let num of nombres){
          result += num;
      }
      return result;
  }
  console.log( calculSommeV2(1) );
  console.log( calculSommeV2(1, 2, 3) );
  console.log( calculSommeV2(1, 2, 3, 10, 22, 124) );

  function calculSommeV3(max, ...nombres){
      let result = 0;
      for( let num of nombres){
          result += num;
      }

      if(result > max){
          console.log(result + " > " + max);
      }else{
        console.log(result + " < " + max);
      }
  }

  calculSommeV3(30,2,4,67,8,2);


  let texte = "Bonjour";
  console.log([...texte]);

  let arr1 = [1,2,3];
  let arr2 = ["a","b","c"];

  let arr3 = [...arr1, ...arr2];
  let arr4 = [arr1, arr2];

  console.log("arr1 : "+arr1);
  console.log("arr2 : "+arr2);
  console.log("arr3 : ",arr3);
  console.log("arr4 : ",arr4);

  let cel1 = arr4[0];
  let cel2 = arr4[1];
  console.log(cel1);
  console.log(cel2);