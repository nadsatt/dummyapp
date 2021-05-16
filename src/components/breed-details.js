import { icons } from '../../assets/data/icons';

export function BreedDetails() {
  const { breeds, breedId } = dataStore;
  const breed = breeds.find(breed => breed.id === breedId);

  return `
    <div class="content breed-details">
      <header class="content-header breed-details-header">${BreedDetailsHeader(breedId)}</header>
      <div class="content-body breed-details-body">${BreedDetailsBody(breed)}</div>
    </div>`;
}

function BreedDetailsHeader(breedId) {
  return `
  <a class="content-header__label content-header__back-label" onclick="window.updateState({...window.initialDataStore, content: 'banner'}), window.renderApp()">${icons.back}</a>
  <a class="content-header__label content-header__name-label" onclick="window.updateState({content: 'breeds'}), window.renderApp()">breeds</a>
  <a class="content-header__label content-header__id-label content-header__current-label">${breedId}</a>`;
}

function BreedDetailsBody(breed) {
  return `
  <img class="breed-details-body__img" src="${breed.image.url}">
  <div class="breed-details-body__about">
  <h3 class="breed-details-body__name">${breed.name}</h3>
  <h4 class="breed-details-body__for">${breed.bred_for}</h4>
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
      <span>${breed.life_span}</span>
    </div>
  </div>
</div>`;
}
