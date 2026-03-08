/* Show username */

document.getElementById("user").innerText =
localStorage.getItem("rhythraUser");

/* Wellness score */

const score = calculateWellness();

document.getElementById("score").innerText =
score + "%";

/* Apple style ring */

const circumference = 314;

document.getElementById("ringFill").style.strokeDashoffset =
circumference - (score / 100) * circumference;

/* Energy prediction */

document.getElementById("energy").innerText =
predictEnergy();

/* Gamified level */

document.getElementById("level").innerText =
getLevel();

/* AI insight */

document.getElementById("insight").innerText =
generateInsight();