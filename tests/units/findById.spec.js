import Blockchains from 'src';

describe('findById', () => {
  
  it('provides a blockchain by id', () => {
    expect(Blockchains.findById('0x01').name).toEqual('ethereum')
    expect(Blockchains.findById('0x1').name).toEqual('ethereum')
    expect(Blockchains.findById('0x38').name).toEqual('bsc')
    expect(Blockchains.findById('0x89').name).toEqual('polygon')
    expect(Blockchains.findById('0x6A').name).toEqual('velas')
  });

  it('returns unknown blockchain if didnt find any blockchain by id', ()=> {
    expect(Blockchains.findById('0x01332132132')).toEqual(undefined)
  })
});
