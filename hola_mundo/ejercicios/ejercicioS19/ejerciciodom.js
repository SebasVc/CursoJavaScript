"use strict"

window.addEventListener("load",function(){
	console.log("Dom Cargado");

	var formulario = document.querySelector("#formulario");
	var cajaResultado=document.querySelector("#cajaResultado");
	
//	cajaResultado.style.display="none";

	formulario.addEventListener('submit',function(){
		var nombre =document.querySelector("#nombre").value;
		var apellidos = document.querySelector("#apellidos").value;
		var edad = document.querySelector("#edad").value;

		if (nombre.trim() == null || nombre.trim().length == 0 || !isNaN(nombre) ) {
			alert("Nombre ingresado no valido");
			
			return false;
		};
		if (apellidos.trim() == null || apellidos.trim().length == 0 || !isNaN(apellidos) ) {
			alert("apellidos ingresado no valido");
			
			return false;
		};
		if (edad.trim() == null || edad.trim().length > 3 || isNaN(nombre)	 ) {
			alert("edad ingresado no valido");
			
			return false;
		};
/*
		var dato =[nombre,apellidos,edad];
		for (var indice in dato) {

			console.log("Creando P");
			var objeto = document.createElement("p");

			objeto.append(dato[indice]);
			cajaResultado.append(objeto);
			
		};
	*/
//	cajaResultado.style.display="block";

		var l_nombre=document.querySelector("#l_nombre");
		var l_apellido=document.querySelector("#l_apellido");
		var l_edad=document.querySelector("#l_edad");

		l_nombre.innerHTML= nombre.substring(0,1).toUpperCase()+nombre.substring(1);
		l_apellido.innerHTML=apellidos.substring(0,1).toUpperCase()+apellidos.substring(1);
		l_edad.innerHTML=edad;


	});
})
