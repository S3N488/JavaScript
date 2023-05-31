//1
let links = [
    { text: 'ООП', link: 'article1.html' },
    { text: 'UML', link: 'article2.html' },
    { text: 'DFD', link: 'article3.html' }
];
//2
let elements = document.querySelectorAll('.block');
elements.forEach((element) => {
    element.classList.add('color-primary', 'bg-grey');
});
//3
let headings = document.querySelectorAll('h2');
headings.forEach((heading) => {
    heading.classList.add('size-40');
});