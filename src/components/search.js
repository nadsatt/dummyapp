/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework/element';

import backImage from '../../assets/images/back.png';
import { ErrorAlert, Loader, InfoAlert } from '../components/loading';
import { ContentItem } from './content';
import renderApp from '../framework/render';
import updateState from '../framework/update';
import { getBreedsBySearch } from '../data/breedsApi';

export function Search() {
  return (
    <div class="search content">
      <SearchHeader />
      <SearchBody />
    </div>
  );
}

function SearchHeader() {
  return (
    <header class="content-header search-header">
      <a
        class="content-header__label content-header__back-label"
        data-content="banner"
        onclick={() => {
          updateState({ ...window.initialDataStore, content: 'banner' });
          renderApp();
        }}
      >
        <img src={backImage} />
      </a>
      <a class="content-header__label content-header__name-label content-header__current-label">
        search
      </a>
    </header>
  );
}

function SearchBody() {
  if (!dataStore.search) {
    return <InfoAlert message="Please enter search query" />;
  } else if (!dataStore.searchTimeoutPassed) {
    // ensure sending request only when user input stopped
    clearTimeout(dataStore.searchTimer);

    dataStore.searchTimer = setTimeout(() => {
      updateState({ searchTimeoutPassed: true });
      renderApp();
    }, 1000);

    return <InfoAlert message="Entering search query.." />;
  } else {
    return (
      <div class="content-body search-body">
        <SearchList />
      </div>
    );
  }
}

function SearchList() {
  if (dataStore.searchResultsLoadingError) {
    return <ErrorAlert error={dataStore.searchResultsLoadingError} />;
  } else if (dataStore.searchResults) {
    const items = dataStore.searchResults.map(result => (
      <SearchItem url={result.url} name={result.name} />
    ));

    return items.length ? (
      <ul class="content-list search-list">{items}</ul>
    ) : (
      <InfoAlert message="No item found" />
    );
  } else {
    getBreedsBySearch(dataStore.search)
      .then(breeds => {
        updateState({ searchResults: breeds });
        renderApp();
      })
      .catch(({ message }) => {
        updateState({ searchResultsLoadingError: message });
        renderApp();
      });

    return <Loader />;
  }
}

function SearchItem({ url, name }) {
  return (
    <li class="content-item">
      <ContentItem url={url} name={name} />
    </li>
  );
}
