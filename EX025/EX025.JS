/*Tabuada de um número */

/*   as " " serve para avisar ao JS que aquela variavel vai armazenar texto e numero, 
mas se eu colocar um 0 , serve para avisar que vou guardar só numero*/

let numero = 5;
let resultado = "";

for (let i =1; i<=10; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\n`; 
  }

  alert(resultado);