import { STRIKE, SPARE_ROLLS, NO_ROLLS } from "./ScoreFrame";

export class ScoreCalculator {

  static calculate(frames) {
    return frames.reduce((score, frame, index, list) => {
      return score + this.calculateTotalFrameScore(frame, list[index + 1], list[index + 2]);
    }, 0);
  }

  static calculateTotalFrameScore(frame, nextFrame, secondNextFrame) {
    let frameScore = frame.computeBaseScore();
    const nextRollsToAdd = frame.getNumberOfRollsToAddScore();
    if (nextRollsToAdd === NO_ROLLS) {
      return frameScore;
    }
    if (nextRollsToAdd === SPARE_ROLLS) {
      return frameScore + nextFrame.computeRollOneScore();
    }
    if (nextFrame.roll_one !== STRIKE) {
      return frameScore + nextFrame.computeRollOneScore() + nextFrame.computeRollTwoScore();
    }
    return frameScore + nextFrame.computeRollOneScore() + secondNextFrame.computeRollOneScore();
  }

}