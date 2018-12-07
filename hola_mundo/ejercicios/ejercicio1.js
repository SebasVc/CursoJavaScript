'use strict'
/*hacer un programa que pida 2 numeros yq ue nos diga cual es el mayor,
el menor o si son iguales?*/
var numero1 = prompt ("ingresa el primer numero",0);
var numero2 = prompt ("ingresa el segundo numero",0);

//VAlido que sea dato numero el que está ingresando el usuario
	//funcion isNaN --> Devuelve true or false si un dato es numerico
while( isNaN(numero1)||isNaN(numero2)  ){
	 numero1 = prompt ("ingresa el primer numero",0);
	 numero2 = prompt ("ingresa el segundo numero",0);
}
///-------------------

if (parseInt(numero1)>parseInt(numero2)) {
		alert("El numero1 Es mayor que el segundo");
		} else if (parseInt(numero2)>parseInt(numero1)) {
			alert("El numero2 Es mayor que el primero");
		} else if(parseInt(numero1)==parseInt(numero2)){
			alert("Los numeros ingresados son iguales");
} else {
	document.write ("<h1>introduce numeros correctos cole</h1>");
}
