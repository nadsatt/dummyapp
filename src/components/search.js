/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework/element';

import backImage from '../../assets/images/back.png';
import { ErrorAlert, Loader, InfoAlert } from '../components/loading';
import { ContentItem } from './content';
import { getBreedsBySearch } from '../data/breedsApi';
import { useState } from '../framework';
import { useEffect } from '../framework/hooks';

export function Search({
  search,
  searchTimer,
  searchTimeoutPassed,
  afterUserInput,
  setContent,
  setSearchTimer,
  setSearchTimeoutPassed,
  setAfterUserInput,
}) {
  return (
    <div class="search content">
      <SearchHeader setContent={setContent} />
      <SearchBody
        search={search}
        searchTimer={searchTimer}
        searchTimeoutPassed={searchTimeoutPassed}
        afterUserInput={afterUserInput}
        setSearchTimer={setSearchTimer}
        setSearchTimeoutPassed={setSearchTimeoutPassed}
        setAfterUserInput={setAfterUserInput}
      />
    </div>
  );
}

function SearchHeader({ setContent }) {
  return (
    <header class="content-header search-header">
      <Link
        classes="content-header__label content-header__back-label"
        onClick={() => setContent('banner')}
      >
        <img src={backImage} />
      </Link>
      <a class="content-header__label content-header__name-label content-header__current-label">
        search
      </a>
    </header>
  );
}

function SearchBody({
  search,
  searchTimer,
  searchTimeoutPassed,
  setSearchTimer,
  afterUserInput,
  setSearchTimeoutPassed,
  setAfterUserInput,
}) {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (afterUserInput) {
      // ensure start searching only when user input stopped
      clearTimeout(searchTimer);
      const timer = setTimeout(setSearchTimeoutPassed, 1000, true);

      setAfterUserInput(false, false);
      setSearchTimer(timer, false, false);
      setSearchResults(null, false);
    }
  }, [search]);

  if (!search) {
    return <InfoAlert message="Please enter search query" />;
  } else if (!searchTimeoutPassed) {
    return <InfoAlert message="Entering search query.." />;
  }
  return (
    <div class="content-body search-body">
      <SearchList
        search={search}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
    </div>
  );
}

function SearchList({ search, searchResults, setSearchResults }) {
  const [loadingError, setLoadingError] = useState('');

  useEffect(() => {
    getBreedsBySearch(search)
      .then(breeds => {
        setSearchResults(breeds);
        setLoadingError('');
      })
      .catch(({ message }) => {
        setSearchResults(null);
        setLoadingError(message);
      });
  }, [search]);

  if (loadingError) {
    return <ErrorAlert error={loadingError} />;
  } else if (searchResults && !searchResults.length) {
    return <InfoAlert message="No item found" />;
  } else if (searchResults && searchResults.length) {
    return (
      <ul class="content-list search-list">
        {searchResults.map(result => (
          <SearchItem url={result.url} name={result.name} />
        ))}
      </ul>
    );
  }
  return <Loader />;
}

function SearchItem({ url, name }) {
  return (
    <li class="content-item">
      <ContentItem url={url} name={name} />
    </li>
  );
}
