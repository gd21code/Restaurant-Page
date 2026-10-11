import './styles.css';

import homePageLoad from './home.js';
import menuPageLoad from './menu.js';
import aboutPageLoad from './about.js';

//clear page function
function clearPage() {
    content.innerHTML = '';
}

homePageLoad();

//button functionality
const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

homeBtn.addEventListener('click', () => {
    clearPage();
    homePageLoad();
});

menuBtn.addEventListener('click', () => {
    clearPage();
    menuPageLoad();
});

aboutBtn.addEventListener('click', () => {
    clearPage();
    aboutPageLoad();
});