
const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');
//that's created 16x16 divs
for (let i = 0; i < 16 * 16; i++) {
    const divs = document.createElement('div');
    container.appendChild(divs);
}

document.querySelector('body').appendChild(container);