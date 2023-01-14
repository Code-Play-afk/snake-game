let highScore = getHighScore();
let currentScore = 0;

export function pointUp() {
  currentScore++;
  updateHighScore(currentScore);
}

export function resetScore() {
  currentScore = 0;
}

export function setHighScore(points) {
  localStorage.removeItem("highScore");
  localStorage.setItem("highScore", JSON.stringify(points));
}

function getHighScore() {
  if (JSON.parse(localStorage.getItem("highScore")) === null) {
    return 0;
  } else {
    return JSON.parse(localStorage.getItem("highScore"));
  }
}
export function updateHighScore(points) {
  highScore = getHighScore();
  if (points >= highScore) {
    highScore = points;
    setHighScore(highScore);
  } else {
    console.log("High Score is greater");
  }
}

export function putScore(score) {
  highScore = getHighScore();
  score.innerHTML = `High Score:${highScore}<br>Score: ${currentScore}`;
}

export function updateScoreBoard(high, current) {
  highScore = getHighScore();
  high.innerHTML = `High Score: ${highScore}`;
  current.innerHTML = `Current Score: ${currentScore}`;
}
