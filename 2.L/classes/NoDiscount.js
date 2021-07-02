"use strict";
exports.__esModule = true;
exports.NoDiscount = void 0;
var NoDiscount = /** @class */ (function () {
    function NoDiscount() {
        this._value = 0;
    }
    NoDiscount.prototype.apply = function (price) {
        return price;
    };
    NoDiscount.prototype.showCalculation = function (price) {
        return "No discount";
    };
    return NoDiscount;
}());
exports.NoDiscount = NoDiscount;
