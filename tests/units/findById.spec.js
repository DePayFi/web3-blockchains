import Blockchains from 'src';

describe('findById', () => {
  
  it('provides a blockchain by id', () => {
    expect(Blockchains.findById('0x01').name).toEqual('ethereum')
    expect(Blockchains.findById('0x1').name).toEqual('ethereum')
  });

  it('returns unknown blockchain if didnt find any blockchain by id', ()=> {
    expect(Blockchains.findById('0x01332132132')).toEqual(undefined)
  })
});
