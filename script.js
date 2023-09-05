// typing animation script
var typed = new Typed(".typing", {
    strings: ["Front-End Developer", "UI Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Frontend Developer" ,"BSCS Student"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
// menu icon
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}