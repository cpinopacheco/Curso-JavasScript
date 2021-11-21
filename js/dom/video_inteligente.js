const d = document,
  w = window;

export default function smartVideo() {
  const $videos = d.querySelectorAll("video[data-smart-video]");

  const cb = (entries) => {
    entries.forEach((entry) => {
      //reproduce el video cuando el elemento el 50% visible.
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }

      //El video se pausa cuando se cambia de pestaña
      w.addEventListener("visibilitychange", (e) =>
        d.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause()
      );
    });
  };

  const observer = new IntersectionObserver(cb, { threshold: 0.5 });

  $videos.forEach((el) => observer.observe(el));
}
