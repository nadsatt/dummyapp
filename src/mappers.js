export function searchResultToBreedDetails(searchResult) {
  return {
    id: searchResult.id,
    name: searchResult.name,
    url: searchResult.url,
    bred_for: searchResult.bred_for,
    life_span: searchResult.life_span,
    temperament: searchResult.temperament,
    weight: searchResult.weight.metric,
    height: searchResult.height.metric,
  };
}

export function imageToBreedDetails(image) {
  const breeds = image.breeds[0] || {};

  return {
    id: breeds.id || '-',
    name: breeds.name || 'no info',
    url: image.url || 'no info',
    bred_for: breeds.bred_for || 'no info',
    life_span: breeds.life_span || 'no info',
    temperament: breeds.temperament || 'no info',
    weight: breeds.weight ? breeds.weight.metric : 'no info',
    height: breeds.height ? breeds.height.metric : 'no info',
  };
}

export function breedToBreedDetails(breed) {
  return {
    id: breed.id,
    name: breed.name,
    url: breed.image.url,
    bred_for: breed.bred_for,
    life_span: breed.life_span,
    temperament: breed.temperament,
    weight: breed.weight.metric,
    height: breed.height.metric,
  };
}
