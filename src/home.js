// Home-Section erstellen
export const createHome = () => {
  const homeImage = document.createElement('img');
  homeImage.classList.add('mt-48', 'mb-48');
  homeImage.src = `../dist/images/welcome.png`;
  homeImage.alt = 'welcome';

  const homeSection = document.createElement('div');
  homeSection.classList.add('homeSection', 'flex', 'justify-center');
  homeSection.id = 'homeSection';

  homeSection.append(homeImage);

  const content = document.querySelector('.content');
  content.append(homeSection);
};
