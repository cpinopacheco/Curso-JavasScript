document.addEventListener("DOMContentLoaded", (e) => {
  const includeHtml = (el, url) => {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;

      if (xhr.status >= 200 && xhr.status < 300) {
        /* outerHTML reemplaza el elemento */
        el.outerHTML = xhr.responseText;
      } else {
        let message =
          xhr.statusText ||
          "Error al cargar el archivo, verifica que estes haciendo la petición por http o https";

        el.outerHTML = `<div><p>Error ${xhr.status}: ${message}</p></div>`;
      }
    });

    xhr.open("GET", url);

    xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");

    xhr.send();
  };

  /* trae todos los elementos que contengan el atributo */
  document
    .querySelectorAll("[data-include]")
    .forEach((el) => includeHtml(el, el.getAttribute("data-include")));
});
