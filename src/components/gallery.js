import React from 'react';
import { useState, useEffect } from 'react';

import { ErrorAlert, Loader, InfoAlert, BreedItem } from '../components';
import { AppContext, CurrentBreedContext } from '../context';
import { getBreeds, getImagesByQuery } from '../data';
import { imageToBreedDetails } from '../mappers';
import backImage from '../../assets/images/back.png';
import { BREED_NAMES_COUNT } from '../constants';

export function Gallery() {
  return (
    <div className="gallery content">
      <GalleryHeader />
      <GalleryBody />
    </div>
  );
}

function GalleryHeader() {
  return (
    <AppContext.Consumer>
      {({ setContent }) => (
        <header className="gallery-header content-header">
          <a
            className="content-header__label content-header__back-label"
            onClick={() => setContent('banner')}
          >
            <img src={backImage} />
          </a>
          <a className="content-header__label content-header__name-label content-header__current-label">
            gallery
          </a>
        </header>
      )}
    </AppContext.Consumer>
  );
}

function GalleryBody() {
  const [breedNames, setBreedNames] = useState([]);
  const [loadingError, setLoadingError] = useState('');
  const [breed, setBreed] = useState(5);
  const [type, setType] = useState('all');
  const [order, setOrder] = useState('asc');
  const [limit, setLimit] = useState(5);
  const [images, setImages] = useState(null);
  const [imagesChanged, setImagesChanged] = useState(false);

  useEffect(() => {
    getBreeds(BREED_NAMES_COUNT)
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
      <div className="content-body gallery-body">
        <GalleryForm
          breedNames={breedNames}
          limit={limit}
          order={order}
          type={type}
          breed={breed}
          imagesChanged={imagesChanged}
          setLimit={setLimit}
          setOrder={setOrder}
          setType={setType}
          setBreed={setBreed}
          setImages={setImages}
          setImagesChanged={setImagesChanged}
        />
        <GalleryList
          images={images}
          imagesChanged={imagesChanged}
          limit={limit}
          order={order}
          type={type}
          breed={breed}
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
  limit,
  order,
  type,
  breed,
  imagesChanged,
  setLimit,
  setOrder,
  setType,
  setBreed,
  setImages,
  setImagesChanged,
}) {
  return (
    <form className="content-form gallery-form">
      <div className="form-control">
        <label htmlFor="galleryOrder">Order</label>
        <select id="galleryOrder" className="form-control" name="galleryOrder">
          <option value="rand" defaultValue={order === 'rand'}>
            Random
          </option>
          <option value="desc" defaultValue={order === 'desc'}>
            Desc
          </option>
          <option value="asc" defaultValue={order === 'asc'}>
            Asc
          </option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="galleryType">Type</label>
        <select id="galleryType" className="form-control" name="galleryType">
          <option value="all" defaultValue={type === 'all'}>
            All
          </option>
          <option value="static" defaultValue={type === 'static'}>
            Static
          </option>
          <option value="gif" defaultValue={type === 'gif'}>
            Animated
          </option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="galleryBreed">Breed</label>
        <select id="galleryBreed" className="form-control" name="galleryBreed">
          <option value="0" defaultValue={breed === 0}>
            None
          </option>
          {breedNames.map(([name, id]) => (
            <option key={name} value={id} defaultValue={breed === id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="galleryLimit">Limit</label>
        <select id="galleryLimit" className="form-control" name="galleryLimit">
          {[5, 10, 15, 20].map(number => (
            <option key={number} value={number} defaultValue={limit === number}>
              {number} items per page
            </option>
          ))}
        </select>
      </div>
      <button
        role="submit"
        onClick={event => {
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

function GalleryList({ images, imagesChanged, limit, order, type, breed, setImages }) {
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
      <ul className="content-list gallery-list">
        {images.map(image => (
          <GalleryListItem key={image.url} image={image} />
        ))}
      </ul>
    );
  } else {
    return <Loader />;
  }
}

function GalleryListItem({ image }) {
  const breedDetails = imageToBreedDetails(image);

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
                setCurrentBreed({ ...breedDetails, from: 'gallery' });
              }}
            />
          )}
        </CurrentBreedContext.Consumer>
      )}
    </AppContext.Consumer>
  );
}
