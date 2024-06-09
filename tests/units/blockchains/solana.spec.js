import Blockchains from 'src';

describe('solana', () => {
  
  it('provides basic structured data', () => {
    let blockchain = Blockchains.findByName('solana');
    expect(blockchain.name).toEqual('solana');
    expect(blockchain.networkId).toEqual('solana');
    expect(blockchain.namespace).toEqual('solana');
    expect(blockchain.label).toEqual('Solana');
    expect(blockchain.fullName).toEqual('Solana Mainnet Beta');
    expect(blockchain.logo != undefined).toEqual(true);
    expect(blockchain.logoBackgroundColor).toEqual('#000000');
    expect(blockchain.currency.logo).toEqual('https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png');
    expect(blockchain.currency.name).toEqual('Solana');
    expect(blockchain.currency.symbol).toEqual('SOL');
    expect(blockchain.currency.decimals).toEqual(9);
    expect(blockchain.currency.address).toEqual('11111111111111111111111111111111');
    expect(blockchain.wrapped.logo).toEqual('https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png');
    expect(blockchain.wrapped.address).toEqual('So11111111111111111111111111111111111111112');
    expect(blockchain.stables.usd).toEqual(['EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB']);
    expect(blockchain.explorer).toEqual('https://solscan.io');
    expect(blockchain.endpoints).toEqual([
      'https://solana.a.exodus.io',
      'https://mainnet-beta.solflare.network',
      'https://swr.xnftdata.com/rpc-proxy'
    ]);
    expect(blockchain.sockets).toEqual([
      'wss://solana.drpc.org',
      'wss://mainnet-beta.solflare.network',
      'wss://solana.a.exodus.io'
    ]);
    expect(blockchain.explorerUrlFor({
      transaction: { id: '3Hk7wbH6aEoiW5NA9d4HFBNDnPqFB8aeAnNpJhHg9VJ4g9aqQZfcX5gj2orN4wksY8kRkToD2viZiiRrXjnt78BC' }
    })).toEqual('https://solscan.io/tx/3Hk7wbH6aEoiW5NA9d4HFBNDnPqFB8aeAnNpJhHg9VJ4g9aqQZfcX5gj2orN4wksY8kRkToD2viZiiRrXjnt78BC')
    expect(blockchain.explorerUrlFor({
      transaction: '3Hk7wbH6aEoiW5NA9d4HFBNDnPqFB8aeAnNpJhHg9VJ4g9aqQZfcX5gj2orN4wksY8kRkToD2viZiiRrXjnt78BC'
    })).toEqual('https://solscan.io/tx/3Hk7wbH6aEoiW5NA9d4HFBNDnPqFB8aeAnNpJhHg9VJ4g9aqQZfcX5gj2orN4wksY8kRkToD2viZiiRrXjnt78BC')
    expect(blockchain.explorerUrlFor({
      token: 'So11111111111111111111111111111111111111112'
    })).toEqual('https://solscan.io/token/So11111111111111111111111111111111111111112')
    expect(blockchain.explorerUrlFor({
      address: '0x08B277154218CCF3380CAE48d630DA13462E3950'
    })).toEqual('https://solscan.io/address/0x08B277154218CCF3380CAE48d630DA13462E3950')
    expect(blockchain.zero).toEqual('0');
    expect(blockchain.maxInt).toEqual('340282366920938463463374607431768211455');
  });
});
