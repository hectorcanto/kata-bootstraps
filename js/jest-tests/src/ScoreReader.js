import { ScoreFrame } from "./ScoreFrame";

const SPACE = ' ';
const ROLL_ONE_INDEX = 0;
const ROLL_TWO_INDEX = 1;
const ROLL_THREE_INDEX = 2;

export class ScoreReader {
  static read(score) {
    let score_items = score.split(SPACE);
    return score_items.map((item, index) => 
      new ScoreFrame(item[ROLL_ONE_INDEX], item[ROLL_TWO_INDEX], item[ROLL_THREE_INDEX], index)
    );
  }
}