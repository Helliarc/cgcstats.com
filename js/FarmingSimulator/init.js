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

/*
Function limits the NFTs selectable based on NFT Season.  Function called when NFT Season dropdown is changed. Also resets the farm slots pending the seasons being "mixed"
*/
function updateForms(){
    var numNFT = nftSelect.options.length;
    while(numNFT > 0) {numNFT--; nftSelect.options[numNFT] = null;} 
    if (seasonSelect.value == "Season 1"){
        resetFarm();
        for (var i = 0; i < season1NFT.length; i++){
            var optn = season1NFT[i].name;
            var el = document.createElement("option");
            el.textContent = optn;
            el.value = optn;
            nftSelect.appendChild(el);
        }
    }

    if (seasonSelect.value == "Season 2"){
        resetFarm();
        for (var i = 0; i < season2NFT.length; i++){
            var optn = season2NFT[i].name;
            var el = document.createElement("option");
            el.textContent = optn;
            el.value = optn;
            nftSelect.appendChild(el);
        }
    }
}

/*
Function resets the farming table.  Clears all data and reverts to initial state.
*/
function resetFarm(){ // ~HA: Any changes to the farmingSlots class management needs to be update here.  Need to finalize farmingSlots class, or find better way to reset farm.
    for (let i = 0; i < farmingSlots.length; i++){
        farmingSlots[i].nft = null;
        farmingSlots[i].nya[0] = null;
        farmingSlots[i].image[0] = "img/blank.jpg";
        farmingSlots[i].fp[0] = null;

        farmingSlots[i].updateImage();
        farmingSlots[i].updateNYA();
        farmingSlots[i].updateFP();

        document.getElementById("totalFP").innerHTML = 0;
    }
}