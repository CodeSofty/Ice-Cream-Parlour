var elements  = document.getElementsByClassName('fade-out');
var open = document.getElementsByClassName('nav-icon')[0];
var close = document.getElementsByClassName('nav-close')[0];
var mobileNavigation = document.getElementsByClassName('mobile')[0];
var deskNavigation = document.getElementsByClassName('nav')[0];
var h1 = document.getElementsByTagName('h1')[0];
carousel = document.getElementsByClassName('carousel')[0];
var next = document.getElementById('arrow-right');
var prev = document.getElementById('arrow-left');
var slides = document.getElementsByClassName('slides');




var slideIndex = 1;

next.addEventListener('click', function () {
	for(let i =0; i<slides.length; i++){
		slides[i].style.display = 'none';
	}
 slideIndex++;

 if(slideIndex> slides.length){
 	slideIndex = 1;
 }

 slides[slideIndex - 1].style.display = 'block';
})



// Animates the transitions for fading elements

function fadingInElements() {
for (let i = 0; i<elements.length; i++) {
	elements[i].style.opacity = 1;
	elements[i].style.transition = 'opacity 2.5s';
};
}




window.onload = function() {
	fadingInElements();
};

// Opens mobile menu when icon is clicked

open.addEventListener('click', function() {
	mobileNavigation.style.display = 'block';
	deskNavigation.style.display = 'none';
	h1.style.display = 'none';
	close.style.display = 'block';
});

// Closes mobile menu when the close icon is clicked

close.addEventListener('click', function() {
	mobileNavigation.style.display = 'none';
	deskNavigation.style.display = 'block';
	h1.style.display = 'block';
	close.style.display = 'none';
})

