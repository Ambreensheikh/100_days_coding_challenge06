"use strict";
// making a list OR anum for different types of vehicles
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["car"] = 0] = "car";
    vehicleType[vehicleType["truck"] = 1] = "truck";
    vehicleType[vehicleType["bus"] = 2] = "bus";
})(vehicleType || (vehicleType = {}));
//show one type of vehicle from the list
console.log(vehicleType.truck);
