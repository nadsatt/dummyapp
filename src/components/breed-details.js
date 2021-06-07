/* eslint-disable prettier/prettier */
/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework';

import backImage from '../../assets/images/back.png';

export function BreedDetails({ currentBreed, setContent }) {
  return (
    <div class="breed-details content">
      <BreedDetailsHeader currentBreed={currentBreed} setContent={setContent} />
      <BreedDetailsBody currentBreed={currentBreed} />
    </div>
  );
}

function BreedDetailsHeader({ currentBreed, setContent }) {
  return (
    <header class="content-header breed-details-header">
      <a
        class="content-header__label content-header__back-label"
        onclick={() => setContent('banner')}
      >
        <img src={backImage} />
      </a>
      <a
        class="content-header__label content-header__name-label"
        onclick={() => setContent(currentBreed.from)}
      >
        {currentBreed.from}
      </a>
      <a class="content-header__label content-header__id-label content-header__current-label">
        {currentBreed.id}
      </a>
    </header>
  );
}

function BreedDetailsBody({ currentBreed }) {
  return (
    <div class="content-body breed-details-body">
      <img class="breed-details-body__img" src={currentBreed.url} />
      <div class="breed-details-body__about">
        <h3 class="breed-details-body__name">{currentBreed.name}</h3>
        <h4 class="breed-details-body__for">{currentBreed.bred_for}</h4>
        <div class="breed-details-body__info">
          <div class="breed-details-body__temperament breed-details-body__info-item">
            <span>Temperament:</span>
            <span>{currentBreed.temperament}</span>
          </div>
          <div class="breed-details-body__height breed-details-body__info-item">
            <span>Height:</span>
            <span>{`${currentBreed.height} cm at the withers`}</span>
          </div>
          <div class="breed-details-body__weight breed-details-body__info-item">
            <span>Weight:</span>
            <span>{`${currentBreed.weight} kg`}</span>
          </div>
          <div class="breed-details-body__lifespan breed-details-body__info-item">
            <span>Life span:</span>
            <span>{currentBreed.life_span}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
