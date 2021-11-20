/*
let mot = prompt("Veuillez saisir un mot");
console.log(mot);
alert(typeof(mot));

if(typeof(mot) != "string") {
    alert("Mauvaise saisie !")
}
mot = 3.0;
alert(typeof(mot));

if(typeof(mot) != "string") {
    alert("Mauvaise saisie !");
}

var array = new Array("voiture", 3, "Bonjour");
var array2 = ["toto", "lolo", 3.5];

array[3] = "33";
array2.push("lili");
array.push("lolo");

alert(array[1]);
alert(array2[3]);

array.shift();
alert(array);

array2.pop();
alert(array2);

var monchien3 = {
    nom: "minet",
    prenom: "jaune",
}
alert(monchien3.nom);
monchien3["age"] = 49;

for(let i = 0; i < array2.length; i++) {
    alert("Valeur de la case " + i + " : " + array2[i]);
}

for(let cle in monchien3) {
    alert(cle);
}
*/

$(document).ready(function() {
    $("*").click(function() {
        alert("Détournement du clic");
    });

    $("p").hover(function() {
        $(this).css("background-color", "#FF0000");
    });

    $(".blue").hover(function() {
        $(this).css("background-color", "#0000FF");
    });

    $("#green").hover(function() {
        $(this).css("background-color", "#00FF00");
    });
});
