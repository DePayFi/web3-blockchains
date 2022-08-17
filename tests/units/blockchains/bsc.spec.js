import { Blockchain } from 'src';

describe('bsc', () => {
  
  it('provides basic structured data', () => {
    let blockchain = Blockchain.findByName('bsc');
    expect(blockchain.name).toEqual('bsc');
    expect(blockchain.id).toEqual('0x38');
    expect(blockchain.networkId).toEqual('56');
    expect(blockchain.label).toEqual('BNB Smart Chain');
    expect(blockchain.fullName).toEqual('BNB Smart Chain Mainnet');
    expect(blockchain.logo).toEqual('<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 192 192\" style=\"enable-background:new 0 0 192 192\" xml:space=\"preserve\"><path d=\"m57.9 46.2 38.1-22 38.1 21.9-14 8.1L96 40.5 71.9 54.3l-14-8.1zM134.1 74l-14-8.1L96 79.7 71.9 65.8l-14 8.1v16.3L82 104.1v27.7l14 8.1 14-8.1v-27.7l24.1-13.9V74zm0 44v-16.3l-14 8.1v16.3l14-8.1zm9.9 5.6-24.1 13.9v16.3l38.1-21.9V87.8l-14 8.1v27.7zm-14-63.5 14 8.1v16.3l14-8.1V60.1L144 52l-14 8.1zm-48 83.3v16.3l14 8.1 14-8.1v-16.3l-14 8.1-14-8.1zM57.9 118l14 8.1v-16.3l-14-8.1V118zM82 60.1l14 8.1 14-8.1L96 52c0-.1-14 8.1-14 8.1zm-34 8.1 14-8.1L48 52l-14 8.1v16.3l14 8.1V68.2zm0 27.7-14-8.1v44l38.1 21.9v-16.3L48 123.5V95.9z\" style=\"fill:#f0b90b\"/></svg>');
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
