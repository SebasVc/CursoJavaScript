"use strict"
/*
utilizar un buble, mostrando la media y la suma de los numeros ingresados por el usuario
hasta que el usuario meta un numero negativo

*/


var suma=0;
var cont = 0;
do {
	var numero =  parseInt(prompt("ingreso de numeros",0));
	if (isNaN(numero)) {
		numero=0;
	} else if (numero>=0) {
		suma = suma+ numero;
		cont++;		
	}else if (numero<0){
		break;
	}

}while(numero>=0);

alert("Suma: "+suma);

if (!isNaN((suma/cont))) {
alert("Media: "+(suma/cont))} else {
	alert("no hay media");

};
