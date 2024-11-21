let timePro = 90 * 60;
let timerInterval;
let runningPro = false;

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
    document.querySelector('.mask49n').style.animationPlayState = 'running';

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
    document.querySelector('.mask49n').style.animationPlayState = 'paused';
    updateDisplay();
}

function resetTimer() {
    stopTimer();
    timePro = 90 * 60;
    updateDisplay();
    const timerElement = document.getElementById('timer');
    const maskElement = document.querySelector('.mask49n');

    timerElement.style.animation = 'none';
    maskElement.style.animation = 'none';

    setTimeout(() => {
        timerElement.style.animation = '';
        maskElement.style.animation = '';
    }, 1);
}

updateDisplay();
