
// script untuk hamburger responsive
const listmenu = document.querySelector ('nav .container-list-menu-project-revou');
const menuhamburger = document.querySelector('.hamburger-menu-project-revou input');
const nav = document.querySelector('nav .container-list-menu-project-revou');

listmenu.addEventListener('click', function(){
nav.classList.toggle('slider');
menuhamburger.checked = false;
});
menuhamburger.addEventListener('click', function(){
nav.classList.toggle('slider');
});

