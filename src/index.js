import './styles.css';
// clear page function
// function clearPage() {
//     content.innerHTML = '';
// }

//button functionality
const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

homeBtn.addEventListener('click', () => {
    alert('HOME');
    //clearPage();
    //homePageLoad();
});

menuBtn.addEventListener('click', () => {
    alert('MENU');
    //clearPage();
    //menuPageLoad();
});

aboutBtn.addEventListener('click', () => {
    alert('ABOUT');
    //clearPage();
    //aboutPageLoad();
});
