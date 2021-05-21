/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

import { Voting } from '../components/voting';
import { Breeds } from '../components/breeds';
import { Gallery } from '../components/gallery';
import { BreedDetails } from '../components/breed-details';
import { Search } from '../components/search';
import { Banner } from '../components/banner';
import { icons } from '../../assets/data/icons';
import renderApp from '../framework/render';
import updateState from '../framework/update';

export function ContentWrapper() {
  const { content } = dataStore;

  if (content === 'banner') {
    return (
      <section class="content-wrapper">
        <Banner />
      </section>
    );
  } else
    return (
      <section class="content-wrapper">
        <SecondaryMenu />
        {content === 'voting' ? (
          <Voting />
        ) : content === 'breeds' ? (
          <Breeds />
        ) : content === 'gallery' ? (
          <Gallery />
        ) : content === 'breed-details' ? (
          <BreedDetails />
        ) : (
          <Search />
        )}
      </section>
    );
}

function SecondaryMenu() {
  const { content, search } = dataStore;

  if (content === 'search') {
    setTimeout(() => {
      // save entered value & cursor position after search input rerendering
      const input = document.getElementById('search-control');
      input.value = search;
      input.selectionStart = search.length;
      input.selectionEnd = search.length;
      input.focus();
    }, 0);
  }

  return (
    <nav class="secondary-menu">
      <input
        class="form-control"
        id="search-control"
        placeholder="Search for breeds"
        onclick={() => {
          updateState({ content: 'search' });
          renderApp();
        }}
        oninput={event => {
          updateState({
            search: event.target.value,
            searchTimeoutPassed: false,
            searchResults: null,
          });
          renderApp();
        }}
        type="text"
      />
    </nav>
  );
}

export function ContentItem({ url, name }) {
  if (name) {
    return (
      <>
        <img class="content-item__image" src={url} />
        <div class="content-item__overlap content-item__name-overlap">
          <h4 class="content-item__overlap-heading content-item__name-overlap-heading">{name}</h4>
        </div>
      </>
    );
  } else {
    return (
      <>
        <img class="content-item__image" src={url} />
        <div class="content-item__overlap content-item__heart-overlap">
          <h4 class="content-item__overlap-heading content-item__heart-overlap-heading">
            {icons.heart}
          </h4>
        </div>
      </>
    );
  }
}
