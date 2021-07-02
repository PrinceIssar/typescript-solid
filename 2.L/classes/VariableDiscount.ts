import {Discount} from "./Discount";

export class VariableDiscount implements Discount{
    _value:number;

    constructor(value: number) {
        this._value = value;
    }

    apply(price: number): number {
        return (price -(price * this._value/100));
    }

    showCalculation(price: number): string {
        return price +"€ - "+ this._value +"%";
    }
}