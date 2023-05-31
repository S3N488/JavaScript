const par = document.querySelectorAll('.title');

for (element of par) {
	element.addEventListener('click', function (e) {
		const selectElements = document.querySelectorAll('.open');
		for (el of selectElements) {
			el.classList.remove('open');
		}
		e.target.classList.toggle('open');
	})
}