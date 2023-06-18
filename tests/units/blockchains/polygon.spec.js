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
    expect(blockchain.logo).toEqual('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NS40IDQ1LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQgNDUuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM4MjQ3RTU7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNiwyMWMtMC43LDAuNC0xLjEsMS4xLTEuMSwydjguOGMwLDAuOSwwLjQsMS42LDEuMSwybDcuNSw0LjRjMC43LDAuNCwxLjUsMC40LDIuMiwwbDcuNS00LjQKCWMwLjctMC40LDEuMS0xLjEsMS4xLTJ2LTMuMWwtMy41LTJ2Mi45YzAsMC45LTAuNCwxLjYtMS4xLDJsLTQsMi4zYy0wLjcsMC40LTEuNSwwLjQtMi4yLDBsLTMuOS0yLjNjLTAuNy0wLjQtMS4xLTEuMS0xLjEtMlYyNQoJYzAtMC45LDAuNC0xLjYsMS4xLTJsNC0yLjNjMC42LTAuNCwxLjUtMC40LDIuMiwwbDUuMSwyLjlsMy41LDIuMWw1LjEsMi45YzAuNywwLjQsMS41LDAuNCwyLjIsMGw3LjYtNC40YzAuNy0wLjQsMS4xLTEuMSwxLjEtMgoJdi04LjdjMC0wLjctMC40LTEuNC0xLjEtMS44bC03LjYtNC40Yy0wLjctMC40LTEuNS0wLjQtMi4yLDBMMjIsMTEuN2MtMC43LDAuNC0xLjEsMS4xLTEuMSwydjMuMmwzLjUsMi4xdi0zLjFjMC0wLjksMC40LTEuNiwxLjEtMgoJbDQtMi40YzAuNy0wLjQsMS41LTAuNCwyLjIsMGw0LDIuM2MwLjYsMC40LDEuMSwxLjEsMS4xLDJ2NC42YzAsMC45LTAuNSwxLjYtMS4xLDJsLTQsMi40Yy0wLjYsMC40LTEuNSwwLjQtMi4yLDBsLTUuMS0zLjFsLTMuNS0yCglsLTUuMy0zLjFjLTAuNi0wLjQtMS41LTAuNC0yLjIsMEMxMy40LDE2LjYsNi4xLDIxLDYsMjF6Ii8+Cjwvc3ZnPgo=');
    expect(blockchain.currency.logo).toEqual('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NS40IDQ1LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQgNDUuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM4MjQ3RTU7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNiwyMWMtMC43LDAuNC0xLjEsMS4xLTEuMSwydjguOGMwLDAuOSwwLjQsMS42LDEuMSwybDcuNSw0LjRjMC43LDAuNCwxLjUsMC40LDIuMiwwbDcuNS00LjQKCWMwLjctMC40LDEuMS0xLjEsMS4xLTJ2LTMuMWwtMy41LTJ2Mi45YzAsMC45LTAuNCwxLjYtMS4xLDJsLTQsMi4zYy0wLjcsMC40LTEuNSwwLjQtMi4yLDBsLTMuOS0yLjNjLTAuNy0wLjQtMS4xLTEuMS0xLjEtMlYyNQoJYzAtMC45LDAuNC0xLjYsMS4xLTJsNC0yLjNjMC42LTAuNCwxLjUtMC40LDIuMiwwbDUuMSwyLjlsMy41LDIuMWw1LjEsMi45YzAuNywwLjQsMS41LDAuNCwyLjIsMGw3LjYtNC40YzAuNy0wLjQsMS4xLTEuMSwxLjEtMgoJdi04LjdjMC0wLjctMC40LTEuNC0xLjEtMS44bC03LjYtNC40Yy0wLjctMC40LTEuNS0wLjQtMi4yLDBMMjIsMTEuN2MtMC43LDAuNC0xLjEsMS4xLTEuMSwydjMuMmwzLjUsMi4xdi0zLjFjMC0wLjksMC40LTEuNiwxLjEtMgoJbDQtMi40YzAuNy0wLjQsMS41LTAuNCwyLjIsMGw0LDIuM2MwLjYsMC40LDEuMSwxLjEsMS4xLDJ2NC42YzAsMC45LTAuNSwxLjYtMS4xLDJsLTQsMi40Yy0wLjYsMC40LTEuNSwwLjQtMi4yLDBsLTUuMS0zLjFsLTMuNS0yCglsLTUuMy0zLjFjLTAuNi0wLjQtMS41LTAuNC0yLjIsMEMxMy40LDE2LjYsNi4xLDIxLDYsMjF6Ii8+Cjwvc3ZnPgo=');
    expect(blockchain.currency.name).toEqual('Polygon');
    expect(blockchain.currency.symbol).toEqual('MATIC');
    expect(blockchain.currency.decimals).toEqual(18);
    expect(blockchain.currency.address).toEqual('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE');
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
