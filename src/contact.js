import locationImg from "./images/location.png";

function locationPage() {
    const location = document.createElement('div');
    location.classList.add('location');

    const imageLocation = document.createElement('div');
    imageLocation.classList.add('image-location');

    const locationImage = new Image();
    locationImage.src = locationImg;

    imageLocation.appendChild(locationImage);

    location.appendChild(imageLocation);
    location.appendChild(address())
    location.appendChild(hours())

    return location;
}

function address() {
    const address = document.createElement('div');
    address.classList.add('address');

    const addressHeader = document.createElement('h2');
    addressHeader.textContent = 'Address';
    
    const contactHeader = document.createElement('h2');
    contactHeader.textContent = 'Contact Us';

    address.appendChild(addressHeader);
    address.appendChild(paragraph('1600 Pennsylvania Avenue NW,'));
    address.appendChild(paragraph('Washington, DC'));
    address.appendChild(paragraph('20500, United States'));
    
    address.appendChild(contactHeader);
    address.appendChild(paragraph('Ph: 123-456-7890'));
    address.appendChild(paragraph('Email: magicbeanz@fake.com'));
    
    return address;
}

function hours() {
    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('hours');

    const hoursHeader = document.createElement('h2');
    hoursHeader.textContent = 'Hours';

    hoursDiv.appendChild(hoursHeader);

    hoursDiv.appendChild(paragraph('Monday: 07:00 - 17:00'));
    hoursDiv.appendChild(paragraph('Tuesday: 07:00 - 17:00'));
    hoursDiv.appendChild(paragraph('Wedday: 07:00 - 17:00'));
    hoursDiv.appendChild(paragraph('Thursday: 07:00 - 17:00'));
    hoursDiv.appendChild(paragraph('Friday: 07:00 - 17:00'));
    hoursDiv.appendChild(paragraph('Saturday: 07:00 - 17:00'));
    hoursDiv.appendChild(paragraph('Sunday: Closed'));

    return hoursDiv;
}

function paragraph(sentence) {
    const line = document.createElement('p');
    line.textContent = sentence;

    return line;
}

function loadLocation() {
    const main = document.querySelector('#main');
    main.textContent = '';
    main.appendChild(locationPage())
}

export { loadLocation }