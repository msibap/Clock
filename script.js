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

function setDate() {
  const time = new Date();
  const second = time.getSeconds();
  const minute = time.getMinutes();
  const hour = time.getHours();
  const hour12 = hour % 12;
  // if Hour bigger than 12 = "pm", else = "am"
  const ampm = hour > 12 ? "pm" : "am";

  const day = time.getDay();
  const month = time.getMonth();
  const date = time.getDate();

  // Anlalog Clock

  //   const secondDegree = (second / 60) * 360;
  secondHand.style.transform = `translateY(-50%) rotate(${secondDegree}deg)`;

  const minuteDegree = (minute / 60) * 360 + (second / 60) * 6;
  minuteHand.style.transform = `translateY(-50%) rotate(${minuteDegree}deg)`;

  const hourDegree = (hour / 12) * 360 + (minute / 60) * 30;
  hourHand.style.transform = `translateY(-50%) rotate(${hourDegree}deg)`;

  if (secondDegree >= 354) {
    secondDegree = secondDegree + 6;
  }

  if (secondStarter < 354 || secondStarter == null) {
    secondStarter = 6 * second;
    secondDegree = secondStarter;
  }

  // Digital Clock

  // Adds Zero before the Hour if its less than 10
  hourDigital.textContent = hour12 < 10 ? `0${hour12}` : hour12;
  // Adds Zero before the Minute if its less than 10
  minuteDigital.textContent = minute < 10 ? `0${minute}` : minute;
  ampmDigital.textContent = ampm;
  dateDigital.textContent = `${days[day]}
  ${months[month]}
  ${date}`;
}

setInterval(setDate, 1000);
setDate();
