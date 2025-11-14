// Constants
let GRID_SIZE = 16
const log = console.log;

// DOM selectors
const container = document.querySelector(".container")
container.style = "display: flex"
const resizeBtn = document.querySelector("#resizeBtn")

function resizeGrid() {
  resizeBtn.addEventListener("click", () => {
    let correctInput = false;
    while (!correctInput) {
      let newSize = prompt(`Type a number between 1-100 to resize the pad.\n(Currently 16x16 squares)`, _default=GRID_SIZE)
      // Convert the input into an integer
      let newSizeInt = parseInt(newSize)
      // Repeat prompt if input not integer or not between 1 and 100
      if (typeof(newSizeInt) === Number || 1 <= newSizeInt <= 100) {
        GRID_SIZE = newSize
        createGrid()
      }
    }
  })
}

resizeGrid()

// Create basic square div element
function createSquareDiv() {
  let squareDiv = document.createElement("div")
  squareDiv.classList = "inactive"
  squareDiv.style.border = "1px solid black"
  squareDiv.style.width = "30px"
  squareDiv.style.height = "30px"
  squareDiv.addEventListener("mouseenter", () => {
    squareDiv.classList = "active"
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