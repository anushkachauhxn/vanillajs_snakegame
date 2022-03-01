import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js';

const gameBoard = document.getElementById("game-board");
let lastRenderTime = 0;

function main(currentTime) {
    window.requestAnimationFrame(main);

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    lastRenderTime = currentTime;
    update(); // updates logic of game (if we ate the food or not/ snake is longer or shorter/ game is over or not)
    draw(); // takes the updated logic and draws it (snake and food) on the screen
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
}
