const createHeaderTitle = () => {
  // H1 Elemente erstellen
  const restaurantTitle = document.createElement('span');
  restaurantTitle.classList.add(
    'restaurantTitle',
    'font-bold',
    'text-lime-600',
    'italic'
  );
  restaurantTitle.textContent = '"Al Dente"';
  const title = document.createElement('h1');
  title.classList.add('title', 'mt-8', 'mb-11', 'text-8xl');
  title.textContent = 'Pizzeria ';

  // H1 Elemente zusammenführen
  title.append(restaurantTitle);

  return title;
};

const createNavbar = () => {
  // NAV Elemente erstellen
  const navLinkHome = document.createElement('div');
  navLinkHome.classList.add('navLink', 'hover:-translate-y-1');
  const navLinkMenu = document.createElement('div');
  navLinkMenu.classList.add('navLink', 'hover:-translate-y-1');
  const navLinkContact = document.createElement('div');
  navLinkContact.classList.add('navLink', 'hover:-translate-y-1');

  // NAV Links erstellen
  const aHome = document.createElement('a');
  aHome.classList.add(
    'no-underline',
    'text-gray-300',
    'pb-2',
    'hover:text-lime-600'
  );
  aHome.id = 'home';
  aHome.textContent = 'Home';
  const aMenu = document.createElement('a');
  aMenu.classList.add(
    'no-underline',
    'text-gray-300',
    'pb-2',
    'hover:text-lime-600'
  );
  aMenu.id = 'menu';
  aMenu.textContent = 'Menu';
  const aContact = document.createElement('a');
  aContact.classList.add(
    'no-underline',
    'text-gray-300',
    'pb-2',
    'hover:text-lime-600'
  );
  aContact.id = 'contact';
  aContact.textContent = 'Contact';
  const nav = document.createElement('nav');
  nav.classList.add(
    'nav',
    'flex',
    'justify-center',
    'space-x-16',
    'w-3/5',
    'text-4xl'
  );

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
  header.classList.add(
    'header',
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    'pb-8',
    'border-b',
    'border-gray-500',
    'bg-[#00000099]'
  );

  header.append(createHeaderTitle());
  header.append(createNavbar());

  return header;
};

export const createMain = () => {
  // Main-Bereich erstellen
  const main = document.createElement('main');
  main.classList.add('content', 'flex', 'justify-center', 'w-screen');

  return main;
};

export const createFooter = () => {
  const pElement = document.createElement('p');
  pElement.classList.add('flex', 'items-center', 'text-gray-300');
  pElement.textContent = `Copyright © ${new Date().getFullYear()} - Seb887`;

  const iElement = document.createElement('i');
  iElement.classList.add('fab', 'fa-github');
  const aElement = document.createElement('a');
  aElement.classList.add(
    'flex',
    'items-center',
    'pl-2',
    'text-gray-300',
    'hover:text-lime-600',
    'no-underline'
  );
  aElement.href = 'https://github.com/seb887';
  aElement.target = '_blank';
  aElement.append(iElement);

  // Footer-Bereich erstellen
  const footer = document.createElement('footer');
  footer.classList.add(
    'footer',
    'flex',
    'justify-center',
    'w-screen',
    'h-1/6',
    'border-t',
    'border-gray-500',
    'bg-[#00000099]',
    'h-16'
  );
  footer.append(pElement);
  footer.append(aElement);

  return footer;
};
