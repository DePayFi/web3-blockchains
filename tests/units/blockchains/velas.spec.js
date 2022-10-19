import { Blockchain } from 'src';

describe('velas', () => {
  
  it('provides basic structured data', () => {
    let blockchain = Blockchain.findByName('velas');
    expect(blockchain.name).toEqual('velas');
    expect(blockchain.id).toEqual('0x6A');
    expect(blockchain.networkId).toEqual('106');
    expect(blockchain.label).toEqual('VELAS');
    expect(blockchain.fullName).toEqual('Velas EVM Mainnet');
    expect(blockchain.logo).toEqual('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIKCSBpZD0iTGF5ZXJfMSIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjgzLjUgMjgzLjUiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjgzLjUgMjgzLjU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMDAzN0MxO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE3NC41LDEyNS43bC0zMi43LDU3LjJMMTA5LDEyNS4zaDY1LjVWMTI1Ljd6IE0yMDcuMiwxMDYuMmgtMTMxbDY1LjUsMTE1LjJMMjA3LjIsMTA2LjJ6IE01NC43LDY4LjEKCWwxMC44LDE5LjFoMTUyLjFsMTEuMi0xOS4xSDU0Ljd6Ii8+Cjwvc3ZnPgo=');
    expect(blockchain.currency.name).toEqual('Velas');
    expect(blockchain.currency.symbol).toEqual('VLX');
    expect(blockchain.currency.decimals).toEqual(18);
    expect(blockchain.explorer).toEqual('https://evmexplorer.velas.com');
    expect(blockchain.rpc).toEqual('https://evmexplorer.velas.com/rpc');
    expect(blockchain.explorerUrlFor({
      transaction: { id: '0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f' }
    })).toEqual('https://evmexplorer.velas.com/tx/0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f')
    expect(blockchain.explorerUrlFor({
      transaction: '0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f'
    })).toEqual('https://evmexplorer.velas.com/tx/0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f')
    expect(blockchain.explorerUrlFor({
      token: '0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb'
    })).toEqual('https://evmexplorer.velas.com/token/0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb')
    expect(blockchain.explorerUrlFor({
      address: '0x08B277154218CCF3380CAE48d630DA13462E3950'
    })).toEqual('https://evmexplorer.velas.com/address/0x08B277154218CCF3380CAE48d630DA13462E3950')
  });
});
