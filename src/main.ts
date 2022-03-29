/**
 * Main Class
 */
export class Main {
  public pigIt(phrase: string): string {
    let phraseSplitted = phrase.split(' ');
    phraseSplitted = phraseSplitted.map(word => {
      return word + 'ay';
    });

    const result = phraseSplitted.join(' ');
    return result;
  }
}
