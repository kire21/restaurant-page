const RECIPES = [
  { heading: 'Noodle One', price: '10$', img: './noodle-one.png' },
  { heading: 'Noodle Two', price: '7$', img: './noodle-one.png' },
  { heading: 'Noodle Three', price: '15$', img: './noodle-one.png' },
];

function createMenu(recipe) {
  const hero = document.createElement('div');
  hero.classList.add('hero', 'grid', 'grid--1x2');

  const welcomeText = document.createElement('div');
  welcomeText.classList.add('welcome__text', 'grid');

  const menuHeading = document.createElement('h1');
  menuHeading.classList.add('hero__heading');
  menuHeading.textContent = `it's not just FOOD, it's an Experience.`;

  const menuText = document.createElement('p');
  menuText.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
    impedit voluptatum laudantium debitis saepe, porro laboriosam,
    dolore rerum ipsa voluptatem assumenda perspiciatis quo eveniet
    illum, harum magni in perferendis cumque? Lorem ipsum dolor sit
    amet, consectetur adipisicing elit. Vel impedit voluptatum
    laudantium debitis saepe, porro laboriosam, dolore rerum ipsa
    voluptatem assumenda perspiciatis quo eveniet illum, harum magni in
    perferendis cumque?`;

  const menuImage = document.createElement('div');
  menuImage.classList.add('hero__image');

  const image = document.createElement('img');
  image.classList.add('img');
  image.src = './images/noodle-menu.png';
  image.alt = 'Noodle in bowl';

  const menu = document.createElement('div');
  menu.classList.add('menu', 'grid', 'grid--2x3');

  const recipes = document.createElement('div');
  recipes.classList.add('recipes');

  const menuHeader = document.createElement('div');
  menuHeader.classList.add('menu__header');

  const recipeImage = document.createElement('img');
  recipeImage.classList.add('recipe__img');
  recipeImage.src = './images/noodle-one.png';
  image.alt = '';

  const infoPrice = document.createElement('div');
  infoPrice.classList.add('info__price');

  const recipeHeading = document.createElement('h3');
  recipeHeading.classList.add('recipe__heading');
  recipeHeading.textContent = 'Noodle One';

  const recipePrice = document.createElement('p');
  recipePrice.textContent = `Price: 15$`;

  hero.appendChild(welcomeText);
  welcomeText.appendChild(menuHeading);
  welcomeText.appendChild(menuText);
  hero.appendChild(menuImage);
  menuImage.appendChild(image);
  main.appendChild(menu);
  menu.appendChild(recipes);
  recipes.appendChild(menuHeader);
  menuHeader.appendChild(recipeImage);
  recipes.appendChild(infoPrice);
  infoPrice.appendChild(recipeHeading);
  infoPrice.appendChild(recipePrice);

  return hero;
}

function loadRecipes() {
  const main = document.querySelector('#main');
  main.textContent = '';
  main.appendChild(createMenu());
  // RECIPES.forEach((recipe) => createMenu(recipe));
}

export default loadRecipes;
