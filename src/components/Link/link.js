/* eslint-disable prettier/prettier */
/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework/element';

export default function Link({ classes, onClickCB = null }, children) {
  return (
    <a class={classes} onclick={onClickCB}>
      {children}
    </a>
  );
}
