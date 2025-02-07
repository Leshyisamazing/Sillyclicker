const tickRate = 1000 / 30;
let clickStrength = 1;
let score = 0;

let confetti = new Building("Confetti", 0.1, 15, "buyConfetti");
let partyhat = new Building("Partyhat", 1, 100, "buyPartyhat");
let presents = new Building("Presents", 2, 200, "buyPresents");
let decorations = new Building("Decorations", 3, 300, "buyDecorations");
let music = new Building("Music", 4, 400, "buyMusic");

//upgrades down here

let venueI = new Venue("Venue I", 100, confetti);
let securityI = new Security("Security I", 200, confetti);
let speakerI = new Speaker("Speaker I", 300, confetti);
let lightsI = new Lights("Lights I", 400, confetti);

function incScore() {
    score += confetti.cps;
    score += partyhat.cps;
    score += presents.cps;
    score += decorations.cps;
    score += music.cps;
}

function scorePlusPlus() {
    score += clickStrength;
}

function updateButtons() {
    confetti.buttonState();
    partyhat.buttonState();
    presents.buttonState();
    decorations.buttonState();
    music.buttonState();

    //Upgrades below
    venueI.buttonState();
    securityI.buttonState();
    speakerI.buttonState();
    lightsI.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById("score").innerHTML =
        "$" + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);
