export function sumar(a,b){
    return a + b;
}

export function restar(a,b){
    return a - b;
}


function sumar1(a,b){
    return a + b;
}

function restar1(a,b){
    return a - b;
}

// se pueden englobar las dos funciones en un objeto.
// y no es necesario importar las funciones anteriores

export const aritmetica = {
    sumar1,
    restar1
}
