const mybutton = document.getElementById("topBtn");

window.onscroll = function() {
  if (window.innerWidth > 1000){
    if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
      document.getElementsByTagName("header")[0].classList.add("header-on-scroll");
    } else {
      document.getElementsByTagName("header")[0].classList.remove("header-on-scroll");
    }
  } else if (window.innerWidth > 400){
    if (window.scrollY > 350) {
      document.getElementsByTagName("header")[0].classList.add("header-on-scroll");
    } else {
      document.getElementsByTagName("header")[0].classList.remove("header-on-scroll");
    }
  } else {
    if (window.scrollY > 200) {
      document.getElementsByTagName("header")[0].classList.add("header-on-scroll");
    } else {
      document.getElementsByTagName("header")[0].classList.remove("header-on-scroll");
    }
  }
  
  if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}