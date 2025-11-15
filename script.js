const GRID_DIMENSION = 16;

const container = document.querySelector("#container");

for(let i = 0; i < GRID_DIMENSION * GRID_DIMENSION; i++) {
  let gridSlot = document.createElement("div");
  gridSlot.setAttribute("style", "height: 50px; width: 50px; border: solid; border-color: lightgray; border-width: 1px;");
  container.appendChild(gridSlot);
}

