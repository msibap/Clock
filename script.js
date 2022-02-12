"use strict";
var secondStarter = null;
var secondDegree = null;
var minuteStarter = null;
var minuteDegree = null;

const hourHand = document.querySelector(".clock__hand--hour");
const minuteHand = document.querySelector(".clock__hand--minute");
const secondHand = document.querySelector(".clock__hand--second");

function setDate() {
  const time = new Date();
  //   console.log(time);

  const second = time.getSeconds();
  //   const secondDegree = (second / 60) * 360;
  secondHand.style.transform = `translateY(-50%) rotate(${secondDegree}deg)`;

  const minute = time.getMinutes();
  //   const minuteDegree = (minute / 60) * 360 + (second / 60) * 6;
  minuteHand.style.transform = `translateY(-50%) rotate(${minuteDegree}deg)`;

  const hour = time.getHours();
  const hourDegree = (hour / 12) * 360 + (minute / 60) * 30;
  hourHand.style.transform = `translateY(-50%) rotate(${hourDegree}deg)`;

  if (secondDegree >= 354) {
    secondDegree = secondDegree + 6;
  }

  if (secondStarter < 354 || secondStarter == null) {
    secondStarter = 6 * second;
    secondDegree = secondStarter;
  }

  if (minuteDegree >= 359.9) {
    minuteDegree = minuteDegree + 0.1;
  }

  if (minuteStarter < 359.9 || minuteStarter == null) {
    minuteStarter = (minute / 60) * 360 + (second / 60) * 6;
    minuteDegree = minuteStarter;
  }
}

setInterval(setDate, 1000);
setDate();
