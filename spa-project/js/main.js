let hamburger = document.querySelector('.hamburger');
let closeNav = document.querySelector('.fa-times');

hamburger.addEventListener('click', function() {
    let hamburgerOpened = document.querySelector('.hamburger-opened');
    hamburgerOpened.style.display = 'block';
})

closeNav.addEventListener('click', function() {
    let hamburgerOpened = document.querySelector('.hamburger-opened');
    hamburgerOpened.style.display = 'none';
})