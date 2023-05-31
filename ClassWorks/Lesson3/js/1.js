// // Задание 1 
// let n = prompt(`Введите число:`);
// n = parseInt(n);
// let s = 0;
// for (let i = 1; i <= n; i++) {
// 	s += i;
// }
// alert(`${s}`);

// // Задание 2
// let n = parseInt(prompt(`Введите число:`));
// let s = 0;
// for (let i = 0; i <= n; i++) {
// 	if (i % 2 == 0) {
// 		s++;
// 		console.log(`Число ${i} четное`);
// 	}
// }
// alert(`${i}`);

// // Задание 3 
// let n = parseInt((prompt(`Введите число:`)));
// let s = 0;
// let f = true;
// for (let i = 2; i < n; i++) {
// 	if (n % i == 1) {
// 		f = false;
// 		break;
// 	}
// }
// if (f) {
// 	alert(`Число ${n} четное`);
// }
// else {
// 	alert(`Число ${n} не четное`);
// }

// // Задание 4
// let n = parseInt((prompt(`Введите 1 число:`)));
// console.log(`n=${n} \n`);
// let s = 0;
// while (n || n == '') {
// 	console.log(`n=${n}`);
// 	s = (isNan(n) || (n < 0)) ? s : s + n;
// 	console.log(`s = ${s} n = ${n} `);
// 	n = parseInt((prompt(`Введите 2 число:`)));

// }
// document.writeln(s);

// // Задание 5
// let a = prompt(`Введите число`);
// let i = 0;
// let n = parseInt(a);
// do {
// 	i++;
// 	a /= 10;
// } while (a >= 1);
// document.writeln(i);

//Задание 6

let a = prompt(`Введите число`);
let i = 0;
let n = parseInt(a);
do {
	i++;
	a /= 10;
} while (a >= 1);
document.writeln(i);

let n1, n2, n3;
let move = +prompt(`Введите сдвиг:: `);
n1 = Math.floor(n /= 10 ** (i - move));
n2 = Math.floor(n %= 10 ** (i - move));
n3 = n2 * (10 ** move) + n1;
document.writeln(n3);