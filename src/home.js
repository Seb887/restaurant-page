const content = document.querySelector('.content');

// H1 Elemente erstellen
const createHeader = () => {
  const restaurantTitle = document.createElement('span');
  restaurantTitle.classList.add('navTitle');
  const title = document.createElement('h1');
  title.classList.add('title');

  const header = document.createElement('header');
  header.classList.add('header');

  title.appendChild(restaurantTitle);
  header.appendChild(title);

  return header;
};

// NAV Elemente erstellen
const navLinkHome = document.createElement('div');
navLinkHome.classList.add('navLink');
const navLinkMenu = document.createElement('div');
navLinkHome.classList.add('navLink');
const navLinkContact = document.createElement('div');
navLinkHome.classList.add('navLink');

// NAV Links erstellen
const aHome = document.createElement('a');
aHome.href('#');
aHome.classList.add('active');
aHome.id('home');
aHome.textContent = 'Home';
const aMenu = document.createElement('a');
aMenu.href('#menu');
aMenu.id('menu');
aMenu.textContent = 'Menu';
const aContact = document.createElement('a');
aContact.href('#contact');
aContact.id('contact');
aContact.textContent = 'Contact';
const nav = document.createElement('nav');
nav.classList.add('nav');

// Header erstellen

// Home-Section erstellen
const homeSection = document.createElement('div');
homeSection.classList.add('homeSection');
homeSection.id('homeSection');

// H1 Elemente zusammenführen

// NAV Elemente zusammenführen
navLinkHome.appendChild(aHome);
navLinkMenu.appendChild(aMenu);
navLinkContact.appendChild(aContact);
nav.appendChild(navLinkHome);
nav.appendChild(navLinkMenu);
nav.appendChild(navLinkContact);
header.appendChild(nav);

// Home-Section Elemente zusammenführen
homeSection.append(header);

// Home-Section in Content-Div einfügen
content.append(homeSection);

{
  /* <div
    class="content"
    id="content"
>
    <header class="header">
    <h1 class="title">Pizzeria <span class="navTitle">"AL DENTE"</span></h1>
    <nav class="nav">
        <div class="navLink">
        <a
            href="#"
            class="active"
            id="home"
            >Home</a
        >
        </div>
        <div class="navLink">
        <a
            href="#menu"
            id="menu"
            >Menu</a
        >
        </div>
        <div class="navLink">
        <a
            href="#contact"
            id="contact"
            >Contact</a
        >
        </div>
    </nav>
    </header>
    <!-- <main class="main"></main> -->
    
</div> */
}
