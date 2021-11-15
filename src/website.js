import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
// import loadRecipes from './recipes.js';

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const nav = document.createElement('nav');
  nav.classList.add('nav', 'flex');

  const logoText = document.createElement('div');
  logoText.classList.add('logo__text');

  const logo = document.createElement('h3');
  logo.classList.add('logo');
  logo.textContent = 'Chinese Bowl';

  const navigation = document.createElement('div');
  navigation.classList.add('nav');

  const navList = document.createElement('ul');
  navList.classList.add('nav__list', 'flex');

  const navLinkHome = document.createElement('a');
  navLinkHome.classList.add('nav__link');

  const homeButton = document.createElement('li');
  homeButton.classList.add('nav__item');
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(homeButton);
    loadHome();
  });

  const navLinkMenu = document.createElement('a');
  navLinkMenu.classList.add('nav__link');

  const menuButton = document.createElement('li');
  menuButton.classList.add('nav__item');
  menuButton.textContent = 'Menu';
  menuButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(menuButton);
    loadMenu();
    // loadRecipes();
  });

  const navLinkContact = document.createElement('a');
  navLinkContact.classList.add('nav__link');

  const contactButton = document.createElement('li');
  contactButton.classList.add('nav__item');
  contactButton.textContent = 'Contact';
  contactButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(contactButton);
    loadContact();
  });

  header.appendChild(nav);
  nav.appendChild(logoText);
  logoText.appendChild(logo);
  nav.appendChild(navigation);
  navigation.appendChild(navList);
  navList.appendChild(navLinkHome);
  navLinkHome.appendChild(homeButton);
  navList.appendChild(navLinkMenu);
  navLinkMenu.appendChild(menuButton);
  navList.appendChild(navLinkContact);
  navLinkContact.appendChild(contactButton);

  return header;
}

// function createNavigation() {}

function setActiveButton(navItem) {
  const navItems = document.querySelectorAll('.nav__item');

  navItems.forEach((navItem) => {
    if (navItem !== this) {
      navItem.classList.remove('active');
    }
  });

  navItem.classList.add('active');
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const madeBy = document.createElement('p');
  madeBy.classList.add('footer__text');
  madeBy.textContent = 'Made by Kire Zdraveski';

  footer.appendChild(madeBy);

  return footer;
}

function initializeWebsite() {
  const content = document.querySelector('#content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector('.nav__item'));
  loadHome();
}

export default initializeWebsite;
