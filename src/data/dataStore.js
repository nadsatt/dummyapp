export const initialDataStore = {
  content: 'banner',

  breeds: null,
  breedsLoadingError: '',
  breedsBreed: 0,
  breedsOrder: 'asc',
  breedsLimit: 5,
  breedId: null,

  breedNames: null,
  breedNamesLoadingError: '',
  images: null,
  imagesLoadingError: '',
  galleryBreed: 0,
  galleryType: 'all',
  galleryOrder: 'asc',
  galleryLimit: 5,

  searchResults: null,
  searchResultsLoadingError: '',
  search: '',
  searchTimer: null,
  searchTimeoutPassed: false,
};
