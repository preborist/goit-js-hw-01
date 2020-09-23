// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.Обязательно используй
// switch.Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

// let deliveryCost = 0;
// let country = prompt('Укажите страну для доставки товара');
// country = country[0].toUpperCase() + country.slice(1).toLocaleLowerCase();

// switch (country) {
//     case 'Китай':
//         deliveryCost = 100;
//         console.log(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`);
//         break;
//     case 'Чили':
//         deliveryCost = 250;
//         console.log(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`);
//         break;
//     case 'Австралия':
//         deliveryCost = 170;
//         console.log(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`);
//         break;
//     case 'Индия':
//         deliveryCost = 80;
//         console.log(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`);
//         break;
//     case 'Ямайка':
//         deliveryCost = 120;
//         console.log(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`);
//         break;
//     default:
//         alert('В вашей стране доставка не доступна');

// }


const countryName = "авСтралия";

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;
if (countryName === null) {
    message = CANCELED_BY_USER;
} else {
    country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
    switch (country) {
        case CHINA:
            price = 100;
            break;
        case AUSTRALIA:
            price = 170;
            break;
        case INDIA:
            price = 80;
            break;
        case JAMAICA:
            price = 120;
            break;
        default:
            message = NO_DELIVERY;
    }
}
if (price > 0) {
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'