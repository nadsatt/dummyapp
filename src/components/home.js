import { icons } from '../../assets/data/icons';
import votingImage from '../../assets/images/voting.png';
import breedsImage from '../../assets/images/breeds.png';
import galleryImage from '../../assets/images/gallery.png';

export function Home() {
  return `
    ${icons.logo}
    <div class="greeting">
      <h3 class="greeting__heading">Lovely dog app</h3>
      <p class="greeting__text">Designed by MacPaw company</p>
    </div>
    ${PrimaryMenu()}`;
}

function PrimaryMenu() {
  const items = [
    { name: 'voting', image: votingImage },
    { name: 'breeds', image: breedsImage },
    { name: 'gallery', image: galleryImage },
  ];

  return `
    <nav class="primary-menu">
      <p class="primary-menu-text">Lets start using The Dog Api</p>
      <ul class="primary-menu-list">${items.map(item => PrimaryMenuItem(item)).join('')}</ul>
    </nav>
  `;
}

function PrimaryMenuItem({ name, image }) {
  const { content } = dataStore;

  return `
    <li class="primary-menu-item ${content === name ? 'primary-menu-item--active' : ''}"
      data-content="${name}" onclick="window.updateState({...window.initialDataStore, content: '${name}'}), window.renderApp()">
      <div class="primary-menu-item__image-wrapper">
        <img class="primary-menu-item__image" src="${image}">
      </div>
      <button class="primary-menu-item__button">${name}</button>
    </li>`;
}
