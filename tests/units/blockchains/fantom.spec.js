import Blockchains from 'src';

describe('fantom', () => {
  
  it('provides basic structured data', () => {
    let blockchain = Blockchains.findByName('fantom');
    expect(blockchain.name).toEqual('fantom');
    expect(blockchain.id).toEqual('0xfa');
    expect(blockchain.networkId).toEqual('250');
    expect(blockchain.namespace).toEqual('eip155');
    expect(blockchain.label).toEqual('Fantom');
    expect(blockchain.fullName).toEqual('Fantom Opera');
    expect(blockchain.logo != undefined).toEqual(true);
    expect(blockchain.logoBackgroundColor).toEqual('#226efb');
    expect(blockchain.currency.logo).toEqual("https://assets.trustwalletapp.com/blockchains/fantom/info/logo.png");
    expect(blockchain.currency.name).toEqual('Fantom');
    expect(blockchain.currency.symbol).toEqual('FTM');
    expect(blockchain.currency.decimals).toEqual(18);
    expect(blockchain.currency.address).toEqual('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE');
    expect(blockchain.wrapped.logo).toEqual("https://assets.trustwalletapp.com/blockchains/fantom/assets/0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83/logo.png");
    expect(blockchain.wrapped.address).toEqual('0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83');
    expect(blockchain.stables.usd).toEqual(['0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf', '0x1B6382DBDEa11d97f24495C9A90b7c88469134a4']);
    expect(blockchain.explorer).toEqual('https://ftmscan.com');
    expect(blockchain.explorerUrlFor({
      transaction: { id: '0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f' }
    })).toEqual('https://ftmscan.com/tx/0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f')
    expect(blockchain.explorerUrlFor({
      transaction: '0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f'
    })).toEqual('https://ftmscan.com/tx/0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f')
    expect(blockchain.explorerUrlFor({
      token: '0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb'
    })).toEqual('https://ftmscan.com/token/0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb')
    expect(blockchain.explorerUrlFor({
      address: '0x08B277154218CCF3380CAE48d630DA13462E3950'
    })).toEqual('https://ftmscan.com/address/0x08B277154218CCF3380CAE48d630DA13462E3950')
    expect(blockchain.zero).toEqual('0x0000000000000000000000000000000000000000');
    expect(blockchain.maxInt).toEqual('115792089237316195423570985008687907853269984665640564039457584007913129639935');
  });
});
