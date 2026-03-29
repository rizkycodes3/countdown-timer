//* select element
const inMinutesEl = document.getElementById("minute");
const inSecondsEl = document.getElementById("second");
const btnStartEl = document.getElementById("start");
const spanCountdownEl = document.getElementById("countdown");
const sound = new Audio("classic-alarm.wav");
let countdownInterval;

//* function to start countdown
btnStartEl.addEventListener("click", function () {
  if (inMinutesEl.value === "") inMinutesEl.value = "0";
  const inMinutes = parseInt(inMinutesEl.value);
  const inSeconds = parseInt(inSecondsEl.value);
  let totalSeconds = inMinutes * 60 + inSeconds;

  //* Check if the number is valid
  if (isNaN(totalSeconds) || inMinutes < 0 || inSeconds < 0 || inSeconds >= 60) {
    alert("Please enter valid minutes and seconds.");
    return;
  }

  //* Clear any existing intervals
  clearInterval(countdownInterval);
  spanCountdownEl.textContent = `${inMinutes.toString().padStart(2, "0")}:${inSeconds.toString().padStart(2, "0")}`;

  //* Start the countdown
  countdownInterval = setInterval(function () {
    totalSeconds--;

    //* the condition when the timer runs out
    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      spanCountdownEl.textContent = "00:00";
      sound.play().then(() => {
        setTimeout(() => {
          sound.pause();
          sound.currentTime = 0;
        }, 5000);
      });
      return;
    }

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    spanCountdownEl.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, 1000);
});
