import {Product} from "./Product";

export class ShoppingBasket{
    private _products: Product[]=[];

    get products():Product[]{
        return this._products;
    }

    addProduct(product: Product){
        this._products.push(product);
    }
}