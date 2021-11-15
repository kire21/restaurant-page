function createMenu() {
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

  hero.appendChild(welcomeText);
  welcomeText.appendChild(menuHeading);
  welcomeText.appendChild(menuText);
  hero.appendChild(menuImage);
  menuImage.appendChild(image);
  main.appendChild(menu);

  menu.appendChild(loadRecipes('Noodle One', 'Price: 10$'));
  menu.appendChild(loadRecipes('Noodle Two', 'Price: 10$'));
  menu.appendChild(loadRecipes('Noodle Three', 'Price: 10$'));
  menu.appendChild(loadRecipes('Noodle Four', 'Price: 10$'));
  menu.appendChild(loadRecipes('Noodle Five', 'Price: 10$'));
  menu.appendChild(loadRecipes('Noodle Six', 'Price: 10$'));

  return hero;
}

const loadRecipes = function (name, price) {
  const recipes = document.createElement('div');
  recipes.classList.add('recipes');

  const menuHeader = document.createElement('div');
  menuHeader.classList.add('menu__header');

  const infoPrice = document.createElement('div');
  infoPrice.classList.add('info__price');

  const recipeHeading = document.createElement('h3');
  recipeHeading.classList.add('recipe__heading');
  recipeHeading.textContent = name;

  const recipePrice = document.createElement('p');
  recipePrice.textContent = price;

  const recipeImage = document.createElement('img');
  recipeImage.classList.add('recipe__img');
  const setupRoot = name.toLowerCase().split(' ');

  recipeImage.src = `./images/${setupRoot[0]}-${setupRoot[1]}.png`;

  recipes.appendChild(menuHeader);
  menuHeader.appendChild(recipeImage);
  recipes.appendChild(infoPrice);
  infoPrice.appendChild(recipeHeading);
  infoPrice.appendChild(recipePrice);

  return recipes;
};

function loadMenu() {
  const main = document.querySelector('#main');
  main.textContent = '';
  main.appendChild(createMenu());
}

export default loadMenu;

const name = 'Kire Zdraveski';

const fun = name.toLowerCase().split(' ');

console.log(fun[0], fun[1]);
