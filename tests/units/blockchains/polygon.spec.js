import { Blockchain } from 'src';

describe('polygon', () => {
  
  it('provides basic structured data', () => {
    let blockchain = Blockchain.findByName('polygon');
    expect(blockchain.name).toEqual('polygon');
    expect(blockchain.id).toEqual('0x89');
    expect(blockchain.networkId).toEqual('137');
    expect(blockchain.label).toEqual('Polygon');
    expect(blockchain.fullName).toEqual('Polygon Mainnet');
    expect(blockchain.logo).toEqual('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzOC40IDMzLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM4LjQgMzMuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM4MjQ3RTU7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yOSwxMC4yYy0wLjctMC40LTEuNi0wLjQtMi40LDBMMjEsMTMuNWwtMy44LDIuMWwtNS41LDMuM2MtMC43LDAuNC0xLjYsMC40LTIuNCwwTDUsMTYuMwoJCWMtMC43LTAuNC0xLjItMS4yLTEuMi0yLjF2LTVjMC0wLjgsMC40LTEuNiwxLjItMi4xbDQuMy0yLjVjMC43LTAuNCwxLjYtMC40LDIuNCwwTDE2LDcuMmMwLjcsMC40LDEuMiwxLjIsMS4yLDIuMXYzLjNsMy44LTIuMlY3CgkJYzAtMC44LTAuNC0xLjYtMS4yLTIuMWwtOC00LjdjLTAuNy0wLjQtMS42LTAuNC0yLjQsMEwxLjIsNUMwLjQsNS40LDAsNi4yLDAsN3Y5LjRjMCwwLjgsMC40LDEuNiwxLjIsMi4xbDguMSw0LjcKCQljMC43LDAuNCwxLjYsMC40LDIuNCwwbDUuNS0zLjJsMy44LTIuMmw1LjUtMy4yYzAuNy0wLjQsMS42LTAuNCwyLjQsMGw0LjMsMi41YzAuNywwLjQsMS4yLDEuMiwxLjIsMi4xdjVjMCwwLjgtMC40LDEuNi0xLjIsMi4xCgkJTDI5LDI4LjhjLTAuNywwLjQtMS42LDAuNC0yLjQsMGwtNC4zLTIuNWMtMC43LTAuNC0xLjItMS4yLTEuMi0yLjFWMjFsLTMuOCwyLjJ2My4zYzAsMC44LDAuNCwxLjYsMS4yLDIuMWw4LjEsNC43CgkJYzAuNywwLjQsMS42LDAuNCwyLjQsMGw4LjEtNC43YzAuNy0wLjQsMS4yLTEuMiwxLjItMi4xVjE3YzAtMC44LTAuNC0xLjYtMS4yLTIuMUwyOSwxMC4yeiIvPgo8L2c+Cjwvc3ZnPgo=');
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
