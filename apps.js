const elements  = document.getElementsByClassName('fade-out');
const open = document.getElementsByClassName('nav-icon')[0];
const close = document.getElementsByClassName('nav-close')[0];
const mobileNavigation = document.getElementsByClassName('mobile')[0];
const deskNavigation = document.getElementsByClassName('nav')[0];
const h1 = document.getElementsByTagName('h1')[0];
const next = document.getElementById('arrow-right');
const prev = document.getElementById('arrow-left');
const slides = document.querySelectorAll('.slides');


// Keeps track of slide count globally
  let slideTracker = 1;


// showImage takes the parameter n and adds it to the slideTracker
function showImage(n) {

  slideTracker += n;

  if(slideTracker > slides.length) {
		slideTracker = 1;
 }
  if (slideTracker < 1) {
		slideTracker = slides.length;
 }

  hideSlides();

// Displays the next slide
  slides[slideTracker-1].style.display = 'block';
 }


 next.addEventListener('click', () => {
   showImage(1);
});


prev.addEventListener('click', () => {
  showImage(-1)
});

// Hides all slides
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
});


