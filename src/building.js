class Building {
    constructor(buildingName, baseCps, baseCost, buttonId) {
        this.buildingName = buildingName;
        this.baseCps = baseCps / (1000 / tickRate);
        this.cost = baseCost;
        this.buttonId = buttonId;
        this.amountOwned = 0;
        this.cps = 0;
        this.visble = true; //change this to false!!
    }

    purchse(){
        score-= this.cost;
        this.amountOwned++;
        this.cps = this.baseCps * this.amountOwned;
        this.cost = Math.ceil(this.cost * 1.15 ** this.amountOwned);
    }
}