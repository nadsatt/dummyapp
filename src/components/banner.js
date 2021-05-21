/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework/element';

import girlImage from '../../assets/images/girl.png';

export function Banner() {
  return (
    <div class="banner">
      <img class="banner__image" src={girlImage} />
    </div>
  );
}
