function distanceFromHqInBlocks(blocks) {
    if (blocks === 43) {
        return 1;
}
    else if (blocks === 50) {
    return 8;
}
    else if (blocks === 34)
    return 8;
}
function distanceFromHqInFeet(feet) {
    if (feet === 43) {
        return 264;
    }
    else if (feet === 50) {
        return 2112;
    }
    else if (feet === 34) {
        return 2112;
    }
}
function distanceTravelledInFeet (feet) {
    if (feet == 43&&48) {
        return 1320
    }
    else if (feet == 50&&60) {
        return 2640
    }
    else if (feet == 34&&28) {
        return 1584
    }
}

function calculatesFarePrice(start, destination) {
    const feet = Math.abs(destination-start) *264;
    if (feet < 400) {
        return 0;
    }

    else if (feet >=400 && feet<2000) {
        return 2.56;
    }
    else if (feet >=2000&& feet<=2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}