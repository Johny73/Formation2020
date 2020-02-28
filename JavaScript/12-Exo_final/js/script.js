'use strict'
document.addEventListener("DOMContentLoaded", () => 
{
        let source;
        let maCollection = document.getElementById("pics");
        maCollection = maCollection.children;

        for (let i=0; i<maCollection.length ; i++)
        {
            addEventListener('click', function (event) 
            {   event.preventDefault();
                source= event.target.src;
                document.getElementById("selectedPic").src=source;
            }
        )}


})