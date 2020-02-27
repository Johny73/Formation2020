'use strict'

document.addEventListener('DOMContentLoaded',()=>{
    let title = document.querySelector('h1');
    console.log(title);

    let monParagraphe =document.querySelector('p');
    console.log(monParagraphe);

    let mesParagrpahes = document.querySelectorAll("p");
    console.log(mesParagrpahes);

    let inputText = document.querySelector("#test");
    console.log(inputText);

    let bouton = document.querySelector('form input[type=submit]');
    console.log(bouton);

    bouton.addEventListener('click', function(e){
        e.preventDefault();
        console.log("Bou !");

        let newColor = inputText.value;
        console.log(newColor);

        mesParagrpahes.forEach((element)=>{
            console.log(element);
            element.style.backgroundColor = newColor;
          }  );
    });
});