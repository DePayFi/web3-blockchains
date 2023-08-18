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
    expect(blockchain.logo).toEqual('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NS40IDQ1LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQgNDUuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNy4zLDIxLjFjLTAuNiwwLjQtMSwxLTEsMS44djguMWMwLDAuOCwwLjQsMS41LDEsMS44bDYuOSw0YzAuNiwwLjQsMS40LDAuNCwyLDBsNi45LTRjMC42LTAuNCwxLTEsMS0xLjh2LTIuOQoJbC0zLjItMS44djIuN2MwLDAuOC0wLjQsMS41LTEsMS44TDE2LjMsMzNjLTAuNiwwLjQtMS40LDAuNC0yLDBsLTMuNi0yLjFjLTAuNi0wLjQtMS0xLTEtMS44di00LjJjMC0wLjgsMC40LTEuNSwxLTEuOGwzLjctMi4xCgljMC42LTAuNCwxLjQtMC40LDIsMGw0LjcsMi43bDMuMiwxLjlsNC43LDIuN2MwLjYsMC40LDEuNCwwLjQsMiwwbDctNGMwLjYtMC40LDEtMSwxLTEuOHYtOGMwLTAuNi0wLjQtMS4zLTEtMS43bC03LTQKCWMtMC42LTAuNC0xLjQtMC40LTIsMGwtNi45LDRjLTAuNiwwLjQtMSwxLTEsMS44djIuOWwzLjIsMS45di0yLjljMC0wLjgsMC40LTEuNSwxLTEuOGwzLjctMi4yYzAuNi0wLjQsMS40LTAuNCwyLDBsMy43LDIuMQoJYzAuNiwwLjQsMSwxLDEsMS44djQuMmMwLDAuOC0wLjUsMS41LTEsMS44TDMxLDI0LjZjLTAuNiwwLjQtMS40LDAuNC0yLDBsLTQuNy0yLjlMMjEsMTkuOWwtNC45LTIuOWMtMC42LTAuNC0xLjQtMC40LTIsMAoJQzE0LjEsMTcuMSw3LjQsMjEuMSw3LjMsMjEuMXoiLz4KPC9zdmc+Cg==');
    expect(blockchain.logoBackgroundColor).toEqual('#824ee2');
    expect(blockchain.currency.logo).toEqual("https://app.uniswap.org/static/media/matic-token-icon.da7b877d41122a55de4a43760bb4c8e5.svg");
    expect(blockchain.currency.name).toEqual('Polygon');
    expect(blockchain.currency.symbol).toEqual('MATIC');
    expect(blockchain.currency.decimals).toEqual(18);
    expect(blockchain.currency.address).toEqual('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE');
    expect(blockchain.wrapped.logo).toEqual("https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png");
    expect(blockchain.wrapped.address).toEqual('0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270');
    expect(blockchain.stables.usd).toEqual(['0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', '0xc2132D05D31c914a87C6611C10748AEb04B58e8F', '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063']);
    expect(blockchain.explorer).toEqual('https://polygonscan.com');
    expect(blockchain.endpoints).toEqual([
      'https://polygon-rpc.com',
      'https://poly-rpc.gateway.pokt.network',
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
