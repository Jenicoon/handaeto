let timePro = 8 * 60;
let timeCon = 8 * 60;
let speakingTimePro = 60;
let speakingTimeCon = 60;
let timerInterval;
let runningPro = false;
let runningCon = false;

function updateDisplay() {
    const minsPro = Math.floor(timePro / 60);
    const secsPro = timePro % 60;
    document.getElementById('total_time_pro').textContent = `${minsPro}:${secsPro < 10 ? '0' : ''}${secsPro}`;

    const minsCon = Math.floor(timeCon / 60);
    const secsCon = timeCon % 60;
    document.getElementById('total_time_con').textContent = `${minsCon}:${secsCon < 10 ? '0' : ''}${secsCon}`;

    const minsSpeakingPro = Math.floor(speakingTimePro / 60);
    const secsSpeakingPro = speakingTimePro % 60;
    document.getElementById('speaking_time_pro').textContent = `${minsSpeakingPro}:${secsSpeakingPro < 10 ? '0' : ''}${secsSpeakingPro}`;

    const minsSpeakingCon = Math.floor(speakingTimeCon / 60);
    const secsSpeakingCon = speakingTimeCon % 60;
    document.getElementById('speaking_time_con').textContent = `${minsSpeakingCon}:${secsSpeakingCon < 10 ? '0' : ''}${secsSpeakingCon}`;
}

function startPro() {
    if (runningPro) {
        return;
    }
    if (runningCon) {
        stopTimer();
    }
    speakingTimeCon = (timeCon <= 60) ? timeCon : 60;
    runningPro = true;
    document.getElementById('btn_pro').disabled = true;
    timerInterval = setInterval(() => {
        if (timePro > 0) {
            timePro--;
            speakingTimePro--;
            updateDisplay();
        } else {
            stopTimer();
            document.getElementById('bell').play();
        }
        if (speakingTimePro <= 0) {
            speakingTimePro = 0;
            stopTimer();
            document.getElementById('bell').play();
        }
    }, 1000);
}

function startCon() {
    if (runningCon) {
        return;
    }
    if (runningPro) {
        stopTimer();
    }
    speakingTimePro = (timePro <= 60) ? timePro : 60;
    runningCon = true;
    document.getElementById('btn_con').disabled = true;
    timerInterval = setInterval(() => {
        if (timeCon > 0) {
            timeCon--;
            speakingTimeCon--;
            updateDisplay();
        } else {
            stopTimer();
            document.getElementById('bell').play();
        }
        if (speakingTimeCon <= 0) {
            speakingTimeCon = 0;
            stopTimer();
            document.getElementById('bell').play();
        }
    }, 1000);
}

document.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "ArrowLeft":
            document.getElementById("btn_pro").click();
            break;
        case "ArrowRight":
            document.getElementById("btn_con").click();
            break;
    }
});

function stopTimer() {
    clearInterval(timerInterval);
    runningPro = false;
    runningCon = false;
    document.getElementById('btn_pro').disabled = false;
    document.getElementById('btn_con').disabled = false;
    updateDisplay();
}

function resetTimer() {
    stopTimer();
    timePro = 8 * 60;
    timeCon = 8 * 60;
    speakingTimePro = 60;
    speakingTimeCon = 60;
    updateDisplay();
}

updateDisplay();
