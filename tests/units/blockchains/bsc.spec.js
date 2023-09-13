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
    expect(blockchain.logo != undefined).toEqual(true);
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
