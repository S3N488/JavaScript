document.writeln("<div><h1>WWW</h1><p>Всеми́рная паути́на — распределённая система, предоставляющая доступ к связанным между собой документам, расположенным на различных компьютерах, подключённых к сети Интернет.</p></div>")
document.writeln(`<ul>
<li><a href='https://ya.ru'>Yandex</a></li>
<li><a href='https://google.com'>Google</a></li>
</ul>`)
let hrefLinks = document.links;
console.log(hrefLinks);
for (element of hrefLinks) {
	document.writeln(`<p>${element}</p>`)
}

//document.location = hrefLinks[1];

const divElements = document.querySelector('div');
const headers = document.querySelector('h1');
const paragrafs = document.querySelector('p');
const alinks = document.querySelector('a');

console.log(divElements);
console.log(headers.innerHTML);
console.log(paragrafs);
console.log(alinks);
const textElement = document.getElementById('text');
text.innerHTML = headers.innerHTML;

headers.innerHTML = "HTML"
paragrafs.innerHTML = "<dfn>HTML</dfn> — стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора"
headers.outerHTML = "HTML"
textElement.innerHTML = headers.tagName + '' + headers.innerHTML;

for (linkEl of alinks) {
	linkEl.hrefLinks;
	linkEL.textContent;
}

let arr = [];
for (linkEl of alinks) {
	let obj = {
		text: linkEL.textContent,
		link: linkEL.href
	}
	arr.push(obj);
}
console.log(arr);


