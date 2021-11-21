const d = document,
  w = window;

export default function speechReader() {
  /* Primero campturamos en variables los elementos del DOM que vamos a trabajar */
  const $speechSelect = d.getElementById("speech-select"),
    $speechTextArea = d.getElementById("speech-text"),
    $speechBtn = d.getElementById("speech-btn"),
    speechMessage = new SpeechSynthesisUtterance(); //esta es la API que nos permite interactuar con las voces que detecta el navegador

  //console.log(speechMessage);

  let voices = [];

  d.addEventListener("DOMContentLoaded", (e) => {
    // console.log(w.speechSynthesis);
    // console.log(w.speechSynthesis.getVoices());

    w.speechSynthesis.addEventListener("voiceschanged", (e) => {
      console.log(e);
      voices = w.speechSynthesis.getVoices(); //se obtienen las voces y se las pasa al arreglo
      console.log(voices);

      voices.forEach((voice) => {
        const $option = d.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} - ${voice.lang}`;

        $speechSelect.appendChild($option);
      });
    });
  });

  d.addEventListener("change", (e) => {
    if (e.target === $speechSelect) {
      speechMessage.voice = voices.find(
        (voice) => voice.name === e.target.value
      );
    }

    //console.log(speechMessage);
  });

  d.addEventListener("click", (e) => {
    if (e.target === $speechBtn) {
      speechMessage.text = $speechTextArea.value;
      w.speechSynthesis.speak(speechMessage);
    }
  });
}
