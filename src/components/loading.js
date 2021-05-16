import { icons } from '../../assets/data/icons';

export function Loader() {
  return `<div class="loader">${icons.loader}</div>`;
}

export function ErrorAlert(message) {
  return `<p class="alert error-alert">${message}</p>`;
}

export function InfoAlert(info) {
  return `<div class="alert info-alert">${info}</div>`;
}
