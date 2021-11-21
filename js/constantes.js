//Se agrega la palabra reservada export, para poder exportar
//la constante en otro archivo.

//Se puede exportar solo lo que sea necesario.

export const PI = Math.PI;  

export let usuario = "Cristian";
let password = "abc";

// al agregar la palabra reservada default, la función se exporta
// automaticamente.
//- No se puede tener 2 exportaciones por defecto.
export default function saludar(){
    console.log("Hola Módulos +ES6");
}

export class Saludar {
    constructor(){
        console.log("Hola Clases +ES6");
    }
}

