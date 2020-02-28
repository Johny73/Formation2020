console.log("______________MAP_______");

let myMap = new Map();
myMap.set('id',5);
myMap.set('name',"Loic");
myMap.set("pseudo","lolo");

console.log('myMap: ',myMap);

let myMap2 = new Map(
       [ 
            ['id',4],
            ["name", "Marie"],
            ["pseudo", "mamar"]
        ]
);

myBody = document.querySelector("body");
const myTest = myBody.children;
console.log(myTest);

let myMap3 = new Map();
for (i=0; i<myTest.length-1; i++ ){
    myMap3.set('id', i);
    myMap3.set('classe', myTest[i].className );
    myMap3.set('contenu', myTest[i].innerText)
};
console.log(myMap3);