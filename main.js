//DOM items
let openMenu = document.getElementById('open');
let mainMenu = document.getElementById('main')
let sideMenu = document.getElementById('side-menu');
let closeMenu = document.getElementById('close');

//Side Menu
openMenu.addEventListener('click', openSideMenu);
closeMenu.addEventListener('click', closeSideMenu);

//Functions
function openSideMenu() {
    sideMenu.style.width = '250px';
    mainMenu.style.marginLeft = '250px';
}

function closeSideMenu() {
    sideMenu.style.width = '0';
    mainMenu.style.marginLeft = '0';
}