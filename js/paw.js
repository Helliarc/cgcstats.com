function PAWwakeUp(PAW, NYA){
    return (PAW + (PAW*(NYA/100)));
}

function PAWtoFarm(farmingPeriod){
    if (farmingPeriod == "7 day"){
        return 0;
    }

    if (farmingPeriod == "14 day"){
        return 4000;
    }
}