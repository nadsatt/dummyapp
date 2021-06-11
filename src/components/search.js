import React from 'react';
import { useState, useEffect } from 'react';

import { ErrorAlert, Loader, InfoAlert, BreedItem } from '../components';
import {
  AppContext,
  CurrentBreedContext,
  useSearchTimerPassedContext,
  useSearchValueContext,
} from '../context';
import { getBreedsBySearch } from '../data';
import { searchResultToBreedDetails } from '../mappers';
import backImage from '../../assets/images/back.png';

export function Search() {
  return (
    <div className="search content">
      <SearchHeader />
      <SearchBody />
    </div>
  );
}

function SearchHeader() {
  return (
    <AppContext.Consumer>
      {({ setContent }) => (
        <header className="content-header search-header">
          <a
            className="content-header__label content-header__back-label"
            onClick={() => setContent('banner')}
          >
            <img src={backImage} />
          </a>
          <a className="content-header__label content-header__name-label content-header__current-label">
            search
          </a>
        </header>
      )}
    </AppContext.Consumer>
  );
}

function SearchBody() {
  const { searchTimerPassed, setSearchTimerPassed } = useSearchTimerPassedContext();
  const { searchValue } = useSearchValueContext();

  const [searchTimer, setSearchTimer] = useState(null);

  useEffect(() => {
    if (!searchTimerPassed) {
      // delay before search
      clearTimeout(searchTimer);
      const timer = setTimeout(() => {
        setSearchTimerPassed(true);
      }, 1000);

      setSearchTimer(timer);
      setSearchTimerPassed(false);
    }
  }, [searchValue]);

  if (!searchValue) {
    return <InfoAlert message="Please enter search query" />;
  } else if (!searchTimerPassed) {
    return <InfoAlert message="Entering search query.." />;
  }
  return (
    <div className="content-body search-body">
      <SearchList />
    </div>
  );
}

function SearchList() {
  const { searchValue } = useSearchValueContext();
  const { searchTimerPassed } = useSearchTimerPassedContext();

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
      <ul className="content-list search-list">
        {searchResults.map(result => (
          <SearchListItem key={result.id} result={result} />
        ))}
      </ul>
    );
  }
  return <Loader />;
}

function SearchListItem({ result }) {
  const breedDetails = searchResultToBreedDetails(result);

  return (
    <AppContext.Consumer>
      {({ setContent }) => (
        <CurrentBreedContext.Consumer>
          {({ setCurrentBreed }) => (
            <BreedItem
              url={breedDetails.url}
              name={breedDetails.name}
              onClick={() => {
                setContent('breed-details');
                setCurrentBreed({ ...breedDetails, from: 'search' });
              }}
            />
          )}
        </CurrentBreedContext.Consumer>
      )}
    </AppContext.Consumer>
  );
}
