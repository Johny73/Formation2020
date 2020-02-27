import { Login }  from './login.js'
export class Person extends Login {
    constructor(firstName, lastName, birthDay, pass, userName){
        // information que ma class hérite ces deux propriétés de l'autre class
       super(pass, userName);

       this.firstName = firstName;
       this.lastName = lastName;
       this.birthDay = birthDay;
    }


description(){
    return `nom: ${this.firstName} prenom: ${this.lastName}`
}
};