const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector("body");
let timerId = 0;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener("click", evt => {
    timerId = setInterval(() => {
        const colorRand = getRandomHexColor();
        body.style.backgroundColor = colorRand;
    }, 1000);

    startBtn.disabled = true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener("click", evt => {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
})



