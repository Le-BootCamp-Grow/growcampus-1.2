// get DOM elements
const hourInput = document.getElementById('hour'),
    minuteInput = document.getElementById('minute'),
    secondInput = document.getElementById('second'),
    timerHour = document.getElementById('timer-hour'),
    timerMinute = document.getElementById('timer-minute'),
    timerSecond = document.getElementById('timer-second'),
    startBtn = document.getElementById('start-btn'),
    stopBtn = document.getElementById('stop-btn'),
    pauseBtn = document.getElementById('pause-btn'),
    setBtn = document.getElementById('set-btn'),
    startScreen = document.querySelector('.screen-1'),
    timerScreen = document.querySelector('.screen-2');

let timer,
    countdown,
    totalSeconds;

// create funtion to set the initial state of the app
function initialize() {
    timerHour.textContent = "00";
    timerMinute.textContent = "00";
    timerSecond.textContent = "00";
    /* hourInput.value = "00";
    minuteInput.value = "00";
    secondInput.value = "00"; */
    timerScreen.style.display = "none";
}

// set the format of the countdown time display
function formatTime(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}

// start the countdown timer
function startCountdown() {
    //calculate the total seconds, based on the user's inpput
    totalSeconds = hourInput.value * 3600 + minuteInput.value * 60 + secondInput.value * 1;
    // disable the Set Timer button...
    countdown = setInterval(() => {
        totalSeconds--;
        const hours = Math.floor(totalSeconds / 3600),
            minutes = Math.floor((totalSeconds - hours * 3600) / 60),
            seconds = totalSeconds % 60;
        timerHour.textContent = formatTime(hours);
        timerMinute.textContent = formatTime(minutes);
        timerSecond.textContent = formatTime(seconds);
        if (totalSeconds === 0) {
            clearInterval(countdown);
        }
    }, 1000);
}

// function to stop the countdown using the stop icon
function stopCountdown() {
    clearInterval(countdown);
    initialize;
}

// function to pause the countdown using the pause icon
function pauseCountdown() {
    clearInterval(countdown);
}

// handle the click event for the Start button
startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    timerScreen.style.display = "grid";
    startCountdown();
});

// handle the click event for the Stop button
stopBtn.addEventListener("click", () => {
    stopCountdown();
    //timerScreen.style.display = "none";
    //startScreen.style.display = "grid";
});

// handle the click event for the Pause button
pauseBtn.addEventListener("click", () => {
    pauseCountdown();
});

// handle the click event for the Set Timer button
setBtn.addEventListener("click", () => {
    stopCountdown();
    timerScreen.style.display = "none";
    startScreen.style.display = "grid";
});

// initialize the app
initialize();