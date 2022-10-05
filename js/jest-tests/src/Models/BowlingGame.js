import { TOTAL_PINS, TOTAL_FRAMES, ROLLS_PER_FRAME, STRIKE_CHAR, SPARE_CHAR, FAIL_CHAR } from "./const.js";

export class BowlingGame {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  get score() {
    let score = 0;
    let rollIndex = 0;

    for (let frameIndex = 0; frameIndex < TOTAL_FRAMES; frameIndex++) {
      if (this.isStrike(rollIndex)) {
        score += TOTAL_PINS + this.strikeBonus(rollIndex);
        rollIndex++;
      } else if (this.isSpare(rollIndex)) {
        score += TOTAL_PINS + this.spareBonus(rollIndex);
        rollIndex += ROLLS_PER_FRAME;
      } else {
        score += this.sumOfBallsInFrame(rollIndex);
        rollIndex += ROLLS_PER_FRAME;
      }
    }

    return score;
  }

  isStrike(rollIndex) {
    return this.rolls[rollIndex] === TOTAL_PINS;
  }

  isSpare(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === TOTAL_PINS;
  }

  sumOfBallsInFrame(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  }

  spareBonus(rollIndex) {
    return this.rolls[rollIndex + ROLLS_PER_FRAME];
  }

  strikeBonus(rollIndex) {
    return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }

}
