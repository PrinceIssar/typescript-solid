export interface Discount{
    _value:number
    apply(price: number):number
    showCalculation(price:number): string
}