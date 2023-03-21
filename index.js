// Code your solution in this file!

const returnFirstTwoDrivers = function( arrDrivers){
    if (arrDrivers.length >= 2)
        return arrDrivers.slice(0,2)
    else 
        return []
}

const returnLastTwoDrivers = arrDrivers => {
                            const arrDriversCopy = [...arrDrivers]
                            return arrDriversCopy.splice(-2)}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(farePrice){
    return farePrice => farePrice * farePrice
}

function fareDoubler(lone) {
    const fareMultiplier = createFareMultiplier(lone)
    return lone * 2
}

function fareTripler(lone){
    const fareMultiplier = createFareMultiplier(lone)
    return lone * 3
}

function selectDifferentDrivers( drivers, func){
    return func(drivers)
}
