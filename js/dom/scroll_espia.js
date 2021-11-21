const d = document;

export default function scrollSpy() {
  const $seccions = d.querySelectorAll("section[data-scroll-spy]"); //trae todos los elementos section que tengan dentro el data-atributte: data-scroll-spy

  const cb = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        //valida que la propiedad isIntersecting sea verdadera.
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        ); //encuenta el primer selector que sea un enlace que contenga el data-attribute: data-scroll-spy y un href con un id especifico.
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };
  const observer = new IntersectionObserver(cb, {
    //root
    //rootMargin: "-250px",
    threshold: 0.5,
  });

  $seccions.forEach((el) => {
    observer.observe(el);
  });
}
