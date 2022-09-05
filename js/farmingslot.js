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