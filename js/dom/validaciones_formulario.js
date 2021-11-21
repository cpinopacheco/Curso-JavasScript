const d = document;

export default function contactFormValidations() {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]"); //trae todos los elementos dentro del formulario de contacto que tengan el atributo required.

  $inputs.forEach((input) => {
    const $span = d.createElement("span"); // crea un elemento de tipo span
    $span.id = input.name; //crea un id al span
    $span.textContent = input.title; // le agrega el contenido con el valor que tiene el atributo title del input
    $span.classList.add("contact-form-error", "none"); //Le agrega 2 clases al elemento
    input.insertAdjacentElement("afterend", $span); //inserta el elemento despues del elemento seleccionado.
  });

  d.addEventListener("keyup", (e) => {
    //el evento lo originó el elemento que se le pasa al metodo matches
    if (e.target.matches(".contact-form [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;

      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }

      if (!pattern) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    //e.preventDefault(); //previene la accion predeterminada del evento

    const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");

    $loader.classList.remove("none");

    /* Simulación respuesta del servidor */
    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();

      /* desaparece el mensaje de respuesta */
      setTimeout(() => {
        $response.classList.add("none");
      }, 3000);
    }, 2000);
  });
}
