// Code your solution in this file!

// function to calculate the distance from scuber's headquarters
let pickupLocation = '50'
function distanceFromHqInBlocks(pickupLocation){
    const hqLocation =42;
    return Math.abs(hqLocation - pickupLocation);
}

// function to convert the distance from blocks to feet
function distanceFromHqInFeet(pickupLocation){
    const feetPerblock = 264;
    const blocks = distanceFromHqInBlocks(pickupLocation)
    return blocks * feetPerblock;
}

// function to calculate the total distance traveled in feet
function distanceTravelledInFeet(startBlock, destinationBlock){
    const blocksTravelled = Math.abs(destinationBlock - startBlock)
    const feetPerblock = 264;
    return blocksTravelled * feetPerblock;
}

// function to calculate the fare price based on the distance traveled
function calculatesFarePrice (startBlock, destinationBlock){
    const feetTravelled = distanceTravelledInFeet(startBlock, destinationBlock);
    if (feetTravelled > 2500){
        return 'cannot travel that far';
    }else if (feetTravelled > 2000){
        return 25;
    }else if (feetTravelled > 400){
        return  (feetTravelled -400) * 0.02;
    }else{
        return 0;
    }
}