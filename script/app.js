scrollNav();

const navbar = document.getElementById("navbar");

const sticky = navbar.offsetTop;

window.onscroll = function() {
  myFunction();
};

const icons = [...document.querySelectorAll(".social-media")];
icons.forEach(i =>
  i.addEventListener("mouseenter", function() {
    this.children[0].classList.add("rollin");
  })
);

icons.forEach(i =>
  i.addEventListener("mouseleave", function() {
    this.children[0].classList.remove("rollin");
  })
);

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    // navbar.classList.remove("away");

    navbar.classList.add("sticky");
  } else {
    // navbar.classList.add("away");
    navbar.classList.remove("sticky");
  }
}

function scrollNav() {
  $(".navbar-default a").click(function() {
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($(this).attr("href")).offset().top - 0
        },
        400
      );
    return false;
  });
}
