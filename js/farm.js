/* This is the farm object that consolidates the entire farm, object is saved/updated to save/delete user instances of farms */

class farm{
    constructor(slot1, slot2, slot3, slot4, slot5){
        this.slots = [slot1, slot2, slot3, slot4, slot5];
    }
}

let farm0 = new farm(slot1, slot2, slot3, slot4, slot5);
let farm1 = new farm(slot1, slot2, slot3, slot4, slot5);
let farm2 = new farm(slot1, slot2, slot3, slot4, slot5);
let farm3 = new farm(slot1, slot2, slot3, slot4, slot5);
let farm4 = new farm(slot1, slot2, slot3, slot4, slot5);
let farm5 = new farm(slot1, slot2, slot3, slot4, slot5);

let farms = [farm0, farm1, farm2, farm3, farm4, farm5];