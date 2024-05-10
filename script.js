let gridContainer = document.querySelector('.grid-container');
let currentColor = document.querySelector('.input');
let userGrid = document.querySelector('button');
let div;
let number = 3;

addEventListener('DOMContentLoaded', () => {
    console.log('The DOM is fully loaded');
});

function createDiv(num, grid){ 
    for(let i = 0; i < (num*num); i++){
        let divisor = ((500 - (num * 2)) / num) + 'px';
        let defaultOpacity = 0.1;
        div = document.createElement('div');
        div.style.width = divisor;
        div.style.height = divisor;
        div.style.border = '1px solid black';
        div.style.backgroundColor = 'white';
        // div.style.opacity = defaultOpacity;
        grid.appendChild(div);
        div.addEventListener('mouseenter', function(){
            this.style.backgroundColor = currentColor.value;
            defaultOpacity += 0.1;
            this.style.opacity = defaultOpacity;
        });
    }
};
createDiv(number, gridContainer);

function removeDivs(){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
    return gridContainer;
}

function setGrid(){
    number = 0;
    number = +prompt('How do u like your grid?');
    if(number > 100){
        alert('Number has to be 100 or less.')
    } else{
        removeDivs();
        createDiv(number, gridContainer);
    };
};


userGrid.addEventListener('click', setGrid);