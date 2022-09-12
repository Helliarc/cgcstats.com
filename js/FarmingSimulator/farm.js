/* This is the farm object that consolidates the entire farm, object is saved/updated to save/delete user instances of farms */

let userStorage = window.localStorage;

class farmSave{
    constructor(slot1, slot2, slot3, slot4, slot5){
        this.slots = [slot1, slot2, slot3, slot4, slot5];
        let tokensLP = 0;
        let farmSeason = 'season 1';
    };

    updateSlot(i){        
        this.slots[i] = SaveSlots[i];
    }

    writeFile(){
        let farmx = document.getElementById('memorySelect');
        userStorage.setItem(farmx.value, JSON.stringify(this));
    }

    readFile(){
       
    }
}

class SaveSlot{
    constructor (NFT, NYA, ENH){
        this.nft = NFT;
        this.nya = NYA;
        this.enh = ENH;
    }
}

let slot1ss = new SaveSlot(null, null, true);
let slot2ss = new SaveSlot(null, null, false);
let slot3ss = new SaveSlot(null, null, false);
let slot4ss = new SaveSlot(null, null, false);
let slot5ss = new SaveSlot(null, null, false);
let SaveSlots = [slot1ss, slot2ss, slot3ss, slot4ss, slot5ss];

let farm = new farmSave(slot1ss, slot2ss, slot3ss, slot4ss, slot5ss);

let farmNames = ['farm 0', 'farm 1', 'farm 2', 'farm 3', 'farm 4', 'farm 5'];

function saveFarm(){
    let farmName = document.getElementById('memorySelect');
    for (let i = 0; i < SaveSlots.length; i++){
        SaveSlots[i].nft = farmingSlots[i].nft.name;
        SaveSlots[i].nya = farmingSlots[i].nya[0];
        SaveSlots[i].enh = farmingSlots[i].bonusActivated[0];
        farm.updateSlot(i);
    }

    farm.farmSeason = seasonSelect.value;
    farm.tokensLP = document.getElementById("LPPaw").value;
    farm.writeFile();

    /* Updates the Farming Tables when saving a Farm to Farm other than Farm 0 */
    if (farmName.value != 'farm 0'){
        var farmy = JSON.parse(userStorage.getItem(farmName.value));
        for (let i = 0; i < farmNames.length; i++){
            if (farmNames[i] == farmName.value){
                FTaddFarm(farmy, i); //farmingslot.js
            }
        }
    }
    
}
/*
    Function updates the main Farming Table with selected Farm Save
*/
function getFarm(){
    var farmx = document.getElementById('memorySelect');
    var farmy = JSON.parse(userStorage.getItem(farmx.value));

    addFarm(farmy); //farmingslot.js
}


/*
    Function updates the saved farming tables
*/
function getFarmInit(){
    for (let i = 0; i < userStorage.length; i++){
        var farmy = JSON.parse(userStorage.getItem(farmNames[i]));
        if (i == 0){
            addFarm(farmy); //farmingslot.js
        }
        if (i > 0){
            FTaddFarm(farmy, i); //farmingslot.js
        }
    }
}