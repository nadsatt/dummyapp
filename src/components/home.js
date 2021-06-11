import React from 'react';

import { AppContext, SearchValueContext } from '../context';
import breedsImage from '../../assets/images/breeds.png';
import galleryImage from '../../assets/images/gallery.png';
import logoImage from '../../assets/images/logo.png';

export function Home() {
  return (
    <section className="home">
      <img src={logoImage} />
      <div className="greeting">
        <h3 className="greeting__heading">Lovely dog app</h3>
        <p className="greeting__text">Designed by MacPaw company</p>
      </div>
      <PrimaryMenu />
    </section>
  );
}

function PrimaryMenu() {
  const items = [
    { name: 'breeds', image: breedsImage },
    { name: 'gallery', image: galleryImage },
  ];

  return (
    <nav className="primary-menu">
      <p className="primary-menu-text">Lets start using The Dog Api</p>
      <ul className="primary-menu-list">
        {items.map(({ name, image }) => (
          <PrimaryMenuItem key={name} name={name} image={image} />
        ))}
      </ul>
    </nav>
  );
}

function PrimaryMenuItem({ name, image }) {
  return (
    <AppContext.Consumer>
      {({ content, setContent }) => (
        <SearchValueContext.Consumer>
          {({ setSearchValue }) => (
            <li
              className={
                'primary-menu-item' + (content === name ? ' primary-menu-item--active' : '')
              }
              data-content={name}
              onClick={() => {
                setContent(name);
                setSearchValue('');
              }}
            >
              <div className="primary-menu-item__image-wrapper">
                <img className="primary-menu-item__image" src={image} />
              </div>
              <button className="primary-menu-item__button">{name}</button>
            </li>
          )}
        </SearchValueContext.Consumer>
      )}
    </AppContext.Consumer>
  );
}
