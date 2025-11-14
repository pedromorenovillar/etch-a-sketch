// Constants
const MIN_SIZE = 1;
const MAX_SIZE = 100;
let GRID_SIZE = 16


// DOM selectors
const container = document.querySelector(".container")
const resizeBtn = document.querySelector("#resizeBtn")

// Generate random number from 0 to 255
function randomRGB() {
  return Math.floor(Math.random() * 256)
}

// Create basic square div element
function createSquareDiv() {
  let squareDiv = document.createElement("div")
  squareDiv.style.width = `${container.clientWidth / GRID_SIZE}px`
  squareDiv.style.height = `${container.clientWidth / GRID_SIZE}px`
  squareDiv.classList = "inactive squareDiv"
  squareDiv.addEventListener("mouseenter", () => {
    squareDiv.classList = "squareDiv"
    let bgColorA = randomRGB()
    let bgColorB = randomRGB()
    let bgColorC = randomRGB()
    squareDiv.style.backgroundColor = `rgb(${bgColorA}, ${bgColorB}, ${bgColorC})`
  })
  return squareDiv
}


// Create a grid
function createGrid() {
  for (let row = 0; row < GRID_SIZE; row++) {
    let r = document.createElement("div")
    r.id = `row${row}`
    container.appendChild(r)
    for (let index = 0; index < GRID_SIZE; index++) {
      let newSquare = createSquareDiv()
      newSquare.id = `row${row}_column${index}`
      r.appendChild(newSquare)
    }
  }
}
createGrid()

function resizeGrid() {
  resizeBtn.addEventListener("click", () => {
    let correctInput = false;
    while (correctInput === false) {
      let newSize = prompt(`Type a number between 1-100 to resize the pad.\n(Currently 16x16 squares)`, _default=GRID_SIZE)
      // Convert the input into an integer
      let newSizeInt = parseInt(newSize, 10)
      container.innerHTML = ""
      // Repeat prompt if input not integer or not between 1 and 100
      if (Number.isInteger(newSizeInt) && newSizeInt >= MIN_SIZE && newSizeInt <= MAX_SIZE) {
        correctInput = true;
        GRID_SIZE = newSizeInt
        createGrid()
      } else {
        alert("Please enter a whole number between 1 and 100.")
      }
    }
  })
}
resizeGrid()