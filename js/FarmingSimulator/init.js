var seasonSelect = document.getElementById("seasonSelect");  //Currently as designed, all seperate seasons of catgirl NFTs are unique. AND season 2 is not yet released.

/*
Function initializes the dropdown form contents on page load.  By default, season 1 loads first.
*/
function populateForms(){
    for (var i = 0; i < seasonsList.length; i++){
        var optn = seasonsList[i];
        var el = document.createElement("option");
        el.textContent = optn;
        el.value = optn;
        seasonSelect.appendChild(el);
    }
    
    for (var i = 0; i < season1NFT.length; i++){
        var optn = season1NFT[i].name;
        var el = document.createElement("option");
        el.textContent = optn;
        el.value = optn;
        nftSelect.appendChild(el);
    }

    for (var i = 0; i < farmingSlots.length; i++){
        var optn = farmingSlots[i].name;
            var el = document.createElement("option");
            el.textContent = optn;
            el.value = optn;
            slotSelect.appendChild(el);
    }

    for (var i = 0; i < farmingPeriods.length; i++){
        var optn = farmingPeriods[i].name;
            var el = document.createElement("option");
            el.textContent = optn;
            el.value = optn;
            farmingPeriod.appendChild(el);
    }

    for (var i = 0; i < enhancements.length; i++){
        var optn = enhancements[i].name;
            var el = document.createElement("option");
            el.textContent = optn;
            el.value = optn;
            enhancementLevel.appendChild(el);
    }

    for (var i = 0; i < farmNames.length; i++){
        var optn = farmNames[i];
            var el = document.createElement("option");
            el.textContent = optn;
            el.value = optn;
            memorySelect.appendChild(el);
    }

    /*
    Checks if localStorage contains a farm, if so, loads it into viewer.
    */
    if (localStorage.length > 0){
        getFarmInit();
    }
}