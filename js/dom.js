/*  console.log(window);
console.log(document);

//Api para hablar con el navegador
texto = "Nombre, descripción y ataque del poquemon";
const hablar = (texto) =>
speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto); */

//>>>>>>>>>>>>>>>>   DOM: introducción

/* console.log("***********Elementos del Documento****************");
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets); 
console.log(document.scripts);  */

//>>>>>>>>>>>>>>>>>>>>>>> DOM: Nodos, Elementos y Selectores

/* console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));

//querySelector trae el primer elemento que haya encontrado en el documento HTML y retorna un nodeList

//querySelector es mas lento que getElementById por que tiene que hacer una doble validación.
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));

//querySelectorAll encuentra todos los elementos que encuentre en el documento y retorna un nodeList
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"));
 */

//>>>>>>>>>>>>>>> DOM: Atributos y Data-Attributes

/* 
- getAttribute permite obtener un atributo del elemento

- setAttribute permite modificar un atributo del elemento

- removeAttribute permite eliminar un atributo del elemento

- Para acceder a los data-attribute se puede tambien con la propiedad dataset

- Los dataset son attributos que agregamos de manera independiente a un elemento
*/

/* console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
console.log(document.documentElement.lang);

document.documentElement.setAttribute("lang", "es-Cl");
console.log(document.documentElement.lang);

const linkDom = document.querySelector(".link-dom");

linkDom.setAttribute("target", "_blank");
linkDom.setAttribute("rel", "noopener");
linkDom.setAttribute("href", "https://google.com");
console.log(linkDom.hasAttribute("rel"));
linkDom.removeAttribute("rel");

//Data-Attributes
console.log(linkDom.getAttribute("data-description"));
console.log(linkDom.dataset);
console.log(linkDom.dataset.description);
linkDom.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log(linkDom.dataset.description);
linkDom.dataset.description = "Suscribete";
console.log(linkDom.dataset);
console.log(linkDom.dataset.description);
console.log(linkDom.getAttribute("data-description")); */

//>>>>>>>>>>>>>< DOM: Estilos y Variables CSS
/* const linkDom = document.querySelector(".link-dom");
console.log(linkDom.style);
console.log(linkDom.getAttribute("style"));
console.log(linkDom.style.backgroundColor);
console.log(linkDom.style.color);

linkDom.style.setProperty("text-decoration", "none");
linkDom.style.setProperty("display", "block"); //transformamos el elemento a un bloque y ocupa todo el espacio disponible
linkDom.style.setProperty("display", "block");
linkDom.style.width = "50%";
linkDom.style.textAlign = "center";
linkDom.style.marginLeft = "auto";
linkDom.style.marginRight = "auto";
linkDom.style.padding = "1rem";
linkDom.style.borderRadius = ".5rem";
console.log(linkDom.getAttribute("style"));

// variables CSS - Custom Properties CSS
const html = document.documentElement;
const body = document.body;

let varDarkColor = getComputedStyle(html).getPropertyValue("--dark-color");
let varClearColor = getComputedStyle(html).getPropertyValue("--clear-color");

console.log(varDarkColor, varClearColor);

body.style.backgroundColor = varDarkColor;
body.style.color = varClearColor;

html.style.setProperty("--dark-color", "pink");
varDarkColor = getComputedStyle(html).getPropertyValue("--dark-color");

body.style.setProperty("background-color", varDarkColor); */

/* >>>>>>>>>>>>>>>>  DOM: Clases CSS*/
//como buena practica el nombre de la variable se escribe con dolar al inicio para saber que se esta haciendo referencia a un elemento del DOM.

/* const $card = document.querySelector(".card");

console.log($card.classList); //devuelve un DOMTokenList
console.log($card.className); //devuelve la cadena de texto que tiene el atributo card
console.log($card.classList.contains("rotate-45")); //devuelve true o false si el elemento contiene la clase "rotate-45"
$card.classList.add("rotate-45"); // metodo que agrega una clase a un elemento html
console.log($card.classList.contains("rotate-45")); //verifica que contiene la clase
$card.classList.remove("rotate-45"); // metodo que quita una clase a un elemento html
$card.classList.toggle("rotate-45"); // metodo que agrega la clase si el elemento no la tiene, o la quita si la tiene.
console.log($card.classList.contains("rotate-45")); //verifica que contiene la clase
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45")); //verifica que contiene la clase
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135"); // reemplaza la clase actual por una nueva
$card.classList.add("opacity-80", "sepia"); //agrega mas de una clase a un elemento
$card.classList.remove("opacity-80", "sepia"); //agrega mas de una clase a un elemento
$card.classList.toggle("opacity-80", "sepia"); //agrega mas de una clase a un elemento */

// >>>>>>>>>>>>>>>>>>>>>> DOM: Texto y HTML

/* const $whatsIsDOM = document.getElementById("que-es");

let text = `
<p>
    El modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es una API para documentos HTML y XML
</p>
<p>
    Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS
</p>
<p>
    <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores</mark>
</p>
`;

//textContentex e innerText sirven para agregar contenido textual a un elemento. la propiedad innerText no es un estandar y fue creada para internet explorer.

$whatsIsDOM.innerText = text; //respeta las identaciones de las templateString
$whatsIsDOM.textContent = text; //se utiliza para insertar solo texto
$whatsIsDOM.innerHTML = text; // se utiliza para insertar código HTML, respeta las etiquetas del parrafo.
$whatsIsDOM.outerHTML = text; //reemplaza el código HTML */

/* >>>>>>>>>>>>>>>>>> DOM traversing: Recorriendo el DOM  */

/* const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children); //retorna los elementos hijos del elemento.
console.log($cards.childNodes); // retorna los nodos hijos del elemento
console.log($cards.children[2]);
console.log($cards.parentElement); //retorna el elemento padre
console.log($cards.firstChild);
console.log($cards.firstElementChild); //retorna el primer elemento hijo
console.log($cards.lastElementChild); // retorna el ultimo elemento hijo
console.log($cards.previousElementSibling); //retorna el elemento hermano anterior al elemento
console.log($cards.nextElementSibling); // retonrna el elemento hermano siguiente al elmento
console.log($cards.closest()); // va a buscar el ancestro mas cercano del tipo de selector que le demos. */

/* >>>>>>>>>>>>>>>> DOM: Creando elementos y Fragmentos */

/* const $figure = document.createElement("figure"), //crea un nuevo elemento figure
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptiontext = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");
$figcaption.appendChild($figcaptiontext);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure); //agrega el elemento hijo.

console.log($figure2);

//forma 2
$figure2.innerHTML = `
    <img src="https://placeimg.com/200/200/people" alt="People">
    <figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

//pasar datos de forma dinamica ejemplo
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul"); //Creamos un elemento ul

document.write("<h3>Estaciones del año</h3>"); //agrega al documento este titulo
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ["África", "América", "Asia", "Europa", "Ocenanía"],
  $ul2 = document.createElement("ul"); //Creamos un elemento ul

document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`)); //+= va concatenando los elementos del array

//Insertar elementos con fragmentos es mas eficiente, ya que se hace una sola vez. ej:

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "MAyo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

$ul3 = document.createElement("ul");
$fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del AÑo</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3); */

//>>>>>>>>>>>>>>>>>>>>>>> DOM: Templates HTML
/* 
- Las etiquetas template no se renderizan en el DOM, el objetivo para que se crearon es para ser un modelo a seguir y a traves de ella empezar a generar estructuras del DOM dinamicamente.
*/

/* const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true); // esta linea clona un nodo basadado en el template que se le pasa como primer argumento, el segundo argumento es un boolean. True significa que clona toda la estructura del elemento y False clona solo la etiqueta.
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment); */

// >>>>>>>>>>>>>>>>>>>>>> DOM: Modificando Elementos (old style)

/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneNode = $cards.cloneNode(true); //true compia todo el contenido, no solo el elemento al que se hace referencia.

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[2]); //remplaza el elemento
//$cards.removeChild($cards.lastElementChild); //Elimina el ultimo elemento
//$cards.insertBefore($newCard, $cards.firstElementChild); //inserta un elemento antes del primer elemento seleccionado

document.body.appendChild($cloneNode); */

//>>>>>>>>>>>>>>>>>>>>>>>>>> DOM: Modificando Elementos (cool style)

/* 
.insertAdjacent...
  .insertAdjacentElement(position,el) //agrega un elemento como un appenchild o un insertBefore.
  .insertAdjacentHTML(position,html) //agrega contenido html, vendria siendo como un innerHTMl
  .insertAdjacentText(position,text) //agrega contenido al elemento html, viene siendo como un text content


Posiciones:
  beforebegin(hermano anterior) // hermano anterior, antes del elemento de referencia
  afterbegin(primer hijo) // el primer elemento hijo del nodo como referencia
  beforeend(ultimo hijo) //el ultimo hijo
  afterend(hermano siguiente) // el hermano siguiente
*/

/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contentCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>
`;

$newCard.classList.add("card");

// $cards.insertAdjacentElement("beforebegin", $newCard);
// $cards.insertAdjacentElement("afterbegin", $newCard);
// $cards.insertAdjacentElement("beforeend", $newCard);
// $cards.insertAdjacentElement("afterend", $newCard);

$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
$cards.insertAdjacentElement("afterbegin", $newCard); */

/* function holaMundo() {
  alert("Hola mundo");
  console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple");

$eventoSemantico.onclick = holaMundo; //la funcion se escribe sin parentesis, porque los parentesis provocan que se ejecute de forma inmediata.
$eventoSemantico.onclick = function (e) {
  alert("Hola Mundo Manejador de Eventos Semántico");
  console.log(e);
  console.log(event);
};

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola mundo Manejador de eventos múltiple");
  console.log(e); //e hace relacion al evento y lo imprime 
  console.log(e.type); // imprime el tipo de evento
  console.log(e.target); //imprime el elemento que origino el evento
  console.log(event); // imprime el evento.
}); */

// >>>>>>>>>>>>>>>> Eventos con  Parámetros y Remover Eventos

/* function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);
  console.log(event);
}

const $eventoMultiple = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("evento-remover");

// $eventoMultiple.addEventListener("click", saludar); //no imprime lo que se le pasa por parametro.

//$eventoMultiple.addEventListener("click", () => saludar()); // en una sola linea de código

$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Cristian");
});

const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
};

$eventoRemover.addEventListener("dblclick", removerDobleClick); */

//>>>>>>>>>>>>> DOM: Flujo de eventos
/*
const $divsEventos = document.querySelectorAll(".eventos-flujo div"); // trae todos los div que estan dentro del elemento con la clase eventos-flujo.

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
}

console.log($divsEventos);

 $divsEventos.forEach((div) => {
  //Fase de burbuja
  //div.addEventListener("click", flujoEventos);
  //div.addEventListener("click", flujoEventos, false);

  //Fase de Captura
  //div.addEventListener("click", flujoEventos, true);
   div.addEventListener("click", flujoEventos, {
    capture: false,
    once: true,
  }); 
});
*/

//>>>>>>>>>>>> DOM: stopPropagation & preventDefault

/* const $divsEventos = document.querySelectorAll(".eventos-flujo div"); // trae todos los div que estan dentro del elemento con la clase eventos-flujo.
const $linkEventos = document.querySelector(".eventos-flujo a");

console.log($linkEventos);

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
  e.stopPropagation();
}

$divsEventos.forEach((div) => {
  div.addEventListener("click", flujoEventos);
});

$linkEventos.addEventListener("click", (e) => {
  alert("Hola mi nombre es Cristian");
  e.preventDefault(); //cancela la accion que tiene por defecto el elemento.
  e.stopPropagation(); //cancela la propagación del evento.
}); */

//>>>>>>>>>>>>>>>>>>> DOM: Delegación de eventos

/* function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
  e.stopPropagation();
}

//Es la Forma mas optima de trabajar con eventos en JS. Asignandolo al Documeent.
document.addEventListener("click", (e) => {
  //El evenento se asignada a cada elemento en el documento.
  console.log("Click en: ", e.target);

  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  //Este códido se ejecuta colo cuando se dispara el evento de click en el elemento coindidente con selector en la condición.
  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola soy Cristian");
    e.preventDefault();
  }
}); */

//>>>>>>>>>>>>>>>>>>>>> BOM: Propiedades y Eventos.

/* window.addEventListener("resize", (e) => {
  console.clear();
  console.log("******** Resize Event *********");
  console.log(window.innerWidth); //hace referencia al ancho del viewPort de la ventana del navegador.
  console.log(window.innerHeight); //hace referencia al alto del viewPort de la ventana del navegador.
  console.log(window.outerWidth); //hace referencia al tamaño que tiene la ventana del navegador.
  console.log(window.outerHeight); //hace referencia al tamaño que tiene la ventana del navegador.
  console.log(e);
});

window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("******** Scroll Event *********");
  console.log(window.scrollX); //Arroja cuanto se aleja la barra horizontal del margen izquierdo
  console.log(window.scrollY); //Arroja cuanto se aleja la barra vertical del margen superior.
  console.log(e);
});

//Load espera a que todo el documento este completamente renderizado para ejecutarse. ya sea las hojas de estilo, imagenes, subtramas,scripts, etc.

//DOMContentLoaded espera solo que este ejecutado el documento Html para ejecutarse.

//Este evento se ejecuta cuando la ventana del navegador haya terminado de cargar.
window.addEventListener("load", (e) => {
  console.log("******** load Event *********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

//Es mejor utilizar este evento en vez de load ya que es mas rapido.
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("******** Evento DOMContentLoaded ********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
}); */

//>>>>>>>>>> BOM: Métodos

//window.alert("Alerta") // Muestra una ventana de alerta

//window.confirm("Confirmación"); // aceptar valida a True y cancelar valida a False.

//window.prompt("Aviso"); //ventana que permite ingresar un texto

/* const $botonAbrir = document.getElementById("abrir-ventana");
const $botonCerrar = document.getElementById("cerrar-ventana");
const $botonImprimir = document.getElementById("imprimir-ventana");

let ventana; // Se crea una variable de referencia para saber que pagina cerrar en el evento botonCerrar.

$botonAbrir.addEventListener("click", (e) => {
  ventana = window.open("https://jonmircha.com");
});

$botonCerrar.addEventListener("click", (e) => {
  ventana.close();
});

$botonImprimir.addEventListener("click", (e) => {
  window.print();
}); */

//>>>>>>>>>>>>>>>> BOM: Objetos: URL, Historial y Navegador.
//Objeto location y algunas propiedades importantes.

/*
console.log("******** ONjecto URL (location) *********") 
console.log(location);
console.log(location.origin); // la ruta en la que se origina.
console.log(location.protocol); // imprime el protocolo
console.log(location.host);
console.log(location.hostname); //nombre del dominio
console.log(location.port); //El puerto que esta escuchando el servidor
console.log(location.href); //es la dirección del sitio web (toda la url)
console.log(location.hash); //detecta el valor de la url que esta despues de un hash
console.log(location.pathname); //es el archivo al que se esta consultando
console.log(location.search) //detecta valores como parametros en la url
//location.reload(); //recarga la página. 
*/

/* console.log("********** objeto Historial (history) ***********");
console.log(history);
console.log(history.length); //imprime la cantidad de paginas que hemos visitado.

//history.forward(1) avanza en el historial
//history.back(2) regresa las paginas en el historial
//history.go(-3) se mueve hacia adelante o hacia atras en el historial según el valor que pasamos. numeros negativos hacia atras y números positivos hacia adelante. */

/* console.log("********** objeto Navigator (navigator) ***********");
console.log(navigator);
console.log(navigator.connection); //información de conexion del usuario
console.log(navigator.geolocation); //api de geolocalización
console.log(navigator.mediaDevices); //son los dispositivos como cámaras y microfonos
console.log(navigator.mimeTypes); //los archivos que soportan los navegadores
console.log(navigator.onLine); //evento cuando el usuario tiene o no conexion.
console.log(navigator.serviceWorker); //convertir el sitio web en una aplicación instalable (convertilo en una PWA = progresive web app)
console.log(navigator.storage); //el api de almacenamiento.
console.log(navigator.usb); //detecta dispositivos USB
console.log(navigator.userAgent); //nos da información sobre el navegador, el sistema operativo y si es escritorio o movil el dispositvo que se esta conectando al sitio web. */

//>>>>>>>>>>>>>>>>> DOM: Ejercicios Prácticos

// 1- Menú de Hamburguesa.
