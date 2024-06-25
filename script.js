const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

const timeEl = document.getElementById("currentTime");

var alarmSound = new Audio("./assets/alarm_wav.mp3");
let alarmTime = null;

function currentTime() {
  timeEl.textContent = ``;
  const date = new Date();
  const hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  let hour = hours % 12;
  hour = hour ? hour : 12;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let displayTime = `${hour}:${minutes}:${seconds} ${ampm}`;
  let now = `${hours}:${minutes}:${seconds}`;

  const timeNow = document.createElement("div");
  timeNow.id = "currentTime";
  timeNow.textContent = displayTime;
  timeEl.appendChild(timeNow);
  checkAlarm(now);
  setInterval(currentTime, 1000);
}

function setAlarm() {
  var alarmInput = document.getElementById("alarmTime").value;
  if (alarmInput) {
    alarmTime = alarmInput + ":" + 0 + 0;
    console.log("Setting Alarm");
    alert("Alarm Set")
  }
}
function checkAlarm(now) {
  if (now === alarmTime) {
    alarmSound.play();
    console.log("Alarm ringing!");
    alarmTime = null;
  }
}
function stopAlarm() {
  alarmSound.pause()
  alarmTime = null;
  alert("Alarm Silenced")
  console.log("Alarm silence!");
  document.getElementById("alarmTime").value = "";
}

currentTime();
