'use strict'


window.addEventListener('load',function(){
//Timer se ejecuta cada cierto tiempo
var tiempo;

	function intervalo (){
		tiempo= setInterval(function(){
		console.log("Entrando al timer");
		var titulo = document.querySelector("#titulo");

		if (titulo.style.fontSize == "50px") {
			titulo.style.fontSize= "20px";
			
		} else {
			titulo.style.fontSize= "50px";
			}
		;

		},1000);
		return tiempo;
	};
//	var tiempo= intervalo();


//Solo se ejecuta una sola vez al cargar
		var tiempo = setTimeout(function(){
		console.log("Entrando al timer");
		var titulo = document.querySelector("#divprincipal");

		if (titulo.style.fontSize == "50px") {
			titulo.style.fontSize= "20px";
			
		} else {
			titulo.style.fontSize= "50px";
			}
		;

	},500);

//Stop-->> detiene el inverlo
	var bStop= document.querySelector("#stop");	
	bStop.addEventListener("click",function(){
		//Entrando a detener el intervalo (parpadeo)
		alert("detener intervalo");
		clearInterval(tiempo);
	});
 //iniciar intervalo
 //Stop-->> detiene el inverlo
	var bStart= document.querySelector("#start");	
	bStart.addEventListener("click",function(){
		//Entrando a detener el intervalo (parpadeo)
		intervalo();
	});	

});//end load


