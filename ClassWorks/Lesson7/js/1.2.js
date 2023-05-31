const section = document.querySelector('section');
const head = document.querySelector('#head');
const ul = document.querySelector('section ul');
const liCollection = ul.querySelectorAll('li');
const p = document.querySelector('p');

// section.style.backgroundColor = "lightGrey";
// section.style.padding = "20px";
// head.style.fontFamily = "Arial";
section.style.backgroundColor = "";

section.style.cssText = "background-color:lightGrey; padding: 20px";
head.setAttribute('style', 'font-size: 24px; color:red; border: 1px solid');
ul.setAttribute('class', 'article');
ul.getAttribute('style');

for (li of liCollection) {
	li.setAttribute('style', head.getAttribute('style'));
}
console.log(ul.className);

if (!document.body.className) {
	document.body.className = "text";
}
if (p.classList.contains('text') == false) {
	p.classList.add('text');
}
if (p.classList.contains('text')) {
	p.classList.remove('text');
}

