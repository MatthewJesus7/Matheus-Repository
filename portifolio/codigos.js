// Cores
const corDestaqueClaro = getComputedStyle(document.documentElement).getPropertyValue('--corClara');
const corDestaqueT = getComputedStyle(document.documentElement).getPropertyValue('--corDestaqueT');
const corDestaqueP = getComputedStyle(document.documentElement).getPropertyValue('--corDestaqueP');
const corDestaqueEscuro = getComputedStyle(document.documentElement).getPropertyValue('--corDestaqueEscuro');

// Botão fazer menu aparecer
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
        menu.style.backgroundColor = ''
        menuButton.style.backgroundColor = ''
    } else {
        menu.style.right = '0px';
        navbarList.style.marginRight = '200px';
        menu.style.backgroundColor = corDestaqueEscuro
        menuButton.style.backgroundColor = corDestaqueEscuro
    }
    
}
