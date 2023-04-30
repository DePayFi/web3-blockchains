import Blockchains from 'src';

describe('velas', () => {
  
  it('provides basic structured data', () => {
    let blockchain = Blockchains.findByName('velas');
    expect(blockchain.name).toEqual('velas');
    expect(blockchain.id).toEqual('0x6a');
    expect(blockchain.networkId).toEqual('106');
    expect(blockchain.namespace).toEqual('eip155');
    expect(blockchain.label).toEqual('VELAS');
    expect(blockchain.fullName).toEqual('Velas EVM Mainnet');
    expect(blockchain.logo).toEqual('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiCgkgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIGltYWdlLXJlbmRlcmluZz0ib3B0aW1pemVRdWFsaXR5IgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUuNCA0NS40IgoJIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQgNDUuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgo8L3N0eWxlPgo8cGF0aCBmaWxsPSIjMDAzN0MxIiBkPSJNMjguOCwyMi44bC02LjEsMTAuNmwtNi4xLTEwLjdMMjguOCwyMi44TDI4LjgsMjIuOHogTTM0LjksMTkuMkgxMC41bDEyLjIsMjEuNEwzNC45LDE5LjJ6IE02LjUsMTIuMWwyLDMuNgoJaDI4LjNsMi4xLTMuNkg2LjV6Ii8+Cjwvc3ZnPgo=');
    expect(blockchain.currency.name).toEqual('Velas');
    expect(blockchain.currency.symbol).toEqual('VLX');
    expect(blockchain.currency.decimals).toEqual(18);
    expect(blockchain.currency.address).toEqual('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE');
    expect(blockchain.wrapped.address).toEqual('0xc579D1f3CF86749E05CD06f7ADe17856c2CE3126');
    expect(blockchain.stables.usd).toEqual(['0xc111c29A988AE0C0087D97b33C6E6766808A3BD3', '0x01445C31581c354b7338AC35693AB2001B50b9aE']);
    expect(blockchain.explorer).toEqual('https://evmexplorer.velas.com');
    expect(blockchain.endpoints).toEqual([
      'https://mainnet.velas.com/rpc',
      'https://evmexplorer.velas.com/rpc',
      'https://explorer.velas.com/rpc'
    ]);
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
    expect(blockchain.zero).toEqual('0x0000000000000000000000000000000000000000');
    expect(blockchain.maxInt).toEqual('115792089237316195423570985008687907853269984665640564039457584007913129639935');
  });
});
