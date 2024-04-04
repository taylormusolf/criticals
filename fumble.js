import fumbles from './systems/pathfinder-1e/fumbles.json'


export function setupFumble(button, element) {
  button.innerHTML = 'generate'
  const getFumble = () => {
    const randNum = Math.floor(Math.random() * (fumbles.length + 1));
    const fumble = fumbles[randNum];
    console.log(fumble);
    const child = document.createElement('div');
    child.innerHTML = `
      <div>
        <h1>${fumble.name}</h1>
        ${fumble.value}
      </div>
    `;
    element.appendChild(child)
  }
  button.addEventListener('click', () => getFumble());
  //possibly get from local storage here
}
