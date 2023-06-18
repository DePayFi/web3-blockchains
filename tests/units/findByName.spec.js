import Blockchains from 'src';

describe('findByName', () => {
  
  it('provides a blockchain by name', () => {
    expect(Blockchains.findByName('ethereum').label).toEqual('Ethereum')
  });
});
