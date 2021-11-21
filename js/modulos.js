/* 
- ./ = empieza a buscar el archivo desde la misma carpeta
- ../ = sube niveles en las carpetas
*/

import saludar, {Saludar,PI, usuario} from "./constantes.js"; 
import {sumar, restar, aritmetica as calculos} from "./aritmetica.js"; // se pueden poner alias como calculos para atimetica


console.log("Archivos modulos.js");


console.log(PI, usuario);
console.log(sumar(3,4));
console.log(restar(5,3));

console.log(calculos.sumar1(3,4));
//console.log(aritmetica.restar1(5,3));
saludar();

let saludo = new Saludar;

saludo;