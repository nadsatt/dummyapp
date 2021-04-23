import { data } from './assets/data/data';
import { icons } from './assets/data/icons';
import galleryImage from './assets/images/gallery.png';
import votingImage from './assets/images/voting.png';
import breedsImage from './assets/images/breeds.png';
import girlImage from './assets/images/girl.png';

const appState = { currentContent: 'banner' };
renderApp();

// COMPONENT RENDERERS (state renderers) - called from template
window.renderApp = renderApp;
window.renderSearchResult = renderSearchResult;
window.renderGalleryList = renderGalleryList;
window.renderBreedsList = renderBreedsList;

function renderApp() {
  document.getElementById('main').innerHTML = `
    <section id="home" class="home">${getHome(appState)}</section>
    <section id="content-wrapper" class="content-wrapper">${getContent(appState)}</section>`;
}

function renderSearchResult() {
  appState.currentContent === 'gallery'
    ? renderGalleryList()
    : appState.currentContent === 'breeds'
    ? renderBreedsList()
    : null;
}

function renderGalleryList() {
  document.querySelector('.gallery-list').innerHTML = getGalleryList(appState);
}

function renderBreedsList() {
  document.querySelector('.breeds-list').innerHTML = getBreedsList(appState);
}

// STATE PRODUCERS (state modifiers) - called from template
window.changeContent = changeContent;
window.changeState = changeState;

function changeContent(e) {
  const selectedContent = e.target.dataset.content;
  appState.currentContent =
    selectedContent === appState.currentContent ? 'banner' : selectedContent;
}

function changeState(property, value) {
  appState[property] = value;
}

// COMPONENTS (state consumers)
/* HOME COMPONENT */
function getHome(st) {
  const items = [
    { name: 'voting', image: votingImage },
    { name: 'breeds', image: breedsImage },
    { name: 'gallery', image: galleryImage },
  ];

  return `
    ${icons.logo}
    <div class="greeting">
      <h3 class="greeting__heading">Lovely dog app</h3>
      <p class="greeting__text">Designed by MacPaw company</p>
    </div>
    <div class="menu">
      <p class="menu-text">Lets start using The Dog Api</p>
      <ul class="menu-list">${items.map(item => getMenuItem(item, st)).join('')}</ul>
    </div>`;
}

function getMenuItem({ name, image }, st) {
  return `
    <li class="menu-item ${st.currentContent === name ? 'menu-item--active' : ''}"
     data-content="${name}" onclick="window.changeContent(event), window.renderApp()">
      <div class="menu-item__image-wrapper">
        <img class="menu-item__image" src="${image}">
      </div>
      <button class="menu-item__button">${name}</button>
    </li>`;
}

/* BANNER COMPONENT */
function getBanner() {
  return `<div class="banner"><img class="banner__image" src=${girlImage}></div>`;
}

/* VOTING COMPONENT */
function getVoting(st) {
  return `<div class="voting">Voting component works!</div>`;
}

/* BREEDS COMPONENT */
function getBreeds(st) {
  appState.breedsBreed = 'All breeds';
  appState.breedsLimit = 5;
  appState.breedsOrder = 'asc';

  return `
    <div class="breeds content">
      <header class="breeds-header content-header">${getBreedsHeader(st)}</header>
      <form class="breeds-form content-form">${getBreedsForm(st)}</form>
      <ul class="breeds-list content-list">${getBreedsList(st)}</ul>
    </div>`;
}

function getBreedsHeader(st) {
  return `
    <a class="breeds-header__back-link content-header__back-link" data-content="banner" onclick="window.changeContent(event), window.renderApp()">${icons.back}</a>
    <h3 class="breeds-header__heading content-header__heading">breeds</h3>`;
}

function getBreedsForm(st) {
  return `
    <div class="form-control">
      <label>Breed</label>
      <select class="form-control" oninput="window.changeState('breedsBreed', event.target.value), window.renderBreedsList()">
        <option>All breeds</option>
        ${data.breeds.map(({ name }) => `<option>${name}</option>`).join('')}
      </select>
    </div>
    <div class="form-control">
      <label>Limit</label>
      <select class="form-control" oninput="window.changeState('breedsLimit', event.target.value), window.renderBreedsList()">
        ${[5, 10, 15, 20].map(number => `<option>${number}</option>`).join('')}
      </select>
    </div>
    <div class="form-control" oninput="window.changeState('breedsOrder', event.target.value), window.renderBreedsList()">
      <label for="asc">Asc</label>
      <input id="asc" type="radio" name="order" value="asc" checked>
      <label for="desc">Desc</label>
      <input id="desc" type="radio" name="order" value="desc" >
    </div>
  `;
}

function getBreedsList(st) {
  return data.breeds
    .filter(({ name = '' }) => (st.breedsBreed !== 'All breeds' ? name === st.breedsBreed : true))
    .filter(({ name }) => (st.contentSearch ? name.toLowerCase().includes(st.contentSearch) : true))
    .slice(0, st.breedsLimit || undefined)
    .sort(({ name: prev }, { name: next }) =>
      st.breedsOrder === 'asc' ? prev.localeCompare(next) : next.localeCompare(prev),
    )
    .map(breed => getBreedItem(breed))
    .join('');
}

function getBreedItem({ name, image: { url } }) {
  return `
    <li class="breeds-item content-item">
      <img class="breeds-item__image content-item__image" src="${url}">
      <div>Breed: ${name}</div>
    </li>
  `;
}

// GALLERY COMPONENT
function getGallery(st) {
  appState.galleryType = 'all';
  appState.galleryLimit = null;

  return `
    <div class="gallery content">
      <header class="gallery-header content-header">${getGalleryHeader(st)}</header>
      <form class="gallery-form content-form">${getGalleryForm(st)}</form>
      <ul class="gallery-list content-list">${getGalleryList(st)}</ul>
    </div>`;
}

function getGalleryHeader(st) {
  return `
    <a class="gallery-header__back-link content-header__back-link" data-content="banner" onclick="window.changeContent(event), window.renderApp()">${icons.back}</a>
    <h3 class="gallery-header__heading content-header__heading">gallery</h3>`;
}

function getGalleryForm(st) {
  return `
    <div class="form-control">
      <label>By count</label>
      <input class="form-control" oninput="window.changeState('galleryLimit', event.target.value), window.renderGalleryList()" type="number">
    </div>
    <div class="form-control">
    <label>By type</label>
      <select class="form-control" oninput="window.changeState('galleryType', event.target.value), window.renderGalleryList()">
        <option>all</option>
        <option>static</option>
        <option>animated</option>
      </select>
    </div>
    `;
}

function getGalleryList(st) {
  return data.images
    .filter(({ breeds: [{ name = '' } = { name: '' }] }) =>
      st.contentSearch ? name.toLowerCase().includes(st.contentSearch) : true,
    )
    .filter(({ url = '' }) =>
      st.galleryType === 'static'
        ? !url.endsWith('gif')
        : st.galleryType === 'animated'
        ? url.endsWith('gif')
        : true,
    )
    .slice(0, st.galleryLimit || undefined)
    .map(image => getGalleryItem(image))
    .join('');
}

function getGalleryItem({ breeds: [{ name } = { name: '' }], url }) {
  return `
    <li class="gallery-item content-item">
      <img class="gallery-item__image content-item__image" src="${url}">
      <div>Breed: ${name}</div>
    </li>`;
}

// CONTENT COMPONENT (wrapper)
function getContent(st) {
  return st.currentContent === 'banner'
    ? getBanner()
    : st.currentContent === 'voting'
    ? `${getContentSidebar(st)} ${getVoting(st)}`
    : st.currentContent === 'breeds'
    ? `${getContentSidebar(st)} ${getBreeds(st)}`
    : `${getContentSidebar(st)} ${getGallery(st)}`;
}

function getContentSidebar(st) {
  appState.contentSearch = '';

  return `
    <div class="content-sidebar">
      <input class="form-control"
       placeholder="Search for breeds"
       oninput="window.changeState('contentSearch', event.target.value), window.renderSearchResult()"
       type="text">
    </div>
  `;
}
