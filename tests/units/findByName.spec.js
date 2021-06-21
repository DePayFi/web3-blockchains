import { Blockchain } from 'dist/cjs/index.js';

describe('findByName', () => {
  
  it('provides a blockchain by name', () => {
    expect(Blockchain.findByName('ethereum').label).toEqual('Ethereum')
    expect(Blockchain.findByName('bsc').label).toEqual('Binance Smart Chain')
    expect(Blockchain.findByName('polygon').label).toEqual('Polygon')
  });
});
