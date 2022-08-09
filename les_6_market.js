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
        return this._products;  
    }

    addProduct(newProduct){
        if (newProduct instanceof Product){
            this._products.push(newProduct);
        }
    }
}

class Basket {
    constructor(products){
        if (typeof products === Array){
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
        } else if (products instanceof Product){
            this._products = [];
            this._products.push(products);
        } 
        
        
        
    }

    addProduct(newProduct){
        if (newProduct instanceof Product){
            this._products.push(newProduct);
        }
    }
    
    getProducts(){   
        return this._products;  
    }

}

class Product{
    constructor(id, name, price){
        this._id = id;
        this._name = name;
        this._price = price;
    }

    setPrice(newPrice){
        if (Number.isInteger(+newPrice)){
            this._price = +newPrice;
        }
        
    }

    getPrice(){
        return this._price;
    }

    getId(){
        return this._id;
    }

    getName(){
        return this._name;
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
const catalog1 = new Catalog(productsList);
const basket1 = new Basket();


// ------------------------вывод информаци-------------------------

const catalogEl = document.querySelector('#catalog');
const basketEl = document.querySelector('#basket');

function showCatalog(my_catalogEl){
    // const my_catalogEl = document.querySelector('#catalog');

    for (const product of catalog1.getProducts()){
        my_catalogEl.insertAdjacentHTML('afterbegin', `<p><a class="prod" href="#">Имя:${product.getName()}, Цена:${product.getPrice()}</a></p>`);
    }

    // catalogEl.insertAdjacentHTML('beforebegin', '<input type="button" id="btn" value="Каталог"></input>');
}

function showBasket(my_basketEl){

    
    while (my_basketEl.firstChild) {
        my_basketEl.removeChild(my_basketEl.firstChild);
    }

    const productList = basket1.getProducts();
    if(productList){
        if(typeof productList === Array) {
            for (const product of productList){
                my_basketEl.insertAdjacentHTML('afterbegin', `<p><a href="#">Имя:${product.getName()}, Цена:${product.getPrice()}</a></p>`);
            }       
        }else {
            my_basketEl.insertAdjacentHTML('afterbegin', `<p><a href="#">Имя:${productList.getName()}, Цена:${productList.getPrice()}</a></p>`);
        }
    } else {
        my_basketEl.insertAdjacentHTML('afterbegin', `<p>Ваша корзина пуста</p>`);
    }
    
}
// console.log(basket1.getProducts().getName());
showCatalog(catalogEl);
showBasket(basketEl);

catalogEl.addEventListener('click', event => {
    if (event.target.className === 'prod'){
        console.log('Click!');
    }
});

