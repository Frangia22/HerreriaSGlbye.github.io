document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
  if (window.scrollY > 10) {
    document.getElementById('nav').classList.add('fixed-top', 'bg-white');
    // add padding top to show content behind navbar
    navbar_height = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';
} else {
    document.getElementById('nav').classList.remove('fixed-top', 'bg-white');
     // remove padding top from body
    document.body.style.paddingTop = '0';
  } 
});
}); 