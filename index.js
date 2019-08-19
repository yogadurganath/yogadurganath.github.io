window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > screen.height || document.documentElement.scrollTop > screen.height) {
    document.getElementById("goToTopBtn").style.display = "block";
  } else {
    document.getElementById("goToTopBtn").style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
