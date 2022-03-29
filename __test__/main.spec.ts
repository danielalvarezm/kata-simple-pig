import { Main } from '../src/main';

/**
 * Listado de tests:
 * pigIt('A') -> 'Aay'
 * pigIt('A B') -> 'Aay Bay'
 * pigIt('Hello) -> 'elloHay'
 */
describe('Kata simple pig', () => {
  it("Should return the same letter adding 'ay'", () => {
    const pig = new Main();

    expect(pig.pigIt('A')).toBe('Aay');
  });

  it("Should return the same letter adding 'ay' at the end of each letter", () => {
    const pig = new Main();

    expect(pig.pigIt('A B')).toBe('Aay Bay');
  });
});
