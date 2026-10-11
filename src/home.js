import './home.css';
import restaurantImage from './images/homepage_image.jpg';

function homePageLoad() {
    const content = document.querySelector('#content');

    const heading = document.createElement('h1');
    heading.textContent = 'Odinite\'s';

    const image = document.createElement('img');
    image.src = restaurantImage;
    image.alt = 'homepage image; credit to Igor Rand on Unsplash';

    const greeting = document.createElement('p');
    greeting.id = 'greet';
    greeting.textContent = 'Welcome to Odinite\'s';

    const info = document.createElement('p');
    info.textContent = 'Fresh, flavorful comfort food served in a relaxed, welcoming space. Whether you are dropping in for a quick lunch, catching up with friends, or bringing the whole family for dinner, we are your go-to neighborhood spot for great food and good vibes.';

    const restaurantHours = document.createElement('h2');
    restaurantHours.textContent = 'Operating Hours';

    const hours = document.createElement('p');
    hours.textContent = 'Monday - Saturday, 10 AM - 11 PM';

    content.appendChild(heading);
    content.appendChild(image);
    content.appendChild(greeting);
    content.appendChild(info);
    content.appendChild(restaurantHours);
    content.appendChild(hours);
}

export default homePageLoad;