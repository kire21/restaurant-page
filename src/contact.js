function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const contactUs = document.createElement('h2');
  contactUs.classList.add('contact__us');
  contactUs.textContent = `Contact us`;

  const contactMail = document.createElement('p');
  contactMail.classList.add('contact__mail');
  contactMail.textContent = 'Mail: contact@bowl.com';

  const contactPhone = document.createElement('p');
  contactPhone.classList.add('contact__phone');
  contactPhone.textContent = 'Phone: +00 000 000';

  contact.appendChild(contactUs);
  contact.appendChild(contactMail);
  contact.appendChild(contactPhone);

  return contact;
}

function loadContact() {
  const main = document.querySelector('#main');
  main.textContent = '';
  main.appendChild(createContact());
}

export default loadContact;
