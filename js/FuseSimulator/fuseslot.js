/* This is the fuse Slot Object, its instantiations, and all relatable functions */

class fuseSlot {
    constructor(name, number, nft, image, nya){
        this.name = name;
        this.number = number;
        this.nft = nft;
        this.image = image;
        this.nya = nya;
    }

    /* 
    Updates the fuseSlot object when all source data is present (name/nft/image/nya)
    */
   updateSlot(){
        this.updateImage();
        this.updateNYA();
   }

    updateImage(){
        document.getElementById(this.image[1]).src = this.image[0];
    }

    updateNYA(){
        document.getElementById(this.nya[1]).innerHTML = this.nya[0];
    }
}

/*
fuse Slot Objects Instantiation for the main fuse table.  The saved fuse tables are listed further below.
*/

let slot1 = new fuseSlot("Slot 1", 1, null, [null, "slot1img"], [null, "slot1nya"]);
let slot2 = new fuseSlot("Slot 2", 2, null, [null, "slot2img"], [null, "slot2nya"]);
let slot3 = new fuseSlot("Slot 3", 3, null, [null, "slot3img"], [null, "slot3nya"]);
let slot4 = new fuseSlot("Slot 4", 4, null, [null, "slot4img"], [null, "slot4nya"]);
let slot5 = new fuseSlot("Slot 5", 5, null, [null, "slot5img"], [null, "slot5nya"]);
let slot6 = new fuseSlot("Slot 6", 6, null, [null, "slot6img"], [null, "slot6nya"]);
let slot7 = new fuseSlot("Slot 7", 7, null, [null, "slot7img"], [null, "slot7nya"]);
let slot8 = new fuseSlot("Slot 8", 8, null, [null, "slot8img"], [null, "slot8nya"]);
let slot9 = new fuseSlot("Slot 9", 9, null, [null, "slot9img"], [null, "slot9nya"]);
let slot10 = new fuseSlot("Slot 10", 10, null, [null, "slot10img"], [null, "slot10nya"]);

var fuseSlots = [slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9, slot10];
let rarity = null; //Maintain rarity on the slots, reverts to null on reset and by default

/*
Function adds NFT to the applicable fuse slot object, updating slot object image/NFT/NYA and displaying NYA score overlay.
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

    for (let i = 0; i < fuseSlots.length; i++){
        if (fuseSlots[i].name == slot.value){
            if (rarity == null){
                rarity = NFT.rarity;
            }

            if (NFT.rarity == rarity){
                error.innerHTML = "";
                fuseSlots[i].nft = NFT;
                fuseSlots[i].nya[0] = NYA;
                fuseSlots[i].image[0] = NFT.image;
                
                fuseSlots[i].updateSlot();

                //updateTotalPAW();

                if(i < fuseSlots.length - 1){  //simple quality of life function to increment the contents of the fuse Slot dropdown
                    slot.value = fuseSlots[i+1].name;
                    break;
                }
            }else{
                error.innerHTML = "All NFTS must be of the same rarity, but you can mix seasons!";
            }
        }
    }

    let totalNYA = 0;
    for(let i = 0; i < fuseSlots.length; i++){
        totalNYA += Number(fuseSlots[i].nya[0]);
    }
    document.getElementById("totalNYA").innerHTML = totalNYA;
    
}

/*
Function resets the fuse table.  Clears all data and reverts to initial state.
*/
function resetFuse(){ // ~HA: Any changes to the fuseSlots class management needs to be updated here.  Need to finalize fuseSlots class, or find better way to reset farm.
    let slot = document.getElementById('slotSelect');
    let error = document.getElementById('errorAdd');
    
    for (let i = 0; i < fuseSlots.length; i++){
        fuseSlots[i].nft = null;
        fuseSlots[i].nya[0] = null;
        fuseSlots[i].image[0] = "img/blank.jpg";

        fuseSlots[i].updateImage();
        fuseSlots[i].updateNYA();
    }

    error.innerHTML = "";
    rarity = null;
    slot.value = fuseSlots[0].name;
}