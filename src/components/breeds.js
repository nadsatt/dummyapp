import React from 'react';
import { useState, useEffect } from 'react';

import { breedToBreedDetails } from '../mappers';
import { BREEDS_COUNT } from '../constants';
import { getBreeds } from '../data';
import { AppContext, CurrentBreedContext } from '../context';
import { BreedItem, ErrorAlert, Loader } from '../components';
import backImage from '../../assets/images/back.png';

export function Breeds() {
  return (
    <div className="content breeds">
      <BreedsHeader />
      <BreedsBody />
    </div>
  );
}

function BreedsHeader() {
  return (
    <AppContext.Consumer>
      {({ setContent }) => (
        <header className="content-header breeds-header">
          <a
            className="content-header__label content-header__back-label"
            onClick={() => setContent('banner')}
          >
            <img src={backImage} />
          </a>
          <a className="content-header__label content-header__name-label content-header__current-label">
            breeds
          </a>
        </header>
      )}
    </AppContext.Consumer>
  );
}

function BreedsBody() {
  const [breeds, setBreeds] = useState([]);
  const [loadingError, setLoadingError] = useState('');
  const [breed, setBreed] = useState(0);
  const [order, setOrder] = useState('asc');
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    getBreeds(BREEDS_COUNT)
      .then(breeds => {
        setLoadingError('');
        setBreeds(breeds);
      })
      .catch(({ message }) => {
        setBreeds([]);
        setLoadingError(message);
      });
  }, []);

  if (loadingError) {
    return <ErrorAlert error={loadingError} />;
  } else if (breeds && breeds.length) {
    return (
      <div className="content-body breeds-body">
        <BreedsForm
          breeds={breeds}
          breed={breed}
          limit={limit}
          order={order}
          setBreed={setBreed}
          setLimit={setLimit}
          setOrder={setOrder}
        />
        <BreedsList breeds={breeds} breed={breed} limit={limit} order={order} />
      </div>
    );
  }
  return <Loader />;
}

function BreedsForm({ breeds, breed, limit, order, setBreed, setLimit, setOrder }) {
  return (
    <form className="content-form breeds-form">
      <div className="form-control">
        <label htmlFor="breedsBreed">breed</label>
        <select
          id="breedsBreed"
          className="form-control"
          value={breed}
          onChange={event => setBreed(+event.target.value)}
        >
          <option value="0">All breeds</option>
          {breeds.map(({ name, id }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="breedsLimit">Limit</label>
        <select
          id="breedsLimit"
          className="form-control"
          value={limit}
          onChange={event => setLimit(+event.target.value)}
        >
          {[5, 10, 15, 20].map(number => (
            <option key={number} value={number}>
              Limit: {number}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control" value={order} onChange={event => setOrder(event.target.value)}>
        <label htmlFor="breedsAsc">Asc</label>
        <input
          id="breedsAsc"
          type="radio"
          name="order"
          value="asc"
          defaultChecked={order === 'asc'}
        />
        <label htmlFor="breedsDesc">Desc</label>
        <input
          id="breedsDesc"
          type="radio"
          name="order"
          value="desc"
          defaultChecked={order === 'desc'}
        />
      </div>
    </form>
  );
}

function BreedsList({ breeds, breed, limit, order }) {
  return (
    <ul className="content-list breeds-list">
      {breeds
        .filter(({ id }) => (breed !== 0 ? id === breed : true))
        .slice(0, limit || undefined)
        .sort(({ name: prev }, { name: next }) =>
          order === 'asc' ? prev.localeCompare(next) : next.localeCompare(prev),
        )
        .map(breed => (
          <BreedListItem key={breed.id} breed={breed} />
        ))}
    </ul>
  );
}

function BreedListItem({ breed }) {
  const breedDetails = breedToBreedDetails(breed);

  return (
    <AppContext.Consumer>
      {({ setContent }) => (
        <CurrentBreedContext.Consumer>
          {({ setCurrentBreed }) => (
            <BreedItem
              url={breedDetails.url}
              name={breedDetails.name}
              onClick={() => {
                setContent('breed-details');
                setCurrentBreed({ ...breedDetails, from: 'breeds' });
              }}
            />
          )}
        </CurrentBreedContext.Consumer>
      )}
    </AppContext.Consumer>
  );
}
