// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(ride) {
    return function fareMultiplier(fare) {
        return fare * ride
    }
}
const fareDoubler = createFareMultiplier(2) 

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, fn) {
    if (fn === returnFirstTwoDrivers) {
        return drivers.slice(0, 2)
    }
    else if (fn === returnLastTwoDrivers) {
        return drivers.slice(-2)
    }
}
