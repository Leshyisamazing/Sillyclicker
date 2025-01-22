class Upgrade {
    constructor (upgradeName, cost ){
    this.upgradeName = upgradeName;
    this.cost = cost;
    this.buttonId = "buy" + upgradeName.replace(/\s/g, '');
    this.owned = false;
    }
} 

purchase();{
    score -= this.cost;
    this.owned = true;
}


    buttonState();{
        if(this.owned){
            document.getElementById(this.buttonId).style
        }
        if(!this.visible) {
            document.getElementById(this.buttonId).style.display = "none";
            if(score >= this.cost){
                this.visible = true;
                document.getElementById(this.buttonId).style.display = 
                "initial";
            }
        }
    }