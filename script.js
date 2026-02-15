let clicks = 0;
let startTime = null;

const clickButton = document.getElementById("clickButton");
const resetBtn = document.getElementById("resetBtn");

const clickCountDisplay = document.getElementById("clickCount");
const cpsDisplay = document.getElementById("cps");

clickButton.addEventListener("click", () => {

    if (startTime === null) {
        startTime = new Date().getTime();
    }

    clicks++;

    clickCountDisplay.innerText = clicks;

    updateCPS();

});

resetBtn.addEventListener("click", reset);

function updateCPS() {

    const currentTime = new Date().getTime();

    const elapsed = (currentTime - startTime) / 1000;

    const cps = clicks / elapsed;

    cpsDisplay.innerText = cps.toFixed(2);

}

function reset() {

    clicks = 0;
    startTime = null;

    clickCountDisplay.innerText = "0";
    cpsDisplay.innerText = "0.00";

}
