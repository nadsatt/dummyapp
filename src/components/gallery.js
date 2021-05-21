/* eslint-disable prettier/prettier */
/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework/element';

import backImage from '../../assets/images/back.png';
import { ErrorAlert, Loader, InfoAlert } from '../components/loading';
import { ContentItem } from './content';
import updateState from '../framework/update';
import { getBreeds } from '../data/breedsApi';
import { getImagesByQuery } from '../data/imagesApi';
import renderApp from '../framework/render';
import Link from '../components/Link/link';

export function Gallery() {
  return (
    <div class="gallery content">
      <GalleryHeader />
      <GalleryBody />
    </div>
  );
}

function GalleryHeader() {
  return (
    <header class="gallery-header content-header">
      <Link
        classes="content-header__label content-header__back-label"
        onClickCB={() => {
          updateState({ ...window.initialDataStore, content: 'banner' });
          renderApp();
        }}
      >
        <img src={backImage} />
      </Link>
      <Link classes="content-header__label content-header__name-label content-header__current-label">
        gallery
      </Link>
    </header>
  );
}

function GalleryBody() {
  if (dataStore.breedNamesLoadingError) {
    return <ErrorAlert error={dataStore.breedNamesLoadingError} />;
  } else if (dataStore.breedNames) {
    return (
      <div class="content-body gallery-body">
        <GalleryForm />
        <GalleryList />
      </div>
    );
  } else {
    getBreeds(100)
      .then(breeds => {
        const breedNames = breeds.map(({ name, id }) => [name, id]);
        updateState({ breedNames });
        renderApp();
      })
      .catch(({ message }) => {
        updateState({ breedNamesLoadingError: message });
        renderApp();
      });

    return <Loader />;
  }
}

function GalleryForm() {
  const {
    breedNames,
    galleryOrder: order,
    galleryType: type,
    galleryBreed: breed,
    galleryLimit: limit,
  } = dataStore;

  return (
    <form class="content-form gallery-form">
      <div class="form-control">
        <label>Order</label>
        <select class="form-control" name="galleryOrder">
          <option value="rand" selected={order === 'rand'}>
            Random
          </option>
          <option value="desc" selected={order === 'desc'}>
            Desc
          </option>
          <option value="asc" selected={order === 'asc'}>
            Asc
          </option>
        </select>
      </div>
      <div class="form-control">
        <label>Type</label>
        <select class="form-control" name="galleryType">
          <option value="all" selected={type === 'all'}>
            All
          </option>
          <option value="static" selected={type === 'static'}>
            Static
          </option>
          <option value="gif" selected={type === 'gif'}>
            Animated
          </option>
        </select>
      </div>
      <div class="form-control">
        <label>Breed</label>
        <select class="form-control" name="galleryBreed">
          <option value="0" selected={breed === 0}>
            None
          </option>
          {breedNames.map(([name, id]) => (
            <option value={id} selected={breed === id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div class="form-control">
        <label>Limit</label>
        <select class="form-control" name="galleryLimit">
          {[5, 10, 15, 20].map(number => (
            <option value={number} selected={limit === number}>
              {number} items per page
            </option>
          ))}
        </select>
      </div>
      <button
        role="submit"
        onclick={event => {
          event.preventDefault();
          updateState({
            images: null,
            galleryOrder: event.target.form[0].value,
            galleryType: event.target.form[1].value,
            galleryBreed: +event.target.form[2].value,
            galleryLimit: +event.target.form[3].value,
          });
          renderApp();
        }}
      >
        Update items
      </button>
    </form>
  );
}

function GalleryList() {
  const {
    imagesLoadingError,
    images,
    galleryLimit: limit,
    galleryOrder: order,
    galleryType: type,
    galleryBreed: breed,
  } = dataStore;

  if (imagesLoadingError) {
    return <ErrorAlert error={imagesLoadingError} />;
  } else if (images) {
    const items = window.dataStore.images.map(image => <GalleryItem url={image.url} />);
    return items.length ? (
      <ul class="content-list gallery-list">{items}</ul>
    ) : (
      <InfoAlert message="No item found" />
    );
  } else {
    getImagesByQuery({ limit, order, type, breed })
      .then(images => {
        updateState({ images });
        renderApp();
      })
      .catch(({ message }) => {
        updateState({ imagesLoadingError: message });
        renderApp();
      });

    return <Loader />;
  }
}

function GalleryItem({ url }) {
  return (
    <li class="content-item">
      <ContentItem url={url} />
    </li>
  );
}
