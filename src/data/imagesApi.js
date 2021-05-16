import getData from './api';

export function getImagesByQuery({ limit, order, type, breed }) {
  const query =
    `limit=${limit}&order=${order}&mime_types=${type}` + (breed ? `&breed_id=${breed}` : ``);

  return getData(`https://api.thedogapi.com/v1/images/search?${query}`);
}
