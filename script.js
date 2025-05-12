//--------------------NOTIFICACIONES---------------------

const fieldset = document.querySelector(".form__fieldset");

function notify() {
  const currentDisplay = window.getComputedStyle(fieldset).display;

  if (currentDisplay === "none") {
    fieldset.style.display = "flex";
  } else {
    fieldset.style.display = "none";
    console.log("hola");
  }
}

console.log(fieldset);

//----------------------TEMPORIZADOR------------------------

//Creo las variables de lastDate, que recoge la fecha final, y now, que recoge la fecha actual.
const lastDate = new Date("2025/07/06 17:30:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  //Creo una variable llamada diff que restará la fecha final a la fecha actual para saber cuánto queda.
  const diff = lastDate - now;

  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  //Declaramos las variables del HTML de días, horas, minutos y segundos y asignamos los valores extraídos antes
  const dates = document.querySelectorAll(".date__num");
  dates[0].innerHTML = days.toString().padStart(2, '0');;
  dates[1].innerHTML = hours.toString().padStart(2, '0');;
  dates[2].innerHTML = minutes.toString().padStart(2, '0');;
  dates[3].innerHTML = seconds.toString().padStart(2, '0');;

  let headerInfo = document.querySelector("#info__h1").innerHTML;

  if (diff <= 0) {
    dates[0].innerHTML = "00";
    dates[1].innerHTML = "00";
    dates[2].innerHTML = "00";
    dates[3].innerHTML = "00";
    let headerInfo = (document.querySelector("#info__h1").innerHTML =
      "Evento finalizado");
    let infoBuy = document.querySelector("#info__buy");
    infoBuy.style.backgroundColor = "#F13";
    infoBuy.removeAttribute("href");
    infoBuy.style.textDecoration = "line-through";
  }
}

const countDown = setInterval(updateCountdown, 1000);

updateCountdown();
