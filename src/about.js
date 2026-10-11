import './about.css';

function aboutPageLoad() {
    const content = document.querySelector('#content');

    const block = document.createElement('div');
    block.id = 'block';

    const contact = document.createElement('h1');
    contact.textContent = 'Contact Us';

    const contactInfo = document.createElement('p');
    contactInfo.textContent = 'Contact us for any questions. We would love to hear from you.';

    const phoneNum = document.createElement('p');
    phoneNum.textContent = '(555) 555-1234';

    const email = document.createElement('p');
    email.textContent = 'fakeemail@odinites.com';

    const address = document.createElement('p');
    address.textContent = '123 Valhalla Boulevard Dayton, Ohio';

    const hours = document.createElement('p');
    hours.textContent = 'Operating Hours: Monday - Saturday, 10 AM - 11 PM';

    content.appendChild(block);
    block.appendChild(contact);
    block.appendChild(contactInfo);
    block.appendChild(phoneNum);
    block.appendChild(email);
    block.appendChild(address);
    block.appendChild(hours);
}

export default aboutPageLoad;