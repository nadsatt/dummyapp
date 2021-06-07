/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, useState } from '../framework';
import { useAppContext } from '../context';

import { Banner, Breeds, Gallery, Search, BreedDetails } from '../components';

export function ContentWrapper({ setContent }) {
  const content = useAppContext();

  const [currentBreed, setCurrentBreed] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  if (content === 'banner') {
    return (
      <section class="content-wrapper">
        <Banner />
      </section>
    );
  } else
    return (
      <section class="content-wrapper">
        <SecondaryMenu
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setContent={setContent}
        />
        {content === 'breeds' ? (
          <Breeds setCurrentBreed={setCurrentBreed} setContent={setContent} />
        ) : content === 'gallery' ? (
          <Gallery setCurrentBreed={setCurrentBreed} setContent={setContent} />
        ) : content === 'breed-details' ? (
          <BreedDetails currentBreed={currentBreed} setContent={setContent} />
        ) : (
          <Search
            searchValue={searchValue}
            setCurrentBreed={setCurrentBreed}
            setContent={setContent}
          />
        )}
      </section>
    );
}

function SecondaryMenu({ searchValue, setContent, setSearchValue }) {
  const content = useAppContext();

  // save entered value & cursor position after search input rerendering
  if (content === 'search') {
    setTimeout(() => {
      const input = document.getElementById('search-control');
      input.value = searchValue;
      input.selectionStart = searchValue.length;
      input.selectionEnd = searchValue.length;
      input.focus();
    }, 0);
  }

  return (
    <nav class="secondary-menu">
      <input
        type="search"
        autocomplete="off"
        class="form-control"
        id="search-control"
        placeholder="Search for breeds"
        onclick={() => setContent('search')}
        oninput={event => setSearchValue(event.target.value)}
        type="text"
      />
    </nav>
  );
}
