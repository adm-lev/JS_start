'use strict'

const goodsPrice = {
    apple: 20,
    pear: 25,
    orange: 30,
    cucumber: 15,
    onion: 10,
    carrot: 14,
}

const basket = ['apple', 'orange', 'onion'];

function countBasketPrice(basket, price){
    let summ = 0;
    for (let i = 0; i < basket.length; i++){        
        summ += price[basket[i]];
    }
    return summ;
}

const basketPrice = countBasketPrice(basket, goodsPrice);

alert(basketPrice);