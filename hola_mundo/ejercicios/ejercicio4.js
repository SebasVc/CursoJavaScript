"use strict"
/*
mostrar todos los numeros impares que estan entre dos numeros introducidos por el user
*/


var numero1= parseInt(prompt("Ingresa el primer numero",0));
var numero2=parseInt(prompt("Ingresa el segundo numero",0));

for (var i = numero1+1; i <= numero2-1; i++ ){
	if (i%2!=0) {
		console.log(i+"Es impar");
	} else {}

}
