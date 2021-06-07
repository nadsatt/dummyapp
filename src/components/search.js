/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, useState, useEffect } from '../framework';

import backImage from '../../assets/images/back.png';
import { ErrorAlert, Loader, InfoAlert, BreedItem } from '../components';
import { getBreedsBySearch } from '../data';
import { searchResultToBreedDetails } from '../mappers';

export function Search({ searchValue, setContent, setCurrentBreed }) {
  return (
    <div class="search content">
      <SearchHeader setContent={setContent} />
      <SearchBody
        searchValue={searchValue}
        setContent={setContent}
        setCurrentBreed={setCurrentBreed}
      />
    </div>
  );
}

function SearchHeader({ setContent }) {
  return (
    <header class="content-header search-header">
      <a
        class="content-header__label content-header__back-label"
        onclick={() => setContent('banner')}
      >
        <img src={backImage} />
      </a>
      <a class="content-header__label content-header__name-label content-header__current-label">
        search
      </a>
    </header>
  );
}

function SearchBody({ searchValue, setContent, setCurrentBreed }) {
  const [searchTimer, setSearchTimer] = useState(null);
  const [searchTimerPassed, setSearchTimerPassed] = useState(true);

  useEffect(() => {
    // delay before search
    clearTimeout(searchTimer);
    const timer = setTimeout(() => {
      setSearchTimerPassed(true);
    }, 1000);

    setSearchTimer(timer);
    setSearchTimerPassed(false);
  }, [searchValue]);

  if (!searchValue) {
    return <InfoAlert message="Please enter search query" />;
  } else if (!searchTimerPassed) {
    return <InfoAlert message="Entering search query.." />;
  }
  return (
    <div class="content-body search-body">
      <SearchList
        searchValue={searchValue}
        searchTimerPassed={searchTimerPassed}
        setContent={setContent}
        setCurrentBreed={setCurrentBreed}
      />
    </div>
  );
}

function SearchList({ searchValue, searchTimerPassed, setContent, setCurrentBreed }) {
  const [searchResults, setSearchResults] = useState(null);
  const [loadingError, setLoadingError] = useState('');

  useEffect(() => {
    if (searchTimerPassed) {
      getBreedsBySearch(searchValue)
        .then(breeds => {
          setSearchResults(breeds);
          setLoadingError('');
        })
        .catch(({ message }) => {
          setSearchResults(null);
          setLoadingError(message);
        });
    }
  }, [searchTimerPassed]);

  if (loadingError) {
    return <ErrorAlert error={loadingError} />;
  } else if (searchResults && !searchResults.length) {
    return <InfoAlert message="No item found" />;
  } else if (searchResults && searchResults.length) {
    return (
      <ul class="content-list search-list">
        {searchResults.map(result => (
          <SearchListItem
            result={result}
            setContent={setContent}
            setCurrentBreed={setCurrentBreed}
          />
        ))}
      </ul>
    );
  }
  return <Loader />;
}

function SearchListItem({ result, setContent, setCurrentBreed }) {
  const breedDetails = searchResultToBreedDetails(result);

  const onClick = () => {
    setContent('breed-details');
    setCurrentBreed({ ...breedDetails, from: 'search' });
  };

  return <BreedItem url={breedDetails.url} name={breedDetails.name} onClick={onClick} />;
}
