// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits(создай и присвой).Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку.Цена одного дроида хранится в переменной pricePerDroid(создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

//     Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
//     если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

// let credits = 23580;
// const pricePerDroid = 3000;
// const orderQuantity = prompt('Сколько дроидов вы хотите купить?');
// let totalPrice = 0;

// if (orderQuantity === null) {
//     console.log('Отменено пользователем!');
// } else if (orderQuantity <= 0) {
//     alert('Введите корректное значение!');
// } else {
//     totalPrice = pricePerDroid * Number(orderQuantity);
//     if (totalPrice > credits) {
//         console.log('Недостаточно средств на счету!');
//     } else {
//         credits -= totalPrice;
//         console.log(`Вы купили ${orderQuantity} дроидов, на счету осталось ${credits} кредитов.`);
//     }
// }

const orderPieces = 1;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice; // Write code on this line
let balanceCredit; // Write code on this line
let message;


if (orderPieces === null) {
    message = CANCELED_BY_USER;
} else {
    totalPrice = pricePerDroid * orderPieces;
    if (totalPrice > credits) {
        message = ACCESS_DENIED;
    } else {
        balanceCredit = credits - totalPrice;
        message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
    }
}

console.log(message);

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'