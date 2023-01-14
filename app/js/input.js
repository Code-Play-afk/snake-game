let inputDirection = { x: 0, y: 0 };
let previousInput = { x: 0, y: 0 };

export function getInputDirections() {
  previousInput = inputDirection;
  return inputDirection;
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (previousInput.y != 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (previousInput.y != 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (previousInput.x != 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (previousInput.x != 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

export function clearInputField() {
  inputDirection = { x: 0, y: 0 };
  previousInput = { x: 0, y: 0 };
}
