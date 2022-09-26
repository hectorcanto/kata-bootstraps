export class Line {
  frames = [];

  constructor(frames) {
    this.frames = frames;
  }

  pushFrame(frame) {
    this.frames.push(frame);
  }

  score() {
    this.frames.reduce((totalScore, frame, index) => {
      if (frame.isStrike()) {
        return (totalScore += frame.score() + this.frames[index + 1].score());
      }
      if (frame.isSpare()) {
        return (totalScore +=
          frame.score() + this.frames[index + 1].scorePerRoll[0]);
      }
      return (totalScore += frame.score());
    }, 0);
  }

  printLine() {
    outputLine = this.frames.reduce((printScore, frame, index) => {
      score0 = frame.scorePerRoll[0] === 0 ? "-" : frame.scorePerRoll[0];
      score1 = frame.scorePerRoll[1] === 0 ? "-" : frame.scorePerRoll[1];
      if (frame.isStrike()) {
        return (printScore += "X ");
      }
      if (frame.isSpare()) {
        return (printScore += `${score0} / `);
      }
      return (printScore += `${score0} ${score1}`);
    }, "");
    return outputLine + " " + this.score();
  }
}
