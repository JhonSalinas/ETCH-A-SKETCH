document.querySelector('body').setAttribute('style', 'margin: 0');
//THIS CREATED AND PUSH THE GRID
const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');

//that's created 16x16 divs
for (let i = 0; i < 16 * 16; i++) {
    const divs = document.createElement('div');
    divs.setAttribute('style','background-Color: red; height: 100px; border: solid 1px black;');
    container.appendChild(divs);
}

document.querySelector('body').appendChild(container);

//HERE IS THE CODE FOR the STYLES 
container.setAttribute('style', 'display: grid; grid-template-columns: repeat(16 , 1fr)');