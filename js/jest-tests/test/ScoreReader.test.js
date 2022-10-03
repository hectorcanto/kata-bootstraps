// use named imports
import { ScoreReader } from '../src/ScoreReader';
import { ScoreFrame } from '../src/ScoreFrame';

test('Read method should read a string and return a list', () => {
  const score = ScoreReader.read('X X X X X X X X X X X X');
  expect(score.length).toBe(12);
});

test('Each item of the list should be a ScoreFrame', () => {
  const score = ScoreReader.read('X X X X X X X X X X X X');
  expect(score.every(item => item instanceof ScoreFrame)).toBe(true);
});