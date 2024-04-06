import magicFumbles from './fumbles/magic.json';
import naturalFumbles from './fumbles/natural.json';
import meleeFumbles from './fumbles/melee.json';
import rangedFumbles from './fumbles/ranged.json';

export function setupFumble(type, button, element) {
  let fumbles;
  switch(type){
    case "magic":
      fumbles = magicFumbles;
      button.innerHTML = '<img src="./public/pf1e/magic.png"> magic'
      break;
    case "natural":
      fumbles = naturalFumbles;
      button.innerHTML = '<img src="./public/pf1e/natural.png"> natural'
      break;
    case "ranged":
      fumbles = rangedFumbles;
      button.innerHTML = '<img src="./public/pf1e/ranged.png"> ranged'
      break;
    case "melee":
      fumbles = meleeFumbles;
      button.innerHTML = '<img src="./public/pf1e/melee.png"> melee'
      break;
  }


  const getFumble = () => {
    const randNum = Math.floor(Math.random() * (fumbles.length + 1));
    const fumble = fumbles[randNum];
    console.log(fumble);
    const child = document.createElement('div');
    child.innerHTML = `
      <div>
        <h2><img src="./public/pf1e/${type}.png"> ${fumble.type} </h2>
        <h1> ${fumble.name}</h1>
        ${fumble.value}
        ${new Date()}
      </div>
    `;
    element.appendChild(child)
  }
  button.addEventListener('click', () => getFumble());
  //possibly get from local storage here
}
