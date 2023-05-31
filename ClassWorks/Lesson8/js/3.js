const ps = document.querySelectorAll('p');
for (element of ps) {
	element.addEventListener('click', function (e) {
		console.log(element);
		const selectElements = document.querySelectorAll('.select');
		for (el of selectElements) {
			el.classList.remove('select');
		}
		e.target.classList.toggle('select');
	})
}
