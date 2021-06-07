/* eslint-disable prettier/prettier */
/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework';

export function Loader() {
  return (
    <div class="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export function ErrorAlert({ error }) {
  return <p class="alert error-alert">{error}</p>;
}

export function InfoAlert({ message }) {
  return <div class="alert info-alert">{message}</div>;
}
