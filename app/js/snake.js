export let SNAKE_SPEED = 5;
import { getInputDirections } from "./input.js";

// *M

let snakeBody = [{ x: 2, y: 1 }];
let newSegment = 0;

// *V

export function drawSnake(gameBoard) {
  // console.log("drewSnake");
  snakeBody.forEach((segment) => {
    if (snakeBody.indexOf(segment) === 0) {
      const snakeHead = document.createElement("div");
      snakeHead.style.gridColumnStart = segment.x;
      snakeHead.style.gridRowStart = segment.y;
      snakeHead.id = "SnakeHead";
      gameBoard.appendChild(snakeHead);
    } else {
      const snakeSegment = document.createElement("div");
      snakeSegment.style.gridColumnStart = segment.x;
      snakeSegment.style.gridRowStart = segment.y;
      snakeSegment.classList.add("Snake");
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
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function growSnake(segment) {
  newSegment += segment;
  SNAKE_SPEED += 0.2;
}
export function resetSnake() {
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
