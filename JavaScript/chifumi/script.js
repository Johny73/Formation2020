// CREER un chi fu mi

// L'utilisateur doit entrer son nom dans un champ de texte
// il doit cliquer sur un des trois boutons (ou liens) représentant
// Pierre
// Feuille
// Ciseau

// au clic de ces boutons :*
// 1> l'ordinateur génère une réponse aléatoire
// 2> l'ordinateur comparte sa propre réponse avec celui de l'utilisateur
// 3> on affiche dans une fenetre alert le nom du vainqueur


let reponse_joueur ;
let gagnant, source, reponse_ordi, x ;

const BTN_pierre = document.querySelector("#Pierre");
BTN_pierre.addEventListener('click', function(event){
    event.preventDefault();
    
    reponse_joueur = event.target.parent.getAttribute(dataValue) ;
    console.log(event.target.parent);
    console.log(reponse_joueur);
});


const BTN_feuille = document.getElementById("Feuille");
BTN_feuille.addEventListener('click', function(event){
    event.preventDefault();
    reponse_joueur = 2 ;
});

const BTN_Ciseaux = document.getElementById("Ciseaux");
BTN_Ciseaux.addEventListener('click', function(event){
    event.preventDefault();
    reponse_joueur = 3 ;
});


function test(reponse_ordi, reponse_joueur){
reponse_ordi = Math.trunc(Math.random() * 3 + 1);
console.log(reponse_ordi);
switch(reponse_ordi){
    case 1:
         source = "pierre.jpeg"
         break;
    case 2 :
         source = "feuille.jpeg";
         break;
    case 3 : 
         source = "ciseaux.jpeg";
         break;
};

 x = document.getElementById("reponse_ord");
x.setAttribute("src", source)

function testGagnant(reponse_joueur, reponse_ordi){
if (reponse_joueur === reponse_ordi) {
    gagnant = "Pas de gagnant !";
}else 
    if (reponse_joueur === 1){
        switch(reponse_ordi){
            case 2 :
            gagnant = "ordinateur";
            break;
            case 3 :
                 gagnant = "joueur";
                 break;
        }}
    else if(reponse_joueur===2) {
        switch(reponse_ordi){
            case 1 :
                 gagnant = "joueur";
                 break;
            case 3 :
                 gagnant = "ordinateur";
                 break;
        }
    } else if(reponse_joueur===3){
        switch(reponse_ordi){
            case 1:
                 gagnant = "ordinateur";
                 break;
            case 2:
                 gagnant = "joueur";
                 break;

        }}
    return gagnant}
let winner = testGagnant(reponse_joueur, reponse_ordi);
alert(winner);  
    };

let result;
    for( i=0 ; i<20; i++){
        result = Math.trunc((Math.random()*3 ) + 1);
        console.log(result)
    }