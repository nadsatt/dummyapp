import getData from './api';

export function getBreeds(limit) {
  return getData(`https://api.thedogapi.com/v1/breeds?limit=${limit}`);
}

// breeds fetched from 'breeds/search' endpoint don't contain image urls
// so we after-fetch image urls
export function getBreedsBySearch(search) {
  return getData(`https://api.thedogapi.com/v1/breeds/search?q=${search}`).then(breeds => {
    return Promise.all(breeds.map(breed => getBreedWithImageUrl(breed))).then(breedsWithImageUrls =>
      breedsWithImageUrls.filter(({ name, url }) => name && url),
    );
  });
}

function getBreedWithImageUrl(breed) {
  return getData(`https://api.thedogapi.com/v1/images/${breed.reference_image_id}`).then(
    ({ url }) => {
      breed.url = url;
      return breed;
    },
  );
}
