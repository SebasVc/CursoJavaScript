"use strict"
//la rest sirve para tomar otros datos a los cuales no se  les ha definido un parametro
// y los almacena en un array
//el spread interpreta dicho array

function casas (casa1,casa2,...otrasCasas){
	console.log("casa1: "+casa1);
	console.log("casa2: "+casa2);
	if (otrasCasas.length==0) {
		console.log(otrasCasas);	
	} else {
		console.log("Resto de casas: "+otrasCasas);
	}
	
}

casas("casa de papel","casa de carton","de icopor","de mentira");

