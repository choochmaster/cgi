setTimeout(function() {
  document
    .querySelector(".preloader__body")
    .classList.add("preloader__body--remove");

  document.querySelector("body").classList.remove("no-scroll");
}, 3500);
