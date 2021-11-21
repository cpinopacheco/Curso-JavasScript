const d = document,
  n = navigator;

export default function getGeolocation(id) {
  const $id = d.getElementById(id);

  const options = {
    enableHighAccuracy: true, //acelecera el hardware para que tome la mejor lectura.
    timeout: 5000, //Cuanto tiempo estara esperando para tomar la lectura.
    maximumAge: 0, //para que no se cachee la lectura.
  };

  const success = (position) => {
    let coords = position.coords;
    console.log(position);

    $id.innerHTML = `
        <p>Tú posición actual es:</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Lontigud: <b>${coords.longitude}</b></li>
            <li>Exactitud: <b>${coords.accuracy}</b> metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>
    `;
  };

  const error = (err) => {
    $id.innerHTML = `<p><mark>Error: ${err.code}, Mensaje: ${err.message}</mark></p>`;
    console.log(`Error: ${err.code}, Mensaje: ${err.message}`);
  };

  n.geolocation.getCurrentPosition(success, error, options);
}
