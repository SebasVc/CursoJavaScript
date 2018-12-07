"use strict"
//funcion anonima es una función sin nopmbre, es necesario paara el uso del callbackl

function multiplica(n1,n2,muestraR,divideRx2){
	var mult= n1*n2;
	muestraR(mult);
	divideRx2(mult);
	return mult;
}

multiplica(2,3,info =>{
	console.log(info);
},
info=>{
	console.log(info/2);
})