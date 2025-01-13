const tickRate = 1000 / 30;
let score = 0;

let confetti = new Building("Confetti", 0.1, 15, "buyConfetti");
let partyhat = new Building("Partyhat", 1, 100,"buyConfetti");
let presents = new Building("Presents", 2, 200, "buyPresents" );

function incScore() {
    score += confetti.cps;
    score += partyhat.cps;
    score += presents.cps;
}

function scorePlusPlus() {
    score++;
}

function updateButtons(){
    confetti.buttonState();
    partyhat.buttonState();
    presents.buttonState();
}


function updatePage() {
    incScore();
    document.getElementById("score").innerHTML = 
    '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);