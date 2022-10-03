export const STRIKE = 'X';
export const SPARE = '/';
export const MISS = '-';

export const MAX_POINTS = 10;
export const MIN_POINTS = 0;

export const MAX_TURN_TO_ADD_ROLLS = 8;
export const STRIKE_ROLLS = 2;
export const SPARE_ROLLS = 1;
export const NO_ROLLS = 0;

export class ScoreFrame {

  constructor (roll_one, roll_two, roll_three, turn) {
    this.roll_one = roll_one;
    this.roll_two = roll_two;
    this.roll_three = roll_three;
    this.turn = turn;
  }

  computeBaseScore() {
    if (this.roll_one === STRIKE) {
      return MAX_POINTS;
    }

    return this.computeRollOneScore() + this.computeRollTwoScore() + this.computeRollThreeScore();
  }

  computeRollOneScore() {
    if (this.roll_one === STRIKE) {
      return MAX_POINTS;
    }

    if (this.roll_one === MISS) {
      return MIN_POINTS;
    }

    return parseInt(this.roll_one);
  }

  computeRollTwoScore() {
    if (!this.roll_two || this.roll_two === MISS) {
      return MIN_POINTS;
    }

    if (this.roll_two === SPARE) {
      return MAX_POINTS - this.computeRollOneScore();
    }

    return parseInt(this.roll_two);
  }

  computeRollThreeScore() {
    if (!this.roll_three || this.roll_three === MISS) {
      return MIN_POINTS;
    }

    if (this.roll_three === STRIKE) {
      return MAX_POINTS;
    }

    return parseInt(this.roll_three);
  }

  getNumberOfRollsToAddScore() {
    if (this.turn > MAX_TURN_TO_ADD_ROLLS) {
      return NO_ROLLS;
    }
    if (this.roll_one === STRIKE) {
      return STRIKE_ROLLS;
    }
    return this.roll_two === SPARE ? SPARE_ROLLS : NO_ROLLS;
  }

}