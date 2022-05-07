document.querySelector('body').setAttribute('style', 'margin: 0');
//THIS CREATED AND PUSH THE GRID
const body = document.querySelector('body');
const container = document.createElement('div');

container.classList.add('container');

//that's created 16x16 divs
for (let i = 0; i < 256; i++) {
    const divs = document.createElement('div');
    divs.classList.add('child');
    divs.setAttribute('style',' height: 100px; border: solid 1px black;');
    container.appendChild(divs);
    // console.log(divs);
}
// document.createStyleSheet().addRule('.child', 'background-Color: red; height: 100px; border: solid 1px black;');
document.querySelector('body').appendChild(container);

//HERE IS THE CODE FOR the STYLES 
container.setAttribute('style', 'display: grid; grid-template-columns: repeat(16 , 1fr)');

//this is for the pencil efect
const allDivs = document.querySelectorAll('.child');
//this add the class white at the div that is clicked
allDivs.forEach(element => element.addEventListener('mouseover', event => {
    event.target.classList.add('painted');
    // event.target.classList.setAttribute('style','background-Color: white;');
    console.log(event.target);
    event.target.setAttribute('style', 'background-Color: red');
}));