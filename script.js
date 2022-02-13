"use strict";
var secondStarter = null;
var secondDegree = null;

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
  const minuteDegree = (minute / 60) * 360 + (second / 60) * 6;
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
}

setInterval(setDate, 1000);
setDate();
