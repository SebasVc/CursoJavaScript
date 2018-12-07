				"use strict"
				//Un envento es una funcion que se ejecuta cuando sucuede algo
				/*Eventos del rato*/
				/*#-> selecciona el id del elemento
				.-> Selecciona la clase*/
				//se peude llamar propiamente desde html como onclick
				
				window.addEventListener('load',function(){
				var boton1              = document.querySelector("#boton1");
				
				function cambioColor(){
				var bt                  = boton1.style.background;
				
				if (bt                  =="green") {
				console.log("EY ");
				boton1.style.background ="yellow";
				
				} else if (bt           =="yellow") {
				boton1.style.background ="red";
				} else if (bt           =="red") {
				boton1.style.background ="green";
				} 
				else{
				boton1.style.background ="green";
				}
				boton1.style.border     = "3px dashed";
				};
				function cambiaFuente(){
				boton1.style.color      ="purple";
				boton1.style.fontSize   ="50px";
				}
				
				//metodo Click
				boton1.addEventListener('click',function(){
				cambioColor();
				});
				//metodo Mouse Over
				boton1.addEventListener('mouseover',function(){
				cambiaFuente();
				});
				//Meotodo Mouse out
				boton1.addEventListener('mouseout',function(){
				boton1.style.color      ="black";
				boton1.style.fontSize   ="15px";
				});
				var input               = document.querySelector("#input");
				//focus
				input.addEventListener('focus',function(){
				console.log("[Focus]  Dentro de obj");
				});
				
				//blur
				input.addEventListener('blur',function(){
				console.log("[blur]  fuera de obj");
				});
				//keydown
				input.addEventListener('keydown',function(event){
				console.log("[keydown] tecla seleccionada",String.fromCharCode(event.keyCode));
				});
				//keypress
				input.addEventListener('keypress',function(event){
				console.log("[keypress] tecla presionada",String.fromCharCode(event.keyCode));
				});
				//keyup
				input.addEventListener('keyup',function(event){
				console.log("[keyup] tecla al levantar el dedo",String.fromCharCode(event.keyCode));
				});
				
				});
				