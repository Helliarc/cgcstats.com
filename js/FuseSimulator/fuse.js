class fuseResult {
    constructor(name, nft, image, nya){
        this.name = name;
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

let result = new fuseResult("fuseResult", null, [null, "resultimg"], [null, "resultnya"]);

function fuseNFT(){
    let NFT = null;

    let totalNYA = 0;
    for(let i = 0; i < fuseSlots.length; i++){
       totalNYA += Number(fuseSlots[i].nya[0]);
    }

    let random = randINT(1, 1000);
    document.getElementById("roll").innerHTML = random;

    if(random >= (1000 - totalNYA)){
        
        if(rarity == 0){
            NFT = getNFT("Kita");
        }else if (rarity == 1){
            NFT = getNFT("Hana");
        }

        result.nft = NFT;
        result.nya[0] = randINT(1,100);
        result.image[0] = NFT.image;
        
        result.updateSlot();
        document.getElementById("resultStatus").innerHTML = "Success!";
    }

    if(random <= (1000 - totalNYA)){
        result.nft = null;
        result.nya[0] = null;
        result.image[0] = "img/blank.jpg";
        
        result.updateSlot();
        document.getElementById("resultStatus").innerHTML = "Failure!";
    }
}

function randINT(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }