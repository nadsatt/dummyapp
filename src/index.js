import renderApp from './framework/render';
import { initialDataStore } from './data/dataStore';
import { App } from './components/app.js';

window.initialDataStore = initialDataStore;
window.dataStore = { ...initialDataStore };

renderApp(App, document.getElementById('main'));
