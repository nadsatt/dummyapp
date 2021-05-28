/* eslint-disable prettier/prettier */
/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework/element';

import backImage from '../../assets/images/back.png';
import { ErrorAlert, Loader, InfoAlert } from '../components/loading';
import { ContentItem } from './content';
import { getBreeds } from '../data/breedsApi';
import { getImagesByQuery } from '../data/imagesApi';
import Link from '../components/Link/link';
import { useState } from '../framework';
import { useEffect } from '../framework/hooks';

export function Gallery({ setContent }) {
  return (
    <div class="gallery content">
      <GalleryHeader setContent={setContent} />
      <GalleryBody />
    </div>
  );
}

function GalleryHeader({ setContent }) {
  return (
    <header class="gallery-header content-header">
      <Link
        classes="content-header__label content-header__back-label"
        onClick={() => setContent('banner')}
      >
        <img src={backImage} />
      </Link>
      <Link classes="content-header__label content-header__name-label content-header__current-label">
        gallery
      </Link>
    </header>
  );
}

function GalleryBody() {
  const [breedNames, setBreedNames] = useState([]);
  const [loadingError, setLoadingError] = useState('');
  const [breed, setBreed] = useState(0);
  const [order, setOrder] = useState('asc');
  const [type, setType] = useState('all');
  const [limit, setLimit] = useState(5);
  const [images, setImages] = useState(null);
  const [imagesChanged, setImagesChanged] = useState(false);

  useEffect(() => {
    getBreeds(100)
      .then(breeds => {
        const names = breeds.map(({ name, id }) => [name, id]);
        setBreedNames(names);
        setLoadingError('');
      })
      .catch(({ message }) => {
        setBreedNames([]);
        setLoadingError(message);
      });
  }, []);

  if (loadingError) {
    return <ErrorAlert error={loadingError} />;
  } else if (breedNames && breedNames.length) {
    return (
      <div class="content-body gallery-body">
        <GalleryForm
          breedNames={breedNames}
          breed={breed}
          order={order}
          type={type}
          limit={limit}
          imagesChanged={imagesChanged}
          setBreed={setBreed}
          setOrder={setOrder}
          setType={setType}
          setLimit={setLimit}
          setImages={setImages}
          setImagesChanged={setImagesChanged}
        />
        <GalleryList
          images={images}
          imagesChanged={imagesChanged}
          breed={breed}
          order={order}
          type={type}
          limit={limit}
          setImages={setImages}
          setImagesChanged={setImagesChanged}
        />
      </div>
    );
  } else {
    return <Loader />;
  }
}

function GalleryForm({
  breedNames,
  breed,
  order,
  type,
  limit,
  imagesChanged,
  setBreed,
  setOrder,
  setType,
  setLimit,
  setImages,
  setImagesChanged,
}) {
  return (
    <form class="content-form gallery-form">
      <div class="form-control">
        <label>Order</label>
        <select class="form-control" name="galleryOrder">
          <option value="rand" selected={order === 'rand'}>
            Random
          </option>
          <option value="desc" selected={order === 'desc'}>
            Desc
          </option>
          <option value="asc" selected={order === 'asc'}>
            Asc
          </option>
        </select>
      </div>
      <div class="form-control">
        <label>Type</label>
        <select class="form-control" name="galleryType">
          <option value="all" selected={type === 'all'}>
            All
          </option>
          <option value="static" selected={type === 'static'}>
            Static
          </option>
          <option value="gif" selected={type === 'gif'}>
            Animated
          </option>
        </select>
      </div>
      <div class="form-control">
        <label>Breed</label>
        <select class="form-control" name="galleryBreed">
          <option value="0" selected={breed === 0}>
            None
          </option>
          {breedNames.map(([name, id]) => (
            <option value={id} selected={breed === id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div class="form-control">
        <label>Limit</label>
        <select class="form-control" name="galleryLimit">
          {[5, 10, 15, 20].map(number => (
            <option value={number} selected={limit === number}>
              {number} items per page
            </option>
          ))}
        </select>
      </div>
      <button
        role="submit"
        onclick={event => {
          event.preventDefault();
          setOrder(event.target.form[0].value);
          setType(event.target.form[1].value);
          setBreed(+event.target.form[2].value);
          setLimit(+event.target.form[3].value);
          setImages(null);
          setImagesChanged(!imagesChanged);
        }}
      >
        Update items
      </button>
    </form>
  );
}

function GalleryList({
  images,
  imagesChanged,
  breed,
  order,
  type,
  limit,
  setImages,
  setImagesChanged,
}) {
  const [loadingError, setLoadingError] = useState('');

  useEffect(() => {
    getImagesByQuery({ limit, order, type, breed })
      .then(images => {
        setImages(images);
        setLoadingError('');
      })
      .catch(({ message }) => {
        setImages(null);
        setLoadingError(message);
      });
  }, [imagesChanged]);

  if (loadingError) {
    return <ErrorAlert error={loadingError} />;
  } else if (images && !images.length) {
    return <InfoAlert message="No item found" />;
  } else if (images && images.length) {
    return (
      <ul class="content-list gallery-list">
        {images.map(({ url }) => (
          <GalleryItem url={url} />
        ))}
      </ul>
    );
  } else {
    return <Loader />;
  }
}

function GalleryItem({ url }) {
  return (
    <li class="content-item">
      <ContentItem url={url} />
    </li>
  );
}
