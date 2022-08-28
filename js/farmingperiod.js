class FarmingPeriod {
    constructor(name, duration, bonus, cost){
        this.name = name;
        this.duration = duration;
        this.bonus = bonus;
        this.cost = cost;
    }
}

let sevenDay = new FarmingPeriod("7 day", 7, .5, 0);
let fourteenDay = new FarmingPeriod("14 day", 14, 1, 4000);

var farmingPeriods = [fourteenDay, sevenDay];