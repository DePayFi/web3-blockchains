const logo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNTAzIDE1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE1MDMgMTUwNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTM4LjcsMTA1MC45SDM5Mi45Yy0zMC42LDAtNDUuOCwwLTU1LTUuOWMtMTAtNi41LTE2LjEtMTcuMi0xNi44LTI5Yy0wLjYtMTAuOSw3LTI0LjIsMjIuMS01MC43bDM1OS45LTYzNC4zCgljMTUuMy0yNi45LDIzLjEtNDAuNCwzMi44LTQ1LjRjMTAuNS01LjMsMjMuMS01LjMsMzMuNiwwYzkuOCw1LDE3LjUsMTguNCwzMi44LDQ1LjRsNzQsMTI5LjFsMC40LDAuNwoJYzE2LjUsMjguOSwyNC45LDQzLjYsMjguNiw1OC45YzQuMSwxNi44LDQuMSwzNC41LDAsNTEuM2MtMy43LDE1LjUtMTIsMzAuMy0yOC44LDU5LjZsLTE4OSwzMzQuMmwtMC41LDAuOQoJYy0xNi42LDI5LjEtMjUuMSw0My45LTM2LjgsNTVjLTEyLjcsMTIuMi0yOCwyMS00NC44LDI2QzU5MC4yLDEwNTAuOSw1NzMsMTA1MC45LDUzOC43LDEwNTAuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTkwNi44LDEwNTAuOWgyMDguOGMzMC44LDAsNDYuMywwLDU1LjUtNi4xYzEwLTYuNSwxNi4yLTE3LjMsMTYuOC0yOS4yYzAuNS0xMC41LTYuOS0yMy4zLTIxLjQtNDguMwoJYy0wLjUtMC45LTEtMS43LTEuNS0yLjZsLTEwNC42LTE3OWwtMS4yLTJjLTE0LjctMjQuOS0yMi4xLTM3LjQtMzEuNy00Mi4zYy0xMC41LTUuNC0yMi45LTUuNC0zMy40LDBjLTkuNiw1LTE3LjMsMTguMS0zMi43LDQ0LjUKCWwtMTA0LjIsMTc5bC0wLjQsMC42Yy0xNS4zLDI2LjMtMjIuOSwzOS41LTIyLjMsNTAuM2MwLjcsMTEuOCw2LjgsMjIuNywxNi44LDI5LjFDODYwLjQsMTA1MC45LDg3NS45LDEwNTAuOSw5MDYuOCwxMDUwLjl6Ii8+Cjwvc3ZnPgo='
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
  stables: { // max. 3 per fiat currency
    usd: ['0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7', '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E', '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70']
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
