// //This is called a Union, the discountType can only contain the following 2 values:
// type discountType = "variable" | "fixed" | "none";
//
// class Discount {
//     private _type: discountType;
//     private _value: number;
//
//     constructor(type : discountType, value : number = 0) {
//         this._type = type;
//         this._value = value;
//
//         if(this._type != 'none' && value <= 0) {
//             throw new Error('You cannot create a '+ this._type + ' discount with a negative value');
//         }
//     }
//
//     apply(price : number) : number {
//         //@todo: instead of using magic values as string in this, it would be a lot better to change them into constant. This would protect us from misspellings. Can you improve this?
//         if(this._type === "none")  {
//             return price;
//         }
//         else if(this._type === "variable")  {
//             return (price - (price * this._value / 100));
//         } else if(this._type === "fixed") {
//             return Math.max(0, price - this._value);
//         }
//         else {
//             throw new Error('Invalid type of discount');
//         }
//     }
//
//     showCalculation(price : number) : string {
//         if(this._type === "none")  {
//             return "No discount";
//         }
//         else if(this._type === "variable")  {
//             return price + " € -  "+ this._value +"%";
//         } else if(this._type === "fixed") {
//             return price + "€ -  "+ this._value +"€ (min 0 €)";
//         }
//         else {
//             throw new Error('Invalid type of discount');
//         }
//     }
// }
//
// class Product {
//     private _name : string;
//     private _price : number;
//     private _discount : Discount;
//
//     constructor(name: string, price: number, discount: Discount) {
//         this._name = name;
//         this._price = price;
//         this._discount = discount;
//     }
//
//     get name(): string {
//         return this._name;
//     }
//
//     get discount(): Discount {
//         return this._discount;
//     }
//
//     get originalPrice(): number {
//         return this._price;
//     }
//
//     //The reason we call this function "calculateX" instead of using a getter on Price is because names communicate a lot of meaning between programmers.
//     //most programmers would assume a getPrice() would be a simple display of a property that is already calculated, but in fact this function does a (more expensive) operation to calculate on the fly.
//     calculatePrice() : number {
//         return this._discount.apply(this._price);
//     }
//
//     showCalculation() : string {
//         return this._discount.showCalculation(this._price);
//     }
// }
//
// class shoppingBasket {
//     //this array only accepts Product objects, nothing else
//     private _products: Product[] = [];
//
//     get products(): Product[] {
//         return this._products;
//     }
//
//     addProduct(product: Product) {
//         this._products.push(product);
//     }
// }
//
// let cart = new shoppingBasket();
// cart.addProduct(new Product('Chair', 25, new Discount("fixed", 10)));
// //cart.addProduct(new Product('Chair', 25, new Discount("fixed", -10)));
// cart.addProduct(new Product('Table', 50, new Discount("variable", 25)));
// cart.addProduct(new Product('Bed', 100, new Discount("none")));
//
// const tableElement = document.querySelector('#cart tbody');
// cart.products.forEach((product) => {
//     let tr = document.createElement('tr');
//
//     let td = document.createElement('td');
//     td.innerText = product.name;
//     tr.appendChild(td);
//
//     td = document.createElement('td');
//     td.innerText = product.originalPrice.toFixed(2) + " €";
//     tr.appendChild(td);
//
//     td = document.createElement('td');
//     td.innerText = product.calculatePrice().toFixed(2) + " €";
//     tr.appendChild(td);
//
//     td = document.createElement('td');
//     td.innerText = product.showCalculation();
//     tr.appendChild(td);
//
//     tableElement.appendChild(tr);
// });