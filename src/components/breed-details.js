/* eslint-disable prettier/prettier */
/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework/element';

import backImage from '../../assets/images/back.png';
import renderApp from '../framework/render';
import updateState from '../framework/update';

export function BreedDetails() {
  const breed = dataStore.breeds.find(breed => breed.id === dataStore.breedId);

  return (
    <div class="breed-details content">
      <BreedDetailsHeader breedId={dataStore.breedId} />
      <BreedDetailsBody breed={breed} />
    </div>
  );
}

function BreedDetailsHeader({ breedId }) {
  return (
    <header class="content-header breed-details-header">
      <a
        class="content-header__label content-header__back-label"
        onclick={() => {
          updateState({ ...window.initialDataStore, content: 'banner' });
          renderApp();
        }}
      >
        <img src={backImage} />
      </a>
      <a
        class="content-header__label content-header__name-label"
        onclick={() => {
          updateState({ content: 'breeds' });
          renderApp();
        }}
      >
        breeds
      </a>
      <a class="content-header__label content-header__id-label content-header__current-label">
        {breedId}
      </a>
    </header>
  );
}

function BreedDetailsBody({ breed }) {
  return (
    <div class="content-body breed-details-body">
      <img class="breed-details-body__img" src={breed.image.url} />
      <div class="breed-details-body__about">
        <h3 class="breed-details-body__name">{breed.name}</h3>
        <h4 class="breed-details-body__for">{breed.bred_for}</h4>
        <div class="breed-details-body__info">
          <div class="breed-details-body__temperament breed-details-body__info-item">
            <span>Temperament:</span>
            <span>{breed.temperament}</span>
          </div>
          <div class="breed-details-body__height breed-details-body__info-item">
            <span>Height:</span>
            <span>{breed.height.metric} cm at the withers</span>
          </div>
          <div class="breed-details-body__weight breed-details-body__info-item">
            <span>Weight:</span>
            <span>{breed.weight.metric} kg</span>
          </div>
          <div class="breed-details-body__lifespan breed-details-body__info-item">
            <span>Life span:</span>
            <span>{breed.life_span}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
