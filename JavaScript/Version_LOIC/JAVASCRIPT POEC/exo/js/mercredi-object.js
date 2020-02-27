'use strict'

/**
 * Créer un Objet litteral avion ayant les propriétées suivantes :
 * 
 *  nombre d'ailes : 2
 *  couleur : blanc
 *  nombre de roues : 3
 *  vitesse : 900 km/s
 *  
 *  une fonction permettant d'afficher dans la console sa vitesse :
 */

 console.log("create Plane...");

 let planAvion = {
     aile:2,
     couleur:'blanc',
     roue:3,
     vitesse:'900km/s',

     showVitess: function(){
         console.log('Ma vitesse est de :'+this.vitesse);
     }
 };
 planAvion.showVitess();

 let planAvion2 = new Object();
 planAvion2.aile = 2;
 planAvion2.vitesse = `2 à l'heure !`;
 // ...
 planAvion2.showVitesse = function(){
     console.log('Bordel!!! on va à '+this.vitesse);
 }
 planAvion2.showVitesse();