//n: numbers of squares ; pixels = nxn
const n = parseInt(prompt("insert a number integer, positive and less than 64 ( more than 64 not is recommendable)"));
if(isNaN(n) || n <= 0 ){
    alert('invalid value, reload the page');
} else {

    document.querySelector('body').setAttribute('style', 'margin: 0');
//THIS CREATED AND PUSH THE GRID
const body = document.querySelector('body');
const container = document.createElement('div');

container.classList.add('container');

//that's created 16x16 divs
for (let i = 0; i < n**2; i++) {
    const divs = document.createElement('div');
    divs.classList.add('child');
    divs.setAttribute('style',' border: solid 1px black;');
    container.appendChild(divs);
    // console.log(divs);
}
document.querySelector('body').appendChild(container);

//HERE IS THE CODE FOR the STYLES 
container.setAttribute('style',`display: grid; grid-template: repeat(${n} , 1fr) / repeat(${n} , 1fr)`);
container.style.height = '800px'
container.style.width = '800px'
// document.createStyleSheet().addRule('.container', 'background-Color: red;');

//this is for the pencil efect
const allDivs = document.querySelectorAll('.child');
//this add the class white at the div that is clicked
allDivs.forEach(element => element.addEventListener('mouseover', event => {
    // event.target.classList.add('painted');
    // event.target.classList.setAttribute('style','background-Color: white;');
    // console.log(event.target);
    event.target.setAttribute('style', 'background-Color: red');
}));


}  

