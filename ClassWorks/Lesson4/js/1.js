// // Задание 1
// function showError(x) {
// 	alert(`Error ${x} ocurred`);
// }
// showError("405");

// //Задание 2 
// function calcCube(a) {
// 	return a ** 3;
// }
// function caclSquad(a) {
// 	return a ** 2;
// }
// function showRes(a, b) {
// 	return calcCube(a) + 3 * caclSquad(a) * b + 3 * a * caclSquad(b) + calcCube(b);
// }
// function showChanges() {
// 	let a = prompt(`Set a`);
// 	let b = prompt(`Set b`);
// 	alert(showRes(a, b));
// }
// showChanges();

// //Задание 3
// let n = + prompt(`n=`)
// function isEven(x) {
// 	// if(x%2==0) return true;
// 	// return false;
// 	return x % 2 == 0;
// }
// function showEven(x) {
// 	if (isEven(x)) document.writeln(x);
// }
// for (let i = 1; i <= n; i++) {
// 	showEven(i);
// }

// // Задание 4
// let a, b, num, ball = 0;
// let getRnd = function () {
// 	return Math.floor(Math.random() * 10) + 1;
// }

// let isBall = function (a, b, num) {
// 	if ((a + b) == num) return 1;
// 	return 0;
// }

// let showResult = function (ball) {
// 	switch (ball) {
// 		case 5: alert(`Вы молодец`); break;
// 		case 4: alert(`Хорошо`); break;
// 		case 3: alert(`Не очень хорошо`); break;
// 		case ball < 3: alert(`Очень плохо`); break;

// 		default:
// 			break;
// 	}
// }

// for (let i = 1; i < 5; i++) {
// 	a = getRnd();
// 	b = getRnd();
// 	num = parseInt(prompt(`Задача ${a} + ${b} = \n Введите ответ`));
// 	ball += isBall(num, a, b);
// }
// showResult();

// // Задание 5
// let sum = (x, y) => x + y;
// let mult = (x, y) => x * y;
// let subs = (x, y) => x - y;
// let dev = (x, y) => { if (y) return x / y; };
// let exp = subs(sum(20, 5), dev(subs(30, 6), mult(20, 3)));
// alert(exp);

// // Задание 6
// let calc = function () {
// 	let a = 1;
// 	return function () {
// 		return a++;
// 	}
// }
// let x = calc();
// alert(x());
// alert(x());
// alert(x());
// alert(x());
// alert(x());

// Задание 7
let num = +prompt(`Введите число:`);
console.log(showNumber(num));
function showNumber(n) {
	if (n == 1) return "1";
	return showNumber(n - 2) + ` ` + n;
}
showNumber(num);