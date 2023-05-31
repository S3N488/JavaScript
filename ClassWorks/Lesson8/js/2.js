const vis = document.querySelector('#vis');
const hid = document.querySelector('#hid');
console.log(hid);
hid.addEventListener('click', function () {
	vis.classList.toggle('hidden');
	if (vis.className == 'hidden') {
		hid.textContent = "Показать"
	} else {
		hid.textContent = "Скрыть"
	}
})
