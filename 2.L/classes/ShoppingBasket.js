"use strict";
exports.__esModule = true;
exports.ShoppingBasket = void 0;
var ShoppingBasket = /** @class */ (function () {
    function ShoppingBasket() {
        this._products = [];
    }
    Object.defineProperty(ShoppingBasket.prototype, "products", {
        get: function () {
            return this._products;
        },
        enumerable: false,
        configurable: true
    });
    ShoppingBasket.prototype.addProduct = function (product) {
        this._products.push(product);
    };
    return ShoppingBasket;
}());
exports.ShoppingBasket = ShoppingBasket;
