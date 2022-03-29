// Code your solution in this file!
let start = 43
let destination = 42
function distanceFromHqInBlocks(start) {
    return Math.abs(start - 42)
};
function distanceFromHqInFeet(start) {
    return (distanceFromHqInBlocks(start))*264
};
function distanceTravelledInFeet(start, destination) {
    return Math.abs((start-destination)*264)
};
function calculatesFarePrice(start, destination) {
    if (Math.abs((start-destination)*264) < 400) {
        return 0;
    }
    else if (Math.abs((start-destination)*264) <= 2000) {
        return Math.abs(((start-destination)*264)-400)*0.02;
    }
    else if (Math.abs((start-destination)*264) <= 2500) {
        return 25;
    }
    else
        return "cannot travel that far"
};