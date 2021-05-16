import renderApp from './framework/render';
import updateState from './framework/update';
import { initialDataStore } from './data/dataStore';
import { App } from './components/app.js';

window.initialDataStore = initialDataStore;
window.dataStore = { ...initialDataStore };

window.updateState = updateState;
window.renderApp = renderApp;

renderApp(App, 'main');
