import './menu.css';

import foodPic1 from './images/burger.jpg';
import foodPic2 from './images/pizza.jpg';
import foodPic3 from './images/salmon.jpg';
import foodPic4 from './images/shrimp.jpg';
import foodPic5 from './images/steak.jpg';
import foodPic6 from './images/wings.jpg';

function menuPageLoad() {
    const content = document.querySelector('#content');

    const label = document.createElement('h1');
    label.textContent = 'Menu';

    const menuBlock = document.createElement('div');
    menuBlock.id = 'menublock';

    const item1 = document.createElement('div');
    const item2 = document.createElement('div');
    const item3 = document.createElement('div');
    const item4 = document.createElement('div');
    const item5 = document.createElement('div');
    const item6 = document.createElement('div');


    content.appendChild(label);
    content.appendChild(menuBlock);

    menuBlock.appendChild(item1);
    menuBlock.appendChild(item2);
    menuBlock.appendChild(item3);
    menuBlock.appendChild(item4);
    menuBlock.appendChild(item5);
    menuBlock.appendChild(item6);

    const item1Img = document.createElement('img');
    item1Img.id = 'img1';
    item1Img.src = foodPic1;
    item1Img.alt = 'burger picture; credit to Delfina Cocciardi on Unsplash';
    const item1Name = document.createElement('p');
    item1Name.id = 'name1';
    item1Name.textContent = 'Burger with Fries';

    const item2Img = document.createElement('img');
    item2Img.id = 'img2';
    item2Img.src = foodPic2;
    item2Img.alt = 'pizza picture; credit to Alward Castillo on Unsplash';
    const item2Name = document.createElement('p');
    item2Name.id = 'name2';
    item2Name.textContent = 'Pizza';

    const item3Img = document.createElement('img');
    item3Img.id = 'img3';
    item3Img.src = foodPic3;
    item3Img.alt = 'salmon picture; credit to Casey Lee on Unsplash';
    const item3Name = document.createElement('p');
    item3Name.id = 'name3';
    item3Name.textContent = 'Salmon with Diced Vegetables';

    const item4Img = document.createElement('img');
    item4Img.id = 'img4';
    item4Img.src = foodPic4;
    item4Img.alt = 'shrimp picture; Quentin Mahe on Unsplash';
    const item4Name = document.createElement('p');
    item4Name.id = 'name4';
    item4Name.textContent = 'Shrimp with Sliced Tomatoes';

    const item5Img = document.createElement('img');
    item5Img.id = 'img5';
    item5Img.src = foodPic5;
    item5Img.alt = 'steak picture; Alex Munsell on Unsplash';
    const item5Name = document.createElement('p');
    item5Name.id = 'name5';
    item5Name.textContent = 'Steak with Vegetables';

    const item6Img = document.createElement('img');
    item6Img.id = 'img6';
    item6Img.src = foodPic6;
    item6Img.alt = 'Alina Chernysheva on Unsplash';
    const item6Name = document.createElement('p');
    item6Name.id = 'name6';
    item6Name.textContent = 'Chicken Wings';

    item1.appendChild(item1Img);
    item1.appendChild(item1Name);
    item2.appendChild(item2Img);
    item2.appendChild(item2Name);
    item3.appendChild(item3Img);
    item3.appendChild(item3Name);
    item4.appendChild(item4Img);
    item4.appendChild(item4Name);
    item5.appendChild(item5Img);
    item5.appendChild(item5Name);
    item6.appendChild(item6Img);
    item6.appendChild(item6Name);
}

export default menuPageLoad;