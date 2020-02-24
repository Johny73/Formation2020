console.log("____________________COCATENATION__________");
let chaineDeCaractereN1 = "Faites raidir les tranches de bacon dans une poêle antiadhésive. Ôtez du feu et laissez refroidir. — (Anne Garnier Carole Dufour, Le nouveau régime booster métabolique : Brûler plus de graisses sans effort, Éditions Leduc.s, 2019)";
let concatenation = "Le Professeur a dit : "+chaineDeCaractereN1;
console.log(concatenation);

console.log("chaineDeCaractereN1 : "+chaineDeCaractereN1);
console.log("chaineDeCaractereN1 : ",chaineDeCaractereN1);

console.log(`chaineDeCaractereN1 : " ${chaineDeCaractereN1}"`);

console.log(`
    <ul>
        <li>ligne 1</>
        <li>ligne 2</>
        <li>ligne 3</>
        <li>ligne 4</>
        <li>ligne 5</>
    <ul>`)

let line1 = "ceci ";
let line2 = "est un ";
let line3 = "text ";
let line4 = "sur plusieurs ";
let line5 = "lignes ";

console.log(`
    <ul>
        <li>${line1}</>
        <li>${line2}</>
        <li>${line3}</>
        <li>${line4}</>
        <li>${line5}</>
    <ul>`);

let concat= line1 +34;
console.log(concat);


