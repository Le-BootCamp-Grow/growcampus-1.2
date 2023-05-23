// get DOM elements
// obtenir des éléments du DOM
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

// create function to set the initial state of the app
//fonction de création pour définir l'état initial de l'application
function initialize() {
    //votre code ici...
}

// set the format of the countdown time display
// définir le format d'affichage du compte à rebours
function formatTime(time) {
    //votre code ici...
}

// start the countdown timer
// démarrer le compte à rebours
function startCountdown() {
    // calculate the total seconds, based on the user's inpput
    // calculer le nombre total de secondes, sur la base de l'entrée de l'utilisateur
    totalSeconds = hourInput.value * 3600 + minuteInput.value * 60 + secondInput.value * 1;

    // disable the Set Timer button...
    // désactiver le bouton Set Timer...

    // countdown = ...
}

// function to stop the countdown using the stop icon
// pour arrêter le compte à rebours à l'aide de l'icône d'arrêt
function stopCountdown() {
    // le code ici...
}

// function to pause the countdown using the pause icon
// pour interrompre le compte à rebours à l'aide de l'icône de pause
function pauseCountdown() {
    // le code ici...
}

// handle the click event for the Start button
// gérer l'événement de clic pour le bouton Start
startBtn.addEventListener("click", () => {
    // le code ici...
});

// handle the click event for the Stop button
// gérer l'événement de clic pour le bouton Stop
stopBtn.addEventListener("click", () => {
    // le code ici...
});

// handle the click event for the Pause button
// gérer l'événement de clic pour le bouton Pause
pauseBtn.addEventListener("click", () => {
    // le code ici...
});

// handle the click event for the Set Timer button
// gérer l'événement de clic pour le bouton Set Timer
setBtn.addEventListener("click", () => {
    // le code ici...
});

// initialize the app
// initialiser l'application
//initialize();