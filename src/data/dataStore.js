const dataStore = {
  // app level
  content: 'banner',

  // content wrapper level?
  searchResults: null,
  searchResultsLoadingError: '',
  search: '',
  searchTimer: null,
  searchTimeoutPassed: false,

  // breeds level
  breeds: null,
  breedsLoadingError: '',
  breedsBreed: 0,
  breedsOrder: 'asc',
  breedsLimit: 5,
  breedId: null,

  // gallery level
  breedNames: null,
  breedNamesLoadingError: '',
  images: null,
  imagesLoadingError: '',
  galleryBreed: 0,
  galleryType: 'all',
  galleryOrder: 'asc',
  galleryLimit: 5,
};

export default dataStore;
