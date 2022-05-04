import { Blockchain } from 'src'

describe('findByNetworkId', () => {
  
  it('provides a blockchain by name', () => {
    expect(Blockchain.findByNetworkId(1).label).toEqual('Ethereum')
    expect(Blockchain.findByNetworkId('56').label).toEqual('BNB Smart Chain')
    expect(Blockchain.findByNetworkId(137).label).toEqual('Polygon')
  });
});
