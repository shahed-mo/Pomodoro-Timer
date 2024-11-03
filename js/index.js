const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset'); // تم تعديل الكلاس هنا
const timer = document.querySelector('.timer');
let interval;
let timeLeft = 10;

function updateTime() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let time = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timer.innerHTML = time;
}

function startTime() {
    interval = setInterval(() => {
        timeLeft--;
        updateTime();
        if (timeLeft === 0) { // تم تصحيح الشرط هنا
            clearInterval(interval);
            alert('Time is done');
            timeLeft = 1500;
            updateTime();
        }
    }, 1000);
}

function stopTime() {
    clearInterval(interval);
}

function resetTime() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTime();
}

start.addEventListener('click', startTime);
stop.addEventListener('click', stopTime);
reset.addEventListener('click', resetTime);
