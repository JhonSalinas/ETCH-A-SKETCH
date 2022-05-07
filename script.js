const body = document.querySelector('body');

const bttn = document.createElement('button');
bttn.textContent = 'Click me to start or reload the page';

bttn.addEventListener('click', () => {
    document.querySelector('.container') ? location.reload() : drawPanel() ;
});

body.appendChild(bttn);

function drawPanel() {
    
//n: numbers of squares for drawing display ; pixels = nxn
const n = parseInt(prompt("insert a number integer, positive and less o equal to 64 ( >64 not's recommendable)"));

if(isNaN(n) || n <= 0 ){
    alert('invalid value, reload the page');
} else {
    document.querySelector('body').setAttribute('style', 'margin: 0');
    //THIS CREATED AND PUSH THE GRID
    const container = document.createElement('div');

    container.classList.add('container');

    //this created nxn divs
        for (let i = 0; i < n**2; i++) {
            const divs = document.createElement('div');
            divs.classList.add('child');
            divs.setAttribute('style',' border: solid 1px black;');
            container.appendChild(divs);
            // console.log(divs);
        }
    
    body.appendChild(container);

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

} 

