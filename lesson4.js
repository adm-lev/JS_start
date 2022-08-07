'use strict';

const yourNumber = +prompt('введите трехзначное положительное число');



function getObject(number){
       
    const numbers = {
        'единицы': 0,
        'десятки': 0,
        'сотни': 0
    }

    if (Number.isInteger(number) && number >= 0 && number <= 999 ){
        let temp = number;
        for (const order in numbers){
            
            numbers[order] = temp % 10;
            temp = Math.floor(temp / 10);

        }
    } else {
        return 'Вы ввели недопустимое число';
    }

    return numbers;
}



console.log(getObject(yourNumber));






