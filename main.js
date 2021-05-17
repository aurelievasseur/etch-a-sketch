// list of variables
const container = document.querySelector('.container');
let squareGrid; 
let rainbowSelected = true;

//  Starting grid when loading the page
function startingGrid() {
    for(i=0; i <64; i++){
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

// Manages which color 
function changeColor(e) {
    console.log('color');
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    if (rainbowSelected) {
        squareGrid[e.target.id].style.backgroundColor = "#" + randomColor;
    } else squareGrid[e.target.id].style.backgroundColor = 'black';
}

// listen for when mouse enter the container and changes the colors to rainbow
function listenToMe() {
    console.log('me');
    squareGrid = document.querySelectorAll('.square-div');
    squareGrid.forEach(square => {
    square.addEventListener('mouseenter', changeColor)
    })
}
// reset the screen to white
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

// butto to switch to black
const blackAndWhite = document.querySelector('.black');
blackAndWhite.addEventListener('click', function(){
    rainbowSelected = false;

});
// button to switch to rainbow
const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', function (){
    rainbowSelected = true;
});
startingGrid();
