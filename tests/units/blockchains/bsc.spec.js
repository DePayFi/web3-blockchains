import { Blockchain } from 'src';

describe('bsc', () => {
  
  it('provides basic structured data', () => {
    let blockchain = Blockchain.findByName('bsc');
    expect(blockchain.name).toEqual('bsc');
    expect(blockchain.id).toEqual('0x38');
    expect(blockchain.networkId).toEqual('56');
    expect(blockchain.label).toEqual('BNB Smart Chain');
    expect(blockchain.fullName).toEqual('BNB Smart Chain Mainnet');
    expect(blockchain.logo).toEqual('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxOTIgMTkyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOTIgMTkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0YwQjkwQjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00OS43LDM1LjRMOTYsOC43bDQ2LjMsMjYuN2wtMTcsOS45TDk2LDI4LjVMNjYuNyw0NS4zTDQ5LjcsMzUuNHogTTE0Mi4zLDY5LjJsLTE3LTkuOUw5Niw3Ni4yTDY2LjcsNTkuMwoJbC0xNyw5Ljl2MTkuOEw3OSwxMDUuOHYzMy43bDE3LDkuOWwxNy05Ljl2LTMzLjdsMjkuMy0xNi45TDE0Mi4zLDY5LjJ6IE0xNDIuMywxMjIuN3YtMTkuOGwtMTcsOS45djE5LjhMMTQyLjMsMTIyLjd6IE0xNTQuNCwxMjkuNgoJbC0yOS4zLDE2Ljl2MTkuOGw0Ni4zLTI2LjdWODZsLTE3LDkuOUwxNTQuNCwxMjkuNnogTTEzNy40LDUyLjNsMTcsOS45djE5LjhsMTctOS45VjUyLjNsLTE3LTkuOUwxMzcuNCw1Mi4zeiBNNzksMTUzLjd2MTkuOAoJbDE3LDkuOWwxNy05Ljl2LTE5LjhsLTE3LDkuOUw3OSwxNTMuN3ogTTQ5LjcsMTIyLjdsMTcsOS45di0xOS44bC0xNy05LjlMNDkuNywxMjIuN3ogTTc5LDUyLjNsMTcsOS45bDE3LTkuOWwtMTctOS45TDc5LDUyLjN6CgkgTTM3LjYsNjIuMmwxNy05LjlsLTE3LTkuOWwtMTcsOS45djE5LjhsMTcsOS45TDM3LjYsNjIuMnogTTM3LjYsOTUuOWwtMTctOS45djUzLjVsNDYuMywyNi43di0xOS44bC0yOS4zLTE2LjlWOTUuOXoiLz4KPC9zdmc+Cg==');
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
