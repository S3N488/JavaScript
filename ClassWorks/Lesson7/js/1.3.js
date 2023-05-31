const sectionAll = document.querySelectorAll('.text');
for (element of sectionAll) {
	element.classList.add('size-40', 'color-grey', 'bg-yellow');
}

const block = document.querySelector('.block');
block.style.cssText = "width: 580px; border:1px solid grey; margin: 15px 10px; padding: 20px"
