function getGrid() {
  let x = 100,
    y = 120;

  // y = 1.2 * x;
  return { X: x, Y: y };
}
const GRID = getGrid();

export function setGrid(grid) {
  grid.style.width = GRID.X + "vmin";
  grid.style.height = GRID.Y + "vmin";
}

export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * 20) + 1,
    y: Math.floor(Math.random() * 24) + 1,
  };
}

export function outsideGrid(position) {
  return position.x < 1 || position.x > 20 || position.y < 1 || position.y > 24;
}
