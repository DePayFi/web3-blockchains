import { Blockchain } from 'src';

describe('findById', () => {
  
  it('provides a blockchain by id', () => {
    expect(Blockchain.findById('0x01').name).toEqual('ethereum')
    expect(Blockchain.findById('0x1').name).toEqual('ethereum')
    expect(Blockchain.findById('0x38').name).toEqual('bsc')
    expect(Blockchain.findById('0x89').name).toEqual('polygon')
  });

  it('returns unknown blockchain if didnt find any blockchain by id', ()=> {
    expect(Blockchain.findById('0x01332132132').name).toEqual('unknown')
  })
});
