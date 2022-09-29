class stats{
    constructor(name, time, poolSize, totalFP, totalLock, usd, bnb){
        this.name = name;
        this.time = time;
        this.poolSize = poolSize;
        this.totalFP = totalFP;
        this.totalLock = totalLock;
        this.usd = usd;
        this.bnb = bnb;
        this.currentStats = null;
    }

    loadData(){ 
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "CGCStats/current.txt", false);
        xhr.send();
        if (xhr.status==200){
            this.currentStats = JSON.parse(xhr.responseText);
            this.printStats();
        }
    }

    printStats(){
        this.update();
        console.log("test: ", this.currentStats[0][2]);
        console.log("poolsize", this.poolSize);
    }

    update(){
        this.time = unixToTime(this.currentStats[0][0]);
        document.getElementById("updated").innerHTML = this.time;
        this.poolSize = this.currentStats[0][1];
        document.getElementById("cgcPoolSize").innerHTML = this.poolSize;
        this.totalFP = this.currentStats[0][2];
        document.getElementById("cgctotalFP").innerHTML = this.totalFP;
        this.totalLock = this.currentStats[0][3];
        document.getElementById("cgcLocked").innerHTML = this.totalLock;
        this.usd = new Number(this.currentStats[0][4]);
        document.getElementById("cgcPriceUSD").innerHTML = this.usd.toFixed(15);
        console.log(typeof this.usd);
        this.bnb = new Number(this.currentStats[0][5]);
        document.getElementById("cgcPriceBNB").innerHTML = this.bnb.toFixed(15);
    }
}

function loadStats(){
    let statsT = new stats(null, null, null, null, null, null, null);
    statsT.loadData();
}

function unixToTime(unix){
    d = new Date(unix * 1000);
    utcString = d.toDateString();

    return utcString;
}