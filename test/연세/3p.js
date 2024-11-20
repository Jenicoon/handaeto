let timePro = 3 * 60;
let timerInterval;
let runningPro = false;
let popupTime = 120;
let popupInterval = null;

function updateDisplay() {
    const minsPro = Math.floor(timePro / 60);
    const secsPro = timePro % 60;
    document.getElementById('total_time_pro').textContent = `${minsPro}:${secsPro < 10 ? '0' : ''}${secsPro}`;
}

function startPro() {
    if (runningPro) {
        return;
    }
    runningPro = true;
    document.getElementById('btn_pro').disabled = true;
    document.getElementById('timer').style.animationPlayState = 'running';
    document.querySelector('.mask3p').style.animationPlayState = 'running';

    timerInterval = setInterval(() => {
        if (timePro > 1) {
            timePro--;
            updateDisplay();
        } else {
            document.getElementById('bell').play();
            timePro--;
            updateDisplay();
            stopTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    runningPro = false;
    document.getElementById('btn_pro').disabled = false;
    document.getElementById('timer').style.animationPlayState = 'paused';
    document.querySelector('.mask3p').style.animationPlayState = 'paused';
    updateDisplay();
}

function resetTimer() {
    stopTimer();
    timePro = 3 * 60;
    updateDisplay();

    const timerElement = document.getElementById('timer');
    const maskElement = document.querySelector('.mask3p');

    timerElement.style.animation = 'none';
    maskElement.style.animation = 'none';

    setTimeout(() => {
        timerElement.style.animation = '';
        maskElement.style.animation = '';
    }, 1);
}

updateDisplay();

function talk() {
    document.getElementById("popup").style.display = "block";
    popupTime = 120;
    updatePopupTimer();
}

function updatePopupTimer() {
    const mins = Math.floor(popupTime / 60);
    const secs = popupTime % 60;
    document.getElementById("popup-timer").textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function startTimer() {
    if (popupInterval) {
        clearInterval(popupInterval);
    }
    popupInterval = setInterval(() => {
        if (popupTime > 0) {
            popupTime--;
            updatePopupTimer();
        } else {
            clearInterval(popupInterval);
            document.getElementById("popup-timer").textContent = "시간 종료!";
        }
    }, 1000);
}

function closePopup() {

    document.getElementById("popup").style.display = "none";

    clearInterval(popupInterval);
    popupInterval = null;
}