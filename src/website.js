const createHeaderTitle = () => {
  // H1 Elemente erstellen
  const restaurantTitle = document.createElement('span');
  restaurantTitle.classList.add('restaurantTitle');
  restaurantTitle.textContent = '"Al Dente"';
  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Pizzeria ';

  // H1 Elemente zusammenführen
  title.append(restaurantTitle);

  return title;
};

const createNavbar = () => {
  // NAV Elemente erstellen
  const navLinkHome = document.createElement('div');
  navLinkHome.classList.add('navLink');
  const navLinkMenu = document.createElement('div');
  navLinkMenu.classList.add('navLink');
  const navLinkContact = document.createElement('div');
  navLinkContact.classList.add('navLink');

  // NAV Links erstellen
  const aHome = document.createElement('a');
  aHome.id = 'home';
  aHome.textContent = 'Home';
  const aMenu = document.createElement('a');
  aMenu.id = 'menu';
  aMenu.textContent = 'Menu';
  const aContact = document.createElement('a');
  aContact.id = 'contact';
  aContact.textContent = 'Contact';
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  // NAV Elemente zusammenführen
  navLinkHome.append(aHome);
  navLinkMenu.append(aMenu);
  navLinkContact.append(aContact);
  nav.append(navLinkHome);
  nav.append(navLinkMenu);
  nav.append(navLinkContact);

  return nav;
};

// Header Bereich erstellen
export const createHeader = () => {
  // Header-Bereich erstellen
  const header = document.createElement('header');
  header.classList.add('header');

  header.append(createHeaderTitle());
  header.append(createNavbar());

  return header;
};

export const createMain = () => {
  // Main-Bereich erstellen
  const main = document.createElement('main');
  main.classList.add('content');

  return main;
};

export const createFooter = () => {
  const pElement = document.createElement('p');
  pElement.textContent = `Copyright © ${new Date().getFullYear()} - Seb887`;

  const iElement = document.createElement('i');
  iElement.classList.add('fab', 'fa-github');
  const aElement = document.createElement('a');
  aElement.href = 'https://github.com/seb887';
  aElement.target = '_blank';
  aElement.append(iElement);

  // Footer-Bereich erstellen
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.append(pElement);
  footer.append(aElement);

  return footer;
};
