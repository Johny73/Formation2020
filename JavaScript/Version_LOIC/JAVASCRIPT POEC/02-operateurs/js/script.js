/*
    LEs 3 opérateurs utilisés dans javascript :
        > Arithmetiques : +, -, *, ...
        > Comparaisons : ==, ===, >, >=, <, <= ...
        > Logiques : &&, ||
*/

let nb = 5;
let nb2 = 6;
let resultat = nb + nb2;
console.log(resultat);

let chaineDeCaractere = "ma chaine de caractères ";
let resultat2 = chaineDeCaractere + resultat;
console.log(resultat2);

nb += 2;
console.log(nb);
nb = nb + 2;
console.log(nb);
nb --;
console.log(nb);
nb = nb - 1;
console.log(nb);

nb *= 2;
console.log("*=2 " + nb);

nb /= 7;
console.log("*=7 " + nb);

/* 
    Le modulo permet d'obtenir le reste d'une division euclidienne

    7 / 2 = 3, il reste 1
*/
console.log("Modulo 7 / 2 : "+7%2);


/*
    Comparateurs == et ===
*/
let cp1 = 5;
let cp2 = '5';

console.log(cp1 == cp2);

console.log(cp1 === cp2);


/*
    Conditions
*/

let b = 10;
b++;

if( b === 10 ){
    console.log('b = 10 ');
}else{
    console.log('b != 10');
}

b++;
if( b === 10 ){
    console.log(" b strictement égale à 10 ");
}else if( b === 11 ){
    console.log(" b strictement égale à 11 ");
}else{
    console.log("b n'est ni égale à 10, ni à 11");
}

// Les variable à tester en engalité strict :
switch(b){
    case 10:
        console.log(" b strictement égale à 10 ");
        break;

    case (10 +1):
        console.log(" b strictement égale à 11 ");
        break;

    default:
        console.log("b n'est ni égale à 10, ni à 11");
        break;
}

b++;
console.log(b);
switch(b){
    default:
        console.log("b n'est ni égale à 10, ni à 11");
        break;

    case 13:
        console.log(" /!\ b strictement égale à 13 ");
    case 11:
        console.log("  /!\ b strictement égale à 11 ");
        break;
}

switch(true){
    case (b > 10):
        console.log('b strictement supérieur à 10');
        break;
}

let c = true;
let d = 'truc';

if(c===true)
    if(d === 'truc')
        console.log("c égale TRUE et d égale truc");

if(c===true){
    if(d === 'truc'){
        console.log("c égale TRUE et d égale truc");
    }
}


// Compare puis incremente
let g = 10;
if(g++ === 10){
    console.log(g);
}
// > g => 11
// Compare juste
if((g+1) === 12){
    console.log(g);
}
// > g => 11
// incrementer puis compare 
if(++g === 12){
    console.log("> "+g);
}
// > g => 12



/* 
    CONDITION TERNAIRE / AFFECTATION CONDITIONNELLE 
*/

let v1 = 5;

(v1 >= 5)? console.log("V1") : console.log("V2");

// > Version if :
if(v1 >= 5){
    console.log('V1');
}else{
    console.log('V2');
}


// comparaison ? resultat si TRUE :  resultat si FALSE

let v2 = (v1 >=5)? v1 + 2 : v1 +3;
console.log(v2);
let V2Bis;
if (v1 >=5){
    V2Bis = v1 + 2;
}else{
    V2Bis = v1 + 3;
}
console.log(V2Bis);





// Boucles
console.log("________________WHILE");
let index = 0;
while (index <= 10){
    console.log(index);
    index++;
}
console.log("_________________WHILE V2");
index = 0;
while(index++ <= 20){
    console.log(index);
}

console.log("_________________DO WHILE");
index = 11;
do{
    console.log("je rentre");
    index++;
}while(index <10);

console.log("TRUC MACHIN");
index = 11;
while(index<10){
    console.log('un truc');
    index ++;
}

console.log("-------BOUCLE FOR");

for(let i=0 ; i<=10 ;i++){
    console.log(i);
}

let ppp = 0;
for ( ; ppp < 15; ) {
    console.log("truc !!!");
    console.log(ppp);
    ppp++
}








