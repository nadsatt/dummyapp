export default function updateState(newState) {
  Object.assign(window.dataStore, newState);
}
