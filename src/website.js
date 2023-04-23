const content = document.querySelector('.content');

const createHeaderTitle = () => {
  // H1 Elemente erstellen
  const restaurantTitle = document.createElement('span');
  restaurantTitle.classList.add('restaurantTitle');
  restaurantTitle.textContent = '"Al Dente"';
  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Pizzeria ';

  // H1 Elemente zusammenführen
  title.appendChild(restaurantTitle);

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
  aHome.href = '#';
  aHome.id = 'home';
  aHome.textContent = 'Home';
  const aMenu = document.createElement('a');
  aMenu.href = '#menu';
  aMenu.id = 'menu';
  aMenu.textContent = 'Menu';
  const aContact = document.createElement('a');
  aContact.href = '#contact';
  aContact.id = 'contact';
  aContact.textContent = 'Contact';
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  // NAV Elemente zusammenführen
  navLinkHome.appendChild(aHome);
  navLinkMenu.appendChild(aMenu);
  navLinkContact.appendChild(aContact);
  nav.appendChild(navLinkHome);
  nav.appendChild(navLinkMenu);
  nav.appendChild(navLinkContact);

  return nav;
};

const createFooter = () => {
  const pElement = document.createElement('p');
  pElement.textContent = `Copyright © ${new Date().getFullYear()} - Seb887`;

  const iElement = document.createElement('i');
  iElement.classList.add('fab', 'fa-github');
  const aElement = document.createElement('a');
  aElement.href = 'https://github.com/seb887';
  aElement.target = '_blank';
  aElement.appendChild(iElement);

  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.appendChild(pElement);
  footer.appendChild(aElement);

  return footer;
};

const createHeader = () => {
  // Header erstellen
  const header = document.createElement('header');
  header.classList.add('header');

  header.appendChild(createHeaderTitle());
  header.appendChild(createNavbar());

  return header;
};

content.appendChild(createHeader());
content.appendChild(createFooter());
