import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 2; // how many times the snake moves in one second
const snakeBody = [{ x: 11, y: 11 }]; // snake body is represented from 21x21 grid in game-board

export function update() {
    // iterate over snake elements starting from second last element (length - 2); 
    // since last element (length - 1) is going to disappear after update
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    // update head according to key
    const inputDirection = getInputDirection();
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.classList.add('snake');
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.style.gridRowStart = segment.y;

        gameBoard.appendChild(snakeElement);
    });
}
