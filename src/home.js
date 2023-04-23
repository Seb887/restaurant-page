// import setHeaderAndFooter from 'website';

setHeaderAndFooter();

// Home-Section erstellen
const homeSection = document.createElement('div');
homeSection.classList.add('homeSection');
homeSection.id = 'homeSection';

// Home-Section in Content-Div einfügen
content.appendChild(homeSection);
