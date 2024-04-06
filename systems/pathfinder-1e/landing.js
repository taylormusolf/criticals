import { setupFumble } from './fumble';

export const landing = () => {
    document.querySelector('#app').innerHTML = `
      <div>
        <h1>Generate a Fumble!</h1>
        <div id="card">
          <button id="melee-fumble" type="button"></button>
          <button id="ranged-fumble" type="button"></button>
          <button id="magic-fumble" type="button"></button>
          <button id="natural-fumble" type="button"></button>
    
        </div>
      </div>
    `
    setupFumble("melee", document.querySelector('#melee-fumble'), document.querySelector('#card'));
    setupFumble("ranged", document.querySelector('#ranged-fumble'), document.querySelector('#card'));
    setupFumble("magic", document.querySelector('#magic-fumble'), document.querySelector('#card'));
    setupFumble("natural", document.querySelector('#natural-fumble'), document.querySelector('#card'));
}


