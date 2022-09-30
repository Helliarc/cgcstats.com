/* This JS page SHOULD contain all initialization functions/variables to load static site data.  Populating dropdowns on initial page load and general UI defaults. SHOULD... */

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
        if(season1NFT[i].rarity < 2){
            var optn = season1NFT[i].name;
            var el = document.createElement("option");
            el.textContent = optn;
            el.value = optn;
            nftSelect.appendChild(el);
        }
    }

    for (var i = 0; i < fuseSlots.length; i++){
        var optn = fuseSlots[i].name;
        var el = document.createElement("option");
        el.textContent = optn;
        el.value = optn;
        slotSelect.appendChild(el);
    }
}

/*
Function limits the NFTs selectable based on NFT Season.  Function called when NFT Season dropdown is changed. Also resets the farm slots pending the seasons being "mixed"
*/
function updateForms(){
    var numNFT = nftSelect.options.length;
    while(numNFT > 0) {numNFT--; nftSelect.options[numNFT] = null;} 
    if (seasonSelect.value == "Season 1"){
        for (var i = 0; i < season1NFT.length; i++){
            if(season1NFT[i].rarity < 2){
                var optn = season1NFT[i].name;
                var el = document.createElement("option");
                el.textContent = optn;
                el.value = optn;
                nftSelect.appendChild(el);
            }
        }
    }

    if (seasonSelect.value == "Season 2"){
        for (var i = 0; i < season2NFT.length; i++){
            if(season2NFT[i].rarity < 2){
                var optn = season2NFT[i].name;
                var el = document.createElement("option");
                el.textContent = optn;
                el.value = optn;
                nftSelect.appendChild(el);
            }
        }
    }
}

