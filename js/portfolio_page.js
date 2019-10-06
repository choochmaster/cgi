var buttons = document.querySelectorAll(".portfolio-btn");
var overlay = document.querySelector(".portfolio__overlay");
var backButtons = document.querySelectorAll(".btn-back");
var pageBody = document.querySelectorAll(".portfolio__page--body");
var pageHeader = document.querySelectorAll(".portfolio__page--header");
buttons.forEach(function(button) {
  button.addEventListener("click", function(e) {
    e.preventDefault();
    var projectName = button.dataset.project;
    console.log(projectName);
    // Extend project page
    document.getElementById(projectName).classList.add("extend");
    overlay.classList.add("show");
    document.querySelector("body").classList.add("no-scroll");
  });
});

// If back button is clicked, remove classes that made the page extend
backButtons.forEach(function(backButton) {
  backButton.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelectorAll(".portfolio__page").forEach(function(page) {
      page.classList.remove("extend");
    });
    overlay.classList.remove("show");
    document.querySelector("body").classList.remove("no-scroll");
    pageBody.forEach(function(body) {
      body.style.visibility = "hidden";
    });
    pageHeader.forEach(function(header) {
      header.style.visibility = "hidden";
    });
    setTimeout(function() {
      pageBody.forEach(function(body) {
        body.style.visibility = "visible";
      });
      pageHeader.forEach(function(header) {
        header.style.visibility = "visible";
      });
    }, 2000);
  });
});
