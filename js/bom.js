"use strict"
/* BOM - Browser Object Model.
permite usar  y editar las propiedades de un navegador web */
function getBom(){
console.log("Anchura: "+screen.width+"px");
console.log("Altura: "+screen.height+"px");
console.log("Ruta: "+window.location);
/*Con esto se muestra las propiedades sin importar la consola 
console.log("Anchura: "+screen.width+"px");
console.log("Altura: "+screen.height+"px");*/
}
function cambioURL(url){
	window.location.href= url;
}
