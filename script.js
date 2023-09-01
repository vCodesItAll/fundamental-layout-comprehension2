// event listener - when user scrolls execute myFunction
window.onscroll = function() {myFunction()};

// create variable for nav element - this searches elements for what I ID'd as "navigation"
var navbar = document.getElementById("navigation");

// this property 
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}