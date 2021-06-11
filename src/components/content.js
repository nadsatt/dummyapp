import React from 'react';
import { useState } from 'react';

import {
  AppContext,
  CurrentBreedContext,
  SearchTimerPassedContext,
  SearchValueContext,
  useAppContext,
} from '../context';
import { Banner, Breeds, Gallery, Search, BreedDetails } from '../components';

export function ContentWrapper() {
  const { content } = useAppContext();

  const [currentBreed, setCurrentBreed] = useState(null);
  const [searchTimerPassed, setSearchTimerPassed] = useState(true);

  if (content === 'banner') {
    return (
      <section className="content-wrapper">
        <Banner />
      </section>
    );
  } else
    return (
      <SearchTimerPassedContext.Provider value={{ searchTimerPassed, setSearchTimerPassed }}>
        <CurrentBreedContext.Provider value={{ currentBreed, setCurrentBreed }}>
          <section className="content-wrapper">
            <SecondaryMenu />
            {content === 'breeds' ? (
              <Breeds />
            ) : content === 'gallery' ? (
              <Gallery />
            ) : content === 'breed-details' ? (
              <BreedDetails />
            ) : (
              <Search />
            )}
          </section>
        </CurrentBreedContext.Provider>
      </SearchTimerPassedContext.Provider>
    );
}

function SecondaryMenu() {
  return (
    <AppContext.Consumer>
      {({ setContent }) => (
        <SearchValueContext.Consumer>
          {({ searchValue, setSearchValue }) => (
            <SearchTimerPassedContext.Consumer>
              {({ setSearchTimerPassed }) => (
                <nav className="secondary-menu">
                  <input
                    id="search-control"
                    className="form-control"
                    value={searchValue}
                    onClick={() => setContent('search')}
                    onInput={event => {
                      setSearchValue(event.target.value);
                      setSearchTimerPassed(false);
                    }}
                    type="text"
                    autoComplete="off"
                    placeholder="Search for breeds"
                  />
                </nav>
              )}
            </SearchTimerPassedContext.Consumer>
          )}
        </SearchValueContext.Consumer>
      )}
    </AppContext.Consumer>
  );
}
