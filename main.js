// list of variables
const container = document.querySelector('.container');
let squareGrid; 

//  Starting grid when loading the page
function startingGrid() {
    for(i=0; i <16; i++){
        let newDiv = document.createElement('div');
        newDiv.className= 'square-div';
        newDiv.id = i;
        container.appendChild(newDiv);
    }
    listenToMe();
}

// Function to create the grid
function gridCreation(){
    container.innerHTML = '';
    const squarePerSide = prompt('Enter the number of squares per side (max 100)');
    const intPerSide = parseInt(squarePerSide, 10)
    console.log(intPerSide, typeof(intPerSide));
    if (intPerSide > 100 ) {
        alert('Error - too many squares, try under 100');
        startingGrid();
    } else if (!isNaN(intPerSide) ) {
        total = intPerSide ** 2;
        container.style.gridTemplateColumns = 'repeat('+intPerSide+', 1fr)';
        container.style.gridTemplateRows = 'repeat('+intPerSide+', 1fr)';
        for(i=0; i < total; i++){
            let newDiv = document.createElement('div');
            newDiv.className= 'square-div';
            newDiv.id = i;
            container.appendChild(newDiv);
        }
        listenToMe();
    } else {
        alert('This is not a number');
        startingGrid() }
    
}
// event listeners for the individual squares

// Change the color of the square to a random color
function changeColor(e) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    squareGrid[e.target.id].style.backgroundColor = "#" + randomColor;
}
function listenToMe() {
    squareGrid = document.querySelectorAll('.square-div');
    squareGrid.forEach(square => {
    square.addEventListener('mouseenter', changeColor)
    })
}
function eraseAll() {
        squareGrid.forEach(square => {
        square.style.backgroundColor = 'white';
    }); 
}

// event listeners for the button
const selectSize = document.querySelector('.select-size');
selectSize.addEventListener('click', gridCreation);
// button to erase content
const erase = document.querySelector('.erase');
erase.addEventListener('click', eraseAll);


startingGrid();
