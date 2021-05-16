import { Home } from '../components/home';
import { ContentWrapper } from '../components/content';

export function App() {
  return `
  <section class="home">${Home()}</section>
  <section class="content-wrapper">${ContentWrapper()}</section>`;
}
