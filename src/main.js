const tickRate = 1000 / 30;
let clickStrength = 1;
let score = 0;

let confetti = new Building("Confetti", 0.1, 15, "buyConfetti");
let partyhat = new Building("Partyhat", 1, 100,"buyPartyhat");
let presents = new Building("Presents", 2, 200, "buyPresents" );

let venue1 = new Venue('Venue1' , 100, confetti);

function incScore() {
    score += confetti.cps;
    score += partyhat.cps;
    score += presents.cps;
}

function scorePlusPlus() {
    score += clickStrength;
}

function updateButtons(){
    confetti.buttonState();
    partyhat.buttonState();
    presents.buttonState();
    venue1.buttonState();
}


function updatePage() {
    incScore();
    updateButtons();
    document.getElementById("score").innerHTML = 
    '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);