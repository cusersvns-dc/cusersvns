var typed = new Typed('.typing-text span', {
    strings: ['Student', 'Web Developper', 'Just a chill guy'],
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

document.addEventListener("DOMContentLoaded", function () {
    const userId = "1169698310332895446"; // Your Discord User ID
    const avatarUrl = `https://cdn.discordapp.com/avatars/${userId}/avatar.png?size=512`;

    document.getElementById("discord-pfp").src = avatarUrl;
});
