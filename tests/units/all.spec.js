import Blockchains from 'src';

describe('all', () => {
  
  it('returns all blockchains', () => {
    expect(Array.isArray(Blockchains.all)).toEqual(true)
    expect(typeof Blockchains.all != 'undefined').toEqual(true)
  });
});
