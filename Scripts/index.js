var slideindex = 0;
slideshow();

function slideshow(){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log(slides.length);
  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slideindex++;
  console.log(slideindex);
  console.log(slides.length);
  if(slideindex > slides.length){slideindex = 1;}
  slides[slideindex-1].style.display = "block";
  setTimeout(slideshow, 5000);
}