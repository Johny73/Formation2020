import { Login } from './Login.js'; // Charge la classe Person qui se trouve dans le fichier Person.js au même niveau que le fichier en cours.

export class Person extends Login{

    constructor(firstName, lastName, birthDay, password, username){
        // J'informe ma class dont j'herite mes proprietes :
        super(password, username);

        // 
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
    }

    description(){
        return `nom: ${this.firstName} prenom: ${this.lastName}`;
    }
}
