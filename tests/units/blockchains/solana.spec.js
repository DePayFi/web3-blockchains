import { Blockchain } from 'src';

describe('solana', () => {
  
  it('provides basic structured data', () => {
    let blockchain = Blockchain.findByName('solana');
    expect(blockchain.name).toEqual('solana');
    expect(blockchain.label).toEqual('Solana');
    expect(blockchain.fullName).toEqual('Solana');
    expect(blockchain.logo).toEqual('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDM5Ny43IDMxMS43IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzOTcuNyAzMTEuNyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGxpbmVhckdyYWRpZW50IGlkPSJ3ZWIzX2Jsb2NrY2hhaW5zX3NvbGFuYV9ncmFkaWVudF8xIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI5MS44NTQiIHkxPSIxNC4zNTkiIHgyPSIxNjUuNzY4IiB5Mj0iMjU1Ljg2NiIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgwIDMwLjUzNSkiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwZmZhMyIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I2RjMWZmZiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTEyMS44IDIwMi45YzEuNC0xLjQgMy4zLTIuMiA1LjMtMi4yaDE4Mi4yYzMuMyAwIDUgNCAyLjYgNi40bC0zNiAzNmMtMS40IDEuNC0zLjMgMi4yLTUuMyAyLjJIODguNGMtMy4zIDAtNS00LTIuNi02LjRsMzYtMzZ6IiBzdHlsZT0iZmlsbDp1cmwoI3dlYjNfYmxvY2tjaGFpbnNfc29sYW5hX2dyYWRpZW50XzEpIi8+PGxpbmVhckdyYWRpZW50IGlkPSJ3ZWIzX2Jsb2NrY2hhaW5zX3NvbGFuYV9ncmFkaWVudF8yIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIzNi43MjciIHkxPSItMTQuNDIyIiB4Mj0iMTEwLjY0MSIgeTI9IjIyNy4wODUiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAzMC41MzUpIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMGZmYTMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNkYzFmZmYiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjd2ViM19ibG9ja2NoYWluc19zb2xhbmFfZ3JhZGllbnRfMikiIGQ9Ik0xMjEuOCA2OC42YzEuNC0xLjQgMy4zLTIuMiA1LjMtMi4yaDE4Mi4yYzMuMyAwIDUgNCAyLjYgNi40bC0zNiAzNmMtMS40IDEuNC0zLjMgMi4yLTUuMyAyLjJIODguNGMtMy4zIDAtNS00LTIuNi02LjRsMzYtMzZ6Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJ3ZWIzX2Jsb2NrY2hhaW5zX3NvbGFuYV9ncmFkaWVudF8zIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI2NC4xMTQiIHkxPSItLjEyMyIgeDI9IjEzOC4wMjgiIHkyPSIyNDEuMzgzIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMzAuNTM1KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBmZmEzIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojZGMxZmZmIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBzdHlsZT0iZmlsbDp1cmwoI3dlYjNfYmxvY2tjaGFpbnNfc29sYW5hX2dyYWRpZW50XzMpIiBkPSJNMjc1LjkgMTM1LjNjLTEuNC0xLjQtMy4zLTIuMi01LjMtMi4ySDg4LjRjLTMuMyAwLTUgNC0yLjYgNi40bDM2IDM2YzEuNCAxLjQgMy4zIDIuMiA1LjMgMi4yaDE4Mi4yYzMuMyAwIDUtNCAyLjYtNi40bC0zNi0zNnoiLz48L3N2Zz4K');
    expect(blockchain.currency.name).toEqual('Solana');
    expect(blockchain.currency.symbol).toEqual('SOL');
    expect(blockchain.currency.decimals).toEqual(9);
    expect(blockchain.explorer).toEqual('https://solscan.io');
    expect(blockchain.rpc).toEqual('https://api.mainnet-beta.solana.com');
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
  });
});
