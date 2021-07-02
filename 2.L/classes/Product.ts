import {Discount} from "./Discount";

export class Product{
    private readonly _name : string;
    private readonly _price : number;
    private readonly _discount : Discount; // ???

    constructor(name: string,price:number,discount: Discount) {
        this._name = name;
        this._price = price;
        this._discount = discount;
    }

    get name(): string{
        return this._name;
    }
    get discount(): Discount {
        return this._discount;
    }

    get originalPrice(): number {
        return this._price;
    }

    calculatorPrice(): number{
        return this._discount.apply(this._price);
    }

    showCalculation(): string{
        return this._discount.showCalculation(this._price);
    }
}