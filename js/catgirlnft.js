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