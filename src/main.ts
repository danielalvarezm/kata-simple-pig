/**
 * Main Class
 */
export class Main {
  private suffix = 'ay';

  public pigIt(phrase: string): string {
    const phraseSplitted = phrase.split(' ');
    const phraseSplittedSuffix = phraseSplitted.map(word => word + this.suffix);
    const result = phraseSplittedSuffix.join(' ');

    return result;
  }
}
