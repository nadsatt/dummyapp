import React from 'react';

import { AppContext, CurrentBreedContext } from '../context';
import backImage from '../../assets/images/back.png';

export function BreedDetails() {
  return (
    <div className="breed-details content">
      <BreedDetailsHeader />
      <BreedDetailsBody />
    </div>
  );
}

function BreedDetailsHeader() {
  return (
    <AppContext.Consumer>
      {({ setContent }) => (
        <CurrentBreedContext.Consumer>
          {({ currentBreed }) => (
            <header className="content-header breed-details-header">
              <a
                className="content-header__label content-header__back-label"
                onClick={() => setContent('banner')}
              >
                <img src={backImage} />
              </a>
              <a
                className="content-header__label content-header__name-label"
                onClick={() => setContent(currentBreed.from)}
              >
                {currentBreed.from}
              </a>
              <a className="content-header__label content-header__id-label content-header__current-label">
                {currentBreed.id}
              </a>
            </header>
          )}
        </CurrentBreedContext.Consumer>
      )}
    </AppContext.Consumer>
  );
}

function BreedDetailsBody() {
  return (
    <CurrentBreedContext.Consumer>
      {({ currentBreed }) => (
        <div className="content-body breed-details-body">
          <img className="breed-details-body__img" src={currentBreed.url} />
          <div className="breed-details-body__about">
            <h3 className="breed-details-body__name">{currentBreed.name}</h3>
            <h4 className="breed-details-body__for">{currentBreed.bred_for}</h4>
            <div className="breed-details-body__info">
              <div className="breed-details-body__temperament breed-details-body__info-item">
                <span>Temperament:</span>
                <span>{currentBreed.temperament}</span>
              </div>
              <div className="breed-details-body__height breed-details-body__info-item">
                <span>Height:</span>
                <span>{`${currentBreed.height} cm at the withers`}</span>
              </div>
              <div className="breed-details-body__weight breed-details-body__info-item">
                <span>Weight:</span>
                <span>{`${currentBreed.weight} kg`}</span>
              </div>
              <div className="breed-details-body__lifespan breed-details-body__info-item">
                <span>Life span:</span>
                <span>{currentBreed.life_span}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </CurrentBreedContext.Consumer>
  );
}
