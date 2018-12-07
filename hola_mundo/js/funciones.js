"use strict"
//funciones
function bienvenida(numero1,nuemro2, mLog=true){
	if (mLog==false) {
	console.log ("Suma:"+(numero1+nuemro2));
	console.log ("Resta: "+(numero1-nuemro2));
	console.log ("Multiplicación: "+(numero1*nuemro2));
	console.log ("División: "+(numero1/nuemro2));
	//return ("Bienvenido a esta mondá");
	console.log("________________");
	} else {
		document.write ("Suma:"+(numero1+nuemro2)+"<br>");
	document.write ("Resta: "+(numero1-nuemro2)+"<br>");
	document.write ("Multiplicación: "+(numero1*nuemro2)+"<br>");
	document.write ("División: "+(numero1/nuemro2)+"<hr>");
	//return ("Bienvenido a esta mondá");
	
	}
	
}
	/*var cont = 0;
	for (var i = 0; i <= 10; i++) {
		console.log(i+" Operando con: "+cont);
		bienvenida(i,cont);
		cont=cont+1;
	}
*/