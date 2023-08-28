import './style.css';
import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadLocation } from './contact';

function createTitle() {
    const content = document.querySelector('#content');
    
    content.appendChild(createRestaurantname());
    content.appendChild(navBar());
    content.appendChild(welcomePara());
    content.appendChild(createMain());
    content.appendChild(createFooter())

    loadHome();

    return createTitle;
}

function createRestaurantname() {
    const header = document.createElement('header');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'Magic Beanz'

    header.appendChild(restaurantName);

    return header;
}

function navBar() {
    const nav = document.createElement('nav');
    nav.classList.add('button-nav');

    const home = document.createElement('button');
    home.classList.add('buttons');
    home.textContent = 'Home';
    home.addEventListener('click', (e) => {
        loadHome()
    })

    const menu = document.createElement('button');
    menu.classList.add('buttons');
    menu.textContent = 'Menu';
    menu.addEventListener('click', (e) => {
        loadMenu();
    })

    const contact = document.createElement('button');
    contact.classList.add('buttons');
    contact.textContent = 'Contact';
    contact.addEventListener('click', (e) => {
        loadLocation();
    })

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    return nav;
}

function welcomePara() {
    const div = document.createElement('div');
    div.classList.add('header-note');

    const welcomeMessage = document.createElement('h3');
    welcomeMessage.textContent = 'Welcome to Magic Beanz';

    div.appendChild(welcomeMessage);

    return div;
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute("id", "main");

    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const creator = document.createElement('p');
    creator.textContent = 'Created by Sanghrash92';

    const githubLink = document.createElement('a');
    githubLink.href = "https://github.com/sanghrash92";

    const icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add('fa-github');

    githubLink.appendChild(icon);
    footer.appendChild(creator);
    footer.appendChild(githubLink);

    return footer;
}

createTitle();