"use strict";
exports.__esModule = true;
exports.FixedDiscount = void 0;
var FixedDiscount = /** @class */ (function () {
    function FixedDiscount(value) {
        this._value = value;
    }
    FixedDiscount.prototype.apply = function (price) {
        return Math.max(0, price - this._value);
    };
    FixedDiscount.prototype.showCalculation = function (price) {
        return price + "€ - " + this._value + "€ (min 0 €)";
    };
    return FixedDiscount;
}());
exports.FixedDiscount = FixedDiscount;
