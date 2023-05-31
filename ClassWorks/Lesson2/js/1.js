// Zadanie 1 

// let osk = prompt('Введите сумму кредита');
// let stavka = prompt('Введите годовую ставку');
// let period = prompt('Введите период выплаты');

// if (!osk) {
// 	let osk = prompt('Введите сумму кредита');
// }
// if (!stavka) {
// 	let stavka = prompt('Введите годовую ставку');
// }
// if (!period) {
// 	let period = prompt('Введите период выплаты');
// }

// osk = parseFloat(osk);
// stavka = parseFloat(stavka);
// period = parseInt(period);

// const pY = 12;
// let stavkaPart = pY / (100 * stavka);
// let P = osk * (stavkaPart / (1 - (1 + stavkaPart) ** (-period)));
// alert(`${P}`);

// Задание 2 
// let val1 = parseInt(prompt('Введите число 1'));
// let val2 = parseInt(prompt('Введите число 2'));
// let val3 = parseInt(prompt('Введите число 3'));

// let max = 0;

// if (val1 > val2) {
// 	max = val1;
// }
// else {
// 	max = val2;
// }
// if (max > val3) {
// 	alert(`наибольшее число ${max}`)
// }
// else {
// 	alert(`наибольшее число ${val3}`)
// }


// Задание 2 
//  //1 Вариант 
// let time = prompt("Введите время работы в часах");
// time = time || 9;

// if (time < 9 || time > 21) {
// 	alert(`Офис не работает`)
// }
// else {
// 	alert(`Офис работает`)
// } 

// // 2 вариант
// let time = prompt("Введите время работы в часах");
// time = time || 9;
// let result = (time < 9 || time > 21) ? alert(`Офис не работает`) : alert(`Офис работает`);

// Задание 3

// let types = 'a' / 2;

// switch (typeof (types)) {
// 	case "number":
// 		console.log(`Значение является числом`);
// 		break;
// 	case "undefined":
// 		console.log(`данные не определены`);
// 		break;
// 	case "boolean":
// 		console.log(`Значение является логическим типом`);
// 		break;
// 	case "string":
// 		console.log(`Значение является строкой`);
// 		break;
// 	case "object":
// 		console.log(`Значение являются обьектом`);
// 		break;
// 	case "string":
// 		console.log(`Значение является строкой`);
// 		break;
// 	case "function":
// 		console.log(`Значение является функицей`);
// 		break;
// 	default: console.log(`Не определенный тип`);
// 		break;
// }

// //Задание 4

// let time = new Date();
// let day = time.getDay();

// switch (day) {
// 	case 1:
// 		console.log(`Понедельник`);
// 		break;
// 	case 2:
// 		console.log(`Вторник`);
// 		break;
// 	case 3:
// 		console.log(`Среда`);
// 		break;
// 	case 4:
// 		console.log(`Четверг`);
// 		break;
// 	case 5:
// 		console.log(`Пятница`);
// 		break;
// 	case 6:
// 		console.log(`Суббота`);
// 		break;
// 	case 7:
// 		console.log(`Воскресенье`);
// 		break;
// 	default:
// 		break;
// }


//Задание 5

let value = 75;

switch (true) {
	case value >= 90 && value <= 100:
		console.log(`Оценка А`);
		break;
	case value >= 80 && value <= 89:
		console.log(`Оценка Б`);
		break;
	case value >= 70 && value <= 79:
		console.log(`Оценка С`);
		break;
	case value >= 60 && value <= 69:
		console.log(`Оценка С`);
		break;
	case value <= 59:
		console.log(`Оценка F`);
		break;
	default: console.log(`Неверная оценка`);
		break;
}

