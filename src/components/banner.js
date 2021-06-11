import React from 'react';

import girlImage from '../../assets/images/girl.png';

export function Banner() {
  return (
    <div className="banner">
      <img className="banner__image" src={girlImage} />
    </div>
  );
}
