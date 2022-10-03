// use named imports
import { BowlingGame } from '../src/BowlingGame';

const MAX_ROLL = 20
let game = null

beforeEach(() => {
  game = new BowlingGame()
});

afterEach(() => {
  game = null
});

test('Test -1 pin each', () => {
	const allRoll = Array(MAX_ROLL).fill(-1)
	allRoll.forEach(pinCount => game.roll(pinCount))
	expect(game.score).toBe(-20);
});

test('Test 0 pins', () => {
	const allRoll = Array(MAX_ROLL).fill(0)
	allRoll.forEach(pinCount => game.roll(pinCount))
	expect(game.score).toBe(0);
});

test('Test 0.5 pin each', () => {
	const allRoll = Array(MAX_ROLL).fill(0.5)
	allRoll.forEach(pinCount => game.roll(pinCount))
	expect(game.score).toBe(10);
});

test('Test 1 pin each', () => {
	const allRoll = Array(MAX_ROLL).fill(1)
	allRoll.forEach(pinCount => game.roll(pinCount))
	expect(game.score).toBe(20);
});

test('Test 5 pins each', () => {
	const allRoll = Array(MAX_ROLL).fill(5)
	allRoll.forEach(pinCount => game.roll(pinCount))
	expect(game.score).toBe(100);
});

test('Test 10 pins each', () => {
	const allRoll = Array(MAX_ROLL).fill(10)
	allRoll.forEach(pinCount => game.roll(pinCount))
	expect(game.score).toBe(300);
});

test('Test 11 pin each', () => {
	const allRoll = Array(MAX_ROLL).fill(11)
	allRoll.forEach(pinCount => game.roll(pinCount))
	expect(game.score).toBe(220);
});