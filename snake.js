export const SNAKE_SPEED = 2; // how many times the snake moves in one second
const snakeBody = [{ x: 11, y: 11 }]; // snake is represented from 21x21 grid in game-board

export function update() {
    console.log("update snake");
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.classList.add('snake');
        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;

        gameBoard.appendChild(snakeElement);
    });
}
