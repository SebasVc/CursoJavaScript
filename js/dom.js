"use strict"
//DOM-Document Object Model 
//el dom sirve para modificar propiedades de HTML pero desde Js

//var contenido=document.getElementById('divprincipal');
var contenido=document.querySelector('#divprincipal');
//QuerySelector y getElementById sirve para los mismo 	
function cambiacolor(cback,cletra){
	contenido.style.background=cback;
	contenido.style.color=cletra;
}
contenido.innerHTML='Esto está modificado desde js';
contenido.className="Newclass";

//conseguir elementos por su etiqueta
var allDiv = document.getElementsByTagName("div");
var contenidoOne=allDiv[0];
contenidoOne.innerHTML= "Se está modificando el segundo div ñiño";

//conseguir elementos por su clase
var divsRojos = document.getElementsByClassName('rojo');
var divsAzul = document.getElementsByClassName('azul');
console.log(divsAzul);
var i;
for(i in divsRojos){
	if(divsRojos[i].className=="rojo"){
		divsRojos[i].style.background="red";
	}

}
var x;
for(x in divsAzul){
	if(divsAzul[x].className=="azul"){
		divsAzul[x].style.background="blue";
	}

}
 // con querySelector

 var id= document.querySelector("#titulo");
 var colores= document.querySelectorAll(".rojo");

 console.log(colores);

 
