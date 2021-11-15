import loadContact from './contact.js';

function createHome() {
  const hero = document.createElement('div');
  hero.classList.add('hero', 'grid', 'grid--1x2');

  const welcomeText = document.createElement('div');
  welcomeText.classList.add('welcome__text', 'grid');

  const heroHeading = document.createElement('h1');
  heroHeading.classList.add('hero__heading');
  heroHeading.textContent = 'A bowl of love from Chinese cuisine for you';

  const heroText = document.createElement('p');
  heroText.textContent =
    'Lo mein is a Chinese dish with egg noodles. It often contains vegetables and some type of meat or seafood, usually beef, chicken, pork, or shrimp. It might also be served with wontons (called huntun 馄饨 in Mandarin) although wontons are usually a soup ingredient. It can also be eaten with just vegetables.';

  const button = document.createElement('button');
  button.classList.add('btn');
  button.textContent = 'Contact us';

  button.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(button);
    loadContact();
  });

  const heroImage = document.createElement('div');
  heroImage.classList.add('hero__image');

  const image = document.createElement('img');
  image.classList.add('img');
  image.src = './images/noodle-bowl.png';
  image.alt = 'Noodle in bowl';

  hero.appendChild(welcomeText);
  hero.appendChild(heroImage);
  welcomeText.appendChild(heroHeading);
  welcomeText.appendChild(heroText);
  welcomeText.appendChild(button);
  heroImage.appendChild(image);

  return hero;
}

function setActiveButton(navItem) {
  const navItems = document.querySelectorAll('.nav__item');

  navItems.forEach((navItem) => {
    if (navItem !== this) {
      navItem.classList.remove('active');
    }
  });

  navItem.classList.add('active');
}

function loadHome() {
  const main = document.querySelector('#main');
  main.textContent = '';
  main.appendChild(createHome());
}

export default loadHome;
