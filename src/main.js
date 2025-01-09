const tickRate = 1000 / 30;
let score = 0;

let confetti = new Building("Confetti", 0.1, 15, "buyConfetti");

function incScore() {
    score += confetti.cps;
}

function scorePlusPlus(){
    score++;
}

function updatePage() {
    incScore();
    document.getElementById("score").innerHTML = "$"+ Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);