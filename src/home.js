import { createHeader, createFooter } from './website.js';

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');

// Home-Section erstellen
export const createHome = () => {
  const homeSection = document.createElement('div');
  homeSection.classList.add('homeSection');
  homeSection.id = 'homeSection';
  homeSection.textContent = 'Hello World';

  const content = document.querySelector('.content');
  content.append(homeSection);
};
