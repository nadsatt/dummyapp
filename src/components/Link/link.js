/* eslint-disable prettier/prettier */
/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework/element';

export default function Link({ classes, onClick = null }, children) {
  return (
    <a class={classes} onclick={onClick}>
      {children}
    </a>
  );
}
