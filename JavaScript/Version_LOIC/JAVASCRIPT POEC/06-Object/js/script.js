/**
 * 
 * Un Objet est comme une super variable qui peut contenir des variables et des fonctions.
 * 
 *  Les variables seront des "Propriétés"
 *  Les Fonctions seront des "Méthode"
 * 
 */

console.log("____________Création d'un Objet __________");

let maVoiture = new Object();

maVoiture.couleur = "rouge";
maVoiture.modele = "Clio";
maVoiture.nbRoues = 4;

console.log('maVoiture : '+maVoiture);
console.log('maVoiture : ',maVoiture);

console.log("couleur de la voiture : "+maVoiture.couleur);


let maSecondeVoiture = {
    couleur:"Bleu",
    modele:"Megane",
    nbRoues:4,
    radio:true,

    rouler:function(){
        console.log("avance");
    }
};

console.log('maSecondeVoiture : ',maSecondeVoiture);
maSecondeVoiture.rouler();

console.log('maSecondeVoiture[\'radio\'] : '+maSecondeVoiture.radio);
console.log('maSecondeVoiture[\'radio\'] : '+maSecondeVoiture['radio']);

let stringTest = 'rad';
maSecondeVoiture[stringTest+'io'] = false;
console.log('maSecondeVoiture[\'radio\'] : '+maSecondeVoiture[stringTest+'io']);


console.log(" _________________Objet constructeur_____________");

function Person(lastName, firstName, city){

    // Propriete
    this.myLastName = lastName;
    this.myFirstName = firstName;
    this.myCity = city;
}

Person.prototype.myNameIs = function(){
    return 'Hello, my name is '+this.myLastName + " " +this.myFirstName;
};
Person.prototype.showCity = function(){
    return `I'm living in ${this.myCity}`;
};

let marie = new Person("Marie","MacDonald",'Nantes');

let paul = new Person('Paul','WalterSmith',"Paris");

/* POSSIBLE ... MAIS A PROSCRIRE !!!
paul.myNameIs = function(){
    return 'Hello, Fuckeing asshole ! my name is '+this.myLastName + " " +this.myFirstName;
};
*/


console.log('marie : ',marie);
console.log('paul : ',paul);
console.log(marie.myNameIs());
console.log(paul.myNameIs());
//marie.showCity();

paul.likeToDance = true;
paul.doYouLikeToDance = function(){
    if(this.likeToDance){
        console.log('I Love to Dance on Saturday night fever !!!');
    }else{
        console.log('i hate dancing');
    }
}
paul.doYouLikeToDance();

marie.likeToDance = false;
// marie.doYouLikeToDance(); ==> Pas Possible car seulement défini chez Paul

Person.prototype.doYouLikeToCook = function(){
    console.log(this.myLastName + ' love to cook !!');
}


paul.doYouLikeToCook();
marie.doYouLikeToCook();


console.log('----------------Comparaison d\'Objet-----');

let julien = new Person('Julien','dupond','salanches');
let julien2 = new Person('Julien','dupond','salanches');

console.log("JULIEN ???? :",JSON.stringify(julien) === JSON.stringify(julien2));

let homer1 = { nom:"Homer"};
let homer2 = { nom:"Homer"};

let homer3 = homer2;


console.log( 'Est ce que homer1 est identique à homer2 ? : '+ (homer1 == homer2)  );
console.log( 'Est ce que homer1 est identique à homer2 ? : '+ (homer1 === homer2)  );

console.log( 'Est ce que homer3 est identique à homer2 ? : '+ (homer3 === homer2)  );

console.log(JSON.stringify(homer1));
console.log(homer1);
console.log(JSON.stringify(homer2));
console.log(homer2);

console.log(JSON.stringify(homer2) == JSON.stringify(homer1))

console.log('___________Hydratation de Person...');

let julienne = Object.assign(
    {
        sex:'female'
    },
    julien    
)
julienne.myLastName = 'Julienne';

console.log('julien : ',julien);
console.log('julienne : ',julienne);

console.log('__________________Parcourir un Objet______');
console.log( ' Parsour les Propriétés de Julien :');
for (let property in julien){
    console.log('property : ',property);
    console.log('valeur : ',julien[property]);
}


console.log("_________________L'Objet Date_____________________");

let myDate = new Date();
console.log(myDate);

console.log(myDate.getFullYear()); // > Récupère l'année en cours. (getYear() est dépressié)

let dateLocale = myDate.toLocaleDateString(); // > affiche un string de la date du jour
console.log(dateLocale);

myDate.setDate(myDate.getDate()+1); // > Modifi ma date, en lui disan qu'elle est égale à la date du jour + 1 (donc demain)
console.log(myDate);

let date2 = new Date(2020, 02, 24);
console.log(date2); // Afficher la date2 au 24 février 2020


console.log("_____________________L'Objet Math _____________");

let pi = Math.PI;
console.log("pi = "+pi);

// Aleatoir / random
let aleatoir = Math.random();
console.log(aleatoir);
// Si on veux un nombre entre 0 et 10 par exemple :
aleatoir *= 10;
console.log(aleatoir);

let num1 = -0.543287290198;
console.log("num1 : "+num1);

console.log("Math.floor(num1) : "+Math.floor(num1));
console.log("Math.round(num1) : "+Math.round(num1));
console.log("Math.ceil(num1) : "+Math.ceil(num1));

console.log(Math.floor(aleatoir));
let test = 3-2;
console.log("test : "+Math.abs(6-3));


// Internationnalisation monétaire :
const monaie = 1234.345;
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(monaie));
console.log(new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec").format(monaie));   