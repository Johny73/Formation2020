console.log("____________concaténation_______");

let chaineDeCaractereN1 = "Bacon ipsum dolor amet cow pork chislic strip steak pork loin meatloaf. Rump prosciutto jowl, andouille fatback."
let concatenation = 'le Professeur a dit : " '+chaineDeCaractereN1+'"';
console.log(concatenation);

console.log("chaineDeCaractereN1 : " + chaineDeCaractereN1);
console.log("chaineDeCaractereN1 : " , chaineDeCaractereN1);

console.log(`le Professeur a dit : " ${chaineDeCaractereN1}"`);
let line1 = "ceci";
let line2 = "est un ";
let line3 = "texte ";
let line4 = "sur plusieurs";
let line5 = "lignes";
console.log(`<ul>
                <li>${line1}</li>
                <li>${line2}</li>
                <li>${line3}</li>
                <li>${line4}</li>
                <li>${line5}</li>
            </ul>`);

let concat1 = line1 + 34 + 4;
let concat2 = line1 + (34 + 4);
console.log(concat1);
console.log(concat2);

let welcome = 'aujourd\'hui, il fait beau !';

let prenom = 'loic';
let message = prenom + '! '+welcome;

let messag2 = `${prenom}! ${message}`;

let htmlCode = `<ul>
                    <li><a href='#'>${prenom}</a></li>
                </ul>`;

let htmlCode2 = '<ul> \n <li></li> \n </ul>';