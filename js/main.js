/*
*********************************************************
ALERT ALERT ALERT ALERT ALERT ALERT!!!
*********************************************************
This file is most definitely out of date, DO NOT USE!  This file
is a placeholder for the combination of all JS files if performance of
the site dictates it.  To use this file, you must update it first.
*/

class CatgirlNFT {
    constructor(name, season, rarity, baseFP, baseWake, airdrop, image){
        this.name = name;
        this.season = season;
        this.rarity = rarity;
        this.baseFP = baseFP;
        this.baseWake = baseWake;
        this.airdrop = airdrop;
        this.image = image;
    }
}

//Season 1
let Mae1    = new CatgirlNFT("Mae"    , 1, 0, 0    , 0     , false, "img/s1/MaeHS.png");
let Lisa    = new CatgirlNFT("Lisa"   , 1, 0, 0    , 0     , true , "img/s1/LisaHS.png");
let Kita    = new CatgirlNFT("Kita"   , 1, 1, 100  , 500   , false, "img/s1/KitaHS.png");
let Aoi     = new CatgirlNFT("Aoi"    , 1, 1, 100  , 500   , true , "img/s1/AoiHS.png");
let Hana    = new CatgirlNFT("Hana"   , 1, 2, 400  , 2000  , false, "img/s1/HanaHS.png");
let Rin     = new CatgirlNFT("Rin"    , 1, 2, 400  , 2000  , true , "img/s1/RinHS.png");
let Celeste = new CatgirlNFT("Celeste", 1, 3, 1600 , 8000  , false, "img/s1/CelesteHS.png");
let Mittsy  = new CatgirlNFT("Mittsy" , 1, 4, 32000, 240000, false, "img/s1/MittsyHS.png");

//Season 2
let Mae2    = new CatgirlNFT("Mae2"   , 2, 0, 0    , 0     , false, "img/s2/1MaeHS.jpg");
let Rubi    = new CatgirlNFT("Rubi"   , 2, 0, 0    , 0     , false, "img/s2/1RubiHS.jpg");
let Eve     = new CatgirlNFT("Eve"    , 2, 0, 0    , 0     , false, "img/s2/1EveHS.jpg");
let Lulu    = new CatgirlNFT("Lulu"   , 2, 1, 100  , 500   , false, "img/s2/2LuluHS.jpg");
let Coco    = new CatgirlNFT("Coco"   , 2, 1, 100  , 500   , false, "img/s2/2CocoHS.jpg");
let Grace   = new CatgirlNFT("Grace"  , 2, 2, 400  , 2000  , false, "img/s2/3GraceHS.jpg");
let Yuna    = new CatgirlNFT("Yuna"   , 2, 2, 400  , 2000  , false, "img/s2/3YunaHS.jpg");
let Raven   = new CatgirlNFT("Raven"  , 2, 3, 1600 , 8000  , false, "img/s2/4RavenHS.jpg");
let Maiko   = new CatgirlNFT("Maiko"  , 2, 3, 1600 , 8000  , false, "img/s2/4MaikoHS.jpg");
let Feline  = new CatgirlNFT("Feline" , 2, 4, 32000, 240000, false, "img/s2/5FelineHS.jpg");


var season1NFT = [Mae1, Lisa, Kita, Aoi, Hana, Rin, Celeste, Mittsy];
var season2NFT = [Rubi, Mae2, Eve, Lulu, Coco, Grace, Yuna, Raven, Maiko, Feline];

/* 
Function returns the NFT OBJECT by name, useful when you want all of the base data of a specific NFT 
*/
function getNFT(name){
    if (seasonSelect.value == "Season 1"){
        for (let i = 0; i < season1NFT.length; i++){
            if (season1NFT[i].name == name){
                return season1NFT[i];
            }
        }
    }

    if (seasonSelect.value == "Season 2"){
        for (let i = 0; i < season2NFT.length; i++){
            if (season2NFT[i].name == name){
                return season2NFT[i];
            }
        }
    }
}


/* 
Function returns the NFT OBJECT by index, useful when you want all of the base data of a specific NFT by Index
*/
function getNFTbyIndex(index){
    if (seasonSelect.value == "Season 1"){
            return season1NFT[index];
        }
    

    if (seasonSelect.value == "Season 2"){
            return season2NFT[index];
        }
    
}

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

class FarmingPeriod {
    constructor(name, duration, bonus, cost){
        this.name = name;
        this.duration = duration;
        this.bonus = bonus;
        this.cost = cost;
    }
}

let sevenDay = new FarmingPeriod("7 day", 7, .5, 0);
let fourteenDay = new FarmingPeriod("14 day", 14, 1, 4000);

var farmingPeriods = [fourteenDay, sevenDay];



/* This is the Farming Slot Object, its instantiations, and all relatable functions */

class FarmingSlot {
    constructor(name, number, nft, image, nya, wakeUp, fp, bonus, bonusActivated){
        this.name = name;
        this.number = number;
        this.nft = nft;
        this.image = image;
        this.nya = nya;
        this.wakeUp = wakeUp;
        this.fp = fp;
        this.bonus = bonus;
        this.bonusActivated = bonusActivated;
    }

    /* 
    Updates the FarmingSlot object when all source data is present (name/nft/image/nya)
    */
   updateSlot(){
        this.setFP();
        this.setwakeUP();
        this.updateImage();
        this.updateNYA();
        this.updateFP();

        updateTotalFP();
   }


    /* 
    Calculates the total FP of the NFT in this farming slot
    */
    setFP(){
        let bfp = this.nft.baseFP;

        if (this.bonusActivated[0] == false){
            this.fp[0] = Math.round(bfp + (bfp*+this.nya[0])/100);
            this.updateFP();
        }

        if (this.bonusActivated[0] == true){
            bfp = (bfp + (bfp*+this.nya[0])/100);
            this.fp[0] = Math.round(bfp + (bfp*this.bonus));
            this.updateFP();
        }
    }

    /* 
    Calculates the total $PAW to wake-up this NFT if Sleeping
    */
    setwakeUP(){
        this.wakeUp[0] = PAWwakeUp(+this.nft.baseWake, this.nya[0]);
    }


    /* 
    Function sets the slot enhancement to true/false AND updates the Farming Power of the NFT and Total Farming Power.  
    */
   setEnhancement(i){
        
        if(this.bonusActivated[0] == false && farmingSlots[i-1].bonusActivated[0] == true){
            this.bonusActivated[0] = true;
            document.getElementById(this.bonusActivated[1]).innerHTML = "Enhanced";
            this.updateSlot();
            return;
        }

        if(this.bonusActivated[0] == true){
            this.bonusActivated[0] = false;
            if (i<4){
                farmingSlots[i+1].setEnhancement(i+1);
            }
            document.getElementById(this.bonusActivated[1]).innerHTML = "Enhance";
            this.updateSlot();
        }
   }

    updateImage(){
        document.getElementById(this.image[1]).src = this.image[0];
    }

    updateNYA(){
        document.getElementById(this.nya[1]).innerHTML = this.nya[0];
    }

    updateFP(){
        document.getElementById(this.fp[1]).innerHTML = this.fp[0];
    }
}

/*
Farming Slot Objects Instantiation for the main farming table.  The saved farming tables are listed further below.
*/

let slot1 = new FarmingSlot("Slot 1", 1, null, [null, "slot1img"], [null, "slot1nya"], [0, "slot1wakeUp"], [0, "slot1fp"],   0, [ true, "buttE1"]);
let slot2 = new FarmingSlot("Slot 2", 2, null, [null, "slot2img"], [null, "slot2nya"], [0, "slot2wakeUp"], [0, "slot2fp"], .05, [false, "buttE2"]);
let slot3 = new FarmingSlot("Slot 3", 3, null, [null, "slot3img"], [null, "slot3nya"], [0, "slot3wakeUp"], [0, "slot3fp"], .10, [false, "buttE3"]);
let slot4 = new FarmingSlot("Slot 4", 4, null, [null, "slot4img"], [null, "slot4nya"], [0, "slot4wakeUp"], [0, "slot4fp"], .15, [false, "buttE4"]);
let slot5 = new FarmingSlot("Slot 5", 5, null, [null, "slot5img"], [null, "slot5nya"], [0, "slot5wakeUp"], [0, "slot5fp"], .20, [false, "buttE5"]);

var farmingSlots = [slot1, slot2, slot3, slot4, slot5];

var seasonsList = ["Season 1", "Season 2"];

/*
Farming Slot Objects Instantiation for the saved farming Tables.
*/

/*FT1*/
let FT1slot1 = new FarmingSlot("Slot 1", 1, null, [null, "FT1slot1img"], [null, "FT1slot1nya"], [0, "FT1slot1wakeUp"], [0, "FT1slot1fp"],   0, [ true, "FT1buttE1"]);
let FT1slot2 = new FarmingSlot("Slot 2", 2, null, [null, "FT1slot2img"], [null, "FT1slot2nya"], [0, "FT1slot2wakeUp"], [0, "FT1slot2fp"], .05, [false, "FT1buttE2"]);
let FT1slot3 = new FarmingSlot("Slot 3", 3, null, [null, "FT1slot3img"], [null, "FT1slot3nya"], [0, "FT1slot3wakeUp"], [0, "FT1slot3fp"], .10, [false, "FT1buttE3"]);
let FT1slot4 = new FarmingSlot("Slot 4", 4, null, [null, "FT1slot4img"], [null, "FT1slot4nya"], [0, "FT1slot4wakeUp"], [0, "FT1slot4fp"], .15, [false, "FT1buttE4"]);
let FT1slot5 = new FarmingSlot("Slot 5", 5, null, [null, "FT1slot5img"], [null, "FT1slot5nya"], [0, "FT1slot5wakeUp"], [0, "FT1slot5fp"], .20, [false, "FT1buttE5"]);

var FT1farmingSlots = [FT1slot1, FT1slot2, FT1slot3, FT1slot4, FT1slot5];

/*FT2*/
let FT2slot1 = new FarmingSlot("Slot 1", 1, null, [null, "FT2slot1img"], [null, "FT2slot1nya"], [0, "FT2slot1wakeUp"], [0, "FT2slot1fp"],   0, [ true, "FT2buttE1"]);
let FT2slot2 = new FarmingSlot("Slot 2", 2, null, [null, "FT2slot2img"], [null, "FT2slot2nya"], [0, "FT2slot2wakeUp"], [0, "FT2slot2fp"], .05, [false, "FT2buttE2"]);
let FT2slot3 = new FarmingSlot("Slot 3", 3, null, [null, "FT2slot3img"], [null, "FT2slot3nya"], [0, "FT2slot3wakeUp"], [0, "FT2slot3fp"], .10, [false, "FT2buttE3"]);
let FT2slot4 = new FarmingSlot("Slot 4", 4, null, [null, "FT2slot4img"], [null, "FT2slot4nya"], [0, "FT2slot4wakeUp"], [0, "FT2slot4fp"], .15, [false, "FT2buttE4"]);
let FT2slot5 = new FarmingSlot("Slot 5", 5, null, [null, "FT2slot5img"], [null, "FT2slot5nya"], [0, "FT2slot5wakeUp"], [0, "FT2slot5fp"], .20, [false, "FT2buttE5"]);

var FT2farmingSlots = [FT2slot1, FT2slot2, FT2slot3, FT2slot4, FT2slot5];

/*FT3*/
let FT3slot1 = new FarmingSlot("Slot 1", 1, null, [null, "FT3slot1img"], [null, "FT3slot1nya"], [0, "FT3slot1wakeUp"], [0, "FT3slot1fp"],   0, [ true, "FT3buttE1"]);
let FT3slot2 = new FarmingSlot("Slot 2", 2, null, [null, "FT3slot2img"], [null, "FT3slot2nya"], [0, "FT3slot2wakeUp"], [0, "FT3slot2fp"], .05, [false, "FT3buttE2"]);
let FT3slot3 = new FarmingSlot("Slot 3", 3, null, [null, "FT3slot3img"], [null, "FT3slot3nya"], [0, "FT3slot3wakeUp"], [0, "FT3slot3fp"], .10, [false, "FT3buttE3"]);
let FT3slot4 = new FarmingSlot("Slot 4", 4, null, [null, "FT3slot4img"], [null, "FT3slot4nya"], [0, "FT3slot4wakeUp"], [0, "FT3slot4fp"], .15, [false, "FT3buttE4"]);
let FT3slot5 = new FarmingSlot("Slot 5", 5, null, [null, "FT3slot5img"], [null, "FT3slot5nya"], [0, "FT3slot5wakeUp"], [0, "FT3slot5fp"], .20, [false, "FT3buttE5"]);

var FT3farmingSlots = [FT3slot1, FT3slot2, FT3slot3, FT3slot4, FT3slot5];

/*FT4*/
let FT4slot1 = new FarmingSlot("Slot 1", 1, null, [null, "FT4slot1img"], [null, "FT4slot1nya"], [0, "FT4slot1wakeUp"], [0, "FT4slot1fp"],   0, [ true, "FT4buttE1"]);
let FT4slot2 = new FarmingSlot("Slot 2", 2, null, [null, "FT4slot2img"], [null, "FT4slot2nya"], [0, "FT4slot2wakeUp"], [0, "FT4slot2fp"], .05, [false, "FT4buttE2"]);
let FT4slot3 = new FarmingSlot("Slot 3", 3, null, [null, "FT4slot3img"], [null, "FT4slot3nya"], [0, "FT4slot3wakeUp"], [0, "FT4slot3fp"], .10, [false, "FT4buttE3"]);
let FT4slot4 = new FarmingSlot("Slot 4", 4, null, [null, "FT4slot4img"], [null, "FT4slot4nya"], [0, "FT4slot4wakeUp"], [0, "FT4slot4fp"], .15, [false, "FT4buttE4"]);
let FT4slot5 = new FarmingSlot("Slot 5", 5, null, [null, "FT4slot5img"], [null, "FT4slot5nya"], [0, "FT4slot5wakeUp"], [0, "FT4slot5fp"], .20, [false, "FT4buttE5"]);

var FT4farmingSlots = [FT4slot1, FT4slot2, FT4slot3, FT4slot4, FT4slot5];

/*FT5*/
let FT5slot1 = new FarmingSlot("Slot 1", 1, null, [null, "FT5slot1img"], [null, "FT5slot1nya"], [0, "FT5slot1wakeUp"], [0, "FT5slot1fp"],   0, [ true, "FT5buttE1"]);
let FT5slot2 = new FarmingSlot("Slot 2", 2, null, [null, "FT5slot2img"], [null, "FT5slot2nya"], [0, "FT5slot2wakeUp"], [0, "FT5slot2fp"], .05, [false, "FT5buttE2"]);
let FT5slot3 = new FarmingSlot("Slot 3", 3, null, [null, "FT5slot3img"], [null, "FT5slot3nya"], [0, "FT5slot3wakeUp"], [0, "FT5slot3fp"], .10, [false, "FT5buttE3"]);
let FT5slot4 = new FarmingSlot("Slot 4", 4, null, [null, "FT5slot4img"], [null, "FT5slot4nya"], [0, "FT5slot4wakeUp"], [0, "FT5slot4fp"], .15, [false, "FT5buttE4"]);
let FT5slot5 = new FarmingSlot("Slot 5", 5, null, [null, "FT5slot5img"], [null, "FT5slot5nya"], [0, "FT5slot5wakeUp"], [0, "FT5slot5fp"], .20, [false, "FT5buttE5"]);

var FT5farmingSlots = [FT5slot1, FT5slot2, FT5slot3, FT5slot4, FT5slot5];

var FTFarmingTables = [FT1farmingSlots, FT2farmingSlots, FT3farmingSlots, FT4farmingSlots, FT5farmingSlots];

/*
Function adds NFT to the applicable farming slot object, updating slot object image/NFT/NYA and displaying NYA score overlay.
*/
function addNFT(){
    let slot = document.getElementById('slotSelect');
    let NFT = getNFT(document.getElementById('nftSelect').value);
    let NYA = document.getElementById('nyaScore').value;
    let error = document.getElementById('errorAdd');

    if (NYA > 100 || NYA < 1){
        error.innerHTML = "Nya Score invalid, must be Integer between 1 and 100.";
        return;
    }

    error.innerHTML = "";

    for (let i = 0; i < farmingSlots.length; i++){
        if (farmingSlots[i].name == slot.value){
            farmingSlots[i].nft = NFT;
            farmingSlots[i].nya[0] = NYA;
            farmingSlots[i].image[0] = NFT.image;
            
            farmingSlots[i].updateSlot();

            //updateTotalPAW();

            if(i < farmingSlots.length - 1){  //simple quality of life function to increment the contents of the Farming Slot dropdown
                slot.value = farmingSlots[i+1].name;
                break;
            }
        }
    }

    //updateTotalFP();
}

/*
Function populates the farm currently from localStorage, eventually will get data from Database rather than local storage or only have 1 farm saved to local storage.
*/
function addFarm(farmy){
    for (let i = 0; i < farmingSlots.length; i++){
        let slot = farmingSlots[i];
        let NFT = getNFT(farmy.slots[i].nft);
        let NYA = farmy.slots[i].nya;

        slot.nft = NFT;
        slot.nya[0] = NYA;
        slot.image[0] = NFT.image;

        slot.updateSlot();
        //updateTotalPAW();
    }

}

/*
Function populates the saved farming tables currently from localStorage, eventually will get data from Database rather than local storage or only have 1 farm saved to local storage.
*/
function FTaddFarm(farmy, iter){
    
    for (let i = 0; i < FTFarmingTables.length; i++){
        let slot = FTFarmingTables[iter - 1][i];
        let NFT = getNFT(farmy.slots[i].nft);
        let NYA = farmy.slots[i].nya;

        slot.nft = NFT;
        slot.nya[0] = NYA;
        slot.image[0] = NFT.image;

        slot.updateSlot();
        //updateTotalPAW();
    }

}

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

/* 
    Base PAW Wakeup of NFT and NYA score to determing wake-up costs in $PAW
*/
function PAWwakeUp(PAW, NYA){
    let wakeup = (PAW + (PAW*(NYA/100)))
    return wakeup;
}

/* 
    Returns the Paw required for the farming Period (7day, 14day)
*/
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

/* 
    Calculates the total $PAW required to farm assuming all sleeping NFTs.
*/
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

/* 
Calculates and updates the amount of $PAW being generated based on numbe of LP Tokens owned.
*/
function pawGenerated(){
    let generatingPaw = document.getElementById("LPPaw").value * 100;
    let maxPaw = generatingPaw * 30;
    
    document.getElementById("generatingPaw").innerHTML = generatingPaw;
    document.getElementById("maxPaw").innerHTML = maxPaw;
}

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

function randomPopulateFarm(){

    if (seasonSelect.value == "Season 1"){
        let nftSelectionSize = season1NFT.length;
        for(let i = 0; i < farmingSlots.length; i++){
            let randNFT = getRandom(0,nftSelectionSize);
            let randNYA = getRandom(1, 100);
            addRandomNFT(i,randNFT,randNYA);
        }
    }

    if (seasonSelect.value == "Season 2"){
        let nftSelectionSize = season2NFT.length;
        for(let i = 0; i < farmingSlots.length; i++){
            let randNFT = getRandom(0,nftSelectionSize);
            let randNYA = getRandom(1, 100);
            addRandomNFT(i,randNFT,randNYA);
        }
    }
}

function addRandomNFT(slot, NFT, NYA){
    let nft = getNFTbyIndex(NFT);

    farmingSlots[slot].nft = nft;
    farmingSlots[slot].nya[0] = NYA;
    farmingSlots[slot].image[0] = nft.image;
    
    farmingSlots[slot].updateSlot();

    updateTotalFP();
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }