var elements  = document.getElementsByClassName('fade-out');

function fadingInElements() {
for (let i = 0; i<elements.length; i++) {
	elements[i].style.opacity = 1;
	elements[i].style.transition = 'opacity 2.5s';
};
}

window.onload = function() {
	fadingInElements();
};
