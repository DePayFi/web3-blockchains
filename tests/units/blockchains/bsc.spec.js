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
    expect(blockchain.logo).toEqual('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxOTIgMTkyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOTIgMTkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxwYXRoIGZpbGw9IiNGMEI5MEIiIGQ9Ik01NCw0MS4xbDQyLTI0LjJsNDIsMjQuMmwtMTUuNCw4LjlMOTYsMzQuOUw2OS40LDUwTDU0LDQxLjF6IE0xMzgsNzEuN2wtMTUuNC04LjlMOTYsNzhMNjkuNCw2Mi43bC0xNS40LDl2MTgKCUw4MC42LDEwNXYzMC41bDE1LjQsOWwxNS40LTlWMTA1TDEzOCw4OS43VjcxLjd6IE0xMzgsMTIwLjN2LTE4bC0xNS40LDguOXYxOEMxMjIuNiwxMjkuMSwxMzgsMTIwLjMsMTM4LDEyMC4zeiBNMTQ4LjksMTI2LjQKCWwtMjYuNiwxNS4zdjE4bDQyLTI0LjJWODdsLTE1LjQsOUMxNDguOSw5NiwxNDguOSwxMjYuNCwxNDguOSwxMjYuNHogTTEzMy41LDU2LjRsMTUuNCw5djE4bDE1LjQtOXYtMThsLTE1LjQtOUwxMzMuNSw1Ni40CglMMTMzLjUsNTYuNHogTTgwLjYsMTQ4LjN2MThsMTUuNCw5bDE1LjQtOXYtMThMOTYsMTU3LjFMODAuNiwxNDguM3ogTTU0LDEyMC4zbDE1LjQsOXYtMTguMUw1NCwxMDIuM0w1NCwxMjAuM0w1NCwxMjAuM3oKCSBNODAuNiw1Ni40bDE1LjQsOWwxNS40LTlMOTYsNDcuNUM5Niw0Ny40LDgwLjYsNTYuNCw4MC42LDU2LjRMODAuNiw1Ni40eiBNNDMuMSw2NS40bDE1LjQtOWwtMTUuNC05bC0xNS40LDl2MThsMTUuNCw5TDQzLjEsNjUuNAoJTDQzLjEsNjUuNHogTTQzLjEsOTUuOUwyNy43LDg3djQ4LjVsNDIsMjQuMnYtMThsLTI2LjYtMTUuM1Y5NS45TDQzLjEsOTUuOXoiLz4KPC9zdmc+Cg==');
    expect(blockchain.currency.name).toEqual('BNB');
    expect(blockchain.currency.symbol).toEqual('BNB');
    expect(blockchain.currency.decimals).toEqual(18);
    expect(blockchain.currency.address).toEqual('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE');
    expect(blockchain.wrapped.address).toEqual('0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c');
    expect(blockchain.stables.usd).toEqual(['0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', '0x55d398326f99059fF775485246999027B3197955', '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56']);
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
