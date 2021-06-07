import getData from './api';

const imagesApi = 'https://api.thedogapi.com/v1/images';

export function getImagesByQuery({ limit, order, type, breed }) {
  const query =
    `limit=${limit}&order=${order}&mime_types=${type}` + (breed ? `&breed_id=${breed}` : ``);

  return getData(`${imagesApi}/search?${query}`);
}
