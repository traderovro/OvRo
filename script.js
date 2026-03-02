let time = 30; // countdown
let signals = ["BIG", "SMALL"]; // signals array

function updateTimer() {
  time--;

  if(time <= 0){
    time = 30; // reset timer
    // Randomly select signal
    let randomIndex = Math.floor(Math.random() * signals.length);
    document.getElementById("signal").innerText = signals[randomIndex];
  }

  document.getElementById("timer").innerText =
    "00:" + (time < 10 ? "0" + time : time);
}

// Call every 1 second
setInterval(updateTimer, 1000);
