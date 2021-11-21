/* ******* PETICIONES ASINCRONAS ******* */

//Método nativo XMLHttpRequest
(() => {
  /*
  pasos:
  1- Crear una instancia de tipo XMLHttpRequest
  2- Asignarle el o los eventos a la instancia
  3- Abrir la petición con el metodo por el cual haremos al petición y el recurso o endpoits(url) alq ue vamos a acceder
  4- finalmente enviar la petición con el método send().
   */

  const xhr = new XMLHttpRequest(), //paso 1
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment(); // crea un fragmento del DOM

  // el evento readystatechange se dispara cuando se detecta un cambio de estado en la petición
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    //console.log(xhr);

    if (xhr.status >= 200 && xhr.status < 300) {
      //console.log("Éxito");
      //console.log(xhr.responseText); // la propiedad responseText devuelve todo el código de JSON
      let json = JSON.parse(xhr.responseText); //convierte el JSON en un objeto para JS
      //console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      console.log("Error");
      let message = xhr.statusText || "Ocurrió un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  }); //aquí va la logica de la petición. - paso 2

  //el método open abre la petición y recibe 2 parametros: 1- el método por que cual haremos la petición (verbo), y la url donde se encuetra el recurso.
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users"); //paso 3

  xhr.send(); // paso 4
})(); //Función anomima autoejecutable.

// API Fetch
(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  /* then() = es lo que ejecuta el request
     catch() = es lo que se ejecuta si falla el request
     finally() = se ejecuta independiente del resultado del request
  */
  fetch("https://jsonplaceholder.typicode.com/users") //se pasa la url de donde se obtiene el recurso y se le puede pasar como segundo parametro opciones.
    // .then((res) => {
    //   console.log(res); //la respuesta viene en formato ReadableStream.
    //   //res.text() el método text devuelve el texto plano
    //   return res.ok ? res.json() : Promise.reject(res); //aca la convertimos en formato json y la retornamos. manupulamos correctamente el error
    // })
    .then((res) => (res.ok ? res.json() : Promise.reject(res))) //si viene la data la convertimos en formato json sino para al catch. el primer then es para convertir la data y el segundo para realizar la lógica
    .then((json) => {
      //console.log(json);
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      //console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() =>
      //el finally es opcional
      console.log(
        "Esto se ejecutará independiente del resultado de la Promesa Fetch"
      )
    );
})();

//API Fetch + Async - await
(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();

      //console.log(res, json);

      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetchAsync.appendChild($fragment);
    } catch (err) {
      //console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
      console.log(
        "Esto se ejecutará independiente del resultado de la Promesa Fetch"
      );
    }
  }
  getData();
})();

//Librería Axios
(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      //console.log(res);
      res.data.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment);
    })
    .catch((err) => {
      //console.log(err.response);
      let message = err.response.statusText || "Ocurrió un error";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => {
      console.log("Esto se ejecutará independiente del resultado Axios");
    });
})();

//Librería Axios + Async - Await
(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  axios.get("https://jsonplaceholder.typicode.com/users");

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;

      //console.log(res, json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axiosAsync.appendChild($fragment);
    } catch (err) {
      //console.log(err.response);
      let message = err.response.statusText || "Ocurrió un error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    } finally {
      console.log("Esto se ejecutará independiente del resultado Axios");
    }
  }
  getData();
})();
