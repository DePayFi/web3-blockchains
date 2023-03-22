import Blockchains from 'src';

describe('findByName', () => {
  
  it('provides a blockchain by name', () => {
    expect(Blockchains.findByName('ethereum').label).toEqual('Ethereum')
    expect(Blockchains.findByName('bsc').label).toEqual('BNB Smart Chain')
    expect(Blockchains.findByName('polygon').label).toEqual('Polygon')
  });
});
