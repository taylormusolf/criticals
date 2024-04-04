import './style.css'
import { setupFumble } from './fumble';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Generate a Fumble!</h1>
    <div id="card">
      <button id="fumble" type="button"></button>
    </div>
  </div>
`

setupFumble(document.querySelector('#fumble'), document.querySelector('#card'));

// setupCounter(document.querySelector('#counter'))
