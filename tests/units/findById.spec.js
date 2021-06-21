import { Blockchain } from 'dist/cjs/index.js';

describe('findById', () => {
  
  it('provides a blockchain by id', () => {
    expect(Blockchain.findById('0x01').name).toEqual('ethereum')
    expect(Blockchain.findById('0x38').name).toEqual('bsc')
    expect(Blockchain.findById('0x89').name).toEqual('polygon')
  });
});
