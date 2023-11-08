// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
const searchMenu = document.querySelector('.search-menu');
const navbar = document.querySelector('.navbar');
const searchBox = document.querySelector('#search-box');

document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};
document.querySelector('#search-button').onclick = (e) => {
    searchMenu.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// remove sidebar
const hamburger = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});
document.addEventListener('click', function(e) {
    if(!searchMenu.contains(e.target) && !searchButton.contains(e.target)){
        searchMenu.classList.remove('active');
    }
});


