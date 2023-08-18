import Blockchains from 'src';

describe('fantom', () => {
  
  it('provides basic structured data', () => {
    let blockchain = Blockchains.findByName('fantom');
    expect(blockchain.name).toEqual('fantom');
    expect(blockchain.id).toEqual('0xFA');
    expect(blockchain.networkId).toEqual('250');
    expect(blockchain.namespace).toEqual('eip155');
    expect(blockchain.label).toEqual('Fantom');
    expect(blockchain.fullName).toEqual('Fantom Opera');
    expect(blockchain.logo).toEqual('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNjAuNyAxNjAuOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYwLjcgMTYwLjg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggaWQ9IlNoYXBlIiBjbGFzcz0ic3QwIiBkPSJNNzUuNCwyNS42YzIuNy0xLjQsNi44LTEuNCw5LjUsMGwyNy42LDE0LjZjMS42LDAuOSwyLjUsMi4xLDIuNywzLjVsMCwwVjExN2MwLDEuNC0wLjksMi45LTIuNywzLjgKCWwtMjcuNiwxNC42Yy0yLjcsMS40LTYuOCwxLjQtOS41LDBsLTI3LjYtMTQuNmMtMS44LTAuOS0yLjYtMi40LTIuNy0zLjhjMC0wLjEsMC0wLjMsMC0wLjRWNDQuMmMwLTAuMSwwLTAuMiwwLTAuM3YtMC4ybDAsMAoJYzAuMS0xLjMsMS0yLjYsMi42LTMuNUw3NS40LDI1LjZ6IE0xMTAuOSw4NC4zTDg0LjksOThjLTIuNywxLjQtNi44LDEuNC05LjUsMEw0OS41LDg0LjR2MzIuM2wyNS45LDEzLjZjMS41LDAuOCwzLjEsMS42LDQuNywxLjcKCWgwLjFjMS41LDAsMy0wLjgsNC42LTEuNWwyNi4yLTEzLjlMMTEwLjksODQuM0wxMTAuOSw4NC4zeiBNNDAuOCwxMTUuM2MwLDIuOCwwLjMsNC43LDEsNmMwLjUsMS4xLDEuMywxLjksMi44LDIuOWwwLjEsMC4xCgljMC4zLDAuMiwwLjcsMC40LDEuMSwwLjdsMC41LDAuM2wxLjYsMC45bC0yLjIsMy43bC0xLjctMS4xbC0wLjMtMC4yYy0wLjUtMC4zLTAuOS0wLjYtMS4zLTAuOGMtNC4yLTIuOC01LjctNS45LTUuNy0xMi4zdi0wLjIKCUw0MC44LDExNS4zTDQwLjgsMTE1LjN6IE03OC4xLDY0LjljLTAuMiwwLjEtMC40LDAuMS0wLjYsMC4yTDQ5LjksNzkuN2gtMC4xbDAsMGwwLDBoMC4xbDI3LjYsMTQuNmMwLjIsMC4xLDAuNCwwLjIsMC42LDAuMgoJQzc4LjEsOTQuNSw3OC4xLDY0LjksNzguMSw2NC45eiBNODIuNSw2NC45djI5LjhjMC4yLTAuMSwwLjQtMC4xLDAuNi0wLjJsMjcuNi0xNC42aDAuMWwwLDBsMCwwaC0wLjFMODMuMSw2NS4xCglDODIuOSw2NSw4Mi43LDY0LjksODIuNSw2NC45eiBNMTEwLjksNDguOGwtMjQuOCwxM2wyNC44LDEzQzExMC45LDc0LjgsMTEwLjksNDguOCwxMTAuOSw0OC44eiBNNDkuNSw0OC44djI2LjFsMjQuOC0xM0w0OS41LDQ4Ljh6CgkgTTgzLDI5LjVjLTEuNC0wLjgtNC0wLjgtNS41LDBMNDkuOSw0NC4xaC0wLjFsMCwwbDAsMGgwLjFsMjcuNiwxNC42YzEuNCwwLjgsNCwwLjgsNS41LDBsMjcuNi0xNC42aDAuMWwwLDBsMCwwaC0wLjFMODMsMjkuNXoKCSBNMTE1LDMwLjlsMS43LDEuMWwwLjMsMC4yYzAuNSwwLjMsMC45LDAuNiwxLjMsMC44YzQuMiwyLjgsNS43LDUuOSw1LjcsMTIuM3YwLjJoLTQuM2MwLTIuOC0wLjMtNC43LTEtNmMtMC41LTEuMS0xLjMtMS45LTIuOC0yLjkKCWwtMC4xLTAuMWMtMC4zLTAuMi0wLjctMC40LTEuMS0wLjdsLTAuNS0wLjNsLTEuNi0wLjlMMTE1LDMwLjl6Ii8+Cjwvc3ZnPgo=');
    expect(blockchain.logoBackgroundColor).toEqual('#226efb');
    expect(blockchain.currency.logo).toEqual("https://assets.spooky.fi/tokens/FTM.png");
    expect(blockchain.currency.name).toEqual('Fantom');
    expect(blockchain.currency.symbol).toEqual('FTM');
    expect(blockchain.currency.decimals).toEqual(18);
    expect(blockchain.currency.address).toEqual('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE');
    expect(blockchain.wrapped.logo).toEqual("https://assets.spooky.fi/tokens/wFTM.png");
    expect(blockchain.wrapped.address).toEqual('0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83');
    expect(blockchain.stables.usd).toEqual(['0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf', '0x1B6382DBDEa11d97f24495C9A90b7c88469134a4']);
    expect(blockchain.explorer).toEqual('https://ftmscan.com');
    expect(blockchain.endpoints).toEqual([
      'https://rpc.ftm.tools',
      'https://fantom.publicnode.com',
      'https://rpc2.fantom.network'
    ]);
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
