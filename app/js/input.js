let inputDirection = { x: 0, y: 0 };
let previousInput = { x: 0, y: 0 };

export function getInputDirections() {
  previousInput = inputDirection;
  return inputDirection;
}

window.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("Up")) {
    if (previousInput.y === 0) inputDirection = { x: 0, y: -1 };
  } else if (e.target.classList.contains("Down")) {
    if (previousInput.y === 0) inputDirection = { x: 0, y: 1 };
  } else if (e.target.classList.contains("Left")) {
    if (previousInput.x === 0) inputDirection = { x: -1, y: 0 };
  } else if (e.target.classList.contains("Right")) {
    if (previousInput.x === 0) inputDirection = { x: 1, y: 0 };
  }
});

export function clearInputField() {
  inputDirection = { x: 0, y: 0 };
  previousInput = { x: 0, y: 0 };
}
