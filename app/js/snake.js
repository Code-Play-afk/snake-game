export let SNAKE_SPEED = 5;
import { getInputDirections, getHeadDirections } from "./input.js";

// *M

let snakeBody = [{ x: 2, y: 1 }];
let newSegment = 0;

// *V

export function drawSnake(gameBoard, headDirection) {
  // console.log("drewSnake");
  snakeBody.forEach((segment) => {
    if (snakeBody.indexOf(segment) === 0) {
      const snakeHead = document.createElement("div");
      snakeHead.style.gridColumnStart = segment.x;
      snakeHead.style.gridRowStart = segment.y;
      snakeHead.id = "SnakeHead";
      snakeHead.removeAttribute("class");
      snakeHead.className = headDirection;
      gameBoard.appendChild(snakeHead);
    } else {
      const snakeSegment = document.createElement("div");
      snakeSegment.style.gridColumnStart = segment.x;
      snakeSegment.style.gridRowStart = segment.y;
      snakeSegment.classList.add(`Snake${Math.floor(Math.random() * 5) + 1}`);
      gameBoard.appendChild(snakeSegment);
    }
  });
}

// *C

export function updateSnake() {
  addSegments();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  const inputDirection = getInputDirections();
  const headDirection = getHeadDirections();
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
  return headDirection;
}

export function growSnake(segment) {
  newSegment += segment;
  if (SNAKE_SPEED <= 10) SNAKE_SPEED += 0.1;
}
export function resetSnake() {
  SNAKE_SPEED = 5;
  snakeBody = [{ x: 2, y: 1 }];
}

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) {
      return false;
    } else {
      return equalPosition(segment, position);
    }
  });
}

export function getSnakeHead() {
  // console.log(snakeBody[0]);
  return snakeBody[0];
}

export function snakeIntersects() {
  // console.log(`intersection: ${onSnake(snakeBody[0], { ignoreHead: true })}`);
  return onSnake(snakeBody[0], { ignoreHead: true });
}

function equalPosition(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
  for (let i = 0; i < newSegment; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegment = 0;
}
