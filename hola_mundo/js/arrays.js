"use strict"
/*Arrays basicos*/
var names= new Array("pepe","lalo","juana");//array de objeto
//var names = ["Rick","Donal","maria","paco","pedro"];//array 
//console.log(nombres);


/* Mostrar elemento de una posición en especifico
var contenido = parseInt(prompt("Elemento a mostrar ",0));
while (contenido >= names.length){
	alert("#No valido, intente con un numero valido menor que: "+names.length);
	contenido = parseInt(prompt("Elemento a mostrar ",0));
}
alert(names[contenido]);*/

/* imprimir contenido del array
document.write("<ul>");
for (var i =0; i < names.length; i++) {
	document.write("<li>"+names[i]+"</li>");
}
document.write("</ul>");*/
console.log(names.length);

//for each muestra el contenido de manera mas eficiente
//For each contiene tres parametros de callback Elemento, indice y array, donde el ultimo muestra el array compelto

names.forEach((elemento, indice)=>{document.write("<li>"+(indice+1)+" "+elemento+ "</li>")});
names.forEach((array)=>{console.log(array)});
