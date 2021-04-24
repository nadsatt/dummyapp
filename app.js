import { getData } from './utils';
import { data } from './assets/data/data';
import { icons } from './assets/data/icons';
import votingImage from './assets/images/voting.png';
import breedsImage from './assets/images/breeds.png';
import galleryImage from './assets/images/gallery.png';
import girlImage from './assets/images/girl.png';

// STATE INITIALIZATION & INITIAL RENDERING
window.initialAppState = {
  content: 'banner',

  breeds: null,
  breedsLoadingError: '',
  breedsBreed: 0,
  breedsOrder: 'asc',
  breedsLimit: 5,

  breedNames: null,
  breedNamesLoadingError: '',
  images: null,
  imagesLoadingError: '',
  galleryBreed: 0,
  galleryType: 'all',
  galleryOrder: 'asc',
  galleryLimit: 5,

  searchResults: null,
  searchResultsLoadingError: '',
  search: '',
  searchTimer: null,
};
window.appState = {};
renderApp(initialAppState);

// COMPONENT RENDERERS
function renderApp(newState) {
  Object.assign(appState, newState);
  document.getElementById('main').innerHTML = `
    <section class="home">${Home()}</section>
    <section class="content-wrapper">${ContentWrapper()}</section>`;
}
function renderBreedsList(newState) {
  Object.assign(appState, newState);
  document.querySelector('.breeds-list').innerHTML = BreedsList();
}
function renderGalleryList(newState) {
  Object.assign(appState, newState);
  document.querySelector('.gallery-list').innerHTML = GalleryList();
}
function renderSearchList(newState) {
  Object.assign(appState, newState);
  document.querySelector('.search-list').innerHTML = SearchList();
}
window.renderApp = renderApp;
window.renderGalleryList = renderGalleryList;
window.renderBreedsList = renderBreedsList;
window.renderSearchList = renderSearchList;

// COMPONENTS
// LOADING COMPONENTS
function Loader() {
  return `<div class="loader">${icons.loader}</div>`;
}
function LoadingError(message) {
  return `<p class="alert">${message}</p>`;
}

// HOME COMPONENT
function Home() {
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
  return `
    <li class="primary-menu-item ${appState.content === name ? 'primary-menu-item--active' : ''}"
      data-content="${name}" onclick="window.renderApp({...window.initialAppState, content: '${name}'})">
      <div class="primary-menu-item__image-wrapper">
        <img class="primary-menu-item__image" src="${image}">
      </div>
      <button class="primary-menu-item__button">${name}</button>
    </li>`;
}

// CONTENT WRAPPER COMPONENT
function ContentWrapper() {
  if (appState.content === 'banner') {
    return Banner();
  }
  return (
    SecondaryMenu() +
    (appState.content === 'voting'
      ? Voting()
      : appState.content === 'breeds'
      ? Breeds()
      : appState.content === 'gallery'
      ? Gallery()
      : appState.content === 'breed-details'
      ? BreedDetails()
      : Search())
  );
}

// BANNER COMPONENT
function Banner() {
  return `<div class="banner"><img class="banner__image" src=${girlImage}></div>`;
}

// SECONDARY MENU COMPONENT
function SecondaryMenu() {
  if (appState.content === 'search') {
    setTimeout(() => {
      // save entered value & cursor position after search input rerendering
      const input = document.getElementById('search-control');
      input.value = appState.search;
      input.selectionStart = appState.search.length;
      input.selectionEnd = appState.search.length;
      input.focus();
    });
  }

  return `
    <nav class="secondary-menu">
      <input class="form-control"
       id="search-control"
       placeholder="Search for breeds"
       oninput="window.renderApp({...window.initialAppState, content: 'search', search: this.value})"
       type="text">
    </nav>`;
}

// VOTING COMPONENT
function Voting() {
  return `<div class="voting">Voting component works!</div>`;
}

// BREEDS COMPONENT
function Breeds() {
  return `
    <div class="content breeds">
      <header class="content-header breeds-header">${BreedsHeader()}</header>
      <div class="content-body breeds-body">${BreedsBody()}</div>
    </div>`;
}
function BreedsHeader() {
  return `
    <a class="content-header__label content-header__back-label" onclick="window.renderApp({...window.initialAppState, content: 'banner'})">${icons.back}</a>
    <a class="content-header__label content-header__name-label content-header__current-label">breeds</a>`;
}
function BreedsBody() {
  if (appState.breedsLoadingError) {
    return LoadingError(appState.breedsLoadingError);
  } else if (appState.breeds) {
    return `
      <form class="content-form breeds-form">${BreedsForm()}</form>
      <ul class="content-list breeds-list">${BreedsList()}</ul>`;
  } else {
    getData(`https://api.thedogapi.com/v1/breeds?limit=20`, breed => breed.image.url)
      .then(breeds => {
        renderApp({ breeds });
      })
      .catch(({ message }) => {
        renderApp({ breedsLoadingError: message });
      });
    return Loader();
  }
}
function BreedsForm() {
  return `
    <div class="form-control">
      <label>Breed</label>
      <select class="form-control" oninput="window.renderBreedsList({breedsBreed: +this.value})">
        <option value="0">All breeds</option>
        ${data.breeds
          .map(
            ({ name, id }) =>
              `<option value="${id}" ${
                appState.breedsBreed === id ? 'selected' : ''
              }>${name}</option>`,
          )
          .join('')}
      </select>
    </div>
    <div class="form-control">
      <label>Limit</label>
      <select class="form-control" oninput="window.renderBreedsList({breedsLimit: +this.value})">
        ${[5, 10, 15, 20]
          .map(
            number =>
              `<option value="${number}" ${
                appState.breedsLimit === number ? 'selected' : ''
              }>Limit: ${number}</option>`,
          )
          .join('')}
      </select>
    </div>
    <div class="form-control" oninput="window.renderBreedsList({breedsOrder: event.target.value})">
      <label for="asc">Asc</label>
      <input id="asc" type="radio" name="order" value="asc" ${
        appState.breedsOrder === 'asc' ? 'checked' : ''
      }>
      <label for="desc">Desc</label>
      <input id="desc" type="radio" name="order" value="desc" ${
        appState.breedsOrder === 'desc' ? 'checked' : ''
      }>
    </div>
  `;
}
function BreedsList() {
  return appState.breeds
    .filter(({ id }) => (appState.breedsBreed !== 0 ? id === appState.breedsBreed : true))
    .slice(0, appState.breedsLimit || undefined)
    .sort(({ name: prev }, { name: next }) =>
      appState.breedsOrder === 'asc' ? prev.localeCompare(next) : next.localeCompare(prev),
    )
    .map(breed => BreedsItem(breed))
    .join('');
}
function BreedsItem({ id, name, image: { url } }) {
  return `
    <ul$ class="breeds-item content-item" onclick="renderApp({content: 'breed-details', breedId: ${id}})">
      <img class="breeds-item__image content-item__image" src="${url}">
      <div class="breeds-item__overlap">
        <h4 class="breeds-item__overlap-heading">${name}</h4>
      </div>
    </ul$>
  `;
}

// BREED DETAILS COMPONENT
function BreedDetails() {
  const breed = appState.breeds.find(breed => breed.id === appState.breedId);

  return `
    <div class="content breed-details">
      <header class="content-header breed-details-header">${BreedDetailsHeader()}</header>
      <div class="content-body breed-details-body">${BreedDetailsBody(breed)}</div>
    </div>`;
}
function BreedDetailsHeader() {
  return `
  <a class="content-header__label content-header__back-label" onclick="window.renderApp({...window.initialAppState, content: 'banner'})">${icons.back}</a>
  <a class="content-header__label content-header__name-label" onclick="window.renderApp({content: 'breeds'})">breeds</a>
  <a class="content-header__label content-header__id-label content-header__current-label">${appState.breedId}</a>`;
}
function BreedDetailsBody(breed) {
  return `
  <img class="breed-details-body__img" src="${breed.image.url}">
  <div class="breed-details-body__about">
  <h3 class="breed-details-body__name">${breed.name}</h3>
  <h4 class="breed-details-body__for">${breed['bred_for']}</h4>
  <div class="breed-details-body__info">
    <div class="breed-details-body__temperament breed-details-body__info-item">
      <span>Temperament:</span>
      <span>${breed.temperament}</span>
    </div>
    <div class="breed-details-body__height breed-details-body__info-item">
      <span>Height:</span>
      <span>${breed.height.metric} cm at the withers</span>
    </div>
    <div class="breed-details-body__weight breed-details-body__info-item">
      <span>Weight:</span>
      <span>${breed.weight.metric} kg</span>
    </div>
    <div class="breed-details-body__lifespan breed-details-body__info-item">
      <span>Life span:</span>
      <span>${breed['life_span']}</span>
    </div>
  </div>
</div>`;
}

// GALLERY COMPONENT
function Gallery() {
  return `
    <div class="gallery content">
      <header class="gallery-header content-header">${GalleryHeader()}</header>
      <div class="content-body gallery-body">${GalleryBody()}</div>
    </div>`;
}
function GalleryHeader() {
  return `
    <a class="content-header__label content-header__back-label" data-content="banner" onclick="window.renderApp({...window.initialAppState, content: 'banner'})">${icons.back}</a>
    <a class="content-header__label content-header__name-label content-header__current-label">gallery</a>`;
}
function GalleryBody() {
  if (appState.breedNamesLoadingError) {
    return LoadingError(appState.breedNamesLoadingError);
  } else if (appState.breedNames) {
    return `
      <form class="content-form gallery-form">${GalleryForm()}</form>
      <ul class="content-list gallery-list">${GalleryList()}</ul>`;
  } else {
    getData(`https://api.thedogapi.com/v1/breeds?limit=100`)
      .then(breedNames => {
        renderApp({ breedNames });
      })
      .catch(({ message }) => {
        renderApp({ breedNamesLoadingError: message });
      });

    return `
      <div class="gallery content">
        <header class="gallery-header content-header">${GalleryHeader()}</header>
        <div class="content-body gallery-body">${Loader()}</div>
      </div>`;
  }
}
function GalleryForm() {
  return `
    <div class="form-control">
      <label>Order</label>
      <select class="form-control" name="galleryOrder">
        <option value="rand" ${appState.galleryOrder === 'rand' ? 'selected' : ''}>Random</option>
        <option value="desc" ${appState.galleryOrder === 'desc' ? 'selected' : ''}>Desc</option>
        <option value="asc" ${appState.galleryOrder === 'asc' ? 'selected' : ''}>Asc</option>
      </select>
    </div>
    <div class="form-control">
      <label>Type</label>
      <select class="form-control" name="galleryType">
        <option value="all">All</option>
        <option value="static">Static</option>
        <option value="gif">Animated</option>
      </select>
    </div>
    <div class="form-control">
      <label>Breed</label>
      <select class="form-control" name="galleryBreed">
        <option value="0" ${appState.galleryBreed === 0 ? 'selected' : ''}>None</option>
        ${appState.breedNames
          .map(
            ({ name, id }) =>
              `<option value="${id}" ${
                appState.galleryBreed === id ? 'selected' : ''
              }>${name}</option>`,
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
                appState.galleryLimit === number ? 'selected' : ''
              }>${number} items per page</option>`,
          )
          .join('')}
      </select>
    </div>
    <button role="submit" onclick="event.preventDefault(), window.renderGalleryList({images: null, galleryOrder: this.form[0].value, galleryType: this.form[1].value, galleryBreed: +this.form[2].value, galleryLimit: +this.form[3].value})">Update items</button>`;
}
function GalleryList() {
  if (appState.imagesLoadingError) {
    return LoadingError(appState.imagesLoadingError);
  } else if (appState.images) {
    return appState.images.map(image => GalleryItem(image)).join('');
  } else {
    getData(
      `https://api.thedogapi.com/v1/images/search?limit=${appState.galleryLimit}&order=${appState.galleryOrder}&mime_types=${appState.galleryType}` +
        (appState.galleryBreed !== 0 ? `&breed_id=${appState.galleryBreed}` : ``),
      image => image.url,
    )
      .then(images => {
        renderApp({ images });
      })
      .catch(({ message }) => {
        renderApp({ imagesLoadingError: message });
      });

    return Loader();
  }
}
function GalleryItem({ breeds: [{ name } = { name: '' }], url }) {
  return `
    <li class="gallery-item content-item">
      <img class="gallery-item__image content-item__image" src="${url}">
      <div>Breed: ${name}</div>
    </li>`;
}

// SEARCH COMPONENT
function Search() {
  // ensure sending request only when user input stopped
  clearTimeout(appState.searchTimer);
  appState.searchTimer = setTimeout(renderSearchList, 500);

  return `
    <div class="content search">
      <header class="content-header search-header">${SearchHeader()}</header>
      <div class="content-body search-body">
        <ul class="content-list search-list"></ul>
      </div>
    </div>`;
}
function SearchHeader() {
  return `
    <a class="content-header__label" data-content="banner" onclick="window.renderApp({...window.initialAppState, content: 'banner'})">${icons.back}</a>
    <a class="content-header__label content-header__name-label content-header__current-label">search</a>`;
}
function SearchList() {
  if (appState.searchResultsLoadingError) {
    return LoadingError(appState.searchResultsLoadingError);
  } else if (appState.searchResults) {
    return appState.searchResults
      .filter(({ name = '' }) => name !== '')
      .map(({ name }) => SearchItem(name))
      .join('');
  } else {
    getData(`https://api.thedogapi.com/v1/breeds/search?q=${appState.search}`)
      .then(searchResults => renderSearchList({ searchResults }))
      .catch(({ message }) => renderSearchList({ searchResultsLoadingError: message }));

    return Loader();
  }
}
function SearchItem(name) {
  return `<li>name: ${name}</li>`;
}
