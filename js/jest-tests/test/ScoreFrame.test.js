// use named imports
import { ScoreFrame } from '../src/ScoreFrame';

describe('Frame compute', () => {
  it.each`
  roll_one  | roll_two    | roll_three  | turn  | base_score  | roll_one_score  | roll_two_score  | roll_three_score  | rolls_to_add
  ${'X'}      ${undefined}  ${undefined}  ${0}    ${10}         ${10}             ${0}              ${0}                ${2}
  ${'-'}      ${'/'}        ${undefined}  ${0}    ${10}         ${0}              ${10}             ${0}                ${1}
  ${'-'}      ${'-'}        ${undefined}  ${0}    ${0}          ${0}              ${0}              ${0}                ${0}
  ${'-'}      ${'/'}        ${'-'}        ${9}    ${10}         ${0}              ${10}             ${0}                ${0}
  ${'3'}      ${'/'}        ${'7'}        ${9}    ${17}         ${3}              ${7}              ${7}                ${0}
  ${'3'}      ${'6'}        ${undefined}  ${5}    ${9}          ${3}              ${6}              ${0}                ${0}
  ${'3'}      ${'-'}        ${undefined}  ${5}    ${3}          ${3}              ${0}              ${0}                ${0}
  ${'X'}      ${undefined}  ${undefined}  ${9}    ${10}         ${10}             ${0}              ${0}                ${0}
  `('$roll_one|$roll_two|$roll_three turn: $turn; base score: $base_score; roll one: $roll_one_score; roll two: $roll_one_score; roll three $roll_three_score; rolls to add score: $rolls_to_add', 
  ({ roll_one, roll_two, roll_three, turn, base_score, roll_one_score, roll_two_score, roll_three_score, rolls_to_add }) => {
    const strike = new ScoreFrame(roll_one, roll_two, roll_three, turn);
    expect(strike.computeBaseScore()).toBe(base_score);
    expect(strike.computeRollOneScore()).toBe(roll_one_score);
    expect(strike.computeRollTwoScore()).toBe(roll_two_score);
    expect(strike.computeRollThreeScore()).toBe(roll_three_score);
    expect(strike.getNumberOfRollsToAddScore()).toBe(rolls_to_add);
  });
});