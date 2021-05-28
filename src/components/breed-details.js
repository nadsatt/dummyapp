/* eslint-disable prettier/prettier */
/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework/element';

import backImage from '../../assets/images/back.png';

export function BreedDetails({ selectedBreed, setContent }) {
  return (
    <div class="breed-details content">
      <BreedDetailsHeader selectedBreed={selectedBreed} setContent={setContent} />
      <BreedDetailsBody selectedBreed={selectedBreed} />
    </div>
  );
}

function BreedDetailsHeader({ selectedBreed, setContent }) {
  return (
    <header class="content-header breed-details-header">
      <Link
        classes="content-header__label content-header__back-label"
        onClick={() => setContent('banner')}
      >
        <img src={backImage} />
      </Link>
      <Link
        classes="content-header__label content-header__name-label"
        onClick={() => setContent('breeds')}
      >
        breeds
      </Link>
      <a class="content-header__label content-header__id-label content-header__-label">
        {selectedBreed.id}
      </a>
    </header>
  );
}

function BreedDetailsBody({ selectedBreed }) {
  return (
    <div class="content-body breed-details-body">
      <img class="breed-details-body__img" src={selectedBreed.image.url} />
      <div class="breed-details-body__about">
        <h3 class="breed-details-body__name">{selectedBreed.name}</h3>
        <h4 class="breed-details-body__for">{selectedBreed.bred_for}</h4>
        <div class="breed-details-body__info">
          <div class="breed-details-body__temperament breed-details-body__info-item">
            <span>Temperament:</span>
            <span>{selectedBreed.temperament}</span>
          </div>
          <div class="breed-details-body__height breed-details-body__info-item">
            <span>Height:</span>
            <span>{selectedBreed.height.metric} cm at the withers</span>
          </div>
          <div class="breed-details-body__weight breed-details-body__info-item">
            <span>Weight:</span>
            <span>{selectedBreed.weight.metric} kg</span>
          </div>
          <div class="breed-details-body__lifespan breed-details-body__info-item">
            <span>Life span:</span>
            <span>{selectedBreed.life_span}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
