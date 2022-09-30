
//Tracks the stats frame of a time-stamp optained from a file: "CGCStats/current.txt" which contains latest information from the last 5 minutes of data-mining.
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

    //Function called to create the object based on JSON data in the file: "CGCStats/current.txt" 
    loadData(){ 
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "CGCStats/current.txt", false);
        xhr.send();
        if (xhr.status==200){
            this.currentStats = JSON.parse(xhr.responseText);
            this.update();
        }
    }

    //Sets variable values and formats outputs to readable formats for display on page
    update(){
        this.time = this.currentStats[0][0];
        document.getElementById("updated").innerHTML = unixToTime(this.time);
        this.poolSize = this.currentStats[0][1];
        document.getElementById("cgcPoolSize").innerHTML = this.poolSize;
        this.totalFP = this.currentStats[0][2];
        document.getElementById("cgctotalFP").innerHTML = this.totalFP;
        this.totalLock = this.currentStats[0][3];
        document.getElementById("cgcLocked").innerHTML = this.totalLock;
        //Convert Scientific Notation String to a Number object
        this.usd = new Number(this.currentStats[0][4]);
        document.getElementById("cgcPriceUSD").innerHTML = this.usd.toFixed(15);
        //Convert Scientific Notation String to a Number object
        this.bnb = new Number(this.currentStats[0][5]);
        document.getElementById("cgcPriceBNB").innerHTML = this.bnb.toFixed(15);
    }
}

let statsT = new stats();

//update the statsT object with updated data
function loadStats(){
    statsT.loadData();
}


//Convert the Unix time stored in DB to Date-time for readability
function unixToTime(unix){
    d = new Date(unix * 1000);
    utcString = d.toUTCString();

    return utcString;
}

//Set timer to call xmlRequest every 1 minute to update stats
const interval = setInterval(function() {
    loadStats();
  }, 60000);