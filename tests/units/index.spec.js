import { Blockchain } from 'src';

describe('depay-blockchains', () => {
  
  it('should export a Blockchain object', () => {
    expect(typeof(Blockchain)).toBe('object');
  });
});
