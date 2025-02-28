import { setupCounter } from '../lib/main';
import './style.css';
import typescriptLogo from './typescript.svg';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank">
            <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
          </a>
          <h1>Vite + TypeScript</h1>
          <div class="card">
      <button id="counter" type="button">sdfsdfsdfsdf</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
      Click on the Vite asdfsdfnd TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
