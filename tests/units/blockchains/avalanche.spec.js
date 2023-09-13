import Blockchains from 'src';

describe('avalanche', () => {
  
  it('provides basic structured data', () => {
    let blockchain = Blockchains.findByName('avalanche');
    expect(blockchain.name).toEqual('avalanche');
    expect(blockchain.id).toEqual('0xa86a');
    expect(blockchain.networkId).toEqual('43114');
    expect(blockchain.namespace).toEqual('eip155');
    expect(blockchain.label).toEqual('Avalanche');
    expect(blockchain.fullName).toEqual('Avalanche C-Chain');
    expect(blockchain.logo != undefined).toEqual(true);
    expect(blockchain.logoBackgroundColor).toEqual('#E84142');
    expect(blockchain.currency.logo).toEqual("https://traderjoexyz.com/static/media/avalanche.7c81486190237e87e238c029fd746008.svg");
    expect(blockchain.currency.name).toEqual('Avalanche');
    expect(blockchain.currency.symbol).toEqual('AVAX');
    expect(blockchain.currency.decimals).toEqual(18);
    expect(blockchain.currency.address).toEqual('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE');
    expect(blockchain.wrapped.address).toEqual('0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7');
    expect(blockchain.wrapped.logo).toEqual("https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7/logo.png");
    expect(blockchain.stables.usd).toEqual(['0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7', '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E']);
    expect(blockchain.explorer).toEqual('https://snowtrace.io');
    expect(blockchain.endpoints).toEqual([
      'https://avalanche.public-rpc.com',
      'https://avalanche.blockpi.network/v1/rpc/public',
      'https://avax.meowrpc.com'
    ]);
    expect(blockchain.explorerUrlFor({
      transaction: { id: '0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f' }
    })).toEqual('https://snowtrace.io/tx/0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f')
    expect(blockchain.explorerUrlFor({
      transaction: '0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f'
    })).toEqual('https://snowtrace.io/tx/0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f')
    expect(blockchain.explorerUrlFor({
      token: '0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb'
    })).toEqual('https://snowtrace.io/token/0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb')
    expect(blockchain.explorerUrlFor({
      address: '0x08B277154218CCF3380CAE48d630DA13462E3950'
    })).toEqual('https://snowtrace.io/address/0x08B277154218CCF3380CAE48d630DA13462E3950')
    expect(blockchain.zero).toEqual('0x0000000000000000000000000000000000000000');
    expect(blockchain.maxInt).toEqual('115792089237316195423570985008687907853269984665640564039457584007913129639935');
  });
});
