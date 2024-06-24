let startTime;
let updatedTime;
let difference;
let interval;
let running = false;
let laps = [];

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapsContainer = document.getElementById('laps');

function startStopwatch() {
    startTime = new Date().getTime();
    interval = setInterval(updateDisplay, 10);
    startStopBtn.textContent = 'Pause';
    startStopBtn.onclick = stopStopwatch;
    running = true;
}

function stopStopwatch() {
    clearInterval(interval);
    updatedTime = new Date().getTime() - startTime;
    startStopBtn.textContent = 'Start';
    startStopBtn.onclick = startStopwatch;
    running = false;
}

function resetStopwatch() {
    clearInterval(interval);
    display.textContent = '00:00:00.0';
    startStopBtn.textContent = 'Start';
    startStopBtn.onclick = startStopwatch;
    running = false;
    laps = [];
    lapsContainer.innerHTML = '';
}

function lapStopwatch() {
    if (running) {
        const lapTime = display.textContent;
        laps.push(lapTime);
        const lapElement = document.createElement('li');
        lapElement.textContent = lapTime;
        lapsContainer.appendChild(lapElement);
    }
}

function updateDisplay() {
    difference = new Date(new Date().getTime() - startTime);
    const minutes = String(difference.getUTCMinutes()).padStart(2, '0');
    const seconds = String(difference.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(Math.floor(difference.getUTCMilliseconds() / 100)).padStart(1, '0');
    display.textContent = `${minutes}:${seconds}.${milliseconds}`;
}

startStopBtn.onclick = startStopwatch;
resetBtn.onclick = resetStopwatch;
lapBtn.onclick = lapStopwatch;
