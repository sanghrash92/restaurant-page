import cafeMenu from './images/menu.jpg';

function menuPage() {
    const menu = document.createElement('div');
    menu.classList.add('menu')

    const menuPage = new Image();
    menuPage.src = cafeMenu;

    menu.appendChild(menuPage);

    return menu;
}

function loadMenu() {
    const main = document.querySelector('#main');
    main.textContent = '';

    main.appendChild(menuPage());
}

export { loadMenu }