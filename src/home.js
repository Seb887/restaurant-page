const content = document.querySelector('.content');

const header = document.createElement('header');
header.classList.add('header');
const title = document.createElement('h1');
title.classList.add('title');
const navTitle = document.createElement('span');
navTitle.classList.add('navTitle');

title.append(navTitle);
header.append(title);
content.append(header);

const nav = document.createElement('nav');
nav.classList.add('nav');

const navLinkHome = document.createElement('div');
navLinkHome.classList.add('navLink');
const navLinkMenu = document.createElement('div');
navLinkHome.classList.add('navLink');
const navLinkContact = document.createElement('div');
navLinkHome.classList.add('navLink');

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

navLinkHome.append(aHome);
navLinkMenu.append(aMenu);
navLinkContact.append(aContact);
nav.append(navLinkHome);
nav.append(navLinkMenu);
nav.append(navLinkContact);
header.append(nav);

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
    <footer class="footer">
    <p>
        <span>
        Copyright ©
        <script type="text/javascript">
            const year = new Date();
            document.write(year.getFullYear());
        </script></span
        >
        Seb887
    </p>
    <a
        class="pl-1 hover:text-sky-500"
        href="https://github.com/seb887"
        target="_blank"
    >
        <i class="fab fa-github"></i
    ></a>
    </footer>
</div> */
}
