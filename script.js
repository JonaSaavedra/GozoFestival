const fieldset = document.querySelector(".form__fieldset");

function notify() {
  fieldset.style.display = "flex";
}

console.log(fieldset);

//Creo las variables de lastDate, que recoge la fecha final, y now, que recoge la fecha actual.
const lastDate = new Date("2025/07/06 16:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  //Creo una variable llamada diff que restará la fecha final a la fecha actual para saber cuánto queda.
  const diff = lastDate - now;

  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  //Declaramos las variables del HTML de días, horas, minutos y segundos
  const dates = document.querySelectorAll(".date__num");
  dates[0].innerHTML = days;
  dates[1].innerHTML = hours;
  dates[2].innerHTML = minutes;
  dates[3].innerHTML = seconds;

  //   console.log(days)
  //   console.log(hours)
  //   console.log(minutes)
  //   console.log(seconds)
}

const countDown = setInterval(updateCountdown, 1000);

updateCountdown();
