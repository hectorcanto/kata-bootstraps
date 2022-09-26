export class Frame {
    scorePerRoll = [
        0,
        0
    ];

    constructor(scorePerRoll) {
        this.scorePerRoll = scorePerRoll;
    }

    pushRoll(roll) {
        this.scorePerRoll[roll.time] = roll.pins
    }

    score() {
        return this.rolls.reduce((a, b) => a + b);
    }

    isStrike() {
        return this.rolls[0] === 10;
    }

    isSpare() {
        return this.rolls[0] + this.rolls[1] === 10;
    }

}
