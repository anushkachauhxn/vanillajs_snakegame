let food = { x: 1, y: 1 };

export function update() {
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.classList.add('food');
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridRowStart = food.y;

    gameBoard.appendChild(foodElement);
}
