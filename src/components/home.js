/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework/element';

import votingImage from '../../assets/images/voting.png';
import breedsImage from '../../assets/images/breeds.png';
import galleryImage from '../../assets/images/gallery.png';
import logoImage from '../../assets/images/logo.png';

export function Home({ content, setContent }) {
  return (
    <section class="home">
      <img src={logoImage} />
      <div class="greeting">
        <h3 class="greeting__heading">Lovely dog app</h3>
        <p class="greeting__text">Designed by MacPaw company</p>
      </div>
      <PrimaryMenu content={content} setContent={setContent} />
    </section>
  );
}

function PrimaryMenu({ content, setContent }) {
  const items = [
    { name: 'voting', image: votingImage },
    { name: 'breeds', image: breedsImage },
    { name: 'gallery', image: galleryImage },
  ];

  return (
    <nav class="primary-menu">
      <p class="primary-menu-text">Lets start using The Dog Api</p>
      <ul class="primary-menu-list">
        {items.map(({ name, image }) => (
          <PrimaryMenuItem name={name} image={image} content={content} setContent={setContent} />
        ))}
      </ul>
    </nav>
  );
}

function PrimaryMenuItem({ name, image, content, setContent }) {
  return (
    <li
      class={'primary-menu-item' + (content === name ? ' primary-menu-item--active' : '')}
      data-content={name}
      onclick={() => setContent(name)}
    >
      <div class="primary-menu-item__image-wrapper">
        <img class="primary-menu-item__image" src={image} />
      </div>
      <button class="primary-menu-item__button">{name}</button>
    </li>
  );
}
