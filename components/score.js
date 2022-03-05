import { EXPANSION_RATE } from "./food.js";

let score = 0;

export function update() {
    score += EXPANSION_RATE;
}

export function draw(scoreBoard) {
    scoreBoard.innerHTML = score;
}
