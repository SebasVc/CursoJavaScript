"use strict"
/*
hacer un programa que muestre todos los numeros que hay entre dos numeros introducidos por el usuario

*/
var numero1= parseInt(prompt("Ingresa el primer numero",0));
var numero2=parseInt(prompt("Ingresa el segundo numero",0));

for (var i = numero1+1; i <= numero2-1; i++ ){
	console.log(i);
}
