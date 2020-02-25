/*
    Les 3 opérateurs utilisés dans JavaScript :
        > Arithmétiques : +, -, *, etc
        > Comparaisons :  ==, ===, >, >=, <, <=, etc
        > Logiques : &&, || 
*/

let nb = 5;
let nb2 = 6;
let resultat = nb + nb2;
console.log(resultat);

let chaineDeCaractere = "ma chaîne de caractères";
let resultat2= chaineDeCaractere + " "+resultat;
console.log(resultat2);

nb += 1;
console.log(nb);

nb --;
console.log(nb);

nb ++;
console.log(nb);

nb *= 2;
console.log(nb);

nb /= 2;
console.log(nb);

/*
     Le modulo permet d'obtenir le reste d'une division euclidienne
*/
console.log("Modulo 7 / 2 : "+7%2);

/* Comparateurs == et === 
    > == compare les variables après conversion du typs
    > === compare sans conversion
    */
let cp1 = 5;
let cp2 = '5';
console.log(cp1 == cp2);
console.log(cp1 === cp2);

// Conditions

let b = 10;
b ++;
if(b===10){
    console.log('b = 10 ');
}else{
    console.log('b != 10');
}

if (b == 10 ){
    console.log(" b strictement égale à "+b);
}else if (b=== 11){
    console.log(" b strictement égale à "+b);
} else {
    console.log( " b n'est ni égale à 10, ni à 11");
}

// Les variables à tester en égalité strict :
b++;
switch(b){
    case 10: console.log("b strictement égale à 10");
        break;
    case 11: console.log("b strictement égale à 11");
        break;
    case 12: console.log("b strictement égale à 12");
        break;
    default:
        console.log("b n'est ni égale à 10, ni 11 ni 12");
        break;
}

switch(true){
    case (b>10):
        console.log('b strictement supérieur à 10');
        break;
}

let c = true;
let d = 'truc';

if(c===true)
    if(d === 'truc')
        console.log("c égale TRUE et d égale truc");
       
// Compare puis incrémente
 g = 10;
if(g++ === 10){ /* comparaison de g, si égale alors on incrémente*/
    console.log("g++ "+g);
}
 g = 10;
if(++g === 11){ /*  on incrémente puis on compare*/
    console.log("++g "+g);
}

// CONDITIONS TERNAIRE / AFFECTATION CONDITIONELLE

let v1=5;
(v1 >= 5)? console.log("V1") : console.log("V2");

let v2 = (v1 >=5) ?  v1+2 : v1 + 3;
console.log("v2 : "+v2);
/* EN RESUME = comparaison ? resultat si TRUE : resultat si FALSE 
remplace
    if(v1>=5){
        v2= v1 + 2;
    }else{
        v2= v1 + 3;
    }
*/

// Boucles

let index = 0;
while (index <= 10){
    console.log(index);
    index++;
} 
index = 0;
while(++index <=10){
    console.log(index);
}

index = 11;

do{
    console.log("je rentre "+index);
    index++;
} while(index <10);

// BOUCLE FOR
console.log("Boucle FOR");

for (let i=0;  i<=10; i++) {
    console.log(i);
}

let ppp=0;
for ( ; ppp < 15 ; ) {
    console.log("truc !!!");
    console.log(ppp);
    ppp++;
}