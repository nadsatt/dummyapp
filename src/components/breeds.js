/* eslint-disable prettier/prettier */
/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework/element';

import backImage from '../../assets/images/back.png';
import { ErrorAlert, Loader } from '../components/loading';
import { ContentItem } from './content';
import { getBreeds } from './../data/breedsApi';
import renderApp from '../framework/render';
import updateState from '../framework/update';

export function Breeds() {
  return (
    <div class="content breeds">
      <BreedsHeader />
      <BreedsBody />
    </div>
  );
}

function BreedsHeader() {
  return (
    <header class="content-header breeds-header">
      <a
        class="content-header__label content-header__back-label"
        onclick={() => {
          updateState({ ...window.initialDataStore, content: 'banner' });
          renderApp();
        }}
      >
        <img src={backImage} />
      </a>
      <a class="content-header__label content-header__name-label content-header__current-label">
        breeds
      </a>
    </header>
  );
}

function BreedsBody() {
  if (dataStore.breedsLoadingError) {
    return <ErrorAlert error={dataStore.breedsLoadingError} />;
  } else if (dataStore.breeds) {
    return (
      <div class="content-body breeds-body">
        <BreedsForm />
        <BreedsList />
      </div>
    );
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

    return <Loader />;
  }
}

function BreedsForm() {
  const { breeds, breedsBreed: breed, breedsLimit: limit, breedsOrder: order } = dataStore;

  return (
    <form class="content-form breeds-form">
      <div class="form-control">
        <label>Breed</label>
        <select
          class="form-control"
          oninput={event => {
            updateState({ breedsBreed: +event.target.value });
            renderApp();
          }}
        >
          <option value="0">All breeds</option>
          {breeds.map(({ name, id }) => (
            <option value={id} selected={breed === id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div class="form-control">
        <label>Limit</label>
        <select
          class="form-control"
          oninput={event => {
            updateState({ breedsLimit: +event.target.value });
            renderApp();
          }}
        >
          {[5, 10, 15, 20].map(number => (
            <option value={number} selected={limit === number}>
              Limit: {number}
            </option>
          ))}
        </select>
      </div>
      <div
        class="form-control"
        oninput={event => {
          updateState({ breedsOrder: event.target.value });
          renderApp();
        }}
      >
        <label For="asc">Asc</label>
        <input id="asc" type="radio" name="order" value="asc" checked={order === 'asc'} />
        <label For="desc">Desc</label>
        <input id="desc" type="radio" name="order" value="desc" checked={order === 'desc'} />
      </div>
    </form>
  );
}

function BreedsList() {
  return (
    <ul class="content-list breeds-list">
      {dataStore.breeds
        .filter(({ id }) => {
          return dataStore.breedsBreed !== 0 ? id === dataStore.breedsBreed : true;
        })
        .slice(0, dataStore.breedsLimit || undefined)
        .sort(({ name: prev }, { name: next }) =>
          dataStore.breedsOrder === 'asc' ? prev.localeCompare(next) : next.localeCompare(prev),
        )
        .map(breed => (
          <BreedsItem id={breed.id} url={breed.image.url} name={breed.name} />
        ))}
    </ul>
  );
}

function BreedsItem({ id, name, url }) {
  return (
    <li
      class="content-item"
      onclick={() => {
        updateState({ content: 'breed-details', breedId: id });
        renderApp();
      }}
    >
      <ContentItem url={url} name={name} />
    </li>
  );
}
