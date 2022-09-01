import { Blockchain } from 'src';

describe('bsc', () => {
  
  it('provides basic structured data', () => {
    let blockchain = Blockchain.findByName('bsc');
    expect(blockchain.name).toEqual('bsc');
    expect(blockchain.id).toEqual('0x38');
    expect(blockchain.networkId).toEqual('56');
    expect(blockchain.label).toEqual('BNB Smart Chain');
    expect(blockchain.fullName).toEqual('BNB Smart Chain Mainnet');
    expect(blockchain.logo).toEqual('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgMTkyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOTIgMTkyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNjIuOCA1Mi42IDk2IDMzLjVsMzMuMiAxOS4xLTEyLjIgNy0yMS0xMS45LTIxIDEyLTEyLjItNy4xem02Ni40IDI0LjItMTIuMi03LTIxIDEyLTIxLTEyLjEtMTIuMiA3LjFWOTFsMjEgMTIuMXYyNC4xbDEyLjIgNy4xIDEyLjItNy4xdi0yNC4xbDIxLTEyLjFWNzYuOHptMCAzOC40VjEwMWwtMTIuMiA3djE0LjJsMTIuMi03em04LjYgNC44LTIxIDEyLjF2MTQuMmwzMy4yLTE5LjFWODguOUwxMzcuOCA5NnYyNHptLTEyLjItNTUuMyAxMi4yIDcuMVY4NmwxMi4yLTcuMVY2NC43bC0xMi4yLTcuMS0xMi4yIDcuMXptLTQxLjggNzIuNnYxNC4ybDEyLjIgNy4xIDEyLjItNy4xdi0xNC4ybC0xMi4yIDctMTIuMi03em0tMjEtMjIuMSAxMi4yIDcuMVYxMDhsLTEyLjItN3YxNC4yem0yMS01MC41TDk2IDcxLjhsMTIuMi03LjEtMTIuMi03YzAtLjEtMTIuMiA3LTEyLjIgN3ptLTI5LjYgNy4xIDEyLjItNy4xLTEyLjItNy4xTDQyIDY0Ljd2MTQuMkw1NC4yIDg2VjcxLjh6bTAgMjQuMS0xMi4yLTd2MzguM2wzMy4yIDE5LjF2LTE0LjJsLTIxLTEyLjFWOTUuOXoiIHN0eWxlPSJmaWxsOiNmMGI5MGIiLz48L3N2Zz4=');
    expect(blockchain.currency.name).toEqual('BNB');
    expect(blockchain.currency.symbol).toEqual('BNB');
    expect(blockchain.currency.decimals).toEqual(18);
    expect(blockchain.explorer).toEqual('https://bscscan.com');
    expect(blockchain.rpc).toEqual('https://bsc-dataseed1.binance.org');
    expect(blockchain.explorerUrlFor({
      transaction: { id: '0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f' }
    })).toEqual('https://bscscan.com/tx/0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f')
    expect(blockchain.explorerUrlFor({
      transaction: '0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f'
    })).toEqual('https://bscscan.com/tx/0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f')
    expect(blockchain.explorerUrlFor({
      token: '0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb'
    })).toEqual('https://bscscan.com/token/0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb')
    expect(blockchain.explorerUrlFor({
      address: '0x08B277154218CCF3380CAE48d630DA13462E3950'
    })).toEqual('https://bscscan.com/address/0x08B277154218CCF3380CAE48d630DA13462E3950')
  });
});
