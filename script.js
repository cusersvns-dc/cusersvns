var typed = new Typed('.typing-text span', {
    strings: ['Student', 'Beginner Web Developer', 'Just a chill guy'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

document.addEventListener("DOMContentLoaded", function () {
    let menuToggle = document.querySelector('.logo'); // Change this if you have a menu button
    let nav = document.querySelector('nav');

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active"); // This will show/hide the menu
    });
});
