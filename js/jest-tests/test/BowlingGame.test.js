import { BowlingGame } from "../src/Models/BowlingGame";


describe("BowlingGame", () => {
  let game = new BowlingGame();


  beforeEach(() => {
    game = new BowlingGame();
  });

  const rollMany = (n, pins) => {
    for (let i = 0; i < n; i++) {
      game.roll(pins);
    }
  }

  const rollSpare = () => {
    game.roll(5);
    game.roll(5);
  }

  const rollStrike = () => {
    game.roll(10);
  }

  test("Fail game", () => {
    rollMany(20, 0);
    expect(game.score).toBe(0);
  })


  test("All ones", () => {
    rollMany(20, 1);
    expect(game.score).toBe(20);
  })


  test("One spare", () => {
    rollSpare();
    game.roll(3);
    rollMany(17, 0);
    expect(game.score).toBe(16);
  })


  test("One strike", () => {
    rollStrike();
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);
    expect(game.score).toBe(24);
  })


  test("Perfect game", () => {
    rollMany(12, 10);
    expect(game.score).toBe(300);
  })


  test("All spares", () => {
    rollMany(21, 5);
    expect(game.score).toBe(150);
  })

});
