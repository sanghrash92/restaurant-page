import cafe from './images/background.jpg';

function homePage() {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');

    const paraDiv = document.createElement('div');
    paraDiv.classList.add('title');

    const paragraph = document.createElement('p');
    paragraph.textContent = 'To connect with great people who share our passion and values so that together, we create great neighbourhood coffee houses that enrich the lives of everyone we meet';

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image');

    const cafeImage = new Image();
    cafeImage.src = cafe;

    paraDiv.appendChild(paragraph);
    imageDiv.appendChild(cafeImage);

    homeDiv.appendChild(paraDiv);
    homeDiv.appendChild(imageDiv);

    return homeDiv;
}

function loadHome() {
    const main = document.querySelector('#main');
    main.textContent = '';
    main.appendChild(homePage());
}

export { loadHome }