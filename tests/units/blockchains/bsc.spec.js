import Blockchains from 'src';

describe('bsc', () => {
  
  it('provides basic structured data', () => {
    let blockchain = Blockchains.findByName('bsc');
    expect(blockchain.name).toEqual('bsc');
    expect(blockchain.id).toEqual('0x38');
    expect(blockchain.networkId).toEqual('56');
    expect(blockchain.namespace).toEqual('eip155');
    expect(blockchain.label).toEqual('BNB Smart Chain');
    expect(blockchain.fullName).toEqual('BNB Smart Chain Mainnet');
    expect(blockchain.logo).toEqual('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxOTIgMTkyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOTIgMTkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0YwQjkwQjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01OS43LDQ4LjZMOTYsMjcuN2wzNi4zLDIwLjlMMTE5LDU2LjNsLTIzLTEzbC0yMywxM0w1OS43LDQ4LjZ6IE0xMzIuMyw3NUwxMTksNjcuM0w5Niw4MC41TDczLDY3LjJMNTkuNyw3NQoJdjE1LjVsMjMsMTMuMnYyNi4zbDEzLjMsNy44bDEzLjMtNy44di0yNi4zbDIzLTEzLjJWNzV6IE0xMzIuMywxMTd2LTE1LjVsLTEzLjMsNy43djE1LjVDMTE5LDEyNC42LDEzMi4zLDExNywxMzIuMywxMTd6CgkgTTE0MS43LDEyMi4zbC0yMywxMy4yVjE1MWwzNi4zLTIwLjlWODguMkwxNDEuNyw5NlYxMjIuM3ogTTEyOC40LDYxLjhsMTMuMyw3Ljh2MTUuNWwxMy4zLTcuOFY2MS44TDE0MS43LDU0TDEyOC40LDYxLjgKCUwxMjguNCw2MS44eiBNODIuNywxNDEuMnYxNS41bDEzLjMsNy44bDEzLjMtNy44di0xNS41TDk2LDE0OC44TDgyLjcsMTQxLjJ6IE01OS43LDExN2wxMy4zLDcuOHYtMTUuNmwtMTMuMy03LjdWMTE3TDU5LjcsMTE3egoJIE04Mi43LDYxLjhMOTYsNjkuNmwxMy4zLTcuOEw5Niw1NC4xQzk2LDU0LDgyLjcsNjEuOCw4Mi43LDYxLjhMODIuNyw2MS44eiBNNTAuMyw2OS42bDEzLjMtNy44TDUwLjMsNTRMMzcsNjEuOHYxNS41bDEzLjMsNy44CglWNjkuNkw1MC4zLDY5LjZ6IE01MC4zLDk1LjlMMzcsODguMnY0MS45TDczLjMsMTUxdi0xNS41bC0yMy0xMy4yVjk1LjlMNTAuMyw5NS45eiIvPgo8L3N2Zz4K');
    expect(blockchain.logoBackgroundColor).toEqual('#000000');
    expect(blockchain.currency.logo).toEqual("https://app.uniswap.org/static/media/bnb-logo.797868eb94521320b78e3967134febbe.svg");
    expect(blockchain.currency.name).toEqual('BNB');
    expect(blockchain.currency.symbol).toEqual('BNB');
    expect(blockchain.currency.decimals).toEqual(18);
    expect(blockchain.currency.address).toEqual('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE');
    expect(blockchain.wrapped.logo).toEqual("https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png");
    expect(blockchain.wrapped.address).toEqual('0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c');
    expect(blockchain.stables.usd).toEqual(['0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', '0x55d398326f99059fF775485246999027B3197955']);
    expect(blockchain.explorer).toEqual('https://bscscan.com');
    expect(blockchain.endpoints).toEqual([
      'https://bsc-dataseed.binance.org',
      'https://bsc-dataseed1.ninicoin.io',
      'https://bsc-dataseed3.defibit.io'
    ]);
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
    expect(blockchain.zero).toEqual('0x0000000000000000000000000000000000000000');
    expect(blockchain.maxInt).toEqual('115792089237316195423570985008687907853269984665640564039457584007913129639935');
  });
});
