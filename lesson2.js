'use strict';

// арифметическая функция

function mySum(arg1, arg2){
    return arg1 + arg2;
}

function mySub(arg1, arg2){
    return arg1 - arg2;
}

function myProd(arg1, arg2){
    return arg1 * arg2;
}

function myDev(arg1, arg2){
    return arg1 / arg2;
}

function mathOperation(arg1, arg2, operiation){
    switch(operiation){
        case '+':
            return mySum(arg1, arg2);
        case '-':
            return mySub(arg1, arg2);
        case '*':
            return myProd(arg1, arg2);
        case '/':
            return myDev(arg1, arg2);       
    }
}

const exp = prompt('Введите выражение без пробелов');
const result = mathOperation(Number(exp[0]), Number(exp[2]), exp[1]);

alert(`Результат: ${result}`);

// рекурсивная степень



function power(val, pow){
    if (Number(pow) === 0) {
        return 1;
    } else if (Number(pow) === 1){
        return Number(val);
    }
    return Number(val) * power(val, Number(pow) - 1);
}

let operandsPow = prompt('Ввежите число и мтепень через пробел');
operandsPow = operandsPow.split(' ');

const resultPow = power(operandsPow[0], operandsPow[1])
alert(resultPow)












