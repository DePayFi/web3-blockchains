import { Blockchain } from 'src';

describe('all', () => {
  
  it('returns all blockchains', () => {
    expect(Array.isArray(Blockchain.all)).toEqual(true)
    expect(typeof Blockchain.all != 'undefined').toEqual(true)
  });
});
