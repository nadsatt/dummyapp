import { data } from './assets/data/data';
import { icons } from './assets/data/icons';
import galleryImage from './assets/images/gallery.png';
import votingImage from './assets/images/voting.png';
import girlImage from './assets/images/girl.png';

// APP STATE OBJECT & APP RENDERING METHOD
const appState = {
  currentContent: 'banner',
  currentSearch: '',
  currentBreed: 'All breeds',
  currentCount: null,
  currentType: 'all',
};
function renderApp() {
  document.getElementById('main').innerHTML = `
    <section id="home" class="home">${getHome(appState)}</section>
    <section id="outlet" class="outlet">${getOutletContent(appState)}</section>`;
}
function renderGalleryList() {
  document.querySelector('.gallery-list').innerHTML = getGalleryList(appState);
}
// STATE-CHANGING & APP-RENDERING methods will be called from template (app-rendering method requires state as arg)
// so we should make AppRendering, StateChanging methods & AppState object available globally
window.renderApp = renderApp;
window.renderGalleryList = renderGalleryList;

renderApp();

// STATE CONSUMER & TEMPLATE RETURNER METHODS (return template based on received state)
// get template based on state
function getHome(st) {
  const items = [
    { name: 'voting', image: votingImage },
    { name: 'gallery', image: galleryImage },
  ];

  return `
    ${icons.logo}
    <div class="greeting">
      <h3 class="greeting__heading">Hello there!</h3>
      <p class="greeting__text">Welcome to lovely dog app</p>
    </div>
    <div class="menu">
      <p class="menu-text">Lets start using The Dog Api</p>
      <ul class="menu-list">${items.map(item => getMenuItem(item, st)).join('')}</ul>
    </div>`;
}
function getMenuItem({ name, image }, st) {
  return `
    <li class="menu-item ${st.currentContent === name ? 'menu-item--active' : ''}"
     data-outlet-content="${name}" onclick="window.changeOutletContent(event), window.renderApp(window.appState)">
      <div class="menu-item__image-wrapper">
        <img class="menu-item__image" src="${image}">
      </div>
      <button class="menu-item__button">${name}</button>
    </li>`;
}
function getBanner() {
  return `<div class="banner"><img class="banner__image" src=${girlImage}></div>`;
}
function getVoting() {
  return `<div class="voting">Voting component works!</div>`;
}
function getGallery(st) {
  return `
    <div class="gallery">
      <header class="gallery-header">${getGalleryHeader(st)}</header>
      <form class="gallery-form">${getGalleryForm(st)}</form>
      <ul class="gallery-list">${getGalleryList(st)}</ul>
    </div>`;
}
function getGalleryHeader(st) {
  return `
    <a class="gallery-header__back-link" data-outlet-content="banner" onclick="window.changeOutletContent(event), window.renderApp()">${icons.back}</a>
    <h3 class="gallery-header__heading">gallery</h3>`;
}
function getGalleryForm(st) {
  return `
    <div class="form-group">
      <label>By breed</label>
      <input class="form-control" placeholder="Type breed here" oninput="window.changeSearch(event), window.renderGalleryList()" type="text">
    </div>
    <div class="form-group">
      <label>By breed</label>
      <select class="form-control" oninput="window.changeBreed(event), window.renderGalleryList()">
        <option>All breeds</option>
        ${data.breeds.map(({ name }) => `<option>${name}</option>`).join('')}
      </select>
    </div>
    <div class="form-group">
      <label>By count</label>
      <input class="form-control" oninput="window.changeCount(event), window.renderGalleryList()" type="number">
    </div>
    <div class="form-group">
    <label>By type</label>
      <select class="form-control" oninput="window.changeType(event), window.renderGalleryList()">
        <option>all</option>
        <option>static</option>
        <option>animated</option>
      </select>
    </div>
    `;
}
function getGalleryList(st) {
  return data.images
    .filter(({ breeds: [{ name } = { name: '' }] }) =>
      st.currentSearch ? name.toLowerCase().includes(st.currentSearch.toLowerCase()) : true,
    )
    .filter(({ breeds: [{ name } = { name: '' }] }) =>
      st.currentBreed !== 'All breeds' ? name === st.currentBreed : true,
    )
    .filter(({ url }) =>
      st.currentType === 'static'
        ? !url.endsWith('gif')
        : st.currentType === 'animated'
        ? url.endsWith('gif')
        : true,
    )
    .slice(0, st.currentCount || undefined)
    .map(image => getGalleryItem(image))
    .join('');
}
function getGalleryItem(image) {
  return `
    <li class="gallery-item">
      <img class="gallery-item__image" src="${image.url}">
      <div>Breed: ${image.breeds[0]?.name}</div>
      <div>Link: ${image.url}</div>
    </li>`;
}
function getOutletContent(st) {
  return st.currentContent === 'banner'
    ? getBanner()
    : st.currentContent === 'voting'
    ? getVoting()
    : getGallery(st);
}

// STATE PRODUCERS (change state - each time we change state we should rerender app (to make state consumers receive updated state))
function changeOutletContent(e) {
  const selectedContent = e.target.dataset.outletContent;
  appState.currentContent =
    selectedContent === appState.currentContent ? 'banner' : selectedContent;
}
function changeSearch(e) {
  const selectedSearch = e.target.value;
  appState.currentSearch = selectedSearch;
}
function changeBreed(e) {
  const selectedBreed = e.target.value;
  appState.currentBreed = selectedBreed;
}
function changeCount(e) {
  const selectedCount = e.target.value;
  appState.currentCount = selectedCount;
}
function changeType(e) {
  const selectedType = e.target.value;
  appState.currentType = selectedType;
}
window.changeOutletContent = changeOutletContent;
window.changeSearch = changeSearch;
window.changeBreed = changeBreed;
window.changeType = changeType;

// STATE PRODUSER + (STATE CONSUMER & TEMPLATE INNJECTOR) in one func?
