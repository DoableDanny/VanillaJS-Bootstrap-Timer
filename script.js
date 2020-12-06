let incrementHoursBtn = document.getElementById("increment-hours-btn");
let decrementHoursBtn = document.getElementById("decrement-hours-btn");
let incrementMinsBtn = document.getElementById("increment-mins-btn");
let decrementMinsBtn = document.getElementById("decrement-mins-btn");
let hoursLeftElement = document.getElementById("hours-left");
let minsLeftElement = document.getElementById("mins-left");
let secsLeftElement = document.getElementById("secs-left");
let playPauseBtn = document.getElementById("play-pause-btn");
let resetBtn = document.getElementById("reset-btn");

let secondsLeft = 900;
let timerOn = false;
let interval;

// Time control functions
const incrementHours = () => {
  secondsLeft += 3600;
  clockify();
};

const decrementHours = () => {
  if (secondsLeft > 3600) secondsLeft -= 3600;
  clockify();
};

const incrementMins = () => {
  secondsLeft += 300;
  clockify();
};

const decrementMins = () => {
  if (secondsLeft > 300) secondsLeft -= 300;
  clockify();
};

// Convert seconds to display times
const clockify = () => {
  let hours = Math.floor(secondsLeft / 60 / 60);
  let mins = Math.floor((secondsLeft / 60) % 60);
  let secs = Math.floor(secondsLeft % 60);

  let displayHours = hours < 10 ? `0${hours}` : hours;
  let displayMins = mins < 10 ? `0${mins}` : mins;
  let displaySecs = secs < 10 ? `0${secs}` : secs;

  updateClockTime(displayHours, displayMins, displaySecs);
};

// Render updated times
const updateClockTime = (hours, mins, secs) => {
  hoursLeftElement.innerText = hours + " Hours";
  minsLeftElement.innerText = mins + " Mins";
  secsLeftElement.innerText = secs + " Secs";
};

const startOrStopClock = () => {
  timerOn = !timerOn;
  if (timerOn) {
    interval = setInterval(() => {
      if (secondsLeft > 0) {
        secondsLeft--;
        clockify();
        console.log("int");
      } else clearInterval(interval);
    }, 1000);
  } else clearInterval(interval);
};

const resetClock = () => {
  clearInterval(interval);
  updateClockTime("00", "15", "00");
  timerOn = false;
};

// EVENT LISTENERS
// Time control btns
incrementHoursBtn.addEventListener("click", incrementHours);
decrementHoursBtn.addEventListener("click", decrementHours);
incrementMinsBtn.addEventListener("click", incrementMins);
decrementMinsBtn.addEventListener("click", decrementMins);

// Play/pause btn
playPauseBtn.addEventListener("click", startOrStopClock);

// Reset btn
resetBtn.addEventListener("click", resetClock);
