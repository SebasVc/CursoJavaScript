"use strict"
var nombre = prompt("nombre: ");
var apellido = prompt("Apellido: ");

const bienvenida= `
<h1> Hola,  bienvenido 
${nombre.substring(0,1).toUpperCase()+nombre.substring(1)} 
${apellido.substring(0,1).toUpperCase()+apellido.substring(1)}
 </h1>
<p> aprenderás JS </p>
<blockquote> Esto es una plantilla de  JS</blockquote>
 `;
 document.write(bienvenida);
