import { Blockchain } from 'dist/cjs/index.js';

describe('all', () => {
  
  it('returns all blockchains', () => {
    expect(Array.isArray(Blockchain.all)).toEqual(true)
    expect(Blockchain.all.length).toEqual(3)
  });
});
