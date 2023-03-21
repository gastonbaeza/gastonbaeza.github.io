var scrollTrigger = 200;
const mybutton = document.getElementById("topBtn");

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add("header-on-scroll");
  } else {
    document.getElementsByTagName("header")[0].classList.remove("header-on-scroll");
  }

  if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}