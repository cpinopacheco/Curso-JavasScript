import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { ContactForm } from "./ContactForm.js";
import { Post } from "./Post.js";
import { PostCard } from "./PostCard.js";
import { SearchCard } from "./SearchCards.js";

export async function Router() {
  const w = window,
    d = document,
    $main = d.getElementById("main");
  let { hash } = location;
  console.log(hash);

  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        //console.log(posts);
        let html = "";
        posts.forEach((post) => (html += PostCard(post)));
        $main.innerHTML = html;
      },
    });
  } else if (hash.includes("#/search")) {
    //el método includes busca en un string si existe el valor y si lo encuentra retorna verdadero.
    let query = localStorage.getItem("wpSearch");

    if (!query) {
      d.querySelector(".loader").style.display = "none";
      return false; //si no hay nada en la variable query
    }

    await ajax({
      url: `${api.SEARCH}${query}`,
      cbSuccess: (search) => {
        console.log(search);
        let html = "";
        if (search.length === 0) {
          html = `
            <p class="error">
              No existen resultados de búsqueda para el término <mark>${query}</mark>
            </p>
          `;
        } else {
          search.forEach((post) => {
            html += SearchCard(post);
          });
        }
        $main.innerHTML = html;
      },
    });
  } else if (hash === "#/contacto") {
    $main.appendChild(ContactForm()); //appenchild se utiliza cuando agregamos un Nodo.
    ContactForm;
  } else {
    Post;
    console.log(`${api.POST}/${localStorage.getItem("wpPostId")}`);
    await ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post) => {
        console.log(post);
        $main.innerHTML = Post(post);
      },
    });
  }

  d.querySelector(".loader").style.display = "none";
}
