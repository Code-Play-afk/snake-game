import {
  resetSnake,
  updateSnake,
  drawSnake,
  SNAKE_SPEED,
  getSnakeHead,
  snakeIntersects,
} from "./snake.js";
import { drawFood, updateFood } from "./food.js";
import { setGrid, outsideGrid } from "./grid.js";
import { clearInputField } from "./input.js";
import { putScore, resetScore, updateScoreBoard } from "./score.js";

const gameBoard = document.getElementById("GameBoard");
let lastRenderTime = 0;
const title = document.getElementById("Title");
const score = document.querySelector("[data-subtitle]");
const high = document.querySelector(".HighScore");
const current = document.querySelector(".CurrentScore");

// *V
function handleStart() {
  clearInputField();
  resetScore();
  title.style.display = "none";
  resetSnake();
  window.requestAnimationFrame(gameLoop);
}

function handleLoss() {
  putScore(score);
  title.style.display = "flex";
  setTimeout(() => {
    document.addEventListener("click", handleStart, {
      once: true,
    });
  }, 1000);
}

function gameLoop(currentTime) {
  if (gameOver()) {
    return handleLoss();
  }
  window.requestAnimationFrame(gameLoop);
  const delta = (currentTime - lastRenderTime) / 1000;
  if (delta < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;
  setGrid(gameBoard);
  updateGame();
  drawGame();
  gameOver();
}

function drawGame() {
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

// *C

function updateGame() {
  gameBoard.innerHTML = "";
  updateSnake();
  updateFood();
  updateScoreBoard(high, current);
}

function gameOver() {
  return outsideGrid(getSnakeHead()) || snakeIntersects();
}

document.addEventListener("click", handleStart, { once: true });
