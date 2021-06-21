import { Blockchain } from 'dist/cjs/index.js';

describe('depay-blockchains', () => {
  
  it('should export a Blockchain object', () => {
    expect(typeof(Blockchain)).toBe('object');
  });
});
