'use strict'

class Catalog{
    constructor(products){
        let validateProduct = true;
        for (const product of products){
            if (!(product instanceof Product)){
                validateProduct = false;
                break;
            }
        }
        if (validateProduct){
            this._products = products;
        }
        
    }

    getProducts(){     
    }

    addProduct(newProduct){
        if (newProduct instanceof Product){
            this._products.push(newProduct);
        }
    }
}

class Product{
    constructor(id, name, price){
        this._id = id;
        this._name = name;
        this._price - price;
    }

    setPrice(newPrice){
        if (Number.isInteger(+newPrice))
        this._price = +newPrice;
    }

    getPrice(){
        return this._price;
    }
}

const prod1 = new Product(1, 'iron', 500);
const prod2 = new Product(2, 'TV', 3500);
const prod3 = new Product(3, 'microwave', 1500);
const prod4 = new Product(4, 'fridge', 4500);
const prod5 = new Product(5, 'lavamat', 4500);
const productsList = [
    prod1, prod2, prod3, prod4, prod5 
]
const catalog1 = new Catalog(productsList)