/* eslint-disable prettier/prettier */
/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework';

export function BreedItem({ url, name, onClick }) {
  return (
    <li class="breed-item" onclick={onClick}>
      <img class="breed-item__image" src={url} />
      <div class="breed-item__overlap breed-item__name-overlap">
        <h4 class="breed-item__overlap-heading breed-item__name-overlap-heading">{name}</h4>
      </div>
    </li>
  );
}
