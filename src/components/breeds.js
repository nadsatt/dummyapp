import { icons } from '../../assets/data/icons';
import { ErrorAlert, Loader, InfoAlert } from '../components/loading';
import { ContentItem } from './content';
import { getBreeds } from './../data/breedsApi';
import renderApp from '../framework/render';
import updateState from '../framework/update';

export function Breeds() {
  return `
    <div class="content breeds">
      <header class="content-header breeds-header">${BreedsHeader()}</header>
      <div class="content-body breeds-body">${BreedsBody()}</div>
    </div>`;
}

function BreedsHeader() {
  return `
    <a class="content-header__label content-header__back-label" onclick="window.updateState({...window.initialDataStore, content: 'banner'}), window.renderApp()">${icons.back}</a>
    <a class="content-header__label content-header__name-label content-header__current-label">breeds</a>`;
}

function BreedsBody() {
  const { breedsLoadingError, breeds } = dataStore;

  if (breedsLoadingError) {
    return ErrorAlert(breedsLoadingError);
  } else if (breeds) {
    return `
      <form class="content-form breeds-form">${BreedsForm()}</form>
      <ul class="content-list breeds-list">${BreedsList()}</ul>`;
  } else {
    getBreeds(20)
      .then(breeds => {
        updateState({ breeds });
        renderApp();
      })
      .catch(({ message }) => {
        updateState({ breedsLoadingError: message });
        renderApp();
      });

    return Loader();
  }
}

function BreedsForm() {
  const { breeds, breedsBreed: breed, breedsLimit: limit, breedsOrder: order } = dataStore;

  return `
    <div class="form-control">
      <label>Breed</label>
      <select class="form-control" oninput="window.updateState({breedsBreed: +this.value}), window.renderApp()">
        <option value="0">All breeds</option>
        ${breeds
          .map(
            ({ name, id }) =>
              `<option value="${id}" ${breed === id ? 'selected' : ''}>${name}</option>`,
          )
          .join('')}
      </select>
    </div>
    <div class="form-control">
      <label>Limit</label>
      <select class="form-control" oninput="window.updateState({breedsLimit: +this.value}), window.renderApp()">
        ${[5, 10, 15, 20]
          .map(
            number =>
              `<option value="${number}" ${
                limit === number ? 'selected' : ''
              }>Limit: ${number}</option>`,
          )
          .join('')}
      </select>
    </div>
    <div class="form-control" oninput="window.updateState({breedsOrder: event.target.value}), window.renderApp()">
      <label for="asc">Asc</label>
      <input id="asc" type="radio" name="order" value="asc" ${order === 'asc' ? 'checked' : ''}>
      <label for="desc">Desc</label>
      <input id="desc" type="radio" name="order" value="desc" ${order === 'desc' ? 'checked' : ''}>
    </div>
  `;
}

function BreedsList() {
  const { breeds } = dataStore;

  return breeds
    .filter(({ id }) => {
      return window.dataStore.breedsBreed !== 0 ? id === window.dataStore.breedsBreed : true;
    })
    .slice(0, window.dataStore.breedsLimit || undefined)
    .sort(({ name: prev }, { name: next }) =>
      window.dataStore.breedsOrder === 'asc' ? prev.localeCompare(next) : next.localeCompare(prev),
    )
    .map(breed => BreedsItem(breed))
    .join('');
}

function BreedsItem({ id, name, image: { url } }) {
  return `
    <li class="content-item" onclick="window.updateState({content: 'breed-details', breedId: ${id}}), window.renderApp()">
      ${ContentItem(url, name)}
    </li>`;
}
