/* 
    Base PAW Wakeup of NFT and NYA score to determing wake-up costs in $PAW
*/
function PAWwakeUp(PAW, NYA){
    let wakeup = (PAW + (PAW*(NYA/100)))
    return wakeup;
}

function PAWtoFarm(){
    let farmingPeriod = document.getElementById("farmingPeriod").value;
    let pawFarm = 0;

    for (let i = 0; i < farmingPeriods.length; i++){
        if (farmingPeriod == farmingPeriods[i].name){
            pawFarm = +farmingPeriods[i].cost;
        }
    }
    return pawFarm;
}

function updateTotalPAW(){
    let pawWake = 0;
    for(let i = 0; i < farmingSlots.length; ++i){
        pawWake = pawWake + farmingSlots[i].wakeUp[0];
    }
    document.getElementById("pawWakeUp").innerHTML = pawWake;

    let pawFarm = PAWtoFarm();
    document.getElementById("pawFarmSlot").innerHTML = +pawFarm;

    let totalPAW = pawWake + pawFarm;
    document.getElementById("pawFarm").innerHTML = totalPAW;
}

function pawGenerated(){
    let generatingPaw = document.getElementById("LPPaw").value * 100;
    let maxPaw = generatingPaw * 30;
    
    document.getElementById("generatingPaw").innerHTML = generatingPaw;
    document.getElementById("maxPaw").innerHTML = maxPaw;
}