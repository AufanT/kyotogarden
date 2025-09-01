// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
const searchMenu = document.querySelector('.search-menu');
const navbar = document.querySelector('.navbar');
const searchBox = document.querySelector('#search-box');
const loginMenu = document.querySelector('.login-menu');

document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};
document.querySelector('#search-button').onclick = (e) => {
    searchMenu.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};
document.querySelector('#login-button').onclick = (e) => {
    loginMenu.classList.toggle('active');
    e.preventDefault();
};

// remove sidebar
const hamburger = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button');
const loginButton = document.querySelector('#login-button');
const loginBox = document.querySelector('#login-box');

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
document.addEventListener('click', function(e) {
    if(!loginBox.contains(e.target) && !loginButton.contains(e.target)){
        loginMenu.classList.remove('active');
    }
});


