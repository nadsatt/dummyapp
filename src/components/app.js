/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

import { Home } from '../components/home';
import { ContentWrapper } from '../components/content';

export function App() {
  return (
    <>
      <Home />
      <ContentWrapper />
    </>
  );
}
