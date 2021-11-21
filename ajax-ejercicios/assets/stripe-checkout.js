import STRIPE_KEYS from "./stripe-keys.js ";
//console.log(STRIPE_KEYS);

const d = document,
  $tacos = d.getElementById("tacos"),
  $template = d.getElementById("taco-template").content,
  $fragament = d.createDocumentFragment(),
  fetchOptions = {
    headers: {
      Authorization: `Bearer ${STRIPE_KEYS.secret}`, //autenticación de stripe API
    },
  };

//Se realiza dos peticiones dentro de la promesa, cada petición se para a modo de arreglo
/* 
 - El metodo all va a espera que le respodan, y luego va a ejecutar el metodo then 
 - El método then esta esperando recibir todas las respuestas del metodo Promise.all() y por cada respuesta se creara un nuevo arreglo con map que tendra las 2 respuestas en formato JSON
 - El segundo then ya es para imprimir la respuestas como un objeto
 - El catch es para controlar el error.
 - El orden en que se hacen las peticiones en el all y como se van a ir mapeando(primero products y despues prices)
 */

let prices, products;

const moneyFormat = (num) => `$${num.slice(0, -2)}.${num.slice(-2)}`; //el primer slice elimina los ultimos 2 valores y segundo agrega los ultimos 2 valores

Promise.all([
  fetch("https://api.stripe.com/v1/products", fetchOptions),
  fetch("https://api.stripe.com/v1/prices", fetchOptions),
])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((json) => {
    //console.log(json);
    products = json[0].data;
    prices = json[1].data;
    console.log(products, prices);

    prices.forEach((el) => {
      //se genera un filtro del arreglo producto = por cada producto evulua que el id sea igual al id de producto que se encuentra en la propiedad product del arreglo prices
      let productData = products.filter((product) => product.id === el.product);
      console.log(productData);

      $template.querySelector(".taco").setAttribute("data-price", el.id);
      $template.querySelector("img").src = productData[0].images[0]; //busca una etiqueta img dentro del nodo guardado en la variable $template y en su atributo src pasale el la data.
      $template.querySelector("img").alt = productData[0].name;
      $template.querySelector("figcaption").innerHTML = `
        ${productData[0].name}
        <br>
        ${moneyFormat(el.unit_amount_decimal)} ${el.currency}
      `;

      //En la variable clone, se importa el nodo que se le pasa por parametro, el valor true significa que queremos el nodo con todo lo que tiene dentro, es decir, con toda la estructura html
      let $clone = d.importNode($template, true);
      $fragament.appendChild($clone);
    });

    $tacos.appendChild($fragament); //al elemento que esta guardado en la variable Tacos le agrega como hijo el fragmento.
  })
  .catch((err) => {
    console.log(err);
    let message =
      err.statusText || "Ocurrió un error al conectarse con la API de Stripe";
    $tacos.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
  });

d.addEventListener("click", (e) => {
  //el evento de click se ejecuta con cualquier elemento que este dentro del elemento con la clase taco.
  if (e.target.matches(".taco *")) {
    let price = e.target.parentElement.getAttribute("data-price"); //del elemento que origino el evento, accede a su elemento padre y obtiene el atributo data-price
    //console.log(priceId);

    //algunos métodos y propiedades vienen en la documentación de Stripe
    Stripe(STRIPE_KEYS.public)
      .redirectToCheckout({
        lineItems: [{ price, quantity: 1 }],
        mode: "subscription",
        successUrl:
          "http://127.0.0.1:5500/ajax-ejercicios/assets/stripe-success.html",
        cancelUrl:
          "http://127.0.0.1:5500/ajax-ejercicios/assets/stripe-cancel.html",
      })
      .then((res) => {
        console.log(res);
        if (res.error) {
          $tacos.insertAdjacentHTML("afterend", res.error.message);
        }
      });
  }
});

//Todas las Api´s privadas tienen sus propios mecanimos de autenticación.

/* fetch("https://api.stripe.com/v1/products", {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`, //autenticación de stripe API
  },
})
  .then((res) => {
    //aqui nos responde la api y la retornamos la respuesta en formato JSON
    console.log(res);
    return res.json();
  })
  .then((json) => {
    console.log(json);
  });

fetch("https://api.stripe.com/v1/prices", {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`, //autenticación de stripe API
  },
})
  .then((res) => {
    //aqui nos responde la api y la retornamos la respuesta en formato JSON
    console.log(res);
    return res.json();
  })
  .then((json) => {
    console.log(json);
  }); */
