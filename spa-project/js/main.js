let navBars = document.querySelector('.fa-bars');
let navX = document.querySelector('.fa-times');
let openNav = document.querySelector('.hamburger-opened');

navBars.addEventListener('click', function() {
    openNav.style.display = 'block';
})

navX.addEventListener('click', function() {
    openNav.style.display = 'none';
})