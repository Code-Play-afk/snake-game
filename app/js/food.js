import { onSnake, growSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";
import { pointUp } from "./score.js";
// *M
const GROW = 1;

let food = getNewFoodPosition();

// *V

export function drawFood(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridColumnStart = food.x;
  foodElement.style.gridRowStart = food.y;
  foodElement.classList.add("Food");
  gameBoard.appendChild(foodElement);
}

// *C

export function updateFood() {
  if (onSnake(food)) {
    growSnake(GROW);
    pointUp();
    food = getNewFoodPosition();
  }
}

function getNewFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
