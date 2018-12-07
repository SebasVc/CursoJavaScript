"use strict"
/* BOM - Browser Object Model.
permite usar  y editar las propiedades de un navegador web */
	var Anchura= screen.width;
	var Altura=screen.height;
function getBom(){
console.log("Anchura: "+Anchura+"px");
console.log("Altura: "+Altura+"px");
console.log("Ruta: "+window.location);
/*Con esto se muestra las propiedades sin importar la consola 
console.log("Anchura: "+screen.width+"px");
console.log("Altura: "+screen.height+"px");*/
}
function cambioURL(url){
	window.location.href= url;
}
function abrirVentana(url){
	window.open(url,"","fullscreen=yes, scrollbars=auto");
	}
