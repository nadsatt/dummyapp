/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework/element';

import votingImage from '../../assets/images/voting.png';
import breedsImage from '../../assets/images/breeds.png';
import galleryImage from '../../assets/images/gallery.png';
import logoImage from '../../assets/images/logo.png';
import renderApp from '../framework/render';
import updateState from '../framework/update';

export function Home() {
  return (
    <section class="home">
      <img src={logoImage} />
      <div class="greeting">
        <h3 class="greeting__heading">Lovely dog app</h3>
        <p class="greeting__text">Designed by MacPaw company</p>
      </div>
      <PrimaryMenu />
    </section>
  );
}

function PrimaryMenu() {
  const items = [
    { name: 'voting', image: votingImage },
    { name: 'breeds', image: breedsImage },
    { name: 'gallery', image: galleryImage },
  ];

  return (
    <nav class="primary-menu">
      <p class="primary-menu-text">Lets start using The Dog Api</p>
      <ul class="primary-menu-list">
        {items.map(item => (
          <PrimaryMenuItem name={item.name} image={item.image} />
        ))}
      </ul>
    </nav>
  );
}

function PrimaryMenuItem({ name, image }) {
  return (
    <li
      class={
        'primary-menu-item' +
        (window.dataStore.content === name ? ' primary-menu-item--active' : '')
      }
      data-content={name}
      onclick={() => {
        updateState({ ...window.initialDataStore, content: name });
        renderApp();
      }}
    >
      <div class="primary-menu-item__image-wrapper">
        <img class="primary-menu-item__image" src={image} />
      </div>
      <button class="primary-menu-item__button">{name}</button>
    </li>
  );
}
