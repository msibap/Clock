"use strict";

const hourHand = document.querySelector(".clock__hand--hour");
const minuteHand = document.querySelector(".clock__hand--minute");
const secondHand = document.querySelector(".clock__hand--second");
const hourDigital = document.querySelector(".digital-clock--hour");
const minuteDigital = document.querySelector(".digital-clock--minute");
const ampmDigital = document.querySelector(".digital-clock--ampm");
const dateDigital = document.querySelector(".digital-clock--date");

var secondStarter = null;
var secondDegree = null;

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function time() {
  // Calculating time
  const time = new Date();
  const date = time.getDate();
  const month = time.getMonth();
  const day = time.getDay();
  const hour24 = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  const hour12 = hour24 % 12;
  // If Hour bigger than 12 = "pm", else = "am"
  const ampm = hour24 > 12 ? "pm" : "am";

  // Anlalog Clock
  // const secondDegree = (second / 60) * 360;
  secondHand.style.transform = `translateY(-50%) rotate(${secondDegree}deg)`;

  const minuteDegree = (minute / 60) * 360 + (second / 60) * 6;
  minuteHand.style.transform = `translateY(-50%) rotate(${minuteDegree}deg)`;

  const hourDegree = (hour24 / 12) * 360 + (minute / 60) * 30;
  hourHand.style.transform = `translateY(-50%) rotate(${hourDegree}deg)`;

  if (secondDegree >= 354) {
    secondDegree = secondDegree + 6;
  }

  if (secondStarter < 354 || secondStarter == null) {
    secondStarter = 6 * second;
    secondDegree = secondStarter;
  }

  // Digital Clock
  hourDigital.textContent = `${hour12}`.padStart(2, "0");
  minuteDigital.textContent = `${minute}`.padStart(2, "0");
  ampmDigital.textContent = ampm;
  dateDigital.textContent = `${days[day]}
    ${months[month]}
    ${date}`;
}

setInterval(time, 1000);
time();
