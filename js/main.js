let nav = document.getElementById("nav");
let menuBtn = document.getElementById("burger");
let body = document.body;
menuBtn.onclick = function () {
  nav.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == nav) {
    nav.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};

// Animate on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entrie => {
    if (entrie.isIntersecting) {
      entrie.target.classList.add("show");
    }
  })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(element => observer.observe(element));

// Sticky Header  
window.onscroll = function() {stickyHeader()};

// Get the header
let header = document.querySelector(".header");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    nav.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    nav.classList.remove("sticky");
  }
}


