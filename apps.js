const elements  = document.getElementsByClassName('fade-out');
const open = document.querySelectorAll('.nav-icon');
const close = document.querySelectorAll('.nav-close');
const mobileNavigation = document.querySelectorAll('.mobile');
const deskNavigation = document.querySelectorAll('.nav');
const h1 = document.getElementsByTagName('h1')[0];
const next = document.getElementById('arrow-right');
const prev = document.getElementById('arrow-left');
const slides = document.querySelectorAll('.slides');


// Keeps track of slide count
  var slideIndex = 1;

// Compares the Slide Count with the amount of slides

function showImage() {
  if(slideIndex > slides.length) {
		slideIndex = 1;
 }
  if (slideIndex < 1) {
		slideIndex = slides.length;
 }

  hideSlides();
//The slide index starts at 1 so -1 makes it 0
//displaying the first slide twice
  slides[slideIndex-1].style.display = 'block';
 }


 next.addEventListener('click', function () {
   showImage();
   slideIndex++;
 	
});


prev.addEventListener('click', function () {
  showImage()
  slideIndex--;
});

function hideSlides() {
  for(let i=0; i< slides.length; i++){
  slides[i].style.display = 'none';
}
}


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

