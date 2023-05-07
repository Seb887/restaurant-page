// Contact-Section erstellen
export const createContact = () => {
  const contactSection = document.createElement('div');
  contactSection.classList.add('contactSection', 'flex', 'justify-center');
  contactSection.id = 'contactSection';
  contactSection.textContent = 'CONTACT';

  const content = document.querySelector('.content');
  content.append(contactSection);
};
