import { EXPANSION_RATE } from "./food.js";

var sound = new Audio("../assets/chime.mp3");

let score = 0;

export function update() {
    score += EXPANSION_RATE;
    sound.play();
}

export function draw(scoreBoard) {
    scoreBoard.innerHTML = score.toLocaleString(undefined, { minimumIntegerDigits: 2 });
}
