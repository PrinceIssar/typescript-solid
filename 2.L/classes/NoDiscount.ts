import {Discount} from "./Discount";

export class NoDiscount implements  Discount{
    _value: number;

    constructor() {
        this._value=0
    }

    apply(price: number): number {
        return price;
    }

    showCalculation(price: number): string {
        return "No discount";
    }
}