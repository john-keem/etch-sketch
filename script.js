const GRID_DIMENSION = 16;

const container = document.querySelector("#container");

function makeGrid(dimension) {
  container.textContent = "";
  const squareSize = 850 / dimension;

  for(let i = 0; i < dimension * dimension; i++) {
    let gridSlot = document.createElement("div");
    gridSlot.classList.add("squares");
    gridSlot.setAttribute("style", "border: solid; border-color: lightgray; border-width: 1px;");
    gridSlot.style.width =  `${squareSize}px`;
    gridSlot.style.height = `${squareSize}px`;
    gridSlot.addEventListener("mouseenter", () => gridSlot.style.backgroundColor = "black");
    container.appendChild(gridSlot);
  }
}

const button = document.querySelector("button");
button.addEventListener("click", request);

function request() {
  let userInput = Number(prompt("Please enter the number of squares per side for the new grid"));

  if(isNaN(userInput) || userInput > 100 || userInput < 1) {
    alert("Must be a number less than 100 and greater than 1");
    return;
  }

  else {
    makeGrid(userInput);
  }
}

makeGrid(GRID_DIMENSION);