import { Voting } from '../components/voting';
import { Breeds } from '../components/breeds';
import { Gallery } from '../components/gallery';
import { BreedDetails } from '../components/breed-details';
import { Search } from '../components/search';
import { Banner } from '../components/banner';
import { icons } from '../../assets/data/icons';

export function ContentWrapper() {
  const { content } = dataStore;

  if (content === 'banner') {
    return Banner();
  }
  return (
    SecondaryMenu() +
    (content === 'voting'
      ? Voting()
      : content === 'breeds'
      ? Breeds()
      : content === 'gallery'
      ? Gallery()
      : content === 'breed-details'
      ? BreedDetails()
      : Search())
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

  return `
    <nav class="secondary-menu">
      <input class="form-control"
       id="search-control"
       placeholder="Search for breeds"
       onclick="window.updateState({content: 'search'}), window.renderApp()"
       oninput="window.updateState({search: this.value, searchTimeoutPassed: false, searchResults: null}), window.renderApp()"
       type="text">
    </nav>`;
}

export function ContentItem(url, name) {
  return `
    <img class="content-item__image" src="${url}">
    <div class="content-item__overlap ${
      name ? 'content-item__name-overlap' : 'content-item__heart-overlap'
    }">
      <h4 class="content-item__overlap-heading ${
        name ? 'content-item__name-overlap-heading' : 'content-item__heart-overlap-heading'
      }">${name ? name : icons.heart}</h4>
    </div>`;
}
