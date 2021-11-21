const d = document;
export function digitalClock(clock, btnPlay, btnStop) {
  let clockTempo;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);

      e.target.disabled = true; //Desabilita el botón
    }

    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo); //se limpia el intervalo de tiempo
      d.querySelector(clock).innerHTML = null; //setemos la propiedad a null para que lo deje vacio.
      d.querySelector(btnPlay).disabled = false;
    }
  });
}

export function alarm(sound, btnPlay, btnStop) {
  let alarmTempo;
  const $alarm = d.createElement("audio");
  $alarm.src = sound;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alarmTempo = setTimeout(() => {
        $alarm.play();
      }, 1000);
      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearTimeout(alarmTempo);
      $alarm.pause(); //pausa el archivo de audio
      $alarm.currentTime = 0; //vuelve el audio al origen (stop)
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
