import React from 'react';
import { useState } from 'react';

import { AppContext, SearchValueContext } from '../context';
import { Home, ContentWrapper } from '../components';

export function App() {
  const [content, setContent] = useState('banner');
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <AppContext.Provider value={{ content, setContent }}>
        <SearchValueContext.Provider value={{ searchValue, setSearchValue }}>
          <Home />
          <ContentWrapper />
        </SearchValueContext.Provider>
      </AppContext.Provider>
    </>
  );
}
