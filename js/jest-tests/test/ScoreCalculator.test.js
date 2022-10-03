// use named imports
import { ScoreCalculator } from '../src/ScoreCalculator';
import { ScoreReader } from '../src/ScoreReader';

describe('Sequence', () => {
  it.each`
  sequence                            | score
  ${'X X X X X X X X X X X X'}          ${300}
  ${'5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5'}   ${150}
  ${'9- 9- 9- 9- 9- 9- 9- 9- 9- 9-'}    ${90}
  ${'X 7/ 17 8/ X 14 6/ 32 9- X X X'}   ${136}
  ${'7/ 6/ 33 62 X 9- X X X X X 6'}     ${187}
  ${'X X X X 32 45 5/ 42 8/ 4/ X'}      ${166}
  ${'X X X X 32 45 5/ 42 8/ 4/X'}       ${166}
  `('$sequence should have score $score', ({ sequence, score }) => {
    const frames = ScoreReader.read(sequence);
    let result = ScoreCalculator.calculate(frames);
    expect(result).toBe(score);
  });
});