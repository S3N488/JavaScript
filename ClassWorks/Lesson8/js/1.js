const blocks = document.querySelectorAll('.block');
const black = document.querySelector('#black');
const blue = document.querySelector('#blue');
const light = document.querySelector('#light');

//block.onclick = say;
function say() {
	alert(this);
}
//block.addEventListener('click', say);
function setdark() {
	this.style.backgroundColor = "#333";
}
function setblue() {
	this.style.backgroundColor = "#009";
}
function setlight() {
	this.style.backgroundColor = "#fff";
}
function setdef() {
	this.style.backgroundColor = "";
}

black.addEventListener('mouseover', setdark);

blue.addEventListener('mouseover', setblue);

light.addEventListener('mouseover', setlight);

for (element of blocks) {
	element.addEventListener('mouseout', setdef);
}

document.body.addEventListener('click', function (event) {
	console.log("тип события", event.type);
	console.log("Элемент Обработчика события", event.curretTarget);
	console.log("цель", event.target);
	//event.target.style.backgroundColor = "red";
});




