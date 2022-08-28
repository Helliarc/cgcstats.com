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
Farming Slot Objects Instantiation.
*/

let slot1 = new FarmingSlot("Slot 1", 1, null, [null, "slot1img"], [null, "slot1nya"], [0, "slot1wakeUp"], [0, "slot1fp"],   0, [ true, "buttE1"]);
let slot2 = new FarmingSlot("Slot 2", 2, null, [null, "slot2img"], [null, "slot2nya"], [0, "slot2wakeUp"], [0, "slot2fp"], .05, [false, "buttE2"]);
let slot3 = new FarmingSlot("Slot 3", 3, null, [null, "slot3img"], [null, "slot3nya"], [0, "slot3wakeUp"], [0, "slot3fp"], .10, [false, "buttE3"]);
let slot4 = new FarmingSlot("Slot 4", 4, null, [null, "slot4img"], [null, "slot4nya"], [0, "slot4wakeUp"], [0, "slot4fp"], .15, [false, "buttE4"]);
let slot5 = new FarmingSlot("Slot 5", 5, null, [null, "slot5img"], [null, "slot5nya"], [0, "slot5wakeUp"], [0, "slot5fp"], .20, [false, "buttE5"]);

var farmingSlots = [slot1, slot2, slot3, slot4, slot5];

var seasonsList = ["Season 1", "Season 2"];

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

            updateTotalPAW();

            if(i < farmingSlots.length - 1){  //simple quality of life function to increment the contents of the Farming Slot dropdown
                slot.value = farmingSlots[i+1].name;
                break;
            }
        }
    }

    updateTotalFP();
}