import Blockchains from 'src'

describe('findByNetworkId', () => {
  
  it('provides a blockchain by name', () => {
    expect(Blockchains.findByNetworkId(1).label).toEqual('Ethereum')
    expect(Blockchains.findByNetworkId('56').label).toEqual('BNB Smart Chain')
    expect(Blockchains.findByNetworkId(137).label).toEqual('Polygon')
  });
});
