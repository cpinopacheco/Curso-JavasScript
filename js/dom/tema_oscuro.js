/* 
El localstorage es un API que nos permite almacenar información en el disco duro del usuario.
*/
const d = document,
  ls = localStorage;

export default function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]"); //con la notacion de corchete se accede al data-atributte que se creo

  let moon = "🌙",
    sun = "☀️";

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $themeBtn.textContent = moon;
    ls.setItem("theme", "light");
  };

  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $themeBtn.textContent = sun;
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    //getItem es el método para obtener una variable del localStorage
    if (ls.getItem("theme") === null) {
      ls.setItem("theme", "light"); //setItem es el método para asignarle una variable al localStorage y el valor
    }

    if (ls.getItem("theme") === "light") {
      lightMode();
    }

    if (ls.getItem("theme") === "dark") {
      darkMode();
    }
  });
}
