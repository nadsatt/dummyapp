/* eslint-disable prettier/prettier */
/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework/element';

import backImage from '../../assets/images/back.png';
import { ErrorAlert, Loader } from '../components/loading';
import Link from '../components/Link/link';
import { ContentItem } from './content';
import { getBreeds } from './../data/breedsApi';
import { useState } from '../framework';
import { useEffect } from '../framework/hooks';

export function Breeds({ setContent, setSelectedBreed }) {
  return (
    <div class="content breeds">
      <BreedsHeader setContent={setContent} />
      <BreedsBody setContent={setContent} setSelectedBreed={setSelectedBreed} />
    </div>
  );
}

function BreedsHeader({ setContent }) {
  return (
    <header class="content-header breeds-header">
      <Link
        classes="content-header__label content-header__back-label"
        onClick={() => setContent('banner')}
      >
        <img src={backImage} />
      </Link>
      <a class="content-header__label content-header__name-label content-header__current-label">
        breeds
      </a>
    </header>
  );
}

function BreedsBody({ setContent, setSelectedBreed }) {
  const [breeds, setBreeds] = useState([]);
  const [loadingError, setLoadingError] = useState('');
  const [breed, setBreed] = useState(0);
  const [order, setOrder] = useState('asc');
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    getBreeds(20)
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
      <div class="content-body breeds-body">
        <BreedsForm
          breeds={breeds}
          breed={breed}
          limit={limit}
          order={order}
          setBreed={setBreed}
          setLimit={setLimit}
          setOrder={setOrder}
        />
        <BreedsList
          breeds={breeds}
          breed={breed}
          limit={limit}
          order={order}
          setContent={setContent}
          setSelectedBreed={setSelectedBreed}
        />
      </div>
    );
  }
  return <Loader />;
}

function BreedsForm({ breeds, breed, limit, order, setBreed, setLimit, setOrder }) {
  return (
    <form class="content-form breeds-form">
      <div class="form-control">
        <label>breed</label>
        <select class="form-control" oninput={event => setBreed(+event.target.value)}>
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
        <select class="form-control" oninput={event => setLimit(+event.target.value)}>
          {[5, 10, 15, 20].map(number => (
            <option value={number} selected={limit === number}>
              Limit: {number}
            </option>
          ))}
        </select>
      </div>
      <div class="form-control" oninput={event => setOrder(event.target.value)}>
        <label For="asc">Asc</label>
        <input id="asc" type="radio" name="order" value="asc" checked={order === 'asc'} />
        <label For="desc">Desc</label>
        <input id="desc" type="radio" name="order" value="desc" checked={order === 'desc'} />
      </div>
    </form>
  );
}

function BreedsList({ breeds, breed, limit, order, setContent, setSelectedBreed }) {
  return (
    <ul class="content-list breeds-list">
      {breeds
        .filter(({ id }) => {
          return breed !== 0 ? id === breed : true;
        })
        .slice(0, limit || undefined)
        .sort(({ name: prev }, { name: next }) =>
          order === 'asc' ? prev.localeCompare(next) : next.localeCompare(prev),
        )
        .map(({ id, name, image: { url } }) => (
          <BreedsItem
            id={id}
            name={name}
            url={url}
            breeds={breeds}
            setContent={setContent}
            setSelectedBreed={setSelectedBreed}
          />
        ))}
    </ul>
  );
}

function BreedsItem({ id, name, url, breeds, setContent, setSelectedBreed }) {
  return (
    <li
      class="content-item"
      onclick={() => {
        setContent('breed-details');
        setSelectedBreed(breeds.find(breed => breed.id === id));
      }}
    >
      <ContentItem url={url} name={name} />
    </li>
  );
}
