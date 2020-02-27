function truc(){
    // console.log("hello world");
    return "hello world"; 
}

truc();

console.log( truc() );

// Fonction d'addition :
function addition(num1, num2){
    let resultat = num1 + num2;
    return resultat;
}
addition(5,3);


let number1 = addition(5,3);
let number2 = addition(6,22);

let number3 = addition(number1, number2);


console.log('number1 : '+number1);
console.log('number2 : '+number2);
console.log('number3 : '+number3);


console.log(addition(5,3));
