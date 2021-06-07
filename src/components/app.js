/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment, useState } from '../framework';
import { AppContext } from '../context';

import { Home, ContentWrapper } from '../components';

export function App() {
  const [content, setContent] = useState('banner');

  return (
    <>
      <AppContext.Provider value={content}>
        <Home setContent={setContent} />
        <ContentWrapper setContent={setContent} />
      </AppContext.Provider>
    </>
  );
}
