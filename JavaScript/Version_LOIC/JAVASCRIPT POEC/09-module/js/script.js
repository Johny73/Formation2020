import { Person } from './Person.js'; // Charge la classe Person qui se trouve dans le fichier Person.js au même niveau que le fichier en cours.

'use strict'

let marie = new Person('Marie', 'Doe', '25/03/1978', 'rage', 'mot-de-passe');


console.log(marie);

console.log(marie.description());

console.log(marie.firstName);
