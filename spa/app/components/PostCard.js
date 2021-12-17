export function PostCard(props) {
  let { date, id, _embedded, slug, title } = props;
  let dateFormat = new Date(date).toLocaleString(),
    urlPoster = _embedded["wp:featuredmedia"]
      ? _embedded["wp:featuredmedia"][0].source_url
      : "";

  document.addEventListener("click", (e) => {
    //el click lo genera cualquier a que no sea un enlace dentro del article con la clase post-card.
    if (!e.target.matches(".post-card a")) return false;
    localStorage.setItem("wpPostId", e.target.dataset.id);
  });

  return `
    <article class="post-card">
      <img src="${urlPoster}" alt="${title.rendered}">
      <h2>${title.rendered}</h2>
      <p>
        <time datatime="${date}">${dateFormat}</time>
        <a href="#/${slug}" data-id="${id}">Ver Publicación</a>
      </p>
    </article>
  `;
}
