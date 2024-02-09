import Blockchains from 'src';

describe('polygon', () => {
  
  it('provides basic structured data', () => {
    let blockchain = Blockchains.findByName('polygon');
    expect(blockchain.name).toEqual('polygon');
    expect(blockchain.id).toEqual('0x89');
    expect(blockchain.networkId).toEqual('137');
    expect(blockchain.namespace).toEqual('eip155');
    expect(blockchain.label).toEqual('Polygon (POS)');
    expect(blockchain.fullName).toEqual('Polygon (POS) Mainnet');
    expect(blockchain.logo != undefined).toEqual(true);
    expect(blockchain.logoBackgroundColor).toEqual('#824ee2');
    expect(blockchain.currency.logo).toEqual("https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/info/logo.png");
    expect(blockchain.currency.name).toEqual('Polygon');
    expect(blockchain.currency.symbol).toEqual('MATIC');
    expect(blockchain.currency.decimals).toEqual(18);
    expect(blockchain.currency.address).toEqual('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE');
    expect(blockchain.wrapped.logo).toEqual("https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png");
    expect(blockchain.wrapped.address).toEqual('0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270');
    expect(blockchain.stables.usd).toEqual(['0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359', '0xc2132D05D31c914a87C6611C10748AEb04B58e8F']);
    expect(blockchain.explorer).toEqual('https://polygonscan.com');
    expect(blockchain.endpoints).toEqual([
      'https://polygon-rpc.com',
      'https://polygon.meowrpc.com',
      'https://polygon.llamarpc.com'
    ]);
    expect(blockchain.explorerUrlFor({
      transaction: { id: '0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f' }
    })).toEqual('https://polygonscan.com/tx/0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f')
    expect(blockchain.explorerUrlFor({
      token: '0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb'
    })).toEqual('https://polygonscan.com/token/0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb')
    expect(blockchain.explorerUrlFor({
      address: '0x08B277154218CCF3380CAE48d630DA13462E3950'
    })).toEqual('https://polygonscan.com/address/0x08B277154218CCF3380CAE48d630DA13462E3950')
    expect(blockchain.zero).toEqual('0x0000000000000000000000000000000000000000');
    expect(blockchain.maxInt).toEqual('115792089237316195423570985008687907853269984665640564039457584007913129639935');
  });
});
