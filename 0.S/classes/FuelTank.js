"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuelTank = void 0;
var FuelTank = /** @class */ (function () {
    function FuelTank(fuel, FUEL_MILEAGE, MAXIMUM_FUEL_CAPACITY) {
        this._fuel = 0;
        this._fuel = fuel;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
        this._FUEL_MILEAGE = FUEL_MILEAGE;
    }
    Object.defineProperty(FuelTank.prototype, "fuel", {
        get: function () {
            return this._fuel;
        },
        set: function (value) {
            this._fuel = value;
        },
        enumerable: false,
        configurable: true
    });
    FuelTank.prototype.addFuel = function (fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    };
    Object.defineProperty(FuelTank.prototype, "FUEL_MILEAGE", {
        get: function () {
            return this._FUEL_MILEAGE;
        },
        enumerable: false,
        configurable: true
    });
    return FuelTank;
}());
exports.FuelTank = FuelTank;
