// Menü-Section erstellen
export function createMenu() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add(
    'menuContainer',
    'flex',
    'justify-center',
    'flex-col',
    'columns-2',
    'w-4/5',
    'p-5',
    'pt-0',
    'm-10',
    'bg-[#00000099]'
  );
  menuContainer.id = 'menuContainer';

  const menuSection = document.createElement('div');
  menuSection.classList.add('menuSection', 'flex', 'justify-center');
  menuSection.id = 'menuSection';

  menuContainer.append(
    createMenuItem('Carne', ['tomatosauce', 'cheese', 'bacon', 'pepper'])
  );
  menuContainer.append(createMenuItem('Colorato', ['tomatosauce', 'cheese']));
  menuContainer.append(createMenuItem('Crema', ['tomatosauce', 'cheese']));
  menuContainer.append(createMenuItem('Disgustoso', ['tomatosauce', 'cheese']));
  menuContainer.append(createMenuItem('Gamberi', ['tomatosauce', 'cheese']));
  menuContainer.append(createMenuItem('Pepe', ['tomatosauce', 'cheese']));
  menuContainer.append(createMenuItem('Pomodoro', ['tomatosauce', 'cheese']));
  menuContainer.append(createMenuItem('Salsiccia', ['tomatosauce', 'cheese']));

  menuSection.append(menuContainer);

  // Seite zusammenfügen
  const content = document.querySelector('.content');
  content.append(menuSection);
}

function createMenuItem(name, description) {
  // console.log('name', name.toLowerCase());
  const menuItem = document.createElement('div');
  menuItem.classList.add(
    'menuItem',
    'flex',
    'flex-row',
    'justify-center',
    'w-full',
    'bg-[#00000099]',
    'p-5',
    'mt-5'
  );
  menuItem.id = name;

  const menuImage = document.createElement('img');
  menuImage.classList.add('w-40', 'h-40');
  menuImage.src = `../dist/images/menu/${name.toLowerCase()}.png`;
  menuImage.alt = name;

  const menuImageContainer = document.createElement('div');
  menuImageContainer.classList.add('flex', 'text-center', 'w-52', 'mr-4');
  menuImageContainer.append(menuImage);

  const menuHeader = document.createElement('h1');
  menuHeader.classList.add('font-bold', 'text-2xl', 'mt-2', 'mb-6');
  menuHeader.textContent = name;

  const menuDescription = document.createElement('p');
  menuDescription.classList.add('text-gray-300');
  menuDescription.textContent = description.join(', ');

  const menuDescriptionContainer = document.createElement('div');
  menuDescriptionContainer.classList.add(
    'flex',
    'flex-col',
    'text-center',
    'w-96'
  );
  menuDescriptionContainer.append(menuHeader, menuDescription);

  menuItem.append(menuImageContainer, menuDescriptionContainer);

  return menuItem;
}
