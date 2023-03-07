var scrollTrigger = 200;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add("header-on-scroll");
  } else {
    document.getElementsByTagName("header")[0].classList.remove("header-on-scroll");
  }
}