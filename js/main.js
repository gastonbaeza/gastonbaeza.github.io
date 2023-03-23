var scrollTrigger = 200;
const mybutton = document.getElementById("topBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
    mybutton.style.display = "block";
    document.getElementsByTagName("header")[0].classList.add("header-on-scroll");
  } else {
    mybutton.style.display = "none";
    document.getElementsByTagName("header")[0].classList.remove("header-on-scroll");
  }
}