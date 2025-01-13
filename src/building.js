class Building {
    constructor(buildingName, baseCps, baseCost, buttonId) {
        this.buildingName = buildingName;
        this.baseCps = baseCps / (1000 / tickRate);
        this.baseCost = baseCost;
        this.cost = baseCost;
        this.buttonId = buttonId;
        this.amountOwned = 0;
        this.cps = 0;
        this.visible = false; //change this to false!!
    }

    purchse(){
        score -= this.cost;
        this.amountOwned++;
        this.cps = this.baseCps * this.amountOwned;
        this.cost = Math.ceil(this.cost * 1.15 ** this.amountOwned);
    }

    buttonState(){
        if(!this.visible) {
            document.getElementById(this.buttonId).style.display = "none";
            if(score >= this.baseCost){
                this.visible = true;
                document.getElementById(this.buttonId).style.display = 
                "initial";
            }
        }

        if(score < this.cost){
            document.getElementById(this.buttonId).disabled = true;
        } else {
            document.getElementById(this.buttonId).disabled = false; 
        }

        document.getElementById(this.buttonId).innerHTML =
        "Buy " +
        this.buildingName + 
        " (Cost: $" +
        Math.ceil(this.cost).toLocaleString() + 
        ") <br> Adds $" + 
        (this.baseCps * (1000 / tickRate)).toLocaleString() +
        " Per Second <br> [Owned: " +
        this.amountOwned +
        "]";
        }
    }
