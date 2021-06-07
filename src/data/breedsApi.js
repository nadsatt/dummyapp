import getData from './api';

const breedsApi = 'https://api.thedogapi.com/v1/breeds';
const imagesApi = 'https://api.thedogapi.com/v1/images';

export function getBreeds(limit) {
  return getData(`${breedsApi}?limit=${limit}`);
}

/* breeds fetched from 'breeds/search' endpoind don't contain image urls
so we after-fetch image urls */
export function getBreedsBySearch(search) {
  return getData(`${breedsApi}/search?q=${search}`).then(breeds => {
    return Promise.all(breeds.map(breed => getBreedWithImageUrl(breed))).then(breedsWithImageUrls =>
      breedsWithImageUrls.filter(({ name, url }) => name && url),
    );
  });
}

function getBreedWithImageUrl(breed) {
  return getData(`${imagesApi}/${breed.reference_image_id}`).then(({ url }) => {
    breed.url = url;
    return breed;
  });
}
