// Un objet est comme une supervariable qui peut contenir des variable et des fonctions
// ---- > Les variables seront des "Propriétés"
// ---- > Les fonctions seront des "Méthodes"
/*
console.log("_____________création d'un objet__________");

let maVoiture = new Object();

maVoiture.couleur = "rouge";
maVoiture.modele = "Clio";
maVoiture.nbRoues = 4;

console.log("Ma Voiture : "+maVoiture);
console.log("Ma Voiture : ",maVoiture);

console.log("couleur de ma voiture : "+maVoiture.couleur);

let maSecondeVoiture = {
    couleur: "bleu",
    modele: "Megane",
    nbRoues: 4,
    radio: true,
    rouler: function(){console.log("Avance")}
};
console.log("Ma seconde voiture : ",maSecondeVoiture);
maSecondeVoiture.rouler();

maVoiture.radio = false;
console.log("Ma voiture : ",maVoiture);
maSecondeVoiture.clim = true;
console.log("Ma seconde voiture : ",maSecondeVoiture);

console.log("______________objet constructeur__________");
function Person(lastName, firstName, city){
    this.myLastName = lastName;
    this.myFirstName = firstName;
    this.myCity = city
}
Person.prototype.myNameIs = function(){
        return "Hello, my name is "+ this.myLastName+" "+this.myFirstName;
    }
Person.prototype.showCity = function(){
        return "I am living in "+this.myCity;
    }

let marie = new Person ("Marie","MacDonald","Nantes");
let paul = new Person ("Paul", "WalterSmith", "Paris");
console.log("Marie : ",marie);
console.log(marie.myNameIs());
console.log(marie.showCity());
console.log("Paul : ",paul);
console.log(paul.myNameIs());
console.log(paul.showCity());

// un autre écriture possible pour appeler une propriété est avec des crochets 
console.log(paul["myLastName"]);
//ce qui permet d'un coup de faire appel par le biais d'une variable
let test = "myLastName";
console.log(paul[test]);

// ajouter une méthode à un élement de l'objet
paul.likeToDance = true;
paul.doYouLikeToDance = function(){
    if(this.doYouLikeToDance) {
        console.log("I love to dance on Saturday !!");
    }else{
        console/log("I hate to dance");
    }
}

//Attribution d'une nouvelle function pour l'ensmeble de l'objet
Person.prototype.doYouLikeToCook = function (){
    console.log(this.myFirstName + ' loves to cook !!')
}

paul.doYouLikeToCook();
marie.doYouLikeToCook();

console.log("_______________comparaison d'objets_______");

let homer1 = {nom: "Homer"};
let homer2 = {nom: "Homer"};

let homer3 = homer2;

console.log(`Homer1 est égale à Homer2 : `+ (homer1==homer2));
console.log(`Homer2 est égale à Homer3 : `+ (homer3==homer2));
//Pour comparer le continue des différents objets ou array, on peut utiliser JSO?.stringify
console.log(JSON.stringify(homer2) == JSON.stringify(homer1));
console.log(JSON.stringify(homer2));

console.log("____________Hydratation de personne_________");
/*
let julienne=Object.assign(
    {
        sex:'female'
    }, 
    paul
    );
julienne.myLastName = 'Julienne';


let julienne = paul;
julienne.myFirstName="Julienne";
julienne.sexe = "female";

console.log('Julienne : ',julienne);
console.log('paul : ',paul);

console.log("parcourir un objet");

for (let property   in paul){
    console.log("property :",property);
    console.log("valeur ",paul[property]);
}

//Créer un objet avion avec les prop
// couleur blanc
 julienne = paul;
julienne.myFirstName="Julienne";
// deux ailes
// trois roues
//une vitess
//une fonction pour afficher la vitesse dans la console

//Solution litteral
let Avion =  {
    couleur: 'blanc',
    ailes: 2,
    roues: 3,
    vitesse: "900km/h",
    showSpeed: function(){console.log("La vitesse de l'appareil est de "+ this.vitesse)}
    let julienne = paul;
    julienne.myFirstName="Julienne";
    }

    Avion.showSpeed();

//OU
let AvionBis = new Object();
AvionBis.maCouleur = "blanc";
AvionBis.mesAiles = 2;
AvionBis.mesRoues = 3;
AvionBis.maVitesse = 900;
AvionBis.showSpeed = function(){
    console.log("Bordel, on va a "+ this.maVitesse+" km/h");
}
AvionBis.showSpeed();
let julienne = paul;
julienne.myFirstName="Julienne";
        this.maCouleur = couleur;
        this.mesAiles = ailes;
        this.mesRoues = roues;
        this.maVitesse = vitesse;
    
        this.afficheVitesse = function(){
            return "La vitesse de l'appareil est de "+ this.maVitesse+" km/h";
        }
    }
    let monAvion = new Avion2 ("blanc",2,3, 900);
    console.log(monAvion.afficheVitesse());


    let myDate = new Date();
    console.log(myDate.getFullYear());

    let dateLocale = myDate.toLocaleDateString();
    console.log(dateLocale);

     julienne = paul;
    julienne.myFirstName="Julienne";
    console.log(myDate.setDate(myDate.getDate()+1));
    
    
    let date2= new Date(2020, 01, 24);//Attention le mois de janvier = 0
    console.log(date2)

    console.log("_________________objet math_______");

    let pi = Math.PI;
    console.log("pi = "+pi);

    //aléatoire /random
    let aleatoir = Math.random();
    console.log(aleatoir);
    console.log(Math.floor(aleatoir)); //arrondi au nombre égal inférieur
    console.log(Math.ceil(aleatoir));
    console.log(Math.round(aleatoir)); // arrondi
    console.log(Math.trunc(aleatoir)); // tronquer
    console.log(Math.fround(aleatoir)); // récupérer la partie flottante
    console.log(Math.abs(-6-3)); //nombre absolu
    console.log(Math.pow(2,3)); //calcul du la puissance, ici 2 puissance 3

    const monnaie = 1234.345;
    console.log(new Intl.NumberFormat('ja-JP', {style: 'currency', currency: 'JPY' }).format(monnaie));
    */

    function Person(nom, prenom, titre){
        this.nom = nom,
        this.prenom = prenom,
        this.titre = titre
    };

    Person.prototype.function = nomComplet(); {
        return this.titre+" "+this.nom+" "+this.prenom
        
    }
    
    Person("Dupont", "Marie", "Mme");
    console.log(dupont.nomComplet());