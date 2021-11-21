// 1. PRIMITIVOS: SE ACCEDE DIRECTAMENTE AL VALOR.

// string - number - boolean - null - undefined - NaN

// Tipo de datos cadena o string

// Tipo de datos numericos

// let num1 = 2;
// let num2 = 2.5;
// let num3 = "10";

// console.log(num2.toFixed()) //numero de decimales despues del punto decimal.
// console.log(parseInt(num3)) //convierte una cadena en un numero.
// console.log(typeof num2)

// Tipo de datos Booleans

// let verdadero = true;
// let falso = false;

//valores que tienden a verdadero
// if (true)
// if ({})
// if ([])
// if (42)
// if ("foo")
// if (new Date())
// if (-42)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)
//valores que tienden a falso
// if (false)
// if (null)
// if (undefined)
// if (0)
// if (-0)
// if (0n)
// if (NaN)
// if ("")

// console.log(Boolean(0));
// console.log(Boolean(-7));
// console.log(Boolean(""));
// console.log(Boolean(" "))

// Tipo de datos NULL - UNDEFINED - NaN

// let indefinida;
// console.log(indefinida); // La variable tiene valor, JS le asigna el valor de undefined

// let nulo = null;
// console.log(nulo); // el valor null es asignado intencionalmente por el programador

// let noEsUnNumero = "Hola" * 3
// console.log(noEsUnNumero) // NaN - Not a Number (cuando se quiere hacer operaciones aritmeticas con valores que no son numeros)

// 2. COMPUESTOS: SE ACCEDE A LA REFERENCIA DEL VALOR.

// object = {}
// array = []
// function()
// Class {}
//etc.

// >>>>> FUNCIONES = Es un bloque de código que tiene su propio contenido, y es reutilizable. Pueden o no recibir parametros y pueden o no devolver valores

// // funcion declarada
// function estoEsUnaFuncion() {
//     console.log("Uno")
//     console.log("Dos")
//     console.log("Tres")
// }
// //Invocación de función
// estoEsUnaFuncion();

// function unaFuncionQueDevuelveValor() {
//     return "La función ha retornado una Cadena de texto"; //cuando encuentra la palabra reservada return, la funcion deja de ejecutarse
// }

// let valorDeFuncion = unaFuncionQueDevuelveValor();
// console.log(valorDeFuncion)

//Funcion que recibe parametros, se puede asignar valor por defecto a los parametros
// function saludar(nombre, edad) {
//     console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`)
// }

// saludar("Cristian", 33);

// declarada();

// function declarada() {
//     console.log(`
//     Esto es una función declarada, ouede invocarse en cualquier parte de nuestro código,
//     incluso antes de que la función sea declarada
//     `);
// }

// //funcionExpresada();

// //función anónima = funcion que no tiene nombre
// const funcionExpresada = function() {
//     console.log(`Esto es una función expresada, es decir, una función qeu se le ha asignado como valor a una variable,
//     si invocamos esta función antes
//     de su definición JS nos dirá Cannot access 'funcionExpresada' before initialization`)
// }

// funcionExpresada();

// OBJETOS COMPUESTOS

//>>>>>>>>>>>>> Arreglos (arrays)

// const a = [];
// const b = [1,true,"Hola",["a","b","c",[1,2,3]]];
// console.log(a);
// console.log(b);
// console.log(b.length); //Devuelve el numero de elementos
// console.log(b[2]); //Poner la posición de la que se quiere obtener el dato
// console.log(b[3][2]); //accede a la posicion de un arreglo dentro de otro arreglo
// console.log(b[3][3][0]); //se accede al valor por referencia.

// const c = Array.of("X","y","Z",9,8,7); //nos crear un arreglo con sus valores
// console.log(c);

// const d = Array(100).fill(false); // se crea un arreglo de 100 posiciones y se llenan con el valor de false
// console.log(d);

// const e = new Array(); //Forma antigua de declarar un arreglo
// console.log(e);

// const f = new Array(1,2,3,true,false) //Forma antigua de declarar un arreglo
// console.log(f);

// const colores = ["Rojo","Verde","Azul"];
// console.log(colores);

// colores.push("Negro"); // push agrega un nuevo elemento al final del arreglo
// console.log(colores);

// colores.pop() // pop quita el ultimo elemento en el array
// console.log(colores);

// // Funcion que se ejecuta por cada uno de los elementos que tenga el arreglo
// colores.forEach(function(elemento, index) {
//     console.log(`<li id="${index}">${elemento}</li>`)
// })

//Irse a mdn, buscar el objeto que se quiere estudiar y ver las propiedades y los metodos.

//>>>>>>>>>>><<< OBJETOS

// let a = new String("Hola"); //se llama al objeto String, se crea una instancia del objeto con new que se almacena en la variable a
// console.log(a)

// const c = new Object();

// //un objeto es una colección de llaves y valores.
// // dentro de un objeto a las variables se les va a llamar atributos o propiedades,
// // a las funciones se les va a llamar metodos.
// const cristian = {
//     nombre: "Cristian",
//     apellido: "Pino",
//     edad:33,
//     pasaTiempos: ["Correr", "Jugar"],
//     soltero:false,
//     contacto: {
//         email: "cpinopacheco64@gmail.com",
//         telefono: "+56957409074"
//     },
//     saludar: function() {
//         console.log("Hola");
//     },
//     decirMiNombre: function(){
//         console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
//     }
// }

// console.log(cristian)
// console.log(cristian["nombre"]); //accede al valor de la propiedad nombre del objeto
// console.log(cristian["apellido"]);
// console.log(cristian.nombre); //accede al valor de la propiedad nombre del objeto
// console.log(cristian.pasaTiempos);
// console.log(cristian.pasaTiempos[1]);
// console.log(cristian.contacto);
// console.log(cristian.contacto.telefono);

// cristian.saludar();
// cristian.decirMiNombre();

// console.log(Object.keys(cristian)) //Lista en un arreglo todas las llaves del objeto
// console.log(Object.values(cristian)) //Lista en un arreglo todos los valores del objeto
// console.log(cristian.hasOwnProperty("nombre")) //valida si el objeto tiene la llave
// console.log(cristian.hasOwnProperty("años")) // valida si el objeto tiene la llave

//>>>>>>>>>>>><<<< TIPOS DE OPERADORES

// Aritmeticos +, -, *, /, %, ()

// let a = 5 + 5 - 10 * 3
// console.log(a)

// let modulo = 5%2;
// console.log(modulo)

// // Relacionales >, <, >=, <=, ==, ===, !=, !==

// console.log(8 > 9) //mayor que
// console.log(8 < 9) //menor que
// console.log(8 >= 9) //mayor o igual
// console.log(8 <= 9) //menor o igual
// console.log(8 >= 8) //mayor o igual
// console.log(8 <= 9) //mayor o igual

// asignacion
/*
= 1 igual es asignación
== comparación de valores
=== comparación de valor y tipo de dato
*/

// console.log(7 == 7)
// console.log("7" == 7)
// console.log(0 == false)

// console.log(7 === 7)
// console.log("7" === 7) //validan a falso por que el tipo de datos no es el mismo
// console.log(0 === false) //validan a falso por que el tipo de datos no es el mismo

//Incremento y Decremento
// let i = 1;

// //i = i + 2;
// //i += 3
// //i *= 3

// //Operador unario
// i++
// i--
// console.log(i);

//Operadores Lógicos ! = not, || = or, && = and.

// // ! = Niega. es decir lo que es verdadero lo vuelve falso y viceversa
// console.log(true);
// console.log(!true);

// // || = cuando tengo 2 o mas condiciones, con que una se cumpla una el or sera verdadero

// console.log((9 === 9) || ("9" === 9));

// // && = cuando tengo 2 o mas condiciones, tienen que cumplirse todas para que el AND sea verdadero
// console.log((9 === 9) && ("9" === 9));

//>>>>>>>>>>>>>>><< CONDICIONALES

// if - else

// let edad = 17;

// if (edad === 18) {
//     console.log("Eres mayor de edad")
// } else {
//     console.log("Eres menor de edad")
// }

// let hora = 15;

// if (hora >= 0 && hora <= 5) {
//     console.log("Déjame Dormir");
// } else if (hora >= 6 && hora <= 11){
//     console.log("Buenos días");
// } else if (hora >=12 && hora <= 18){
//     console.log("Buenas tardes");
// } else {
//     console.log("Buenas noches");
// }

// OPERADOR TERNARIO | (condición) ? verdadero : falsa
// En un operador ternario solo se puede evaluar una condición

// let eresMAyor = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";

// console.log(eresMAyor);

// SWITCH - CASE
// Nos permite evaluar cuando tengamos diferentes valores para una misma variable

/*
Domingo = 0
lunes = 1
martes = 2
miercoles = 3
jueves = 4
viernes = 5
sabado = 6
*/

// let dia = 20;

// switch (dia) {
//     case 0:
//         console.log("Domingo");
//         break;
//     case 1:
//         console.log("Lunes");
//         break;
//     case 2:
//         console.log("Martes");
//         break;
//     case 3:
//         console.log("Miercoles");
//         break;
//     case 4:
//         console.log("Jueves");
//         break;
//     case 5:
//         console.log("Viernes");
//         break;
//     case 6:
//         console.log("Sabado");
//         break;
//     default:
//         console.log("El día no existe");
//         break;
// }

// >>>>>>>>>>>>>>< CICLOS (LOOPS - BUCLES)

// let contador = 0;

// // while - se evalua primero y despues de ejecuta el código
// while (contador < 10) {
//     console.log("while " + contador);
//     contador++;
// }

// // do-while = se ejecuta el código una vez y despues evalua.
// do {
//     console.log("do-while " + contador);
//     contador++;
// } while (contador < 10);

// for (let index = 0; index < 10; index++) {
//     console.log("For " + index);
// }

// let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// for (let index = 0; index < numeros.length; index++) {
//     console.log("Valores en el arreglo " + numeros[index]);
// }

// const persona = {
//     nombre: "Cristian",
//     apellido: "Pino",
//     edad: 33
// }

// //recorre las propiedades que tiene un objeto - solo permite recorrer propiedades de un objeto
// for (const propiedad in persona) {
//     console.log(`Key: ${propiedad}, Value: ${persona[propiedad]}`);
// }

// let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// // recorre todos los elementos de cualquier objeto que sea iterable
// for (const elemento of numeros) {
//     console.log(elemento);
// }

//>>>>>>>>>>>>>>>>> MANEJO DE ERRORES
//TRY - CATCH = es una estructura que nos permite evaluar fragmentos de código y
//cuando exista algun error, se va a capturar en la parte del catch evitando que se caiga la aplicación

// try {
//     console.log("En el Try se agrega el código a evaluar")
//     noExiste;
// } catch (error) {
//     console.log("En el catch se captura cualquier error surgido en el try")
//     console.log(error); //Imprime el error capturado.
// } finally {
//     console.log("El bloque finally se ejecutará siempre al final de un bloque try-catch")
// }

// //Se pueden arrojar errores personalizados
// try {
//    let numero = "y";
//    if(isNaN(numero)){ //Evalua si no es un numero
//     throw new Error("El caracter introducido no es un número") //se le pasa el mensaje de error
//    }
//    console.log(numero * numero)
// } catch (error) {
//     console.log(`Se produjo el siguiente error: ${error}`)
// }

//>>>>>>>>>>>>>>>< BREAK Y CONTINUE

// const numeros = [1,2,3,4,5,6,7,8,9,10];

// for (let i = 0; i < numeros.length; i++) {
//     if(i === 5){
//         break; // Rompe el ciclo y se sale de la operación
//     }
//     console.log(numeros[i]);
// }

// for (let i = 0; i < numeros.length; i++) {
//     if (i === 5){
//         continue; // se salta la iteración, pero continua con el ciclo.
//     }
//     console.log(numeros[i]);
// }

//>>>>>>>>>>>>>>>> DESTRUCTURACIÓN
// es una nueva forma de asignar valores a objetos y arreglo de una manera mas agil

// //ejemplo de destructuración con array
// const numeros = [1,2,3];

// // Sin destructuración
// let uno = numeros[0],
//     dos = numeros[1],
//     tres = numeros[2];

// console.log(uno,dos,tres);

// // Con destructuración
// const [one,two,three] = numeros;

// console.log(one,two,three);

// //ejemplo de destructuración con objeto

// const persona = {
//     nombre: "Cristian",
//     apellido: "Pino",
//     edad: 33
// }

// // IMPORTANTE, en la destructuración de objetos es muy importante que las variables
// // que se crean tengan el mismo nombre que las propiedades del objeto.
// const {nombre, apellido, edad} = persona;

// console.log(nombre, apellido, edad);

//>>>>>>>>>>>>>>>>>>>>>>> OBJETOS LITERALES
/*
Es una nueva forma de escribir metodos y atributos
*/

// let nombre = "Tuti"
//     raza = "puddle"

// const perro = {
//     nombre: nombre,
//     raza: raza,
//     ladrar: function(){
//         console.log("guauuu guauuuuu!!!");
//     }
// }

// console.log(perro);
// perro.ladrar();

// // ***** nueva forma de declarar los metodos y atributos de objetos literales ****
// // JS entiende automaticamente que tiene que tomar el valor de las variables con el mismo nombre
// const dog = {
//     nombre,
//     raza,
//     ladrar() {
//         console.log("guauuu guauuuuu!!!")
//     }
// }

// console.log(dog);
// dog.ladrar();

//>>>>>>>>>>>>>>>>>>> PARAMETROS REST Y OPERADOR SPREAD (OPERADOR DE PROPAGACIÓN)
/* Es una forma de ir agregando parametros infinitos ya sea a una función o
dentro de una variable o arreglo.

- para definir un parametro rest se debe anteponer 3 puntos suspensivos (...parametro_rest)
*/

// function suma(a,b,...c){
//     let resultado = a + b;

//     c.forEach(function(n){
//         resultado += n;
//     })

//     return resultado;
// }

// console.log(suma(1,2));
// console.log(suma(1,2,5));
// console.log(suma(1,2,5,2));

// //----- spread operator
// /* permite ir agregando valores de forma dinamica */

// const arr1 = [1,2,3,4,5],
//       arr2 = [6,7,8,9,10];

// console.log(arr1, arr2);

// const arr3 = [...arr1, ...arr2]; //Se unen los dos primeros arreglos y se unen en uno nuevo

// console.log(arr3);

//>>>>>>>>>>>>>>>< ARROW FUNCTION
/*
- Vuelve mas expresivo el código de JavaScript
- tienen la capacidad de capturar el objeto this el el contexto en el que se encuentren (palabra reservada THIS)
*/

// //function declarada
// function saludar() {
//     console.log(`Hola`);
// }

// saludar();

// // function expresada
// const saludo = function () {
//     console.log(`Hola nuevamente`);
// }

// saludo();

// // arrow function
// const saludo2 = () => {
//     console.log(`Hola nuevamente 2`);
// }

// saludo2();

// // cuando tu funcion tiene una sola linea de instrucción, se puede omitir las llaves
// // y dejar la función en una sola linea

// const saludo3 = () => console.log(`Hola nuevamente 3`);

// saludo3();

// // pasandole parametros a las arrow function
// const saludo4 = (nombre) => console.log(`Hola ${nombre}`);

// saludo4("Cristian");

// const sumar = (a,b) => a + b;

// console.log(sumar(2,2))

// const colores = ["Rojo", "Blanco", "Azul"];

// // forEach SIN arrow function
// colores.forEach(function(element, index){
//     console.log(`El color ${element} se encuentra en la posicion ${index}`);
// })

// // forEach CON arrow function
// colores.forEach((element, index) => {
//     console.log(`El color ${element} se encuentra en la posicion ${index}`);
// })

// // El forEach tiene una sola linea de instrucción, se puede omitir las llaves
// // y dejar la función en una sola linea
// colores.forEach((element, index) => console.log(`El color ${element} se encuentra en la posicion ${index}`));

//>>>>>>>>>>>>>>>>>>>>>>>>>> PROTOTIPOS

/*
 POO = PROGRAMACIÓN ORIENTADA A OBJETOS

 CLASES - MODELO A SEGUIR
 OBJETOS - ES UNA INSTANCIA DE UNA CLASE
 ATRIBUTOS - ES UNA CARACTERÍSTICA O PROPIEDAD DEL OBJETO (SON VARIABLES DENTRO DE UN OBJETO)
 MÉTODOS - SON LAS ACCIONES QUE UN OBJETO PUEDE REALIZAR. (SON FUNCIONES DENTRO DE UN OBJETO)

*/

// const animal = {
//     nombre: "Snoopy",
//     sonar(){
//         console.log("Hago sonidos por que estoy vivo");
//     }
// }

// const animal2 = {
//     nombre: "Lola Bunny",
//     sonar(){
//         console.log("Hago sonidos por que estoy vivo");
//     }
// }

// console.log(animal);
// console.log(animal2);

// FUNCIÓN CONSTRUCTORA
/*
- La funcion se define con UpperCamelCase, es decir con mayúscula al principio
- Los atributos se pasaran por parametros
- Al definir los atributos y metodos se les tiene que agregar la palabra reservada this
- La funcion no se puede ocupar la sintaxis como en objetos literales, es necesario hacerlo
  con la palabra reservada function
*/

// Version 1 - con los metodos dentro de la función constructora.
// function Animal(nombre, genero) {
//     //atributos
//     this.nombre = nombre;
//     this.genero = genero;
//     //métodos
//     this.sonar = function() {
//         console.log("Hago sonidos por que estoy vivo");
//     }

//     this.saludar = function() {
//         console.log(`Hola me llamo ${this.nombre}`)
//     }
// }

// Función constructora donde asignamos los metodos al Prorotipo, no a la función como tal.
// De esta manera evitamos que se dupliquen los metodos por cada objeto, mejorando asi el rendimiento.
// function Animal(nombre, genero) {
//     //atributos
//     this.nombre = nombre;
//     this.genero = genero;
// }

//  //métodos
//  Animal.prototype.sonar = function() {
//     console.log("Hago sonidos por que estoy vivo");
// }

// Animal.prototype.saludar = function() {
//     console.log(`Hola me llamo ${this.nombre}`)
// }

// // la palabra reservada new nos permite crear una nueva instancia del tipo que le especifiquemos
// const snoopy = new Animal("Snoopy", "Macho"),
//       lolaBunny = new Animal("Lola Bunny", "Hembra");

// console.log(snoopy);
// console.log(lolaBunny);

// snoopy.sonar();
// snoopy.saludar();
// lolaBunny.sonar();
// lolaBunny.saludar();

//>>>>>>>>>>>>>>>>>>> HERENCIA PROTOTÍPICA

/*
- La letra n no esta en el idioma ingles, por eso la variable tamaño de define como tamanio
*/

// function Animal(nombre, genero) {
//     //atributos
//     this.nombre = nombre;
//     this.genero = genero;
// }

// //métodos
// Animal.prototype.sonar = function() {
//     console.log("Hago sonidos por que estoy vivo");
// }

// Animal.prototype.saludar = function() {
//     console.log(`Hola me llamo ${this.nombre}`)
// }

// function Perro(nombre, genero, tamanio) {
//     this.super = Animal;
//     this.super(nombre,genero);
//     this.tamanio = tamanio;
// }

// //Perro esta heredando de Animal
// Perro.prototype = new Animal();
// Perro.prototype.constructor = Perro;

// //Sobrescritura del métodos del Prototipo en el hijo
// Perro.prototype.sonar = function() {
//     console.log("Soy un perro y mi sónido es un ladrido");
// }

// Perro.prototype.ladrar = function(){
//     console.log("Guauuu Guauuu");
// }

// const snoopy = new Perro("Snoopy", "Macho", "Mediano");
// const lolaBunny = new Animal("Lola Bunny", "Hembra");

// console.log(snoopy);
// console.log(lolaBunny);

// snoopy.sonar();
// snoopy.saludar();
// snoopy.ladrar();

// lolaBunny.sonar();
// lolaBunny.saludar();

//>>>>>>>>>>>>>>>>> CLASES Y HERENCIA
/*
- Las clases no reciben parametros
*/

// class Animal {
//     // El constructor es un método especial que se ejecuta en el momento de
//     // instanciar la clase
//     constructor(nombre, genero) {
//         //atributos
//         this.nombre = nombre;
//         this.genero = genero;
//     }

//     //métodos
//     sonar() {
//         console.log("Hago sonidos por que estoy vivo");
//     }

//     saludar() {
//         console.log(`Hola me llamo ${this.nombre}`)
//     }
// }

// // const mimi = new Animal("Mimi", "Hembra");
// // const scooby = new Animal("Svooby", "Macho");

// // console.log(mimi);
// // mimi.sonar();
// // mimi.saludar();
// // console.log(scooby);
// // scooby.sonar();
// // scooby.saludar();

// class Perro extends Animal {
//     constructor(nombre, genero,tamanio){
//         // Con el método super() se manda a llamar el constructor de la clase padre
//         // (se le tienen que pasar los parametros)
//         super(nombre, genero);
//         this.tamanio = tamanio;
//     }
//     sonar(){
//         console.log("Soy un perro y mi sonido es un ladrido");
//     }

//     ladrar(){
//         console.log("Guauuuu Guauuuuu!!!");
//     }
// }

// const mimi = new Animal("Mimi", "Hembra"),
//       scooby = new Perro("Scooby", "Macho", "Gigante");

// console.log(mimi);
// mimi.sonar();
// mimi.saludar();
// console.log(scooby);
// scooby.saludar();
// scooby.saludar();
// scooby.ladrar();

//>>>>>>>>>>>>>>>>>< MÉTODOS ESTÁTICOS, GETTERS Y SETTERS

// class Perro {
//     // El constructor es un método especial que se ejecuta en el momento de
//     // instanciar la clase
//     constructor(nombre, genero, tamanio) {
//         //atributos
//         this.nombre = nombre;
//         this.genero = genero;
//         this.tamanio = tamanio
//         this.raza = null;
//     }

//     //métodos
//     sonar() {
//         console.log("Hago sonidos por que estoy vivo");
//     }

//     saludar() {
//         console.log(`Hola me llamo ${this.nombre}`)
//     }

//     //Un metódo estático se puede ejecutar sin necesidad de instanciar la clase.
//     static queEres() {
//         console.log("Los perros somos animales mamímefos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre");

//     }

//     // Los setters y getters son métodos especiales que nos permiten establecer
//     // y obtener los valores de atributos de nuestra clase.

//     get getRaza(){
//         return this.raza;
//     }

//     set setRaza(raza){
//         this.raza = raza;
//     }
// }

// Perro.queEres();

// const scooby = new Perro("Scooby", "Macho", "Gigante");

// // Importante: Javascript trata a los setters y getters como propiedades
// // al momento de ejectuarlos, aunque sean métodos.
// console.log(scooby.getRaza); // obtiene el valor del atributo raza
// scooby.setRaza = "Grán Dánes"; //Modifica el valor del atributo raza
// console.log(scooby.getRaza); // obtiene el valor del atributo raza

// console.log(scooby);

//>>>>>>>>>>>>>>>>>>><< OBJETO CONSOLE
/*
- console al ser un objeto tiene métodos y atributos
*/

// console.log(console);
// console.error("Este mensaje se marca como error");
// console.warn("Este mensaje se marca como un aviso");
// console.info("Este mensaje es solo para dar información");
// console.log("Es un registro de lo que ha pasado en nuestra aplicación");

// let nombre = "Cristian",
//     apellido = "Pino",
//     edad = 33;

// console.log(nombre);
// console.log(apellido);
// console.log(edad);
// console.log(nombre, apellido, edad);
// console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);

// console.log(`Hola mi nombre es %s %s y tengo %d años.`, nombre, apellido, edad);

// console.clear(); //limpia la consola

// console.log(window); // el objeto window es el objeto global en JS que representa la ventana de los navegadores
// console.log(document); //el document es la representación del documento html en JS
// console.dir(document); // dir muestra el documento html como un objeto, es decir, con propiedades y métodos.

// console.clear(); //limpia la consola

// console.group("Mis videojuegos favoritos"); //Crea un grupo de console.log
// console.log("God of War");
// console.log("Uncharted");
// console.log("Sekiro");
// console.log("Bloodborne");
// console.groupEnd();

// console.clear(); //limpia la consola

// console.log(console);
// console.table(Object.entries(console).sort()); //forma una tabla con las propiedades del objeto. sort() los ordena por orden alfabetico.

// const numeros = [1,2,3,4,5],
//       vocales = ["a","e","i","o","u"];

// console.table(numeros);
// console.table(vocales);

// const perro = {
//     nombre: "Bonny",
//     raza: "Boxer",
//     color: "Café"
// }

// console.table(perro);

// console.clear(); //limpia la consola

// //Sirve para saber cuanto se demora el código en ejecutarse
// console.time("Cuanto tarda mi código"); // el mensaje debe ser el mismo que en el timeEnd, es como un alias

// const arreglo = Array(1000000);

// for (let i = 0; i < arreglo.length; i++) {
//     arreglo[i] = i;
// }

// console.timeEnd("Cuanto tarda mi código");

// for (let i = 0; i <= 100; i++) {
//     console.count("Codigo for"); //para contar acciones en el código
//     console.log(i);
// }

// console.clear();

// let x = 1,
//     y = 2,
//     pruebaXY = "Se espera que X siempre sea menor que Y";

// // assert sirve para generar pruebas, en el primer bloque se le pasa la condición
// // y en el segundo la data a evaluar. si falla la condició, se ejecuta.
// console.assert(x < y, x,y,pruebaXY);

//>>>>>>>>>>>>>>>>>>>>> OBJETO DATE
/*
- Date() imprime esto: Thu Apr 08 2021 17:32:41 GMT-0400 (hora estándar de Chile)
- GMT(es el uso horario)
*/

// console.log(Date());

// let fecha = new Date();
// console.log(fecha);

// console.log(fecha.getDate()); //obtiene el dia del mes(numero)
// console.log(fecha.getDay()); //día de la semana D-L-M-M-J-V-S -> 0-1-2-3-4-5-6 (numero)
// console.log(fecha.getMonth()); //mes ene-feb-mar-abr-may-jun-jul-ago-sep-oct-nov-dic -> 0-1-2-3-4-5-6-7-8-9-10-11
// console.log(fecha.getFullYear()); //Obtiene el año
// console.log(fecha.getHours()); //obtiene la hora
// console.log(fecha.getMinutes()); //obtiene los minutos
// console.log(fecha.getSeconds()); // obtiene los segundos
// console.log(fecha.getMilliseconds()); //obtiene los milisegundos
// console.log(fecha.toString());
// console.log(fecha.toDateString()); // obtiene solo la fecha.
// console.log(fecha.toLocaleString()); //obtiene la fecha y hora en formato mas entendible
// console.log(fecha.toLocaleDateString()); //Obtiene solo la fecha en un formato mas entendible
// console.log(fecha.toLocaleTimeString()); // Obtiene la hora en un formato mas entendible.
// console.log(fecha.getTimezoneOffset()); //obtiene los minutos del uso horario
// console.log(fecha.getUTCDate()); //la fecha de la hora 0 - meridiano de greenwish
// console.log(fecha.getUTCHours()); // la fecha del la hora 0 - meridiano de greenwish
// console.log(Date.now());

// let cumpleCristian = new Date(1987,11,8);

// console.log(cumpleCristian);

//>>>>>>>>>>>>>>>>>>> OBJETO MATH
/*
- Es un objeto estatico, cada vez que se quiera utilizar hay que invocar a su prototipo.
*/

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.abs(7.8)); //Nos devuelve el valor absoluto de un número (un numero sin considerar si es negativo o posito).
// console.log(Math.ceil(7.2)); //redondea hacia el numero al mayor, sin importar el numero decimal
// console.log(Math.floor(7.8)); // redondea hacia el numero al menor, sin importar el numero decimal
// console.log(Math.round(7.2)); // redondea hacia abajo o arriba dependiendo el numero decimal
// console.log(Math.round(7.6)); // redondea hacia abajo o arriba dependiendo el numero decimal
// console.log(Math.sqrt(81)); // raiz cuadrada de un numero
// console.log(Math.pow(2,5)); //potencia - eleva el el primer valor las veces del segundo valor. Esto es dos a la quinta
// console.log(Math.sign(-7,8)); //Devuelve -1 si el numero es negativo y 1 si el numero es positivo. Es una referencia si el numero es negativo o positivo.
// console.log(Math.random()); // valor aleatorio comprendido entre 0 y 1.
// console.log(Math.random()*100); // devuelve un numero aleatorio entre 0 y 100 con decimales
// console.log(Math.round(Math.random()*100)); // devuelve un numero aleatorio entre 0 y 100 sin numero decimales

//>>>>>>>>>>>>>>>>>>> OPERADOR DE CORTOCIRCUITO
/*
- Cortocircuito OR - cuando el valor a la izquierda en la expresión siempre pueda
validar a TRUE es el valor que se cargará por defecto

. Cortocircuito AND - cuando el valor de la izquierda en la expresión siempre pueda
validar a FALSE, es el valor que se cargará por defecto

*/

// function saludar(nombre){
//   nombre = nombre || "Desconocido" //Si se le pasa el nombre, toma el valor de la izquierda, sino, el de la derecha
//   console.log(`Hola ${nombre}`)
// }

// // //Funcion que se le pasa el parametro por defecto
// // function saludar(nombre = "Cristian"){
// //   console.log(`Hola ${nombre}`)
// // }

// saludar("cristian");
// saludar();

// console.log("Cadena" || "Valor de la derecha");
// console.log(20 || "Valor de la derecha");
// console.log(true || "Valor de la derecha");
// console.log([] || "Valor de la derecha");
// console.log({} || "Valor de la derecha");
// console.log(false || "Valor de la derecha");
// console.log(null || "Valor de la derecha");
// console.log(undefined || "Valor de la derecha");
// console.log("" || "Valor de la derecha");
// console.log(-2 || "Valor de la derecha");
// console.log(0 || "Valor de la derecha");

// console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

// console.log("Cadena" && "Valor de la derecha");
// console.log(20 && "Valor de la derecha");
// console.log(true && "Valor de la derecha");
// console.log([] && "Valor de la derecha");
// console.log({} && "Valor de la derecha");
// console.log(false && "Valor de la derecha");
// console.log(null && "Valor de la derecha");
// console.log(undefined && "Valor de la derecha");
// console.log("" && "Valor de la derecha");
// console.log(-2 && "Valor de la derecha");
// console.log(0 && "Valor de la derecha");

//>>>>>>>>>>>>>>>>>>>>>>>>>>> ALERT, CONFIRM Y PROMPT
/*
- Metodos para intectuar con el usuario y cuelgan del objeto padre que es window
- No es necesario referenciar a window para utilizar los metodos
*/

// console.log(window);
// window.alert("Hola, esto es una alerta");
// window.confirm("Esto es un mensaje de confirmación");
// window.prompt("Hola esto es un prompt y le permite al usuario ingresar un valor");

// let alerta = alert("Hola, esto es una alerta");
// let confirmación = confirm("Esto es un mensaje de confirmación");
// let aviso = prompt("Hola esto es un prompt y le permite al usuario ingresar un valor");

// console.log(alerta); //siempre va a dar undefined, no es necesario guardar en variable
// console.log(confirmación); // retorna true si se confirma y false si se cancela
// // Si no se pasa dato y se acepta retorna una cadena vacia,
// // si no se le pasa dato y se cancela, retorna null.
// // si se le pasa el dato y se acepta, se guarda la cadena que se le pasa.
// // si se le pasa el dato pero se cancela, retorna null.
// console.log(aviso);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>> EXPRESIONES REGULARES
/*
https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular#:~:text=En%20c%C3%B3mputo%20te%C3%B3rico%20y%20teor%C3%ADa,conforma%20un%20patr%C3%B3n%20de%20b%C3%BAsqueda.
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
*/

// let cadena = "Lorem ipsum dolor sit amet consectetur adipiscing elit laoreet himenaeos dui, torquent sagittis potenti quis dapibus dignissim auctor dictum. Inceptos metus viverra ad egestas nascetur vel facilisis eu, curae penatibus magnis mollis maecenas suscipit euismod in mi, himenaeos elementum potenti urna accumsan velit lectus. Imperdiet lacus cras molestie mauris sagittis curabitur, fames praesent convallis morbi vestibulum suspendisse, integer auctor netus faucibus torquent."
// let expReg = new RegExp("ipsum", "i"); // la bandera i, ignora mayusculas y minusculas, g busca todas las coincidencias
// let expReg2 = /ipsum/ig;

// console.log(expReg.test(cadena)); //comprobar si la expresion regular hace match retorna true o false
// console.log(expReg.exec(cadena)); // entrega mas detalles de la expresion regular. retorna un arreglo

//>>>>>>>>>>>>>>>>>>>< FUNCIONES ANONIMAS AUTOEJECUTABLES
/*
- es una funcion en la que englobas todo el código que quieres ejecutar.
-
*/

// (function(){
//   console.log("Mi primer IIFE");
// })();

// (function(d, w, c){
//   console.log("Mi segundo IIFE");
//   console.log(d);
//   console.log(w);
//   console.log(c);
//   c.log("Esto es un console.log");
// })(document, window,console); // estos son lo valores que se le pasan por parametro a la función

// // Otras formas de escribir funciones anonimas autoejecutables
// (function(){
//   console.log("Versión clásica");
// })();

// ((function(){
//   console.log("Versión Crockford");
// })());

// +function() {
//   console.log("Versión Unaria");
// }();

// !function(){
//   console.log("Versión Facebook");
// }();

//>>>>>>>>>>>>>< MÓDULOS (EXPORT | IMPORT)

// >>>>>>>>>>>>>>>>>< COMIENZO DE EJERCICIOS PARTE 1

//Ejercicios video 35

/*
1) Programa una función que cuente el número de caracteres
de una cadena de texto, pe. miFuncion("Hola Mundo")
devolverá 10.
2) Programa una función que te devuelva el texto recortado
según el número de caracteres indicados,
pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva
un Array de textos separados por cierto caracter,
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces,
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola
Mundo Hola Mundo.

*/

//ejercicio 1

//opción a
// function contarCaracteres(cadena){
//   if(typeof(cadena) == "string"){
//     let totalCaracteres = cadena.length;
//     console.log(`La cadena tiene ${totalCaracteres} carateres.`)
//   }else{
//     console.log("No es una cadena");
//   }
// }

// contarCaracteres("hola mundo");

//opción b - con un aviso
// let cadena = prompt("Ingresa la palabra a evaluar");

// function contarCaracteresPrompt(cad){
//   if(typeof(cad) == "string"){
//     if(cad == null || cad == ""){
//       alert("No se ha ingresado la palabra a evaluar");
//     }else{
//       let totalCAracteres = cad.length;
//       alert(`La cadena tiene ${totalCAracteres} carateres.`)
//     }
//   }else{
//     console.log("Error: debe ingregar un texto en la llamada de la función");
//   }
// }

// contarCaracteresPrompt(cadena);

//>>>>>>>><<< RESULTADO DEL CURSO
// const contarCaracteres = (cadena = "") =>
//  (!cadena)
//     ? console.warn("No ingresaste ninguna cadena")
//     : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres.`);

// contarCaracteres();
// contarCaracteres(20);

// ejercicio 2

// opción a
// function recortarTexto(cadena){
//   if(typeof(cadena) == "string"){
//     let textoFinal = cadena.substring(0,4)
//     console.log(textoFinal);
//   }else{
//     console.log("No es una cadena");
//   }
// }

// recortarTexto();

//opción b - con aviso
// let cadena = prompt("Ingresa la PALABRA a evaluar");

// function obtenerCaracteresPromt(){
//   console.log(cadena);
//   if(cadena == null || cadena == ""){
//     alert("No se ha ingresado la palabra a evaluar");
//   }else{
//     let numeroCAracteres = prompt("Ingrese el NÚMERO de caractes que desea obtener");
//     let textoFinal = cadena.substring(0,numeroCAracteres);
//     console.log(textoFinal);
//     alert(textoFinal);
//   }
// }

// obtenerCaracteresPromt();

//>>>>>>>>>>>><< RESULTADO DEL CURSO
// const recortarTexto = (cadena = "", longitud= undefined) =>
// (!cadena)
//   ? console.warn("No ingresaste una cadena de texto")
//   : (longitud === undefined)
//     ? console.warn("No ingresaste la longitud para recortat el texto")
//     : console.info(cadena.slice(0,longitud));

// recortarTexto();
// recortarTexto("hola mundo", 4);
// recortarTexto("hola mundo");
// recortarTexto("", 5);

//ejercicio 3

//opción a - con aviso
// let cadena = prompt("Ingrese la cadena de texto a evaluar");

// const separarCadena = () => {
//   if(cadena == null || cadena == ""){
//     alert("Error: Debe ingresar la palabra a evaluar");
//   }else{
//     let separador = prompt("Ingrese caracter separador");
//     let arrayDeCadenas = cadena.split(separador);
//     console.log(arrayDeCadenas);
//     alert(arrayDeCadenas);
//   }
// }

// separarCadena();

//opción b
// const separarCadena = (cadena, separador) => {
//   let arrayDeCadena = cadena.split(separador);
//   console.log(arrayDeCadena);
// }

// separarCadena("hola como estan todos", "");

//>>>>>>>>>>>>< RESULTADO DEL CURSO
// const cadenaAArreglo = (cadena = "", separador = undefined) =>
// (!cadena)
//   ? console.warn("No ingresaste una cadena de texto")
//   : (separador === undefined)
//     ? console.warn("No ingresaste el caracter separador")
//     : console.info(cadena.split(separador));

// cadenaAArreglo("Hola como estas", "");
// cadenaAArreglo("Hola como estas", " ");
// cadenaAArreglo("Hola,como,estas", ",");
// cadenaAArreglo();
// cadenaAArreglo("Hola como estas");
// cadenaAArreglo("Hola como estas", "-");

//Ejercicio 4

// function repetirTexto(texto, repeticiones){
//  for (let i = 0; i < repeticiones; i++) {
//   console.log(texto);
//  }
// }

// repetirTexto("hola mundo", 3);

// //arrow function
// const repetirTexto2 = (texto, repeticiones) => {
//   for (let i = 0; i < repeticiones; i++) {
//     console.log(texto);
//   }
// }

// repetirTexto2("hola mundo", 10);

//con aviso

// let cadena = prompt("Ingrese la palabra a repetir");
// let repeticiones;

// const repetirTexto3 = () => {
//   if(cadena == null || cadena == ""){
//     alert("Error: Debe ingresar una cadena");
//   } else {
//     repeticiones = prompt("Ingrese la cantidad de veces que quiere repetir el texto");
//     for (let i = 0; i < repeticiones; i++) {
//       console.log(cadena);
//     }
//   }
// }

// repetirTexto3();

//>>>>>>>>>>>>>>>>>>>>>> RESULTADO DEL CURSO

// const repetirTexto = (texto = "", veces = undefined) => {
//   if(!texto) return console.warn("No ingresaste un texto");

//   if(veces === undefined) return console.warn("No ingresaste el número de veces a repetir el texto");

//   if(veces === 0) return console.error("El número de veces no puede ser 0");

//   if(Math.sign(veces) === -1) return console.error("El número de veces no puede ser negativo");

//   for (let i = 1; i <= veces; i++) {
//     console.info(`${texto}, ${i}`);
//   }

// }

// repetirTexto("Hola mundo", 3);
// repetirTexto("Hola mundo", 0);
// repetirTexto("Hola mundo", -20);
// repetirTexto("", 3);
// repetirTexto("Hola Mundo");
// repetirTexto();

// Ejercicio 5
/*
5) Programa una función que invierta las palabras de una cadena de texto,
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

// const invertirCadena = (cadena) => {
//   console.log(cadena.split("").reverse().join(""));
// }

// invertirCadena("Hola mundo");

//>>>>>>>>>>>>>> RESULTADO DEL CURSO

// const invertirCadena = (cadena = "") =>
//   (!cadena)
//     ? console.warn("No ingresaste la cadena")
//     : console.info(cadena.split("").reverse("").join(""));

// invertirCadena("Hola mundo");

//Ejercicio 6
/*
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/

//opción a
// const contarRepeticiones = (cadena, subCadena) => {
//   let contadorRepeticiones = 0;
//   let indice = 0;

//   while((indice = cadena.indexOf(subCadena, indice)) !== -1){
//     ++contadorRepeticiones;

//     indice += subCadena.length;
//   }

//   return contadorRepeticiones;
// }

// let cadena = "hola mundo adios mundo mundo mundo";
// let subCadena = "mundo"

// console.log(`La palabra "${subCadena}" se repite ${contarRepeticiones(cadena, subCadena)} veces en el texto "${cadena}"`);

//>>>>>>>>>>>>>>>>>>> RESULTADO DEL CURSO

// const textoEnCadena = (cadena="",texto="") => {
//   if(!cadena) return console.log("No ingresaste el texto largo");

//   if(!texto) return console.log("No ingresaste la palabra a evaluar");

//   let i = 0,
//       contador = 0;

//   while(i !== -1){
//     i = cadena.indexOf(texto, i);

//     if(i !== -1){
//       i++;
//       contador++;
//     }
//   }

//   return console.info(`La palabra ${texto} se repite ${contador} veces.`)
// }

// textoEnCadena();
// textoEnCadena("hola mundo adios mundo","mundo");

//Ejercicio 7
/*
7) Programa una función que valide si una palabra o frase dada,
es un palíndromo (que se lee igual en un sentido que en otro),
pe. mifuncion("Salas") devolverá true.
*/
// let cadena = "Salas";

// const esPalindromo = (cadena) => {
//   let palindromo = cadena.split("").reverse().join("");
//   if (palindromo === cadena){
//     return true
//   }else{
//     return false
//   }

// }

// console.log(esPalindromo(cadena.toLocaleLowerCase()));

//>>>>>>>>>>>>>>>>> RESULTADO DEL CURSO
// const palindromo = (palabra="") => {
//   if(!palabra) return console.warn("No ingresaste una palabra o frase");

//   palabra = palabra.toLowerCase();

//   let alReves = palabra.split("").reverse().join("");

//   return (palabra === alReves)
//     ? console.info(`Si es palíndromo, Palabra original ${palabra}, Palabra al revés ${alReves}`)
//     : console.info(`No es palíndromo, Palabra original ${palabra}, Palabra al revés ${alReves}`);
// }

// palindromo("");
// palindromo("Salas");
// palindromo("Hola mundo");

//Ejercicio 8
/*
8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

// let texto = "xyz1,xyz2,xyz3,xyz4 y xyz5, hola";

// const eliminarPatron = (texto, patron) => {
//   let regExp = /``/ig;

//   if(regExp.test(texto)){

//   }

// }

// eliminarPatron(texto, "xyz");

//>>>>>>>>>>>>>>>>>>> RESULTADO DEL CURSO
// const eliminarCaraceteres = (texto="", patron="") =>
//   (!texto)
//     ? console.warn("No ingresaste un texto")
//     : (!patron)
//       ? console.warn("No ingresaste un patrón de caracteres")
//       : console.info(texto.replace(regExp, ""));

// let regExp = /xyz/ig;
// let texto = "xyz1, xyz2, xyz3, xyz4 y xyz5"
// eliminarCaraceteres(texto, regExp);

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// const numeroAleatorio = (min, max) => console.log(Math.round(Math.random() * (max - min) + min));
// numeroAleatorio(501,601);

//>>>>>>>>>>>>>>>> RESULTADO DEL CURSO
// const aleatorio = () => console.log(Math.round(Math.random() * 100) + 500)

// aleatorio();

//10) Programa una función que reciba un número y evalúe si es capicúa o no
//(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

// const esCapicua = (numero) => {
//   if(!numero) return console.warn("No ingresaste el numero a evaluar");

//   if(typeof(numero) !== "number") return console.warn("No ingresaste un valor númerico");

//   numero = numero.toString();
//   let numAlReves = numero.split("").reverse().join("");

//   return (numAlReves === numero )
//             ? console.info(`El número ${numero} es capicúa, se lee igual en un sentido en el otro.`)
//             : console.info(`El número ${numero} No es capicúa, NO se lee igual en un sentido en el otro.`);
// }

// esCapicua(2002);

//>>>>>>>>>>>>>>> RESULTADO DEL CURSO
// const capicua = (numero = 0) => {
//   if(!numero) return console.warn("No ingresaste un número");

//   if(typeof(numero) !== "number") return console.error("No ingresaste un valor númerico");

//   numero = numero.toString();
//   let numAlReves = numero.split("").reverse().join("");

//   return (numAlReves === numero )
//     ? console.info(`El número ${numero} es capicúa, se lee igual en un sentido en el otro.`)
//     : console.info(`El número ${numero} No es capicúa, NO se lee igual en un sentido en el otro.`);

// }

// capicua();
// capicua("19");
// capicua({});
// capicua(2000);
// capicua(2002);

//11) Programa una función que calcule el factorial de un número
//(El factorial de un entero positivo n, se define como el producto de todos
//los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

// const obtenerFactorial = (numero) => {

//   if(numero === undefined) return console.warn("No ha ingresado un número");

//   if(numero <= 0) return console.warn("Debe ingresar un numero mayor a 0");

//   if(typeof(numero) !== "number") return console.warn("Debe ingresar un número valido");

//   let result = 1
//   for (let i = numero; i > 0; i--) {
//     result *= i;
//   }
//   return console.log(`el factorial del ${numero} es ${result}.`);
// }

// obtenerFactorial();

//>>>>>>>>>>>>> RESULTADO DEL CURSO
// const factorial = (numero = undefined) => {
//   if(numero === undefined) return console.warn("No ha ingresado un número");

//   if(typeof(numero) !== "number") return console.warn("Debe ingresar un número valido");

//   if(numero === 0) return console.warn("El número ingresado no puede ser 0");

//   if(Math.sign(numero) === -1) return console.error("El número no puede ser negativo");

//   let factorial = 1

//   for (let i = numero; i > 1; i--) {
//     factorial = factorial * i;
//   }

//   return console.log(`el factorial del ${numero} es ${factorial}.`);

// }

// factorial();
// factorial("5");
// factorial(0);
// factorial(-5);
// factorial({});
// factorial([]);
// factorial(6);

//12) Programa una función que determine si un número es primo
//(aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7)
//devolverá true.

//>>>>>>>>>>>>< RESULTADO DEL CURSO
// const numeroPrimo = (numero=undefined) => {
//   if(numero === undefined) return console.warn("No ha ingresado un número");

//   if(typeof(numero) !== "number") return console.warn("Debe ingresar un número valido");

//   if(numero === 0) return console.warn("El número ingresado no puede ser 0");

//   if(numero === 1) return console.warn("El número ingresado no puede ser 1");

//   if(Math.sign(numero) === -1) return console.error("El número no puede ser negativo");

//   let divisible = false;

//   for (let i = 2; i < numero; i++) {
//     if(numero % i === 0){
//       divisible = true;
//       break;
//     }
//   }

//   return(divisible)
//     ? console.log(`El número ${numero}, No es primo.`)
//     : console.log(`El numero ${numero}, Sí es primo.`)
// }

// numeroPrimo();
// numeroPrimo("7");
// numeroPrimo({});
// numeroPrimo(true);
// numeroPrimo(-1);
// numeroPrimo(0);
// numeroPrimo(1);
// numeroPrimo(7);
// numeroPrimo(8);

//13) Programa una función que determine si un número es par o impar,
//pe. miFuncion(29) devolverá Impar.
// const numeroPar = (numero) => {
//   if(numero === undefined) return console.warn("Debe ingresar un número");

//   if(numero === 0) return console.warn("Debe ingresar un numero mayor a 0");

//   if(typeof(numero) !== "number") return console.error("Debe ingresar un valor númerico");

//   let result = numero % 2;

//   switch (result) {
//     case 0:
//       console.info(`El número ${numero} es par.`);
//       break;

//     case 1:
//       console.info(`El número ${numero} es impar`);
//       break;
//   }

// }

// numeroPar();
// numeroPar(0);
// numeroPar({});
// numeroPar([]);
// numeroPar("5");
// numeroPar(2);
// numeroPar(3);

//>>>>>>>>>>>< RESULTADO DEL CURSO
// const numeroParImpar = (numero = undefined) => {
//   if(numero === undefined) return console.warn("Debe ingresar un número");

//   if(typeof(numero) !== "number") return console.error("Debe ingresar un valor númerico");

//   return ((numero % 2) === 0)
//     ? console.info(`El número ${numero} es Par.`)
//     : console.info(`El número ${numero} es Inpar`);
// }

// numeroParImpar();
// numeroParImpar(0);
// numeroParImpar({});
// numeroParImpar([]);
// numeroParImpar("5");
// numeroParImpar(2);
// numeroParImpar(3);

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa,
//pe. miFuncion(0,"C") devolverá 32°F.

// const convertirTemperatura = (grados,tipoGrado) => {

//   let resultadoGrados;

//   if(grados === undefined && tipoGrado ===undefined) return console.log("Debe ingresar los datos");

//   if(!tipoGrado) return console.log("Debe ingresar tipo de grados");

//   tipoGrado = tipoGrado.toLowerCase();

//   switch (tipoGrado) {
//     case "c":
//       resultadoGrados = Math.round((grados * 9/5) + 32);
//       console.info(`${grados}° Celsius es igual a ${resultadoGrados}° Fahrenheit`)
//       break;
//     case "f":
//       resultadoGrados = Math.round((grados - 32) * 5/9)
//       console.info(`${grados}° Fahrenheit es igual a ${resultadoGrados}° Celsius`)
//       break;
//   }
// }

// convertirTemperatura(0,"c");
// convertirTemperatura(32,"f");

// //>>>>>>>>>>>>< RESULTADO DEL CURSO

// const convertirGrados = (grados = undefined, unidad = undefined) => {

//   if(grados === undefined) return console.log("No ingresaste grados a convertir");

//   if(typeof(grados) !== "number") return console.error(`El valor de "${grados}" ingresado, No es un número`);

//   if(unidad === undefined) return console.log("No ingresaste el tipo de grado a convertir");

//   if(typeof(unidad) !== "string") return console.error(`El valor de "${unidad}" ingresado, No es una cadena de texto`);

//   if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconocido");

//   if(unidad === "C"){
//     return console.info(`${grados}°C = ${Math.round((grados * 9/5) + 32)}°F`);
//   } else if (unidad === "F"){
//     return console.info(`${grados}°F = ${Math.round((grados - 32) * 5/9)}°C`);
//   }
// }

// convertirGrados();
// convertirGrados("2");
// convertirGrados(2);
// convertirGrados(2,true);
// convertirGrados(2, "Cels");
// convertirGrados(2, "E");
// convertirGrados(2, "c");
// convertirGrados(0, "C");
// convertirGrados(32, "F");

//15) Programa una función para convertir números de base binaria a decimal y viceversa,
//pe. miFuncion(100,2) devolverá 4 base 10.

//>>>>>>>>>>> RESULTADO DEL CURSO

// const convetirBinarioDecimal = (numero=undefined, base=undefined) => {
//   if(numero === undefined) return console.warn("No ingresaste un número a convertir");

//   if(typeof(numero) !== "number") return console.error(`El valor ${numero} ingresado, No es un número.`);

//   if(base === undefined) return console.warn("No ingresaste la base a convertir");

//   if(typeof(base) !== "number") return console.error(`El valor "${base}" ingresado, No es un número`);

//   if(base === 2) {
//     return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`); // parseInt recibe un parametro extra que permite convertir un binario a decimal
//   } else if (base === 10) {
//     return console.info(`${numero} base ${base} = ${numero.toString(2)} base 10`); // toString recibe un parametro extra que permite convertir un decimal a binario
//   } else {
//     return console.error("El tipo de base a convertir No es válido")
//   }
// }

// convetirBinarioDecimal();
// convetirBinarioDecimal("2");
// convetirBinarioDecimal(100);
// convetirBinarioDecimal(100,"2");
// // Decimal a binario
// convetirBinarioDecimal(100,2);
// convetirBinarioDecimal(1110010,2);

// // Binario a decimal
// convetirBinarioDecimal(4,10);
// convetirBinarioDecimal(114,10);
// convetirBinarioDecimal(114,3);

//16) Programa una función que devuelva el monto final después de aplicar un descuento a
// una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
// const descuento = (valorInicial=undefined, porcentajeDescuento=undefined) => {

//   if(valorInicial===undefined) return console.warn("Debe ingesar el valor al que quiere aplicar el descuento");

//   if(typeof(valorInicial) !== "number" || typeof(porcentajeDescuento) !== "number")
//     return console.warn(`Los valores ingresados deben ser numericos`);

//   if(valorInicial === 0) return console.warn("El mondo a calcular debe ser mayor a 0");

//   if(valorInicial < 0 || porcentajeDescuento < 0) return console.warn("Debe ingresar valores positivos");

//   if(porcentajeDescuento===undefined) return console.warn("Debe ingesar el porcentaje de descuento");

//   if(porcentajeDescuento === 0) return console.warn("El porcentaje de descuento debe ser mayot a 0");

//   let descuento = valorInicial*porcentajeDescuento / 100;
//   let valorFinal = valorInicial - descuento;

//   console.info(`
//   Valor Inicial: $ ${valorInicial}
//   Porcentaje Descuento: ${porcentajeDescuento}%
//   Descuento: $ ${descuento}
//   Valor Final: $ ${valorFinal}
//   `)
// }

// descuento();
// descuento(1000);
// descuento(1000,"20");
// descuento("1000",20);
// descuento(true,20);
// descuento(0,20);
// descuento(1000,0);
// descuento(-1,20);
// descuento(100,-20);
// descuento(1000,20);

//>>>>>>>>>>>>>>>< RESULTADO DEL CURSO

// const aplicarDescuento = (monto = undefined, descuento = 0) => {
//   if(monto === undefined) return console.warn("No ingresaste el monto");

//   if(typeof monto !== "number") return console.error(`El valor "${monto}" ingresado, No es un número`);

//   if(monto === 0) return console.error("El monto no puede ser 0");

//   if(Math.sign(monto) === -1) return console.error("El monto no puede ser negativo");

//   if(typeof descuento !== "number") return console.error(`El valor "${descuento}" ingresado, No es un número`);

//   if(Math.sign(descuento) === -1) return console.error("El descuento no puede ser negativo");

//   return console.info(`${monto} - ${descuento}% = ${monto - (monto*descuento)/100}`);
// }

// aplicarDescuento();
// aplicarDescuento("200");
// aplicarDescuento(0);
// aplicarDescuento(-1000);
// aplicarDescuento(1000, "20");
// aplicarDescuento(1000.-20);
// aplicarDescuento(1000);
// aplicarDescuento(1000,20);

//17) Programa una función que dada una fecha válida determine cuantos años han pasado
//hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

/*
Lo recomdable si necesitas hacer operaciones aritmericas con fecha,
lo mejor es convertir la fecha a timeStamp, hacer la operación y luego volver a convertir la fecha.}

el metodo getTime() nos retorna la fecha en formato timeStam, es decir los milisegundos
que han pasado  desde el 01 - enero - 1970 hasta el día de hoy.
*/

//>>>>>>>>>>><< RESULTADO DEL CURSO

// const calcularAnios = (fecha = undefined) => {
//   if(fecha === undefined) return console.warn("No ingresaste la fecha");

//   if(!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha válida");

//   let hoyMenosFecha = new Date().getTime() - fecha.getTime();
//   let aniosEnMs = 1000 * 60 * 60 * 24 * 365; // se calcula un año en MiliSegundos.
//   let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMs);

//   return (Math.sign(aniosHumanos) === -1)
//     ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
//     : (Math.sign(aniosHumanos) === 1)
//       ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`)
//       : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)

// }

// calcularAnios();
// calcularAnios({});
// calcularAnios(false);
// calcularAnios(new Date());
// calcularAnios(new Date(1987, 11, 8));
// calcularAnios(new Date(2050, 11, 8));
// calcularAnios(new Date(1984,4,23));

//18) Programa una función que dada una cadena de texto cuente el número de vocales
// y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

// const vocalesConsonantes = (texto="") => {
//   //validaciones
//   if(!texto) return console.warn("No ingresaste el texto");

//   if(typeof texto !== "string") return console.error("Debe ingresar un texto valido");

//   //defincion de variables
//   let textoSinEspacios = texto.replace(/ /g, ""), // quita los espacios en blanco de una cadena
//       vocales = /(a|e|i|o|u)/i,
//       contadorVocales = 0,
//       contadorConsonantes = 0;

//   //logica del ejercicio
//   for (const letras of textoSinEspacios) {
//     (vocales.test(letras)) ? contadorVocales++ : contadorConsonantes++;
//   }

//   //resultado de la función
//   return console.log(`El texto "${texto}" tiene ${contadorVocales} vocales y ${contadorConsonantes} consonantes`);

// }

// vocalesConsonantes();
// vocalesConsonantes(2);
// vocalesConsonantes("Hola Mundo");

//>>>>>>>>>>>>> RESULTADO DEL CURSO
// const contarletras = (cadena="") => {

//   if(!cadena) return console.warn("No ingresaste el texto");

//   if(typeof cadena !== "string") return console.error("Debe ingresar un texto valido");

//   let vocales = 0,
//       consonantes= 0;

//   cadena = cadena.toLocaleLowerCase();

//   for(let letra of cadena){
//     if(/[aeiouáéíóúü]/.test(letra)) vocales++;

//     if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;

//   }

//   return console.info({
//     cadena,
//     vocales,
//     consonantes
//   });

// }

// contarletras();
// contarletras(2);
// contarletras("");
// contarletras("hola mundo");
// contarletras("HOLA mundo");

//19) Programa una función que valide que un texto sea un nombre válido,
//pe. miFuncion("Jonathan MirCha") devolverá verdadero.

//>>>>>>>>>>>>>>< RESULTADO DEL CURSO
// const validarNombre = (nombre="") => {
//   if(!nombre) return console.warn("No ingresaste un nombre");

//   if(typeof nombre !== "string") return console.error(`El valor "${nombre}" ingresado, No es una cadena de texto`);

//   // ^ = No puede haber nada antes de la expresión regular
//   // $ = No puede haber nada despues de la expresión regular
//   // [] = agrupadores
//   // + = para que evalule por cada caracter en la cadena de texto
//   // \s = espacios en blancos
//   let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);

//   return (expReg)
//     ? console.info(`"${nombre}", es un nombre valido`)
//     : console.warn(`"${nombre}", No es un nombre válido`);
// }

// validarNombre();
// validarNombre(true);
// validarNombre("cristian pino");
// validarNombre("cristian pino,");
// validarNombre("cristian pino, tengo 33 años");

//20) Programa una función que valide que un texto sea un email válido,
//pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

// const validarEmail = (email) => {

//   if(!email) return console.warn("No ingresaste el email");

//   if(typeof email !== "string") return console.error("No ingresaste un email valido");

//   let regExpEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

//   (regExpEmail.test(email))
//     ? console.info(`El email: ${email} es valido.`)
//     : console.error(`El email: ${email} no es valido`)
// }

// validarEmail("cpinopacheco64@gmail.com");

//>>>>>>>>>>>>>>< RESULTADO DEL CURSO
// const validarEmail = (email="") => {
//   if(!email) return console.warn("No ingresaste un email");

//   if(typeof email !== "string") return console.error(`El valor "${email}" ingresado, No es una cadena de texto`);

//   // [] = agrupadores
//   // + = para que evalule por cada caracter en la cadena de texto
//   let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

//   return (expReg)
//     ? console.info(`"${email}", es un email valido`)
//     : console.warn(`"${email}", No es un email válido`);
// }

// validarEmail();
// validarEmail(true);
// validarEmail("cris,pin,pach@gmail");
// validarEmail("cpinopacheco64@gmail.com");

// fusión ejercicio 19 y 20

//>>>>>>>>>>>>>>< RESULTADO DEL CURSO
// const validarPatron = (cadena="", patron=undefined) => {
//   if(!cadena) return console.warn("No ingresaste una cadena de texto a evaluar");

//   if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, No es una cadena de texto`);

//   if(patron === undefined) return console.warn("No ingresaste un patrón a evaluar");

//   if(!(patron instanceof RegExp)) return console.error(`El valor "${patron}" ingresado, No es una expresión regular`);

//   // [] = agrupadores
//   // + = para que evalule por cada caracter en la cadena de texto
//   let expReg = patron.test(cadena);

//   return (expReg)
//     ? console.info(`"${cadena}", cumple con el patrón ingresado`)
//     : console.warn(`"${cadena}", No cumple con el patrón ingresado`);
// }

// validarPatron();
// validarPatron({});
// validarPatron("Cristian Pino");
// validarPatron("Cristian Pino 19", /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g);
// validarPatron("Cristian Pino", /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g);

// validarPatron("cpinopacheco64@gmail", new RegExp("/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/", "i"));
// validarPatron("cpinopacheco64@gmail.com", new RegExp("[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})", "i"));

//21) Programa una función que dado un array numérico devuelve otro array
//con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

// const numerosAlcuadrado = (numeros) => {

//   if(numeros === undefined) return console.warn("No ingresaste los numero a elevar");

//   if(!(numeros instanceof Array)) return console.error("Debe ingresar un arreglo");

//   let result = [];
//   numeros.forEach(element => {

//     (typeof element === "number")
//       ? result.push(Math.pow(element,2))
//       : result.push(`El valor "${element}" no es de tipo numerico`);

//   });
//   return console.log(result);
// }

// numerosAlcuadrado();
// numerosAlcuadrado(true);
// numerosAlcuadrado(["1","4","5"]);
// numerosAlcuadrado([1,4,{}]);
// numerosAlcuadrado([1,4,5])

//>>>>>>>>>>>>>>>>>>>< RESULTADO DEL CURSO
// const devolverCuadrados = (arr = undefined) => {
//   if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros");

//   if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

//   if(arr.length === 0)return console.log("el arreglo esta vacío");

//   for (const num of arr) {
//     if(typeof num !== "number"){
//       return console.error(`El valor "${num}" ingresado, No es un número`)
//     }
//   }

//   const newArr = arr.map(el => el * el);

//   return console.info(`Arreglo oirifinal: ${arr}\nArreglo elevado al cuadrado:${newArr}`);
// }

// devolverCuadrados();
// devolverCuadrados(true);
// devolverCuadrados({});
// devolverCuadrados([]);
// devolverCuadrados([1,2,"3"]);
// devolverCuadrados([1,2,{}]);
// devolverCuadrados([1,4,8]);

//22) Programa una función que dado un array devuelva el número mas alto y
//el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
// const numeroMenorMAyor = (numeros) => {

//   if(numeros === undefined) return console.warn("No ingresaste los valores a evaluar");

//   if (!(numeros instanceof Array)) return console.warn("debe ingresar un arreglo");

//   let valorMinimo,
//       valorMAximo,
//       valorMinimoMAximo = [],
//       arregloSoloNumero = [];

//   numeros.forEach(element => {
//     if(typeof element !== "number"){
//       return console.error(`El valor "${element}" no es de tipo númerico`);
//     } else {
//       arregloSoloNumero.push(element);
//     }
//   })

//   valorMinimo = Math.min(...arregloSoloNumero),
//   valorMAximo = Math.max(...arregloSoloNumero),

//   valorMinimoMAximo.push(valorMinimo,valorMAximo)

//   return console.log(valorMinimoMAximo);

// }
// numeroMenorMAyor();
// numeroMenorMAyor(60);
// numeroMenorMAyor([1,4,"hola","test",-60]);
// numeroMenorMAyor([1,4,5,99,-60]);

//>>>>>>>>>>>>>>>>> RESULTADO DEL CURSO
// const arrayMinMax = (arr=undefined) => {
//   if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros");

//   if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

//   if(arr.length === 0)return console.log("el arreglo esta vacío");

//   for (const num of arr) {
//     if(typeof num !== "number"){
//       return console.error(`El valor "${num}" ingresado, No es un número`)
//     }
//   }

//   return console.info(`Arreglo original: ${arr}\nVAlor mayor: ${Math.max(...arr)}\nValor menor ${Math.min(...arr)}`);
// }

// arrayMinMax();
// arrayMinMax(false);
// arrayMinMax([]);
// arrayMinMax([1,2,true]);
// arrayMinMax([1,4,5,99,-60]);

//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos
//en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
// const objetosParesImpares = (numeros) => {

//   if(numeros === undefined) return console.warn(`No ha ingresado los valores`);

//   if(!(numeros instanceof Array)) return console.error(`Debe ingresar un arreglo`);

//   const paresImpares = {
//     pares: [],
//     impares: []
//   }

//   numeros.forEach(element => {
//     if(typeof element === "number"){
//       (element % 2 === 0)
//         ? paresImpares.pares.push(element)
//         : paresImpares.impares.push(element);
//     }else{
//       return console.error(`El valor "${element}" no es de tipo númerico`)
//     }
//   });

//   return console.log(paresImpares);

// }

// objetosParesImpares();
// objetosParesImpares(true);
// objetosParesImpares([1,2,"test2",4,5,6,"test1",8,9,0]);
// objetosParesImpares([1,2,3,4,5,6,7,8,9,0]);

//>>>>>>>>>>>>>>>>> RESULTADO DEL CURSO
// const separarParesImpares = (arr = undefined) => {
//   if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros");

//   if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

//   if(arr.length === 0)return console.log("el arreglo esta vacío");

//   for (const num of arr) {
//     if(typeof num !== "number"){
//       return console.error(`El valor "${num}" ingresado, No es un número`);
//     }
//   }

//   return console.info({
//     pares: arr.filter(num => num % 2 === 0),
//     impares: arr.filter(num => num % 2 === 1)
//   })
// }

// separarParesImpares();
// separarParesImpares("hola");
// separarParesImpares([]);
// separarParesImpares([2,4,"j"]);
// separarParesImpares([1,2,3,4,5,6,7,8,9,0]);

//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
//el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente,
//pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

// const ordenarNumeros =  (arr=undefined) => {

//   if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros");

//   if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

//   if(arr.length === 0)return console.log("el arreglo esta vacío");

//   for (const num of arr) {
//     if(typeof num !== "number"){
//       return console.error(`El valor "${num}" ingresado, No es un número`);
//     }
//   }

//   return console.info({
//     arr,
//     ascendentes: arr.map(el => el).sort(),
//     descendientes: arr.map(el => el).sort().reverse()
//   })

// }

// ordenarNumeros();
// ordenarNumeros(true);
// ordenarNumeros([]);
// ordenarNumeros([7,5,7,"hola",6]);
// ordenarNumeros([7,5,7,8,6]);

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
// pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
// const eliminarDuplicados = (arr=undefined) => {
//   if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros");

//   if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

//   if(arr.length === 0)return console.log("el arreglo esta vacío");

//   //>>>>> forma 1
//   //const result = [];
//   //   arr.forEach((item)=>{
//   //     //pushes only unique element
//   //       if(!result.includes(item)){
//   //       result.push(item);
//   //     }
//   //   })
//   //  return console.log(result);

//   //>>>> forma 2
//   // let result = arr.filter((item,index)=>{
//   //   return arr.indexOf(item) === index;
//   // })
//   // console.log(result);

// }

// eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

//>>>>>>>>>>>>>>>> RESULTADO DEL CURSO
// const eliminarDuplicados = (arr=undefined) => {
//   if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros");

//   if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

//   if(arr.length === 0)return console.log("el arreglo esta vacío");

//   if(arr.length === 1)return console.log("el arreglo debe tener al menos 2 elementos");

//   //>>>>>< forma 1
//   // return console.info({
//   //   original:arr,
//   //   sinDuplicados: arr.filter((value,index,self) => self.indexOf(value)===index)

//   // })

//   //>>>>>>>>> forma 2
//   return console.info({
//     original:arr,
//     sinDuplicados: [...new Set(arr)] //set permite formar un objeto el cual sus elementos no tenga duplicaciones
//   })

// }

// eliminarDuplicados();
// eliminarDuplicados({});
// eliminarDuplicados([]);
// eliminarDuplicados([2]);
// eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

//26) Programa una función que dado un arreglo de números obtenga el promedio,
//pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
// const calcularPromedio = (arr=undefined) => {
//   if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros");

//   if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

//   if(arr.length === 0)return console.log("el arreglo esta vacío");

//   if(arr.length === 1)return console.log("el arreglo debe tener al menos 2 elementos");

//   for (const num of arr) {
//     if(typeof num !== "number"){
//       return console.error(`El valor "${num}" ingresado, No es un número`);
//     }
//   }

//   let result = arr.reduce((valorAnterior, valorActual) => {
//     return (valorAnterior + valorActual);
//   });

//   return console.log(`El promedio de los valores ${arr} es: ${result/arr.length}`);

// }

// calcularPromedio();
// calcularPromedio({});
// calcularPromedio([]);
// calcularPromedio([1]);
// calcularPromedio([9,8,7,6,5,4,3,2,1,0]);
// calcularPromedio([7,7,7]);

//>>>>>>>>>>>>>>>< resultado del curso
// const calcularPromedio = (arr=undefined) => {
//   if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros");

//   if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

//   if(arr.length === 0)return console.log("el arreglo esta vacío");

//   for (const num of arr) {
//     if(typeof num !== "number"){
//       return console.error(`El valor "${num}" ingresado, No es un número`);
//     }
//   }

//   return console.log(
//     arr.reduce((total,num,index,arr) => {
//       total += num;
//       if(index === arr.length-1){
//         return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`;
//       } else {
//         return total;
//       }
//     })
//   );

// }

// calcularPromedio();
// calcularPromedio({});
// calcularPromedio([]);
// calcularPromedio([1]);
// calcularPromedio([9,8,7,6,5,4,3,2,1,0]);

/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos:
id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3
    instancias de la clase de forma automatizada e imprime la ficha técnica
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

// class Pelicula {
//   constructor({id,titulo,director,estreno,pais,generos,calificacion}){
//     this.id = id;
//     this.titulo = titulo;
//     this.director = director;
//     this.estreno = estreno;
//     this.pais = pais;
//     this.generos = generos;
//     this.calificacion = calificacion;

//     this.validarIMDB(id);
//     this.validarTitulo(titulo);
//     this.validarDirector(director);
//     this.validarEstreno(estreno);
//     this.validarPais(pais);
//     this.validarGeneros(generos);
//     this.validarCalificacion(calificacion);
//   }

//   static get listaGeneros() {
//     return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family",
//             "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV",
//             "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
//   }

//   static generosAceptados(){
//     return console.info(`Los géneros aceptados son: ${Pelicula.listaGeneros.join(", ")}`)
//   }

//   validarCadena(propiedad,valor){
//     if(!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);

//     if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, No es una cadena de texto`);

//     return true;
//   }

//   validarLongitudCadena(propiedad,valor,longitud){
//     if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud}).`);

//     return true;
//   }

//   validarNumero(propiedad,valor){
//     if(!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);

//     if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado, No es un número`);

//     return true;
//   }

//   validarArreglo(propiedad,valor){
//     if(!valor) return console.warn(`No ingresaste un arreglo de países`);

//     if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, No es un arreglo`);

//     if(valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);

//     for (const cadena of valor) {
//       if(typeof cadena !== "string"){
//         return console.error(`El valor "${cadena}" ingresado, No es una cadena de texto`);
//       }
//     }

//     return true;
//   }

//   //Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
//   //7 restantes números.
//   validarIMDB(id){
//     if(this.validarCadena("IMDB id",id)){
//       // ^ = comienze con
//       // $ = termine con
//       // [a-z] = contenga caracteres de la a a la z.
//       // {2} = que solo se pueda tener 2 letras
//       // [0-9] = permite digitos del 0 al 9
//       // {7} = que solo puede terner 7 numero
//       if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
//         return console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minúsculas, los 7 restantes números.`)
//       }
//     }
//   }

//   validarTitulo(titulo){
//     if(this.validarCadena("Título",titulo)){
//       this.validarLongitudCadena("Título", titulo,100);
//     }
//   }

//   validarDirector(director){
//     if(this.validarCadena("Director",director)){
//       this.validarLongitudCadena("Director", director,50);
//     }
//   }

//   validarEstreno(estreno){
//     if(this.validarNumero("Estreno", estreno)){
//       if(!(/^([0-9]{4}$)/.test(estreno))){
//         return console.error(`El año de estreno "${estreno}" no es valido, debe tener sólo 4 digitos`);
//       }
//     }
//   }

//   validarPais(pais){
//     this.validarArreglo("Pais", pais);
//   }

//   validarGeneros(generos){
//     if(this.validarArreglo("Géneros", generos)){
//       for (const genero of generos) {
//         //console.log(genero, Pelicula.listaGeneros.includes(genero));
//         if(!Pelicula.listaGeneros.includes(genero)){
//           console.error(`Género(s) incorrectos "${generos.join(",")}"`);
//           Pelicula.generosAceptados();
//         }
//       }
//     }
//   }

//   validarCalificacion(calificacion){
//     if(this.validarNumero("Calificación", calificacion)){
//      return (calificacion < 0 || calificacion > 10)
//       ? console.log(`La calificación tiene que estar en un rango entre 0 y 10`)
//       : this.calificacion = calificacion.toFixed(1);
//     }
//   }

//   fichaTecnica(){
//     console.info(`Ficha Técnica:
//     \nTítulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.estreno}"\nPaís: "${this.pais.join("-")}"\nGéneros: "${this.generos.join(", ")}"\nCalificación: "${this.calificacion}"\nIMDB id: "${this.id}"`);
//   }
// }

// //Pelicula.generosAceptados();

// // const peli = new Pelicula({
// //   id:"tt1234567",
// //   titulo: "Titulo de la Peli",
// //   director: "Director de la Peli",
// //   estreno: 2020,
// //   pais: ["chile", "brasil"],
// //   generos: ["Sport"],
// //   calificacion: 8.1
// // });

// // peli.fichaTecnica();

// const misPelis = [
//   {
//     id:"tt1111111",
//     titulo: "Into the Wild",
//     director: "Sean Penn",
//     estreno: 2007,
//     pais: ["USA"],
//     generos: ["Adventure","Biography", "Drama"],
//     calificacion: 6.5
//   },
//   {
//     id:"tt2222222",
//     titulo: "Rocky Balboa",
//     director: "Sylvester Stallone",
//     estreno: 2006,
//     pais: ["USA"],
//     generos: ["Action", "Drama", "Sport"],
//     calificacion: 7.1
//   },
//   {
//     id:"tt3333333",
//     titulo: "The Dark Knight",
//     director: "Christopher Nolan",
//     estreno: 2008,
//     pais: ["USA", "UK"],
//     generos: ["Action", "Crime", "Drama"],
//     calificacion: 9.0
//   }
// ]

// misPelis.forEach(el => new Pelicula(el).fichaTecnica());

// >>>>>>>>>>>>>>>>>< FIN EJERCICIOS PARTE 1

//Poniendo en practica algunos conocimientos

/* const persona = {
  nombre: "Cristian",
  edad: 33,
  saludar() {
    return console.log("Hola a todos");
  },
};

console.log(persona.hasOwnProperty("nombre"));

console.log(persona.nombre);
console.log(persona.edad);
persona.saludar(); */

/* class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  set setNombre(nombre) {
    this.nombre = nombre;
  }

  get getNombre() {
    return this.nombre;
  }

  despedirse() {
    return console.log("Adios a todos");
  }
} */

/* let alumno = new Persona("Cristian", 33);

console.log(alumno.nombre);
console.log(alumno.edad);
alumno.despedirse();
console.log(alumno.getNombre);
alumno.setNombre = "Andres";
console.log(alumno.getNombre); */

/* let frutas = ["manzana", "pera", "naranja"];

console.log(frutas);

frutas.push("sandia"); //agrega un elemento al final del array
frutas.unshift("melón"); //agrega un elemento al princio del arreglo
frutas.pop(); //Elimina el último elemento del arreglo y lo retorna
let frutaEliminada = frutas.shift(); //Elimina el primer elemento del arreglo y lo retorna.
console.log(frutaEliminada);
console.log(frutas);

frutas.forEach((fruta) => {
  console.log(`Hoy me comeré una ${fruta}`);
}); */

/* let nom = prompt("Ingrese un nombre");
console.log(nom); */

/* const array1 = [2, 4, 6];

const nuevoArray = array1.map((element) => element);

console.log(array1);
console.log(nuevoArray); */

/* const frutas = ["🍌", "🍏", "🍓"];
// por referencia (revisar videos anteriores)
const arrayReferencia = frutas;
frutas.push("🍉");
console.log(arrayReferencia);

// construye un nuevo array con los resultados
// esto lo hace sin mutar el arreglo original
const nuevoArray = frutas.map((item) => item);
frutas.push("🍉");
console.log(nuevoArray); */

/* const users = [
  { nombre: "Cristian", userName: "crisAPP" },
  { nombre: "Kelly", userName: "Amorcito" },
];

console.log(users);
console.log(users[0].nombre);
console.log(users[0].userName);
console.log(users[1].nombre);
console.log(users[1].userName);

for (const user of users) {
  console.log(user);
}

users.forEach((user) => {
  console.log(user);
}); */
/* 
const animals = [
  { nombre: "Bobby", tamanio: "grande", tipo: "Perro" },
  { nombre: "luna", tamanio: "Mediano", tipo: "Gato" },
  { nombre: "bug", tamanio: "Mediano", tipo: "Conejo" },
];

console.log(animals);

const animalesMedianos = animals.filter(
  (animal) => animal.tamanio === "Mediano"
);
console.log(animalesMedianos);

const numeros = [];
const numeros2 = [];
const arreglosJuntos0 = [numeros, numeros2];
const arreglosJuntos1 = `${numeros} ${numeros2}`;
const arreglosJuntos2 = numeros + numeros2;

numeros.push(0, 1, 2, 3, 4);
numeros2.unshift(6, 7, 8, 9, 10);

let arreglosJuntos3 = [...numeros, ...numeros2];

/* console.log(numeros);
console.log(numeros2); */
/* console.log(arreglosJuntos0);
console.log(arreglosJuntos1);
console.log(arreglosJuntos2);
console.log(arreglosJuntos3); */

/* const persona = {
  nombre: "Cristian",
  edad: 33,
  genero: "Masculino",
  pais: "Chile",
}; */

/* console.log(persona.nombre);
console.log(persona.edad); */

/* let { nombre, edad, ...rest } = persona;
console.log(nombre, edad, rest);
let array1 = [1, 2, 3, 4, 5, 6, 7];
let [a, b, c, ...rest1] = array1;
console.log(a, b, c, rest1); */

/* const container = document.getElementById("container");
console.log(container);
console.log(container.children);

let elements = Array.apply()

console.log(elements);

let findElement = elements.find((element) => element.id === "children2");
console.log(findElement); */

/* const users = [
  { uid: 1, name: "John", age: 34 },
  { uid: 2, name: "Amy", age: 20 },
  { uid: 3, name: "camperCat", age: 10 },
];

const amy = users.find((user) => user.uid === 2);
console.log(amy);

const { age, name } = users.find((user) => user.uid === 2);
console.log(age, name); */

/* const users = [
  { uid: 1, name: "John", age: 34 },
  { uid: 2, name: "Amy", age: 20 },
  { uid: 3, name: "camperCat", age: 10 },
];

const existe = users.findIndex((user) => user.uid === 5);
console.log(existe); */

/* const arr = ["Cat", "Dog", "Tiger", "Zebra"];
//             0     [1      2]        3
const newArray = arr.slice(1, 3);

console.log(newArray); */

/* const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);

let nombre = ["a", "b"];
let apellido = ["c", "d"];

let nombreCompleto = [...nombre, ...apellido];

let numero1 = [1, 2, 3];
let numero2 = [4, 5, 6];
let numoro3 = [...numero1, ...numero2];

console.log(numoro3);
console.log(nombreCompleto); */

/* const arrayNumeros = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const soloNumeros = arrayNumeros.reduce((acc, current) => acc.concat(current));

console.log(soloNumeros);

const numeros = [1, 2, 3, 4, 5];

const sumaTodos = numeros.reduce((acc, valorActual) => acc + valorActual);

console.log(sumaTodos); */

/* const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const arrayMeses = cadenaMeses.split(",");
console.log(arrayMeses);

const diasSemana = "lunes,martes,miercoles,jueves,viernes,sabado,domingo";

let arrayDiasSemana = diasSemana.split(",");

console.log(arrayDiasSemana); */

/* const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const arrayMeses = cadenaMeses.split(",");
console.log(arrayMeses);

const nuevamenteString = arrayMeses.join(",");
console.log(nuevamenteString); */

/* const gato = {
  nombre: "Valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
  caminar() {
    return console.log("El gato camina");
  },
};

for (const propiedad in gato) {
  console.log(gato[propiedad]);
}

for (const propiedad in gato) {
  console.log(gato[propiedad]);
}

console.log(Object.keys(gato)); //retorna las claves de las propiedades del objeto
console.log(Object.values(gato)); //retorna los valores de las propiedades del objeto
console.log(Object.entries(gato)); //retorna claves y valores de las propiedades del objeto
Object.values(gato).forEach((item) => console.log(item)); */

/* const gato = {
  nombre: "Valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
  otros: {
    amigos: ["Cobarde", "Tímido", "Pegajoso"],
    favoritos: {
      comida: {
        fria: "salmón",
        caliente: "pollo",
      },
    },
  },
};

const { nombre, duerme, edad, enemigos } = gato;

const { nombre: nombreGato } = gato;
console.log(nombreGato); */

/* const gato = {
  // nombre: "Valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
  otros: {
    amigos: ["Cobarde", "Tímido", "Pegajoso"],
    favoritos: {
      comida: {
        fria: "salmón",
        caliente: "pollo",
      },
    },
  },
};

const { nombre: nombreGato = "Sin nombre" } = gato;
console.log(nombreGato);
 */

/* let a = "hola";
let b = a;
console.log(b);

a = "chao";
console.log(b); */

/* let a = ["hola"];
let b = a;
console.log(b);

a.push("chao");

console.log(b); */

//Practicando lo aprendido

/* const $template = document.getElementById("prueba").content;
const $container = document.querySelector(".container");
const $fragment = document.createDocumentFragment();

console.log($template);

let users = [
  { name: "Cristian", age: 33 },
  { name: "Kelly", age: 28 },
  { name: "Isabella", age: 4 },
];

console.log(users);

users.forEach((user) => {
  const $clone = $template.cloneNode(true);
  $clone.querySelector(".userName").textContent = `Nombre: ${user.name}`;
  $clone
    .querySelector(".greet-button")
    .setAttribute("data-nombre", `${user.name}`);
  $clone.querySelector(".age").innerHTML = `Edad: <b>${user.age}</b> Años.`;
  $fragment.appendChild($clone);
});

$container.appendChild($fragment);

const $containerDatos = document.querySelectorAll(".container-datos");
const $greetButton = document.querySelector(".greet-button");

$containerDatos.forEach((currentItem) => {
  const $usersTitle = document.createElement("h1");
  $usersTitle.textContent = "Usuarios";
  currentItem.insertAdjacentElement("afterbegin", $usersTitle);
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".greet-button")) {
    alert(`Hola ${e.target.dataset.nombre} te damos la bienvenida`);
  }
}); */
