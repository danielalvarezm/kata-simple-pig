import { Main } from '../src/main';

/**
 * Listado de tests:
 * pigIt('A') -> 'Aay'
 * pigIt('A B') -> 'Aay Bay'
 * pigIt('Hello) -> 'elloHay'
 */
describe('Kata simple pig', () => {
  it("returns the same letter adding 'ay' at the end", () => {
    const pig = new Main();

    expect(pig.pigIt('A')).toBe('Aay');
  });

  it("returns the same letter adding 'ay' at the end of each letter", () => {
    const pig = new Main();

    expect(pig.pigIt('A B')).toBe('Aay Bay');
  });
});
