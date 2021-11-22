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
btnTop = document.querySelector('#btnToTop');
window.onscroll = () => {scrollTop()};
const scrollTop = () => {
  if (window.scrollY > 90) {
    btnTop.style.display = 'block';
  }else {
    btnTop.style.display = 'none';
  }
}
// When click about button, scroll to the top the document
function scrollToTop() {
  window.scrollTo(0,0);
}