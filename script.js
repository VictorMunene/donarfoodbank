// Show or hide the Back to Top button based on scroll position
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top-btn").style.display = "block";
  } else {
    document.getElementById("back-to-top-btn").style.display = "none";
  }
}

// Scroll to the top of the page when the button is clicked
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
