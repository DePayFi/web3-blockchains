import { Blockchain } from 'src';

describe('ethereum', () => {
  
  it('provides basic structured data', () => {
    let blockchain = Blockchain.findByName('ethereum');
    expect(blockchain.name).toEqual('ethereum');
    expect(blockchain.id).toEqual('0x1');
    expect(blockchain.networkId).toEqual('1');
    expect(blockchain.label).toEqual('Ethereum');
    expect(blockchain.fullName).toEqual('Ethereum Mainnet');
    expect(blockchain.logo).toEqual('<svg version=\"1.1\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" image-rendering=\"optimizeQuality\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 283.5 283.5\" style=\"enable-background:new 0 0 283.5 283.5\" xml:space=\"preserve\"><style>.st1{fill:#8c8c8c}</style><g><g><path style=\"fill:#343434\" d=\"m141.7 55-1.1 3.9v114.8l1.1 1.1 53.3-31.5z\"/><path class=\"st1\" d=\"m141.7 55-53.2 88.3 53.2 31.5v-55.7z\"/><path style=\"fill:#3c3c3b\" d=\"m141.7 184.9-.6.8v40.9l.6 1.9 53.3-75.1z\"/><path class=\"st1\" d=\"M141.7 228.5v-43.6l-53.2-31.5z\"/><path style=\"fill:#141414\" d=\"m141.7 174.8 53.3-31.5-53.3-24.2z\"/><path style=\"fill:#393939\" d=\"m88.5 143.3 53.2 31.5v-55.7z\"/></g></g></svg>');
    expect(blockchain.currency.name).toEqual('Ether');
    expect(blockchain.currency.symbol).toEqual('ETH');
    expect(blockchain.currency.decimals).toEqual(18);
    expect(blockchain.explorer).toEqual('https://etherscan.io');
    expect(blockchain.rpc).toEqual(['https://mainnet.infura.io/v3/9aa3d95b3bc4', '40fa88ea12eaa4456161'].join(''));
    expect(blockchain.explorerUrlFor({
      transaction: { id: '0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f' }
    })).toEqual('https://etherscan.io/tx/0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f')
    expect(blockchain.explorerUrlFor({
      token: '0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb'
    })).toEqual('https://etherscan.io/token/0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb')
  });
});
