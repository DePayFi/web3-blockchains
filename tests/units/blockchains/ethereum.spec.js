import { Blockchain } from 'src';

describe('ethereum', () => {
  
  it('provides basic structured data', () => {
    let blockchain = Blockchain.findByName('ethereum');
    expect(blockchain.name).toEqual('ethereum');
    expect(blockchain.id).toEqual('0x1');
    expect(blockchain.networkId).toEqual('1');
    expect(blockchain.label).toEqual('Ethereum');
    expect(blockchain.fullName).toEqual('Ethereum Mainnet');
    expect(blockchain.logo).toEqual('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiB0ZXh0LXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjgzLjUgMjgzLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4My41IDI4My41IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGU+LnN0MXtmaWxsOiM4YzhjOGN9PC9zdHlsZT48Zz48Zz48cGF0aCBzdHlsZT0iZmlsbDojMzQzNDM0IiBkPSJtMTQxLjcgNTUtMS4xIDMuOXYxMTQuOGwxLjEgMS4xIDUzLjMtMzEuNXoiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJtMTQxLjcgNTUtNTMuMiA4OC4zIDUzLjIgMzEuNXYtNTUuN3oiLz48cGF0aCBzdHlsZT0iZmlsbDojM2MzYzNiIiBkPSJtMTQxLjcgMTg0LjktLjYuOHY0MC45bC42IDEuOSA1My4zLTc1LjF6Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTE0MS43IDIyOC41di00My42bC01My4yLTMxLjV6Ii8+PHBhdGggc3R5bGU9ImZpbGw6IzE0MTQxNCIgZD0ibTE0MS43IDE3NC44IDUzLjMtMzEuNS01My4zLTI0LjJ6Ii8+PHBhdGggc3R5bGU9ImZpbGw6IzM5MzkzOSIgZD0ibTg4LjUgMTQzLjMgNTMuMiAzMS41di01NS43eiIvPjwvZz48L2c+PC9zdmc+Cg==');
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
