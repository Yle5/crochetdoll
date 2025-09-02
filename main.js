// Speichern der Scrollposition vor dem Neuladen der Seite
window.addEventListener('beforeunload', function() {
    localStorage.setItem('scrollPosition', window.scrollY);
});

// Wiederherstellen der Scrollposition nach dem Neuladen der Seite
window.addEventListener('load', function() {
    if (localStorage.getItem('scrollPosition') !== null) {
        window.scrollTo(0, parseInt(localStorage.getItem('scrollPosition')));
    }
});

let slideIndex = 1;
showSlides(slideIndex);

// Weiter/Zurück
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Direkt ansteuern
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
