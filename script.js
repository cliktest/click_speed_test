/* =========================
CLICK CHECK TOOL
========================= */

let clickCount = 0;

const clickButton = document.getElementById("clickButton");
const resetBtn = document.getElementById("resetBtn");
const clickDisplay = document.getElementById("clickCount");

clickButton.addEventListener("click", () => {

clickCount++;

clickDisplay.innerText = clickCount;

});

resetBtn.addEventListener("click", () => {

clickCount = 0;

clickDisplay.innerText = "0";

});



/* =========================
SPEED TEST TOOL
========================= */

let speedClicks = 0;
let startTime = null;

const speedClickButton = document.getElementById("speedClickButton");
const speedResetBtn = document.getElementById("speedResetBtn");

const speedClickDisplay = document.getElementById("speedClickCount");
const cpsDisplay = document.getElementById("cps");


speedClickButton.addEventListener("click", () => {

if(startTime === null){

startTime = new Date().getTime();

}

speedClicks++;

speedClickDisplay.innerText = speedClicks;

updateCPS();

});


speedResetBtn.addEventListener("click", resetSpeedTest);


function updateCPS(){

const currentTime = new Date().getTime();

const elapsed = (currentTime - startTime) / 1000;

const cps = speedClicks / elapsed;

cpsDisplay.innerText = cps.toFixed(2);

}


function resetSpeedTest(){

speedClicks = 0;
startTime = null;

speedClickDisplay.innerText = "0";
cpsDisplay.innerText = "0.00";

}

