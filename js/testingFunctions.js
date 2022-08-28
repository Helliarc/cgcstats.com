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
    farmingSlots[slot].wakeUp = PAWwakeUp(nft.wakeUp, NYA);
    
    farmingSlots[slot].setFP();
    farmingSlots[slot].updateImage();
    farmingSlots[slot].updateNYA();
    farmingSlots[slot].updateFP();

    updateTotalFP();
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }