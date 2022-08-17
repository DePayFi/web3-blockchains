import { Blockchain } from 'src';

describe('bsc', () => {
  
  it('provides basic structured data', () => {
    let blockchain = Blockchain.findByName('bsc');
    expect(blockchain.name).toEqual('bsc');
    expect(blockchain.id).toEqual('0x38');
    expect(blockchain.networkId).toEqual('56');
    expect(blockchain.label).toEqual('BNB Smart Chain');
    expect(blockchain.fullName).toEqual('BNB Smart Chain Mainnet');
    expect(blockchain.logo).toEqual('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgMTkyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOTIgMTkyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJtNTcuOSA0Ni4yIDM4LjEtMjIgMzguMSAyMS45LTE0IDguMUw5NiA0MC41IDcxLjkgNTQuM2wtMTQtOC4xek0xMzQuMSA3NGwtMTQtOC4xTDk2IDc5LjcgNzEuOSA2NS44bC0xNCA4LjF2MTYuM0w4MiAxMDQuMXYyNy43bDE0IDguMSAxNC04LjF2LTI3LjdsMjQuMS0xMy45Vjc0em0wIDQ0di0xNi4zbC0xNCA4LjF2MTYuM2wxNC04LjF6bTkuOSA1LjYtMjQuMSAxMy45djE2LjNsMzguMS0yMS45Vjg3LjhsLTE0IDguMXYyNy43em0tMTQtNjMuNSAxNCA4LjF2MTYuM2wxNC04LjFWNjAuMUwxNDQgNTJsLTE0IDguMXptLTQ4IDgzLjN2MTYuM2wxNCA4LjEgMTQtOC4xdi0xNi4zbC0xNCA4LjEtMTQtOC4xek01Ny45IDExOGwxNCA4LjF2LTE2LjNsLTE0LTguMVYxMTh6TTgyIDYwLjFsMTQgOC4xIDE0LTguMUw5NiA1MmMwLS4xLTE0IDguMS0xNCA4LjF6bS0zNCA4LjEgMTQtOC4xTDQ4IDUybC0xNCA4LjF2MTYuM2wxNCA4LjFWNjguMnptMCAyNy43LTE0LTguMXY0NGwzOC4xIDIxLjl2LTE2LjNMNDggMTIzLjVWOTUuOXoiIHN0eWxlPSJmaWxsOiNmMGI5MGIiLz48L3N2Zz4K');
    expect(blockchain.currency.name).toEqual('BNB');
    expect(blockchain.currency.symbol).toEqual('BNB');
    expect(blockchain.currency.decimals).toEqual(18);
    expect(blockchain.explorer).toEqual('https://bscscan.com');
    expect(blockchain.rpc).toEqual('https://bsc-dataseed1.binance.org');
    expect(blockchain.explorerUrlFor({
      transaction: { id: '0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f' }
    })).toEqual('https://bscscan.com/tx/0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f')
    expect(blockchain.explorerUrlFor({
      token: '0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb'
    })).toEqual('https://bscscan.com/token/0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb')
  });
});
