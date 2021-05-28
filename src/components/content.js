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
import { useState } from '../framework';

export function ContentWrapper({ content, setContent }) {
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [afterUserInput, setAfterUserInput] = useState(false);
  const [search, setSearch] = useState('');
  const [searchTimer, setSearchTimer] = useState(null);
  const [searchTimeoutPassed, setSearchTimeoutPassed] = useState(true);

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
          content={content}
          search={search}
          setContent={setContent}
          setSearch={setSearch}
          setSearchTimeoutPassed={setSearchTimeoutPassed}
          setAfterUserInput={setAfterUserInput}
        />
        {content === 'voting' ? (
          <Voting />
        ) : content === 'breeds' ? (
          <Breeds setContent={setContent} setSelectedBreed={setSelectedBreed} />
        ) : content === 'gallery' ? (
          <Gallery setContent={setContent} />
        ) : content === 'breed-details' ? (
          <BreedDetails selectedBreed={selectedBreed} setContent={setContent} />
        ) : (
          <Search
            search={search}
            searchTimer={searchTimer}
            searchTimeoutPassed={searchTimeoutPassed}
            afterUserInput={afterUserInput}
            setContent={setContent}
            setSearchTimer={setSearchTimer}
            setSearchTimeoutPassed={setSearchTimeoutPassed}
            setAfterUserInput={setAfterUserInput}
          />
        )}
      </section>
    );
}

function SecondaryMenu({
  content,
  search,
  setContent,
  setSearch,
  setSearchTimeoutPassed,
  setAfterUserInput,
}) {
  // save entered value & cursor position after search input rerendering
  if (content === 'search') {
    setTimeout(() => {
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
        onclick={() => setContent('search')}
        oninput={event => {
          setAfterUserInput(true);
          setSearchTimeoutPassed(false);
          setSearch(event.target.value);
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
