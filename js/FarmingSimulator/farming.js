/* JS Page SHOULD contain all general farming functions (Updating total FP/PAW stats/Wake-up and Farming start cost determinations), all functions will likely be re-located to applicable files as the program matures */

/* 
Function updates the total FP referencing the FarmingSlot objects
*/
function updateTotalFP(){
    let baseFP = 0;
    let totalFP = 0;
    for (let i = 0; i < farmingSlots.length; i++){
        baseFP = baseFP + farmingSlots[i].fp[0];
    }

    let enhancement = document.getElementById("enhancementLevel").value;
    for (let i = 0; i < enhancements.length; i++){
        if (enhancements[i].name == enhancement){
            totalFP = baseFP + (baseFP * +enhancements[i].bonus);
        }
    }

    let farmingPeriod = document.getElementById("farmingPeriod").value;
    for (let i = 0; i < farmingPeriods.length; i++){
        if (farmingPeriod == farmingPeriods[i].name){
            totalFP = totalFP * farmingPeriods[i].bonus;
        }
    }

    document.getElementById("totalFP").innerHTML = Math.round(totalFP);
    updateTotalPAW();
}

