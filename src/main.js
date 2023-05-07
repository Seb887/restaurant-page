import { createHeader, createMain, createFooter } from './website.js';
import { createHome } from './home.js';
import { createMenu } from './menu.js';
import { createContact } from './contact.js';

const body = document.querySelector('body');

body.prepend(createFooter());
body.prepend(createMain());
body.prepend(createHeader());

const content = document.querySelector('.content');

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');

function start() {
  createHome();
  homeBtn.parentElement.classList.add('activate');
}

start();

function clearContent() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

// console.log('home', home);
// console.log('menu', menu);

homeBtn.addEventListener('click', () => {
  clearContent();
  createHome();
  homeBtn.parentElement.classList.add('activate');
  if (menuBtn.parentElement.classList.contains('activate')) {
    menuBtn.parentElement.classList.remove('activate');
  } else if (contactBtn.parentElement.classList.contains('activate')) {
    contactBtn.parentElement.classList.remove('activate');
  }
});

menuBtn.addEventListener('click', () => {
  clearContent();
  createMenu();
  menuBtn.parentElement.classList.add('activate');
  if (homeBtn.parentElement.classList.contains('activate')) {
    homeBtn.parentElement.classList.remove('activate');
  } else if (contactBtn.parentElement.classList.contains('activate')) {
    contactBtn.parentElement.classList.remove('activate');
  }
});

contactBtn.addEventListener('click', () => {
  clearContent();
  createContact();
  contactBtn.parentElement.classList.add('activate');
  if (homeBtn.parentElement.classList.contains('activate')) {
    homeBtn.parentElement.classList.remove('activate');
  } else if (menuBtn.parentElement.classList.contains('activate')) {
    menuBtn.parentElement.classList.remove('activate');
  }
});
