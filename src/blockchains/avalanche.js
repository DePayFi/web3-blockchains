const logo = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0zMTcuOSA4MjQuNUgxOTQuOGMtMjUuOCAwLTM4LjcgMC00Ni41LTQuOS04LjUtNS41LTEzLjUtMTQuNi0xNC4xLTI0LjQtLjQtOS4yIDYtMjAuNCAxOC42LTQyLjdsMzAzLjctNTM1LjRjMTMtMjIuOCAxOS41LTM0LjEgMjcuNy0zOC4zIDguOS00LjUgMTkuNS00LjUgMjguMyAwIDguMyA0LjIgMTQuNyAxNS41IDI3LjcgMzguM2w2Mi41IDEwOSAuMy42YzE0IDI0LjQgMjEgMzYuOCAyNC4xIDQ5LjcgMy40IDE0LjEgMy40IDI5LjIgMCA0My4zLTMuMSAxMy4xLTEwLjEgMjUuNi0yNC4zIDUwLjNMNDQzLjQgNzUxLjlsLS40LjdjLTE0IDI0LjYtMjEuMSAzNy4xLTMxLjEgNDYuNS0xMC43IDEwLjMtMjMuNyAxNy43LTM3LjggMjEuOS0xMi45IDMuNS0yNy4zIDMuNS01Ni4yIDMuNXptMzEwLjYgMGgxNzYuM2MyNi4xIDAgMzkgMCA0Ni45LTUuMiA4LjUtNS41IDEzLjctMTQuNiAxNC4xLTI0LjcuNC04LjktNS44LTE5LjctMTgtNDAuOGwtMS4zLTIuMi04OC4zLTE1MC44LTEtMS42Yy0xMi40LTIxLTE4LjYtMzEuNi0yNi44LTM1LjctOC45LTQuNi0xOS40LTQuNi0yOC4xIDAtOCA0LjItMTQuNiAxNS4zLTI3LjUgMzcuNWwtODggMTUxLjEtLjMuNGMtMTMgMjIuMi0xOS40IDMzLjQtMTguOCA0Mi40LjYgMTAgNS44IDE5LjIgMTQuMSAyNC42IDcuNSA1IDIwLjYgNSA0Ni43IDV6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=='
const currencyLogo = "https://traderjoexyz.com/static/media/avalanche.7c81486190237e87e238c029fd746008.svg"
const wrappedLogo = "https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7/logo.png"

export default {
  name: 'avalanche',
  id: '0xa86a',
  networkId: '43114',
  namespace: 'eip155',
  platform: 'evm',
  label: 'Avalanche',
  fullName: 'Avalanche C-Chain',
  logo,
  logoBackgroundColor: '#E84142',
  logoWhiteBackground: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yMzUuNiAyNTkuNWg1MjguOXY0ODFIMjM1LjZ2LTQ4MXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNOTI4IDUwMGMwIDIzNi40LTE5MS42IDQyOC00MjggNDI4UzcyIDczNi40IDcyIDUwMCAyNjMuNiA3MiA1MDAgNzJzNDI4IDE5MS42IDQyOCA0Mjh6TTM3OC43IDY3MC4zaC04My4xYy0xNy41IDAtMjYuMSAwLTMxLjMtMy40LTUuNy0zLjctOS4xLTkuOC05LjYtMTYuNS0uMy02LjIgNC0xMy44IDEyLjYtMjguOUw0NzIuNSAyNjBjOC43LTE1LjQgMTMuMS0yMyAxOC43LTI1LjkgNi0zIDEzLjEtMyAxOS4xIDAgNS42IDIuOCAxMCAxMC41IDE4LjcgMjUuOWw0Mi4yIDczLjYuMi40YzkuNCAxNi41IDE0LjIgMjQuOCAxNi4zIDMzLjYgMi4zIDkuNiAyLjMgMTkuNiAwIDI5LjItMi4xIDguOC02LjggMTcuMi0xNi40IDM0TDQ2My42IDYyMS4ybC0uMy41Yy05LjUgMTYuNi0xNC4zIDI1LTIxIDMxLjQtNy4zIDYuOS0xNiAxMi0yNS41IDE0LjgtOC43IDIuNC0xOC41IDIuNC0zOC4xIDIuNHptMjA5LjggMGgxMTljMTcuNiAwIDI2LjQgMCAzMS43LTMuNSA1LjctMy43IDkuMi05LjkgOS42LTE2LjYuMy02LTMuOS0xMy4zLTEyLjItMjcuNWwtLjktMS41LTU5LjYtMTAyLS43LTEuMWMtOC40LTE0LjItMTIuNi0yMS4zLTE4LTI0LjEtNi0zLTEzLjEtMy0xOSAwLTUuNSAyLjgtOS45IDEwLjMtMTguNiAyNS4zbC01OS40IDEwMi0uMi40Yy04LjcgMTUtMTMgMjIuNS0xMi43IDI4LjcuNCA2LjcgMy45IDEyLjkgOS42IDE2LjYgNSAzLjMgMTMuOCAzLjMgMzEuNCAzLjN6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2U4NDE0MiIvPjwvc3ZnPg==',
  currency: {
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    logo: currencyLogo,
  },
  wrapped: {
    address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    logo: wrappedLogo,
  },
  stables: { // max. 2 per fiat currency
    usd: ['0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7', '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E']
  },
  explorer: 'https://snowtrace.io',
  explorerUrlFor: ({ transaction, token, address })=>{
    if(transaction) { return `https://snowtrace.io/tx/${transaction.id || transaction}` }
    if(token) { return `https://snowtrace.io/token/${token}` }
    if(address) { return `https://snowtrace.io/address/${address}` }
  },
  endpoints: [ // make sure provider supports batch size of 99 batch requests!
    'https://avalanche.public-rpc.com',
    'https://avalanche.blockpi.network/v1/rpc/public',
    'https://avax.meowrpc.com'
  ],
  tokens: [ // only major tokens
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "AVAX", "name": "Avalanche", "decimals": 18, "logo": currencyLogo, "type": "NATIVE"},
    {"address": "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7", "symbol": "WAVAX", "name": "Wrapped AVAX", "decimals": 18, "logo": wrappedLogo, "type": "20"},
    {"address": "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7", "symbol": "USDT", "name": "Tether", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/assets/0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7/logo.png", "type": "20"},
    {"address": "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/assets/0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E/logo.png", "type": "20"},
    {"address": "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/assets/0xd586E7F844cEa2F87f50152665BCbc2C279D8d70/logo.png", "type": "20"},
    {"address": "0xC891EB4cbdEFf6e073e859e987815Ed1505c2ACD", "symbol": "EUROC", "name": "EURO Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/assets/0xC891EB4cbdEFf6e073e859e987815Ed1505c2ACD/logo.png", "type": "20"},
  ],
  zero: '0x0000000000000000000000000000000000000000',
  maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
}
