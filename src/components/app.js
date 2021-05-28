/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

import { Home } from '../components/home';
import { ContentWrapper } from '../components/content';
import { useState } from '../framework';

export function App() {
  const [content, setContent] = useState('banner');

  return (
    <>
      <Home content={content} setContent={setContent} />
      <ContentWrapper content={content} setContent={setContent} />
    </>
  );
}
