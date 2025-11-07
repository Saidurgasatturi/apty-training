
let countdown;
let countdownTime = 0;

function startCountdown() {
  const input = document.getElementById("countdownInput").value;
  countdownTime = parseInt(input);

  if (isNaN(countdownTime) || countdownTime <= 0) {
    alert("Please enter a valid number of seconds!");
    return;
  }

  clearInterval(countdown);

  countdown = setInterval(() => {
    document.getElementById("countdownDisplay").innerHTML = `Time left: ${countdownTime}s`;

    if (countdownTime <= 0) {
      clearInterval(countdown);
      document.getElementById("countdownDisplay").innerHTML = "⏰ Time’s up!";
    } else {
      countdownTime--;
    }
  }, 1000);
}

function resetCountdown() {
  clearInterval(countdown);
  countdownTime = 0;
  document.getElementById("countdownDisplay").innerText = "Time left: 0s";
  document.getElementById("countdownInput").value = "";
}

let stopwatch;
let stopwatchTime = 0;
let isRunning = false;

function startStopwatch() {
  if (isRunning) return; 
  isRunning = true;

  stopwatch = setInterval(() => {
    stopwatchTime++;
    document.getElementById("stopwatchDisplay").innerText = `Time: ${stopwatchTime}s`;
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatch);
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(stopwatch);
  stopwatchTime = 0;
  isRunning = false;
  document.getElementById("stopwatchDisplay").innerText = "Time: 0s";
}
