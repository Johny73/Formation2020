'use strict'
// Crer un chi fu mi :

/**
 * 
 * L'utilisateur doit entrer son nom dans un champ texte
 * 
 * il doit cliquer sur un des trois bouton (ou lien) représentant 
 * > pierre
 * > feuille
 * > ciseau
 * 
 * au clic de ses boutons :
 * 
 * 1/ l'ordinateur génère une réponse aléatoire.
 * 
 * 2/ l'ordinateur compare sa réponse avec celui de l'utilisateur
 * 
 * 3/ on affiche dans une fenetre alert le nom du vainqueur
 * 
 */

document.addEventListener('DOMContentLoaded',()=>{
    listenPlayer();
});

let playerName;

function listenPlayer(){
    const buttons = document.querySelectorAll('a');
    buttons.forEach(function(elt){
        elt.addEventListener('click', clickHandler);
    });
}

function clickHandler(e){
    e.preventDefault();
    // Récupère le contenu le nom du joueur :
    const pName = document.querySelector("#gamerName");
    playerName = pName.value;

    // Si le nom est vide, je m'arrete
    if (playerName === ''){
        alert("Qui êtes vous ?");
        return;
    }

    // Récupère la sélection du joueur :
    console.log("e.target : ",e.target);
    console.log("this : ",this);
    const mySelection = this.getAttribute("href");

    // Au robot de jouer !
    match(mySelection, botSelection());
}

function Fumi(name, opponent) { this.name = name; this.opponent = opponent; }

const fumis = [
    new Fumi('feuille'),
    new Fumi('ciseaux'),
    new Fumi('cailloux'),
];

fumis[0].opponent = fumis[2];
fumis[1].opponent = fumis[0];
fumis[2].opponent = fumis[1];

Fumi.prototype.versus = function(opponent) {
    if (opponent == this.opponent) {
        return '1';
    }

    if (opponent.opponent == this) {
        return '-1';
    }

    return '0';
}

function match(human, bot){
 
    let winner = "BOT";
    
    const winnerName = human.versus(bot);


    /*
    // Version Julia
    if(human === bot){
        winner = "NO WINNER";
    }else if(
        (human==='pierre') && (bot === 'feuille')
        || (human==='feuille') && (bot === 'ciseaux')
        || (human==='ciseaux') && (bot === 'pierre')
    ){
        winner = "BOT";
    }else{
        winner = "human";
    }

    /*
    if(human === bot){
        winner = "NO WINNER";
    }else if(human === 'ciseaux'){
        if(bot === 'papier'){
            winner = "human";
        }else if(bot === 'pierre'){
            winner = "bot";
        }else{
            winner = "NO WINNER";
        }
    }else if(human === 'pierre'){
        if(bot === 'feuille'){
            winner = "bot";
        }else if(bot === 'ciseaux'){
            winner = "human";
        }else{
            winner = "NO WINNER";
        }
    }else if(human === 'ciseaux'){
        if(bot === 'feuille'){
            winner = "human";
        }else if(bot === 'pierre'){
            winner = "bot";
        }else{
            winner = "NO WINNER";
        }
    }

    */

    if(winner == 'human'){
        winner = playerName;
    }


    let result = `${playerName}: ${human} vs BOT: ${bot} and the winner is ${winner}   `;

    alert(result);
}

function botSelection(){

    let randomSelect = Math.floor((Math.random() * 3) + 1);

    const results = ['pierre', 'feuille', 'ciseaux'];

    return results[randomSelect-1];
}