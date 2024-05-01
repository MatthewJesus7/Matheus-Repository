const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const navbarList = document.querySelector('.navbar-list');

menuButton.addEventListener('click', aparecerMenu);

function aparecerMenu() {
    menu.classList.add('menu');
    navbarList.classList.add('menu');

    const menuVisible = menu.style.right === '0px';
    if (menuVisible) {
        menu.style.right = '-200px';
        navbarList.style.marginRight = '0';
    } else {
        menu.style.right = '0px';
        navbarList.style.marginRight = '200px';
    }
    
}
