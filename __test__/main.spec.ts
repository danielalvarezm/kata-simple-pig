import { Main } from '../src/main';

// pigIt('A') -> 'A'
describe('Kata simple pig', () => {
  it('Should return the same letter', () => {
    const pig = new Main();

    expect(pig.pigIt('A')).toBe('A');
  });
});
