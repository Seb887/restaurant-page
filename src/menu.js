import { createHeader, createFooter } from './website.js';

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');

// Menü-Section erstellen
export const createMenu = () => {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menuContainer');
  menuContainer.id = 'menuContainer';

  const menuSection = document.createElement('div');
  menuSection.classList.add('menuSection');
  menuSection.id = 'menuSection';

  menuContainer.append(createMenuItem('Carne', 'Tomato'));
  menuContainer.append(createMenuItem('Colorato', 'Tomato'));
  menuContainer.append(createMenuItem('Crema', 'Tomato'));
  menuContainer.append(createMenuItem('Disgustoso', 'Tomato'));
  menuContainer.append(createMenuItem('Gamberi', 'Tomato'));
  menuContainer.append(createMenuItem('Pepe', 'Tomato'));
  menuContainer.append(createMenuItem('Pomodoro', 'Tomato'));
  menuContainer.append(createMenuItem('Salsiccia', 'Tomato'));

  menuSection.append(menuContainer);

  // Seite zusammenfügen
  const content = document.querySelector('.content');
  content.append(menuSection);
};

const createMenuItem = (name, description) => {
  console.log('name', name.toLowerCase());
  const menuItem = document.createElement('div');
  menuItem.classList.add('menuElement');
  menuItem.id = name;

  const menuImage = document.createElement('img');
  menuImage.src = `../dist/images/menu/${name.toLowerCase()}.png`;
  menuImage.alt = name;

  const menuHeader = document.createElement('h1');
  menuHeader.textContent = name;

  const menuDescription = document.createElement('p');
  menuDescription.textContent = description;

  menuItem.append(menuImage, menuHeader, menuDescription);

  return menuItem;
};
