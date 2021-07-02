"use strict";
exports.__esModule = true;
exports.VariableDiscount = void 0;
var VariableDiscount = /** @class */ (function () {
    function VariableDiscount(value) {
        this._value = value;
    }
    VariableDiscount.prototype.apply = function (price) {
        return (price - (price * this._value / 100));
    };
    VariableDiscount.prototype.showCalculation = function (price) {
        return price + "€ - " + this._value + "%";
    };
    return VariableDiscount;
}());
exports.VariableDiscount = VariableDiscount;
