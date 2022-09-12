class Enhancement {
    constructor(name, number, bonus, bonusActivated){
        this.name = name;
        this.number = number;
        this.bonus = bonus;
        this.bonusActivated = bonusActivated;
    }
}

let enhancement0 = new Enhancement("0", 0,   '0', true);
let enhancement1 = new Enhancement("1", 1, '.05', false);
let enhancement2 = new Enhancement("2", 2, '.10', false);
let enhancement3 = new Enhancement("3", 3, '.15', false);

var enhancements = [enhancement0, enhancement1,  enhancement2, enhancement3];