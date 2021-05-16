import { icons } from '../../assets/data/icons';
import { ErrorAlert, Loader, InfoAlert } from '../components/loading';
import { ContentItem } from './content';
import updateState from '../framework/update';
import { getBreeds } from '../data/breedsApi';
import { getImagesByQuery } from '../data/imagesApi';

export function Gallery() {
  return `
    <div class="gallery content">
      <header class="gallery-header content-header">${GalleryHeader()}</header>
      <div class="content-body gallery-body">${GalleryBody()}</div>
    </div>`;
}

function GalleryHeader() {
  return `
    <a class="content-header__label content-header__back-label" data-content="banner" onclick="window.updateState({...window.initialDataStore, content: 'banner'}), window.renderApp()">${icons.back}</a>
    <a class="content-header__label content-header__name-label content-header__current-label">gallery</a>`;
}

function GalleryBody() {
  const { breedNamesLoadingError, breedNames } = dataStore;

  if (breedNamesLoadingError) {
    return ErrorAlert(breedNamesLoadingError);
  } else if (breedNames) {
    return `${GalleryForm()} ${GalleryList()}`;
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

    return Loader();
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

  return `
  <form class="content-form gallery-form">
    <div class="form-control">
      <label>Order</label>
      <select class="form-control" name="galleryOrder">
        <option value="rand" ${order === 'rand' ? 'selected' : ''}>Random</option>
        <option value="desc" ${order === 'desc' ? 'selected' : ''}>Desc</option>
        <option value="asc" ${order === 'asc' ? 'selected' : ''}>Asc</option>
      </select>
    </div>
    <div class="form-control">
      <label>Type</label>
      <select class="form-control" name="galleryType">
        <option value="all" ${type === 'all' ? 'selected' : ''}>All</option>
        <option value="static" ${type === 'static' ? 'selected' : ''}>Static</option>
        <option value="gif" ${type === 'gif' ? 'selected' : ''}>Animated</option>
      </select>
    </div>
    <div class="form-control">
      <label>Breed</label>
      <select class="form-control" name="galleryBreed">
        <option value="0" ${breed === 0 ? 'selected' : ''}>None</option>
        ${breedNames
          .map(
            ([name, id]) =>
              `<option value="${id}" ${breed === id ? 'selected' : ''}>${name}</option>`,
          )
          .join('')}
      </select>
    </div>
    <div class="form-control">
      <label>Limit</label>
      <select class="form-control" name="galleryLimit">
        ${[5, 10, 15, 20]
          .map(
            number =>
              `<option value="${number}" ${
                limit === number ? 'selected' : ''
              }>${number} items per page</option>`,
          )
          .join('')}
      </select>
    </div>
    <button role="submit" onclick="event.preventDefault(), window.updateState({images: null, galleryOrder: this.form[0].value, galleryType: this.form[1].value, galleryBreed: +this.form[2].value, galleryLimit: +this.form[3].value}), window.renderApp()">Update items</button>
    </form>`;
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
    return ErrorAlert(imagesLoadingError);
  } else if (images) {
    const items = window.dataStore.images.map(image => GalleryItem(image));
    return items.length
      ? `<ul class="content-list gallery-list">${items.join('')}</ul>`
      : InfoAlert('No item found');
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

    return Loader();
  }
}

function GalleryItem({ url }) {
  return `
    <li class="content-item">${ContentItem(url)}</li>`;
}
