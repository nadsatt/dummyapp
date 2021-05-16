import { icons } from '../../assets/data/icons';
import { ErrorAlert, Loader, InfoAlert } from '../components/loading';
import { ContentItem } from './content';
import renderApp from '../framework/render';
import updateState from '../framework/update';
import { getBreedsBySearch } from '../data/breedsApi';

export function Search() {
  return `
    <div class="content search">
      <header class="content-header search-header">${SearchHeader()}</header>
      <div class="content-body search-body">${SearchBody()}</div>
    </div>`;
}

function SearchHeader() {
  return `
    <a class="content-header__label" data-content="banner" onclick="window.updateState({...window.initialDataStore, content: 'banner'}), window.renderApp()">${icons.back}</a>
    <a class="content-header__label content-header__name-label content-header__current-label">search</a>`;
}

function SearchBody() {
  const { search, searchTimeoutPassed, searchTimer } = dataStore;

  if (!search) {
    return InfoAlert('Please enter search query');
  } else if (!searchTimeoutPassed) {
    // ensure sending request only when user input stopped
    clearTimeout(searchTimer);

    const newSearchTimer = setTimeout(() => {
      updateState({ searchTimeoutPassed: true });
      renderApp();
    }, 1000);

    updateState({ searchTimer: newSearchTimer });

    return InfoAlert('Entering search query..');
  } else {
    return SearchList();
  }
}

function SearchList() {
  const { searchResultsLoadingError, searchResults, search } = dataStore;

  if (searchResultsLoadingError) {
    return ErrorAlert(searchResultsLoadingError);
  } else if (searchResults) {
    const items = searchResults.map(result => SearchItem(result)).join('');

    return items
      ? `<ul class="content-list search-list">${items}</ul>`
      : InfoAlert('No item found');
  } else {
    getBreedsBySearch(search)
      .then(breeds => {
        updateState({ searchResults: breeds });
        renderApp();
      })
      .catch(({ message }) => {
        updateState({ searchResultsLoadingError: message });
        renderApp();
      });

    return Loader();
  }
}

function SearchItem({ url, name }) {
  return `<li class="content-item">${ContentItem(url, name)}</li>`;
}
