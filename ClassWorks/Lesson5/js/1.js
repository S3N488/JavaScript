// // Задание 1

// let number = "963-56-56";
// let ind = number.indexOf("-");
// if (ind == 3) {
// 	console.log("шаблон верный");
// }
// else {
// 	console.log("Шаблон не верный");
// }

//Задание 2
// let actr = "В фильме снимались актеры: Павел Чинарёв, Павел Чинарёв, Виталий Корниенко,Роман Евдокимов,Павел Майков,Елена Полякова";
// let k = 0;
// // actr=actr.toLowerCase();
// let poisk = "Павел";

// let pos = 1;
// while (pos > 0) {
// 	pos = actr.toLowerCase().indexOf(poisk.toLowerCase(), pos);
// 	console.log(pos);
// 	//console.log(poisk.toLowerCase());
// 	if (pos >= 0) {
// 		k++;
// 	}

// 	pos++;
// }
// console.log(k);

// //Задание 3
// let domen = "https://home.about.ru";
// let pos = domen.indexOf("://");
// console.log(domen.slice(pos + 3));

// //Задание 4
// let str = "дарова заебал";
// let up = str[0].toUpperCase();
// let newStr = str.replace(str[0], str[0].toUpperCase());
// console.log(newStr);

// //Задание 5
// let str = "Я люблю nunclear bombz";
// console.log(/\d/.test(str)); // true

//Задание 6
// let sum = 0;
// let arr = [123, 7, 50, -9, 24, , , , ,];
// sum += elem
// })
// console.log(sum);

// let max = arr[0];
// arr.forEach(elem => { if (max < elem) max = elem; return max });
// console.log(max);

// Задание 7
// let arr = [];
// for (let i = 0; i < 5; i++) {
// 	let a = +prompt();
// 	arr.push(a);
// }
// document.writeln(arr);

// // Задание 8
// let arr = [];
// for (let i = 0; i < 5; i++) {
// 	let a = Math.floor(Math.random() * 100) + 1;
// 	arr.push(a);
// }
// document.writeln(arr);
// let first = arr.shift();
// let end = arr.pop();
// arr.unshift(end);
// arr.push(first);
// document.writeln(arr);

//Задание 9
let arr = [];
let a = 0;
for (let i = -5; i < 5; i++) {
	a = Math.floor(Math.random() * 10 * i);
	arr.push(a);
}
document.writeln(arr);

// for (let i = 0; i < 10; i++) {
// 	if (arr[i] == 0) arr.splice(i, 1);
// }
// document.writeln(arr);

// let brr = arr.map(elem => elem * 2);
// document.writeln(brr);

let s = arr.reduce(function (sum, elem) {
	return sum + elem;
}, 0)
document.writeln(s);