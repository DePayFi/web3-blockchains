import { Blockchain } from 'src';

describe('polygon', () => {
  
  it('provides basic structured data', () => {
    let blockchain = Blockchain.findByName('polygon');
    expect(blockchain.name).toEqual('polygon');
    expect(blockchain.id).toEqual('0x89');
    expect(blockchain.networkId).toEqual('137');
    expect(blockchain.label).toEqual('Polygon');
    expect(blockchain.fullName).toEqual('Polygon Mainnet');
    expect(blockchain.logo).toEqual('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NS40IDQ1LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQgNDUuNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTMwLjIgMTcuN2MtLjYtLjMtMS4zLS4zLTEuOCAwbC00LjMgMi41LTIuOSAxLjYtNC4yIDIuNWMtLjYuMy0xLjMuMy0xLjggMGwtMy4zLTJjLS41LS4zLS45LS45LS45LTEuNnYtMy44YzAtLjcuNC0xLjMuOS0xLjZsMy4zLTEuOWMuNi0uMyAxLjItLjMgMS44IDBsMy4zIDJjLjYuMy45LjkuOSAxLjZ2Mi41bDIuOS0xLjd2LTIuNmMwLS43LS4zLTEuMy0uOS0xLjZMMTcuMSAxMGMtLjYtLjMtMS4yLS4zLTEuOCAwTDkgMTMuN2MtLjYuMy0uOS45LS45IDEuNXY3LjFjMCAuNy4zIDEuMy45IDEuNmw2LjIgMy42Yy42LjMgMS4yLjMgMS44IDBsNC4yLTIuNCAyLjktMS43IDQuMi0yLjRjLjYtLjMgMS4zLS4zIDEuOCAwbDMuMyAxLjljLjYuMy45LjkuOSAxLjZ2My44YzAgLjctLjMgMS4zLS45IDEuNmwtMy4yIDEuOWMtLjYuMy0xLjIuMy0xLjggMGwtMy4zLTEuOWMtLjYtLjMtLjktLjktLjktMS42di0yLjRsLTIuOSAxLjd2Mi41YzAgLjcuMyAxLjMuOSAxLjZsNi4xIDMuNmMuNi4zIDEuMi4zIDEuOCAwbDYuMS0zLjZjLjYtLjMuOS0uOS45LTEuNnYtNy4yYzAtLjctLjMtMS4zLS45LTEuNmwtNi0zLjZ6IiBzdHlsZT0iZmlsbDojODI0N2U1Ii8+PC9zdmc+Cg==');
    expect(blockchain.currency.name).toEqual('Polygon');
    expect(blockchain.currency.symbol).toEqual('MATIC');
    expect(blockchain.currency.decimals).toEqual(18);
    expect(blockchain.explorer).toEqual('https://polygonscan.com');
    expect(blockchain.rpc).toEqual('https://rpc-mainnet.matic.network');
    expect(blockchain.explorerUrlFor({
      transaction: { id: '0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f' }
    })).toEqual('https://polygonscan.com/tx/0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f')
    expect(blockchain.explorerUrlFor({
      token: '0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb'
    })).toEqual('https://polygonscan.com/token/0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb')
  });
});
