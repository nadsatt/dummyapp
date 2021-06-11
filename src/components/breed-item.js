import React from 'react';

export function BreedItem({ url, name, onClick }) {
  return (
    <li className="breed-item" onClick={onClick}>
      <img className="breed-item__image" src={url} />
      <div className="breed-item__overlap breed-item__name-overlap">
        <h4 className="breed-item__overlap-heading breed-item__name-overlap-heading">{name}</h4>
      </div>
    </li>
  );
}
